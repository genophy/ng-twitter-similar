import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div class="root"><router-outlet></router-outlet></div>',
  styles: [
    '.root{height:100%;min-width: 50rem;overflow-y: scroll}',
  ],
})
export class AppComponent {
}
