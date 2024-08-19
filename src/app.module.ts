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
        const options: SequelizeModuleOptions = {
          dialect: 'postgres',
          host: process.env.host || 'localhost',
          port: parseInt(process.env.port, 10) || 5432,
          database: process.env.database || 'example',
          username: process.env.username || 'user',
          password: process.env.password || 'pass',
          logging: true,
          autoLoadModels: true,
          synchronize: true,
          models: [Subject, Observation, Specimen, Order],
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
