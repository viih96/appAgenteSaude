import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdaetUserPageRoutingModule } from './updaet-user-routing.module';

import { UpdaetUserPage } from './updaet-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdaetUserPageRoutingModule
  ],
  declarations: [UpdaetUserPage]
})
export class UpdaetUserPageModule {}
