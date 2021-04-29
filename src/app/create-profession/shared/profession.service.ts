import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Professional } from 'src/app/shared/professional';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {
  private professionCollection: AngularFirestoreCollection<Professional>;
  constructor(private afs: AngularFirestore) {
    this.professionCollection = this.afs.collection<Professional>('professional');
   }

  // Metodo para adicionar a profissão
  addProfession(professional: Professional){

    const { description } = professional;

    this.afs.collection('professional').doc().set(
      {
        description: description
      }
    );
 }
 getAll(){ // buscar todos
  return this.afs.collection('professional')
    .snapshotChanges().pipe(
      map( changes => {
        return changes.map( s => {
          const id = s.payload.doc.id;
          const data = s.payload.doc.data() as Professional
          return { id, ...data };
        })
      })
    )
}
deleteProfession(id: string){
  this.professionCollection.doc<Professional>(id).delete();
}
}
