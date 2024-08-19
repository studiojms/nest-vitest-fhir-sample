import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import {
  GenericContainer,
  Network,
  StartedTestContainer,
} from 'testcontainers';
import { randomUUID } from 'crypto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const network = await new Network().start();

    const pgConfig = {
      PG_USERNAME: 'test',
      PG_PASSWORD: 'pass',
      PG_DATABASE: 'test',
      PG_PORT: 5432,
      aliases: 'db',
    };

    const pgContainer: StartedTestContainer = await new GenericContainer(
      'postgres',
    )
      .withExposedPorts(pgConfig.PG_PORT)
      .withNetworkMode(network.getName())
      .withName(`postgres-${randomUUID()}`)
      .withNetworkAliases(pgConfig.aliases)
      .withEnvironment({
        POSTGRES_PASSWORD: pgConfig.PG_PASSWORD,
        POSTGRES_USER: pgConfig.PG_USERNAME,
        POSTGRES_DB: pgConfig.PG_DATABASE,
      })
      .withNetwork(network)
      .start();

    // set the environment variables
    process.env.host = pgContainer.getHost();
    process.env.port = pgContainer.getMappedPort(pgConfig.PG_PORT).toString();
    process.env.database = pgConfig.PG_DATABASE;
    process.env.username = pgConfig.PG_USERNAME;
    process.env.password = pgConfig.PG_PASSWORD;

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('create subject', () => {
    it('should create a subject', async () => {
      //create specimen
      const specimenResponse = await request(app.getHttpServer())
        .post('/specimen')
        .send({ status: 'test', content: 'test' });

      expect(specimenResponse.status).toBe(201);

      //create order
      const orderResponse = await request(app.getHttpServer())
        .post('/order')
        .send({ specimen: 'test' });

      expect(orderResponse.status).toBe(201);
      const orderBody = orderResponse.body;

      //create subject
      const subjectResponse = await request(app.getHttpServer())
        .post('/subject')
        .send({ description: 'test', orderId: orderBody.id });

      const subjectResponseStatus = subjectResponse.status;
      const subjectResponseBody = subjectResponse.body;

      expect(subjectResponseStatus).toBe(201);
      expect(subjectResponseBody.description).toBe('test');
      expect(subjectResponseBody.id).toBeDefined();

      // create observation
      const observationResponse = await request(app.getHttpServer())
        .post('/observation')
        .send({ content: 'test', subjectId: subjectResponseBody.id });

      expect(observationResponse.status).toBe(201);

      // get subject
      const getSubjectResponse = await request(app.getHttpServer()).get(
        `/subject/${subjectResponseBody.id}`,
      );
      expect(getSubjectResponse.status).toBe(200);
      expect(getSubjectResponse.body.description).toBe('test');
      expect(getSubjectResponse.body.id).toBeDefined();
      expect(getSubjectResponse.body.observations).toBeDefined();
      expect(getSubjectResponse.body.observations.length).toBe(1);
    });

    afterAll(async () => {
      await app.close();
    });
  });
});
