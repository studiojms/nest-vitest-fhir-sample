import { Column, DataType, Model, Table } from 'sequelize-typescript';
import type { Observation as FhirObservation } from 'fhir/r4';

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
}
