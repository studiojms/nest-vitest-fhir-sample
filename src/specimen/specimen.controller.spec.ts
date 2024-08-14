import { Test, TestingModule } from '@nestjs/testing';
import { SpecimenController } from './specimen.controller';
import { SpecimenService } from './specimen.service';

describe('SpecimenController', () => {
  let controller: SpecimenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecimenController],
      providers: [SpecimenService],
    }).compile();

    controller = module.get<SpecimenController>(SpecimenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
