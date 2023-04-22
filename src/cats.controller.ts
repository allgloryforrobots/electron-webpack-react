import { Body, Controller, Get, Post  } from '@nestjs/common'
import { CreateCatDto } from './cats.dto'
import { CatsService } from './cats.service'
import { Cat } from './cats.interface'

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
      this.catsService.create(createCatDto);
    }
  
    @Get()
    async findAll(): Promise<Cat[]> {
        console.log(this)
      return this.catsService.findAll();
    }


}