import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './entities/order.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order)
    private readonly orderModel: typeof Order,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.create({ ...createOrderDto });
  }

  findAll() {
    return this.orderModel.findAll();
  }

  findOne(id: number) {
    return this.orderModel.findByPk(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderModel.update(updateOrderDto, { where: { id } });
  }

  remove(id: number) {
    return this.orderModel.destroy({ where: { id } });
  }
}
