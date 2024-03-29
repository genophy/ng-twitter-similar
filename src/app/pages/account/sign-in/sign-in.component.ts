import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  btnGotoSignUpPage() {
    this.router.navigateByUrl('/account/sign-up');
  }

  btnGotoSignIn2Page() {
    this.router.navigateByUrl('/account/sign-in2');
  }
}
