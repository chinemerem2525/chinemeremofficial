import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from 'src/app/model/form';
import { FormdataService } from 'src/app/services/formdata.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   formData!: Form;
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private sc: FormdataService, private ns: NotificationService) {
    this.contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(4)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  }
);}

  ngOnInit(): void {
  }

  downloadResume() {
  const link = document.createElement('a');
  link.href = '../../../assets/cv/chinemerem-resume.pdf';
  link.download = 'chinemerem-resume.pdf';
  link.click();
}

  // Form submission
  onSubmit() {
    if (this.contactForm.valid) {
      this.formData = this.contactForm.value;
      console.log(this.formData);


      this.sc.saveDetails(this.formData).subscribe((response) => {
        console.log(response);
      })

 // Clear form inputs by resetting the form
      this.contactForm.reset();

      // Optionally mark the form as pristine and untouched to clear validation states
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();

       this.ns.showNotification('Message Sent!', 'success');

      // console.log('Feedback Received:', this.contactForm.value);
      // Process the form data
    } else {

      this.contactForm.markAllAsTouched();
        this.ns.showNotification('Completely fill out this form', 'error');
      // Mark all controls as touched to trigger validation
    }
  }

}
