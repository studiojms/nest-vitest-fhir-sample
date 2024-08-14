import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecimanDto } from './create-speciman.dto';

export class UpdateSpecimanDto extends PartialType(CreateSpecimanDto) {}
