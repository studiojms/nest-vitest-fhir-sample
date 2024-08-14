import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Specimen } from 'src/specimen/entities/specimen.model';
import { Subject } from 'src/subject/entities/subject.model';

@Table
export class Order extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @HasMany(() => Specimen)
  specimen: Specimen[];

  @HasMany(() => Subject)
  subjects: Subject[];
}
