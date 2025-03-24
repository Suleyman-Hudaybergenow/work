// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { DataSource } from 'typeorm';
// import { ConvertorEntity } from '../convertor/entities/convertor.entity';
// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: 'zaqwsx',
//       synchronize: false,
//       database: 'convertor',
//       entities: [
//         ConvertorEntity
//       ],
//       logger: 'simple-console',
//       logging: true,
//     }),
//   ],
// })
// export class DatabaseModule {
//   constructor(private dataSource: DataSource) {}
// }
