import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService{
    getHi(): string {
        return "OK"
    }
}