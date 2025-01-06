import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, Subject, tap } from 'rxjs';
import { BookRes, ExpectBook, ItemsEntity } from './interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  bookSubject$ = new Subject<ExpectBook[]>();
  wishList: string[] = [];
  wishListSubjects$ = new Subject<string[]>();

  constructor(private http: HttpClient) {}
  getBooks(name: string) {
    return this.http.get<BookRes>(this.baseUrl + name).pipe(
      map((val: BookRes) => {
        return val.items?.map((book: ItemsEntity) => {
          return {
            bookName: book.volumeInfo.title,
            bookPic: book.volumeInfo.imageLinks.thumbnail,
            publisher: book.volumeInfo.publisher,
            publishDate: book.volumeInfo.publishedDate,
            descriptioin: book.volumeInfo.description,
          } as ExpectBook;
        });
      }),
      tap((val: ExpectBook[]) => {
        this.bookSubject$.next(val);
      })
      // catchError((err) => {
      //   return of({ bookName: '' });
      // })
    );
  }

  addToWishList(book: ExpectBook) {
    this.wishList = [book.bookName, ...this.wishList];
    this.wishListSubjects$.next(this.wishList);
  }
}
