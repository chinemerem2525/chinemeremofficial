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
 steps = [
    {
      title: 'Step 1: Consultation',
      description: 'A meeting will be scheduled to discuss your needs and objectives. Together, we will create a detailed plan that aligns with your vision and goals.',
      number: 1,
      icon: 'fa-people-arrows'
    },
    {
      title: 'Step 2: Planning',
      description: 'I focus on translating your needs and objectives into a comprehensive, actionable strategy. With the help of a roadmap, I define the project scope, establish timelines, identify key milestones, and allocate the necessary resources.',
      number: 2,
      icon: 'fa-clipboard-list'
    },
    {
      title: 'Step 3: Sit Back and Relax',
      description: 'Your work load, my responsibility. I will take care of every detail, providing regular updates to keep you informed.',
      number: 3,
      icon: 'fa-person-lounge'
    },
    {
      title: 'Step 4: Launch and Celebrate',
      description: 'Once everything meets the standard, I will launch your site, software, or brand. Celebrate the successful completion of your project and enjoy the results!',
      number: 4,
      icon: 'fa-rocket'
    }
  ];
 faqs = [
    {
      question: 'How can I contact you and quickly get a quote for my new website?',
      answer: 'You can contact me via the contact form on the website or email me directly. I typically respond within 24 hours with a quote based on your requirements.',
      open: false
    },
    {
      question: 'How long does it take you to build a website?',
      answer: 'As soon as possible. The timeline depends on the type of website and the features you would like to include. While the time frame varies for each project, rest assured that we will deliver within the agreed deadline.',
      open: false
    },
    {
      question: 'Is there maintenance fee after the website is launched?',
      answer: 'Yes, it is a paid service that covers expenses such as website maintenance and hosting. Payment will be made at the end of each month.',
      open: false
    },
    {
      question: 'Can I make a change or correction to the new project?',
      answer: 'Absolutely. However, this will take place before it goes live. You will receive the new website for testing and to make any necessary corrections before it goes live or is hosted.',
      open: false
    },
    {
      question: "What's your preferred method of payment and do you need an advance?",
      answer: 'My preferred method of payment is an initial deposit of 70% before the job begins, followed by the remaining balance upon completion. This ensures both parties are committed to the project and allows me to allocate resources effectively from the start. Let me know if this arrangement works for you, and we can proceed accordingly.',
      open: false
    }
  ];

toggle(index: number): void {
    this.faqs.forEach((faq, i) => {
      faq.open = i === index ? !faq.open : false;
    });
  }

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
