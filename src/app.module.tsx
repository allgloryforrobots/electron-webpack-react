import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'better-sqlite3',
//       // host: 'localhost',
//       // port: 3307,
//       // username: 'root',
//       // password: 'root',
//       database: 'test',
//       entities: [],
//       synchronize: false,
      
//     }),
//   ],
// })

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      // host: 'localhost',
      // port: 3307,
      // username: 'root',
      // password: 'root',
      database: 'test',
      entities: [],
      synchronize: false,
      
    }),
    CatsModule
  ],
})
export class AppModule {}