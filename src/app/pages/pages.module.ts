import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ComponentsModule} from '../@components/components.module';
import {AccountModule} from './account/account.module';
import {UiModule} from '../@libs/ui/ui.module';

const routes: Routes = [

  {path: '', redirectTo: 'account', pathMatch: 'full'},
  {path: 'account', loadChildren: './account/account.module#AccountModule'},
  {path: 'main', loadChildren: './main/main.module#MainModule'},
];

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    AccountModule,
    CommonModule,
    UiModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
})
export class PagesModule {
}
