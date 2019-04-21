import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notifications-all-item',
  templateUrl: './notifications-all-item.component.html',
  styleUrls: ['./notifications-all-item.component.scss'],
})
export class NotificationsAllItemComponent implements OnInit {
  typeMaps = {
    followU: 'follow-u',
    follow: 'follow',
    ret: 'ret',
    like: 'like',
  };

  @Input()
  typekey = 'followU'

  constructor() {
  }

  ngOnInit() {
  }

}
