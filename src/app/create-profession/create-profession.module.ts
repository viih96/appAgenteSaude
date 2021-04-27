import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProfessionPageRoutingModule } from './create-profession-routing.module';

import { CreateProfessionPage } from './create-profession.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProfessionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateProfessionPage]
})
export class CreateProfessionPageModule {}
