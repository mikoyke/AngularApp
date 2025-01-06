import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent {
  wishList: any = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.wishListSubjects$.subscribe((wishList) => {
      this.wishList = wishList;
    });
  }
}
