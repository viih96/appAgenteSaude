import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceInformationPage } from './attendance-information.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceInformationPageRoutingModule {}
