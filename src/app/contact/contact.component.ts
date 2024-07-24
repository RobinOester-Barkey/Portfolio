import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, PrivacyPolicyComponent, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  checkbox:boolean = false;
  mailTest = false;

  post = {
    endPoint: 'https://oester-barkey.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.checkbox = false
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  checkCheckbox(): void {
    const checkbox = document.getElementById('checkbox') as HTMLImageElement;
    if (!this.checkbox) {
        checkbox.src = '/assets/img/check_box_checked.png'; // Aktiviertes Bild
        this.checkbox = true;
    } else {
        checkbox.src = '/assets/img/check_box_outline_blank.png'; // Deaktiviertes Bild
        this.checkbox = false;
    }
}
}
