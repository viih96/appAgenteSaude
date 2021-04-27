import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceInformationPageRoutingModule } from './attendance-information-routing.module';

import { AttendanceInformationPage } from './attendance-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceInformationPageRoutingModule
  ],
  declarations: [AttendanceInformationPage]
})
export class AttendanceInformationPageModule {}
