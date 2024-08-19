import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import type { Observation as FhirObservation } from 'fhir/r4';
import { Subject } from '../../subject/entities/subject.model';

@Table
export class Observation extends Model<Observation> {
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

  @BelongsTo(() => Subject, {
    foreignKey: 'subjectId',
    targetKey: 'id',
  })
  subject: Subject;

  @ForeignKey(() => Subject)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  subjectId: string;
}
