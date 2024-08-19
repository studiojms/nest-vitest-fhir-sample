import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { Subject } from './entities/subject.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Observation } from '../observation/entities/observation.model';

@Module({
  imports: [SequelizeModule.forFeature([Subject, Observation])],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
