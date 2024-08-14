import { Test, TestingModule } from '@nestjs/testing';
import { ObservationService } from './observation.service';

describe('ObservationService', () => {
  let service: ObservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObservationService],
    }).compile();

    service = module.get<ObservationService>(ObservationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an observation', async () => {
    const observation = await service.create({
      content: 'Test observation',
    });
    expect(observation).toHaveProperty('id');
  });
});
