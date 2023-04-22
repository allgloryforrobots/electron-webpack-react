import { Module } from '@nestjs/common'
// import { TypeOrmModule } from '@nestjs/typeorm'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'


@Module({
  controllers: [CatsController],
  providers: [CatsService],
})

export class CatsModule {}