import { Component, OnInit } from '@angular/core';
import { ProfessionService } from '../create-profession/shared/profession.service';
import { Observable } from 'rxjs';
import { AlertService } from '../shared/alert.service';
import { ToastService } from '../shared/toast.service';

@Component({
  selector: 'app-profession-list',
  templateUrl: './profession-list.page.html',
  styleUrls: ['./profession-list.page.scss'],
})
export class ProfessionListPage implements OnInit {
  prof: Observable<any[]>;
  constructor(private professionService: ProfessionService,
              private alert: AlertService,
              private toast: ToastService,) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this.prof = this.professionService.getAll()
  }

  remove(p: any){
    this.alert.showConfirmarExclusãoProf(p.description, ()=> this.removeProfessional(p) );
  }
  removeProfessional(p: any){
    this.professionService.deleteProfession(p.id);
    try {
      this.toast.showMessageBottom('Sintoma excluído com sucesso!','success');
      this.getAll();
    } catch (error) {
      this.toast.showMessageTop(error,'danger')
    }
  }
}
