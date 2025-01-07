import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss',
})
export class TemplateDrivenComponent {
  user = {
    name: 'Joe',
    email: 'miko@gmail',
  };

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
