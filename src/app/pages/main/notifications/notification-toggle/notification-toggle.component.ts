import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notification-toggle',
  templateUrl: './notification-toggle.component.html',
  styleUrls: ['./notification-toggle.component.scss'],
})
export class NotificationToggleComponent implements OnInit {

  currentPath = '';

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
