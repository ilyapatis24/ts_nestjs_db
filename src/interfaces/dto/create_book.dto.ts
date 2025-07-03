
import { Book } from '../book.interface';

export class CreateBookDto implements Book {
  readonly title: string;
  readonly description: string;
  readonly authors: string;
  readonly favorite: string;
  readonly fileCover: string;
  readonly fileName: string;
  readonly fileBook: string;
  constructor(
    title = "", 
    description = "", 
    authors = "", 
    favorite = "", 
    fileCover = "", 
    fileName = "", 
    fileBook= ""
  ) {
      this.title = title;
      this.description = description;
      this.authors = authors;
      this.favorite = favorite;
      this.fileCover = fileCover;
      this.fileName = fileName;
      this.fileBook = fileBook;
    }
}