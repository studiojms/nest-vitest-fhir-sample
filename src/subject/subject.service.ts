import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Subject } from './entities/subject.model';
import { Observation } from '../observation/entities/observation.model';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject)
    private readonly subjectModel: typeof Subject,
  ) {}
  create(createSubjectDto: CreateSubjectDto) {
    return this.subjectModel.create({ ...createSubjectDto });
  }

  findAll() {
    return this.subjectModel.findAll();
  }

  async findOne(id: string) {
    const subject = await this.subjectModel.findOne({
      where: {
        id,
      },
      include: [Observation],
    });

    if (subject.observations.length === 0) {
      throw new Error('Subject not found');
    }

    return subject;
  }

  update(id: string, updateSubjectDto: UpdateSubjectDto) {
    return this.subjectModel.update(updateSubjectDto, { where: { id } });
  }

  remove(id: string) {
    return this.subjectModel.destroy({ where: { id } });
  }
}
