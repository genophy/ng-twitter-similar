import {NgModule} from '@angular/core';
import {HotTrendComponent} from './hot-trend/hot-trend.component';
import {UserRecommendComponent} from './user-recommend/user-recommend.component';
import {AdComponent} from './ad/ad.component';
import {NewFeaturesComponent} from './new-features/new-features.component';

const components = [
  HotTrendComponent, UserRecommendComponent, AdComponent,
  NewFeaturesComponent];

@NgModule({
  declarations: components,
  entryComponents: components,
  exports: components,
})
export class ComponentsModule {
}
