import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  bookName = '';
  constructor(private bookService: BookService) {}
  consoleInput() {
    this.bookService.getBooks(this.bookName).subscribe();
    console.log(this.bookName);
  }
}
