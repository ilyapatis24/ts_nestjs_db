import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookSchema, Book } from '../interfaces/book.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
        MongooseModule.forFeature([
                { name: Book.name, schema: BookSchema }
            ]
        )
    ],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}