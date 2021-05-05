import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Attend } from '../attendance/shared/attend';
import { UsersAgentesaude } from '../users/shared/users-agentesaude';
import { Medicament } from './medicament';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  private attendanceCollection: AngularFirestoreCollection<Medicament>;
  private attendCollection: AngularFirestoreCollection<Attend>;
  private agenteCollection: AngularFirestoreCollection<UsersAgentesaude>;
  dateclosed: string

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
    this.attendanceCollection = this.afs.collection<Medicament>('attend');
    this.agenteCollection = this.afs.collection<UsersAgentesaude>('users');
    this.attendCollection = this.afs.collection<Attend>('attend');
    this.dateclosed = this.dateFormat();

  }

  dateFormat(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();

    let datefinally = diaF+"/"+mesF+"/"+anoF;

    return datefinally
  }

  getById(id: string) { // buscar por Id
    return this.attendanceCollection.doc<Medicament>(id).valueChanges();
  }

  getByIdAttend(attId: string) { // buscar por Id
    return this.attendCollection.doc<Attend>(attId).valueChanges();
  }

  updateStatus(attend: Attend, attId: string){
    this.attendCollection.doc<Attend>(attId).update({status:"closed", dateclosed: this.dateclosed });
  }

  getByAgId(aId: string) { // buscar por Id
    return this.agenteCollection.doc<UsersAgentesaude>(aId).valueChanges();
  }

  addMedicament(id: string, medicament: Medicament, agent: UsersAgentesaude){
    const {remedio, tipo, dosagem, horario, observacao, } = medicament;
    const {name, registro, professional} = agent;
    this.attendanceCollection.doc<Medicament>(id).collection('subMedicament').add(
      {
        remedio,
        tipo,
        dosagem,
        horario,
        observacao,
        name,
        registro,
        professional
      }
    )
  }

}
