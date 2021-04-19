import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdaetUserPage } from './updaet-user.page';

const routes: Routes = [
  {
    path: '',
    component: UpdaetUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdaetUserPageRoutingModule {}
