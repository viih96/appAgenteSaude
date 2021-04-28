import { Router } from '@angular/router';
import { ToastService } from './../shared/toast.service';
import { ProfessionService } from './shared/profession.service';
import { Component, OnInit } from '@angular/core';
import { Profession } from './shared/profession';

@Component({
  selector: 'app-create-profession',
  templateUrl: './create-profession.page.html',
  styleUrls: ['./create-profession.page.scss'],
})
export class CreateProfessionPage implements OnInit {
  p: Profession;
  constructor(private Profession: ProfessionService,
              private toast:ToastService,
              private router: Router) {
  }
  ngOnInit() {
    this.p = new Profession();
  }
  async onSubmit(){
    // console.log(this.symptoms)
    try {
      await this.Profession.addProfession(this.p);
      // mensagem OK
      this.toast.showMessageBottom('Profissão inserids com sucesso!!!','success')
      this.router.navigate(['/dashboard']);
    } catch (error) {
      // mensagem error
      this.toast.showMessageTop(error, 'danger');
    }
  }
}
