import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StocklistPageRoutingModule } from './stocklist-routing.module';

import { StocklistPage } from './stocklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StocklistPageRoutingModule
  ],
  declarations: [StocklistPage]
})
export class StocklistPageModule {}
