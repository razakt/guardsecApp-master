import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  FormData: FormGroup;
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };
  subscribeMail: string = "";
  constructor(private emailService: EmailService,private builder: FormBuilder,
    public alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: ["", Validators.compose([Validators.required, Validators.email])],
      message: new FormControl('', [Validators.required])
      })
  }

  onSubmit(FormData) {
    this.alertService.success('Thank you for contacting us; we will respond as soon as possible.', this.options);
    this.emailService.sendMail(FormData)
      .subscribe(response => {
        this.FormData = this.builder.group({
          fullname: new FormControl('', [Validators.required]),
          email: ["", Validators.compose([Validators.required, Validators.email])],
          message: new FormControl('', [Validators.required])
          });

      }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })

}

subscribeClick(e){
  this.emailService.subscribeMail(this.subscribeMail)
  .subscribe(response => {
    this.alertService.success('Thank you for subscribe us; you will get out latest offers by e-mail.', this.options);

  }, error => {
  console.warn(error.responseText)
  console.log({ error })
})
}

}
