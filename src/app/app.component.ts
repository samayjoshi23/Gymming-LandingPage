import { Component, OnInit } from '@angular/core';
import './../assets/smtp.js';
import { MailService } from './mail.service';

// declare let Email: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'demo-mailer';
  
  UserEmail: string = '';
  UserName: string = '';
  UserNumber: number = 0;


  hamburgerClassList: string = 'hamburger';
  navLinksClassList: string = 'nav-links';
  burgerState: boolean = false;

  constructor(private mailing: MailService){ }

  ngOnInit(): void { }

  onSubmit(){
    let demoForm = {
      name: this.UserName,
      email: this.UserEmail,
      number: this.UserNumber
    }
    console.log(demoForm);
    
    this.mailing.sendEmail(demoForm).subscribe( res =>{
      if(res.ok){
        console.log("Form Submitted");
      }else{
        console.error(res);
      }
    });    
  };


  toggleNav(){

    console.log("clicked on hamburger");

    if(this.burgerState === false){
      console.log("Opening Navs");
      this.hamburgerClassList = 'hamburger active';
      this.navLinksClassList = 'nav-links expand';
      this.burgerState = true;
    }
    else{
      console.log("Closing Navs");
      this.hamburgerClassList = 'hamburger';
      this.navLinksClassList = 'nav-links';
      this.burgerState = false;
    }
  }
  
}
