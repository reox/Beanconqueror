import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {BrewParameterPageRoutingModule} from './brew-parameter-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrewParameterPageRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class BrewParameterPageModule {
}
