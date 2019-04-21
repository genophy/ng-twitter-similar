import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {ComponentsModule} from '../../../@components/components.module';
import {RouterModule, Routes} from '@angular/router';
import {NotificationsAllComponent} from './notification-toggle/notifications-all/notifications-all.component';
import {NotificationToggleComponent} from './notification-toggle/notification-toggle.component';
import {NotificationMentionsComponent} from './notification-toggle/notification-mentions/notification-mentions.component';
import { NotificationsAllItemComponent } from './notification-toggle/notifications-all/notifications-all-item/notifications-all-item.component';

const routes: Routes = [
  {
    path: '', component: NotificationsComponent, children: [
      {path: '', component: NotificationsAllComponent},
      {path: 'mentions', component: NotificationMentionsComponent},
    ],
  },
];

@NgModule({
  declarations: [NotificationsComponent, NotificationsAllComponent, NotificationToggleComponent, NotificationMentionsComponent, NotificationsAllItemComponent],
  imports: [
    ComponentsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class NotificationsModule {
}
