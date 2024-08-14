import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Observation as FhirObservation } from 'fhir/r4';

@Table
export class Observation extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  content: FhirObservation;
}
