import { Test, TestingModule } from '@nestjs/testing';
import { SubjectService } from './subject.service';
import { getModelToken } from '@nestjs/sequelize';
import { Subject } from './entities/subject.model';
import { mockResponseModel } from 'test/test-utils';

describe('SubjectService', () => {
  let service: SubjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubjectService,
        {
          provide: getModelToken(Subject),
          useValue: mockResponseModel,
        },
      ],
    }).compile();

    service = module.get<SubjectService>(SubjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
