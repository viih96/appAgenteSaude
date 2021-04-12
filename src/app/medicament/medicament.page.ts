import { ActivatedRoute, Router } from '@angular/router';
import { Medicament } from './../shared/medicament';
import { Component, OnInit } from '@angular/core';
import { MedicamentService } from './../shared/medicament.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastService } from '../shared/toast.service';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.page.html',
  styleUrls: ['./medicament.page.scss'],
})
export class MedicamentPage implements OnInit {
  medicament: Medicament;
  private medicamentId: string = '';
  title: string;

  constructor(private activatedRoute: ActivatedRoute,
              private medicamentService: MedicamentService,
              private storage: AngularFireStorage,
              private router: Router,
              private toast: ToastService) { }

  ngOnInit() {
    this.medicament = new Medicament();
    this.medicament.paciente = "";
    this.medicament.sus = 0;
    this.medicament.remedio = "";
    this.medicament.tipo = "";
    this.medicament.dosagem = 0;
    this.medicament.horario = 0;
    this.medicament.observacao = "";

    this.medicamentId =  this.activatedRoute.snapshot.params['id'];
    this.medicamentId ? this.title = "Editar Medicamento" : this.title = "Cadastrar Medicamento";

    if(this.medicamentId){
      const subscribe = this.medicamentService.getById(this.medicamentId).subscribe( (data: any) =>{
       subscribe.unsubscribe();
       const { paciente, sus, remedio, tipo, dosagem, horario, observacao } = data;
       this.medicament.paciente = paciente;
       this.medicament.sus = sus;
       this.medicament.remedio = remedio;
       this.medicament.tipo = tipo;
       this.medicament.dosagem = dosagem;
       this.medicament.horario = horario;
       this.medicament.observacao = observacao;
     })
   }
  }

  async onSubmit(){
    // console.log(this.symptoms)

    if (this.medicamentId){
      // update
      try {
        await this.medicamentService.updateMedicament(this.medicament, this.medicamentId);
        // mensagem OK
        this.toast.showMessageBottom('Medicamento alterado com sucesso!!!','success')
        this.router.navigate(['/attendance']);
      } catch (error) {
        // mensagem error
        this.toast.showMessageTop(error, 'danger');
        console.log(error);
      }

    } else {
      // add
      try {
        await this.medicamentService.addMedicament(this.medicament);
        // mensagem OK
        this.toast.showMessageBottom('Medicamento inserido com sucesso!!!','success')
        this.router.navigate(['/attendance']);
      } catch (error) {
        // mensagem error
        this.toast.showMessageTop(error, 'danger');
        console.log(error);
      }

    }
  }

}
