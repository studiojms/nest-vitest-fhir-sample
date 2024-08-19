import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Specimen } from '../../specimen/entities/specimen.model';
import { Subject } from '../../subject/entities/subject.model';

@Table
export class Order extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @HasMany(() => Specimen, {
    foreignKey: 'orderId',
  })
  specimen: Specimen[];

  @HasMany(() => Subject, {
    foreignKey: 'orderId',
  })
  subjects: Subject[];
}
