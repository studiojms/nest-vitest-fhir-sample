import { Test, TestingModule } from '@nestjs/testing';
import { SpecimenController } from './specimen.controller';
import { SpecimenService } from './specimen.service';
import { getModelToken } from '@nestjs/sequelize';
import { mockResponseModel } from 'test/test-utils';
import { Specimen } from './entities/specimen.model';

describe('SpecimenController', () => {
  let controller: SpecimenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecimenController],
      providers: [
        SpecimenService,
        {
          provide: getModelToken(Specimen),
          useValue: mockResponseModel,
        },
      ],
    }).compile();

    controller = module.get<SpecimenController>(SpecimenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
