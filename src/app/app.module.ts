import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UiModule} from './@libs/ui/ui.module';
import {PagesModule} from './pages/pages.module';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    UiModule,

    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
