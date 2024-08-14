import { Test, TestingModule } from '@nestjs/testing';
import { ObservationService } from './observation.service';
import { ObservationServiceMock } from './observation-service.mock';

describe('ObservationService', () => {
  let service: ObservationService;
  const observationDataServiceMock = new ObservationServiceMock();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ObservationService,
          useValue: observationDataServiceMock,
        },
      ],
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
    expect(observation).not.toBeNull();
  });
});
