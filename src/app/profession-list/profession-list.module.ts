import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionListPageRoutingModule } from './profession-list-routing.module';

import { ProfessionListPage } from './profession-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionListPageRoutingModule
  ],
  declarations: [ProfessionListPage]
})
export class ProfessionListPageModule {}
