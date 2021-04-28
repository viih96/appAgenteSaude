import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionListPage } from './profession-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionListPageRoutingModule {}
