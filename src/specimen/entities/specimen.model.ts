import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Order } from 'src/order/entities/order.model';
import { Subject } from 'src/subject/entities/subject.model';
import type { Specimen as FhirSpecimen } from 'fhir/r4';

@Table
export class Specimen extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  status: string | null;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  orderId?: string | null;

  @ForeignKey(() => Subject)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  subjectId?: string | null;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  content: FhirSpecimen;
}
