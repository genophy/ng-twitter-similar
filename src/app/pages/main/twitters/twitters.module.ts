import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TwittersComponent} from './twitters.component';
import {RouterModule, Routes} from '@angular/router';
import {UserInfoComponent} from './user-info/user-info.component';
import {AddNewTwitterComponent} from './add-new-twitter/add-new-twitter.component';
import {TwitterListComponent} from './twitter-list/twitter-list.component';
import {TwitterListItemComponent} from './twitter-list/twitter-list-item/twitter-list-item.component';
import {ComponentsModule} from '../../../@components/components.module';

const routes: Routes = [
  {
    path: '', component: TwittersComponent, children: [],
  },
];

@NgModule({
  declarations: [
    TwittersComponent,
    UserInfoComponent,
    AddNewTwitterComponent,
    TwitterListComponent,
    TwitterListItemComponent],
  imports: [
    ComponentsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class TwittersModule {
}
