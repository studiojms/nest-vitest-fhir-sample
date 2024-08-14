import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObservationModule } from './observation/observation.module';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { Observation } from './observation/entities/observation.model';
import { SubjectModule } from './subject/subject.module';
import { Subject } from './subject/entities/subject.model';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.model';
import { SpecimenModule } from './specimen/specimen.module';
import { Specimen } from './specimen/entities/specimen.model';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: async () => {
        console.log({ user: process.env.PG_USERNAME });
        const options: SequelizeModuleOptions = {
          dialect: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'user',
          password: 'pass',
          database: 'example',
          synchronize: true,
          autoLoadModels: true,
          models: [Subject, Order, Observation, Specimen],
        };

        return options;
      },
    }),
    ObservationModule,
    SubjectModule,
    OrderModule,
    SpecimenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
