import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-rxjs-intro",
  templateUrl: "./rxjs-intro.component.html",
  styleUrl: "./rxjs-intro.component.css",
})
export class RxjsIntroComponent implements OnInit {
  ngOnInit(): void {
    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });
    // observable.subscribe((n) => console.log(n));
    //=============================
    // from([1, 2, 3, 4]).subscribe(console.log);
  }
}
