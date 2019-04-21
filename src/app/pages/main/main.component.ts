import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export enum routeTypeEnum {
  main, flash, notification, mail
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  currentPathTypeForEnum;
  routeTypesForEnum = routeTypeEnum;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this._initRouterSelected();

  }

  btnGotoRoute(routerPath) {
    this.router.navigateByUrl(routerPath).then(() => {

      this._initRouterSelected();
    });
  }

  private _initRouterSelected() {
    const currentPath = this.router.url.split('/').filter(v => !!v).slice(0, 2).join('/');
    switch (currentPath) {
      case 'main':
        this.currentPathTypeForEnum = this.routeTypesForEnum.main;
        break;
      case 'main/notifications':
        this.currentPathTypeForEnum = this.routeTypesForEnum.notification;
        break;

    }
  }
}
