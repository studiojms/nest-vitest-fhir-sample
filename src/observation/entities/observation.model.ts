import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import type { Observation as FhirObservation } from 'fhir/r4';
import { Subject } from 'src/subject/entities/subject.model';

@Table
export class Observation extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  content: FhirObservation;

  @ForeignKey(() => Subject)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  subjectId: string;

  @BelongsTo(() => Subject)
  subject: Subject;
}
