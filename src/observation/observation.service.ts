import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateObservationDto } from './dto/create-observation.dto';
import { Observation } from './entities/observation.model';

@Injectable()
export class ObservationService {
  constructor(
    @InjectModel(Observation)
    private readonly observationModel: typeof Observation,
  ) {}

  create(createObservationDto: CreateObservationDto) {
    return this.observationModel.create({ ...createObservationDto } as any);
  }

  findAll() {
    return this.observationModel.findAll();
  }

  findOne(id: string) {
    return this.observationModel.findByPk(id);
  }

  remove(id: string) {
    return this.observationModel.destroy({ where: { id } });
  }
}
