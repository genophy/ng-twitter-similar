import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignIn2Component} from './sign-in2/sign-in2.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignUpStepsComponent} from './sign-up/sign-up-steps/sign-up-steps.component';
import {UiModule} from '../../@libs/ui/ui.module';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-in2', component: SignIn2Component},
  {path: 'sign-up', component: SignUpComponent},
];

const components = [SignInComponent, SignIn2Component, SignUpComponent, SignUpStepsComponent ];

@NgModule({
  declarations: components,
  entryComponents: components,
  imports: [
    UiModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],

})
export class AccountModule {
}
