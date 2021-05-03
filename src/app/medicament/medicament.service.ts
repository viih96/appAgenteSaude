import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Medicament } from './medicament';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  private attendanceCollection: AngularFirestoreCollection<Medicament>;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
    this.attendanceCollection = this.afs.collection<Medicament>('attend');
  }

  getById(id: string) { // buscar por Id
    return this.attendanceCollection.doc<Medicament>(id).valueChanges();
  }

  addMedicament(id: string, medicament: Medicament){
    const {remedio, tipo, dosagem, horario, observacao} = medicament;
    this.attendanceCollection.doc<Medicament>(id).collection('subMedicament').add(
      {
        remedio,
        tipo,
        dosagem,
        horario,
        observacao
      }
    )
  }

}
