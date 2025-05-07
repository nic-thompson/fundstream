import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fund } from './fund.entity';

@Injectable()
export class FundsService {
  constructor(
    @InjectRepository(Fund)
    private fundRepository: Repository<Fund>,
  ) {}

  findAll(): Promise<Fund[]> {
    return this.fundRepository.find();
  }

  findOne(id: number): Promise<Fund | null> {
    return this.fundRepository.findOneBy({ id });
  }

  create(data: Partial<Fund>): Promise<Fund> {
    const fund = this.fundRepository.create(data);
    return this.fundRepository.save(fund);
  }

  async update(id: number, updates: Partial<Fund>): Promise<Fund | null> {
    await this.fundRepository.update(id, updates);
    return this.fundRepository.findOneBy({ id });
  }
  
  async remove(id: number): Promise<void> {
    await this.fundRepository.delete(id);
  }
}
