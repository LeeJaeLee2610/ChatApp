import { CatsService } from '../services/cats.service';
import {Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from 'src/cat/dto/create-cat.dto';

@Controller('/cats')
export class CatsController{
    constructor(private catsService: CatsService){}
    @Get("/do-get")
    doGet(@Req() req: Request): string {
        return "Ui Doi Oi";
    }

    @Post("/do-post")
    doPost(@Req() req: Request, @Res() res: Response): any {
        res.status(200).json(req.body);
    }

    @Post('/post-cat')
    async create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto);
    }
}