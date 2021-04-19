import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProfessionPage } from './create-profession.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProfessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProfessionPageRoutingModule {}
