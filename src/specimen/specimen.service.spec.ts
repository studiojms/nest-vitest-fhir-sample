import { Test, TestingModule } from '@nestjs/testing';
import { SpecimenService } from './specimen.service';
import { getModelToken } from '@nestjs/sequelize';
import { mockResponseModel } from 'test/test-utils';
import { Specimen } from './entities/specimen.model';

describe('SpecimenService', () => {
  let service: SpecimenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SpecimenService,
        {
          provide: getModelToken(Specimen),
          useValue: mockResponseModel,
        },
      ],
    }).compile();

    service = module.get<SpecimenService>(SpecimenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
