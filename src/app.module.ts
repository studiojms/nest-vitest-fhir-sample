import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObservationModule } from './observation/observation.module';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { Observation } from './observation/entities/observation.model';

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
          models: [Observation],
        };

        return options;
      },
    }),
    ObservationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
