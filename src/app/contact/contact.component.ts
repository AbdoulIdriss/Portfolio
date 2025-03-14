import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule ,ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

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
      const formData = {
        fullname: this.contactForm.get('fullname')?.value,
        email: this.contactForm.get('email')?.value,
        message: this.contactForm.get('message')?.value
      }      

      this.contactService.create(formData).subscribe({
        next: data => {
          console.log('message sent successfully', data);
          alert('message send successfully')
          this.contactForm.reset()  
        },
        error: error => {
          console.error('Error creating product:', error);
        },
        complete: () => {
          console.log('creation request complete.');
        }
      })
    } else {
      console.error('Form is invalid');
    }
  }

}
