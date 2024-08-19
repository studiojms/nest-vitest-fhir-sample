import { Test, TestingModule } from '@nestjs/testing';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { getModelToken } from '@nestjs/sequelize';
import { Subject } from './entities/subject.model';
import { mockResponseModel } from 'test/test-utils';

describe('SubjectController', () => {
  let controller: SubjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectController],
      providers: [
        SubjectService,
        {
          provide: getModelToken(Subject),
          useValue: mockResponseModel,
        },
      ],
    }).compile();

    controller = module.get<SubjectController>(SubjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
