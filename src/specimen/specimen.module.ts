import { Module } from '@nestjs/common';
import { SpecimenService } from './specimen.service';
import { SpecimenController } from './specimen.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Specimen } from './entities/specimen.model';

@Module({
  imports: [SequelizeModule.forFeature([Specimen])],
  controllers: [SpecimenController],
  providers: [SpecimenService],
})
export class SpecimenModule {}
