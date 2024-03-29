import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: '', loadChildren: './twitters/twitters.module#TwittersModule',
      },
      {
        path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsModule',
      },
    ],
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class MainModule {
}
