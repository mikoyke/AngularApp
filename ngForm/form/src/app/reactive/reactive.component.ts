import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss',
})
export class ReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  @Input() initialInfo!: any;
  @Output() sendData = new EventEmitter();

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    // this.contactForm = new FormGroup({
    //   name: new FormControl(),
    //   email: new FormControl(),
    // });
    this.contactForm = this.fb.group({
      name: [this.initialInfo.name],
      email: [this.initialInfo.email],
    });
  }
  onSubmit() {
    this.sendData.emit(this.contactForm.value);
  }
}
