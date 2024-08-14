import { Test, TestingModule } from '@nestjs/testing';
import { ObservationController } from './observation.controller';
import { ObservationService } from './observation.service';
import { ObservationServiceMock } from './observation-service.mock';

describe('ObservationController', () => {
  let controller: ObservationController;
  const observationServiceMock = new ObservationServiceMock();

  beforeEach(async () => {
    observationServiceMock.clearMocks();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObservationController],
      providers: [
        {
          provide: ObservationService,
          useValue: observationServiceMock,
        },
      ],
    }).compile();

    controller = module.get<ObservationController>(ObservationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an observation', async () => {
    observationServiceMock.create.mockResolvedValueOnce({
      observation: {
        id: '1',
        content: 'Test observation',
      },
      created: true,
    });

    await controller.create({
      content: 'Test observation',
    });
    expect(observationServiceMock.create).toHaveBeenCalledTimes(1);
  });
});
