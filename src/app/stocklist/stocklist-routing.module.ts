import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocklistPage } from './stocklist.page';

const routes: Routes = [
  {
    path: '',
    component: StocklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocklistPageRoutingModule {}
