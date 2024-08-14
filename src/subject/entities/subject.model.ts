import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Observation } from 'src/observation/entities/observation.model';

@Table
export class Subject extends Model {
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

  @HasMany(() => Observation)
  observations: Observation[];
}
