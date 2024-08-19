import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Observation } from '../../observation/entities/observation.model';
import { Order } from '../../order/entities/order.model';

@Table
export class Subject extends Model<Subject> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @HasMany(() => Observation, {
    foreignKey: 'subjectId',
  })
  observations: Observation[];

  @ForeignKey(() => Order)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  orderId?: string | null;
}
