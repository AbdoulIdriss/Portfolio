import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule ,ReactiveFormsModule, Validators } from '@angular/forms';
import {ContactService} from '../Services/contact.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({})

  constructor(
    private formBuilder : FormBuilder,
    private contactService : ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
        fullname: ['',[
          Validators.required
        ]],
        email: ['',[
          Validators.email,
          Validators.required
        ]],
        message: ['',[
          Validators.required
        ]],
    })
  }

  onSubmit(){
    if (this.contactForm.valid ) {
      this.contactService.create(this.contactForm.value)
      alert('Email send')
      this.contactForm.reset()
    }

  }
}
