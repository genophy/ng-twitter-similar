import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SignUpStepsComponent} from './sign-up-steps/sign-up-steps.component';
import {DialogService} from '../../../@libs/ui/dialog/dialog.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
    this.btnSignUp();
  }

  btnSignUp() {
    const ref = this.dialogService.open(SignUpStepsComponent, {name: 'sunny is here'});
    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed : ', result);
    });
  }

}
