import { Module } from '@nestjs/common';
import { ObservationService } from './observation.service';
import { ObservationController } from './observation.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Observation } from './entities/observation.model';

@Module({
  imports: [SequelizeModule.forFeature([Observation])],
  controllers: [ObservationController],
  providers: [ObservationService],
})
export class ObservationModule {}
