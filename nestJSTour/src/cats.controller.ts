import { CatsService } from './cats.service';
import {Controller, Get, Post, Req, Res} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/cats')
export class CatsController{
    constructor(private readonly catsService: CatsService){}
    @Get("/do-get")
    doGet(@Req() req: Request): string {
        return this.catsService.getHi();
    }

    @Post("/do-post")
    doPost(@Req() req: Request, @Res() res: Response): any {
        res.status(200).json(req.body);
    }
}