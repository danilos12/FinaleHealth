import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/local'),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}