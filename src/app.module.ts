import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObservationModule } from './observation/observation.module';

@Module({
  imports: [ObservationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
