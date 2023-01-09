import { Cat } from '../interfaces/cat.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService{
    private readonly cats: Cat[] = []

    findAll(): Cat[]{
        return this.cats
    }

    create(cat: Cat){
        this.cats.push(cat)
    }
}