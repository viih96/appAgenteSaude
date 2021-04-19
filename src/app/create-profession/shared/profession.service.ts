import { Profession } from './profession';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {
  private professionCollection: AngularFirestoreCollection<Profession>;
  constructor(private afs: AngularFirestore) {
    this.professionCollection = this.afs.collection<Profession>('profession');
   }

  // Metodo para adicionar a profissão
  addProfession(profession: Profession){

    const { professsion } = profession;

    this.afs.collection('profession').doc().set(
      {
        description: professsion
      }
    );
 }
 getAll(){ // buscar todos
  return this.afs.collection('profession')
    .snapshotChanges().pipe(
      map( changes => {
        return changes.map( s => {
          const id = s.payload.doc.id;
          const data = s.payload.doc.data() as Profession
          return { id, ...data };
        })
      })
    )
}
deleteProfession(id: string){
  this.professionCollection.doc<Profession>(id).delete();
}
}
