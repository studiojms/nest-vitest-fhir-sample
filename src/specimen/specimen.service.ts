import { Injectable } from '@nestjs/common';
import { CreateSpecimanDto } from './dto/create-speciman.dto';
import { UpdateSpecimanDto } from './dto/update-speciman.dto';
import { Specimen } from './entities/specimen.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SpecimenService {
  constructor(
    @InjectModel(Specimen)
    private readonly specimenModel: typeof Specimen,
  ) {}

  create(createSpecimanDto: CreateSpecimanDto) {
    return this.specimenModel.create({ ...createSpecimanDto });
  }

  findAll() {
    return this.specimenModel.findAll();
  }

  findOne(id: string) {
    return this.specimenModel.findByPk(id);
  }

  update(id: string, updateSpecimanDto: UpdateSpecimanDto) {
    return this.specimenModel.update(updateSpecimanDto, { where: { id } });
  }

  remove(id: string) {
    return this.specimenModel.destroy({ where: { id } });
  }
}
