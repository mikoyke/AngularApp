import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, Subject, tap } from 'rxjs';
import { BookRes, ExpectBook, ItemsEntity } from './interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  bookSubject$ = new BehaviorSubject<ExpectBook[]>([]);
  // private wishList: string[] = [];
  // wishListSubjects$ = new BehaviorSubject<string[]>(this.wishList);  Its not safe to directly public the subject
  private wishList$ = new BehaviorSubject<string[]>([]);
  wishListSubjects$ = this.wishList$.asObservable(); //Obsvale cannot be changed

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
    // this.wishList = [book.bookName, ...this.wishList];
    this.wishList$.next([book.bookName, ...this.wishList$.value]);
  }
}
