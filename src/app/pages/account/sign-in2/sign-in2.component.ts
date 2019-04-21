import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in2',
  templateUrl: './sign-in2.component.html',
  styleUrls: ['./sign-in2.component.scss'],
})
export class SignIn2Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  btnSignIn() {
    this.router.navigateByUrl('/main');
  }
}
