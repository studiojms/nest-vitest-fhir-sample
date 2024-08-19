import { CreateSubjectDto } from 'src/subject/dto/create-subject.dto';

export class CreateObservationDto {
  content: string;
  subject: CreateSubjectDto;
}
