import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'form';
  data: { name: string; email: string } = {
    name: 'Ke',
    email: '12345@gmail.com',
  };

  handleData(e: any) {
    this.data = e;
    console.log(this.data);
  }
}
