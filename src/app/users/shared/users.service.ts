import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { UsersAgentesaude } from './users-agentesaude';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersCollection: AngularFirestoreCollection<UsersAgentesaude>;

  constructor(private afs: AngularFirestore){
      this.usersCollection = this.afs.collection<UsersAgentesaude>('users');
  }

   getUsers(tipousuario: string){ // buscar todos
      // return this.afs.collection('symptoms', ref => ref.orderBy('name','asc'))
      // return this.afs.collection('users')
      return this.afs.collection('users', ref => ref.where('tipousuario', '==', tipousuario).orderBy('name','asc'))
        .snapshotChanges().pipe(
          map( changes => {
            return changes.map( s => {
              const id = s.payload.doc.id;
              const data = s.payload.doc.data() as UsersAgentesaude
              return { id, ...data };
            })
          })
        )
   }

   getUserSus(cartaosus: string){ // buscar todos
    // return this.afs.collection('symptoms', ref => ref.orderBy('name','asc'))
    // return this.afs.collection('users')
    return this.afs.collection('users', ref => ref.where('cartaosus', '==', cartaosus))
      .snapshotChanges().pipe(
        map( changes => {
          return changes.map( s => {
            const id = s.payload.doc.id;
            const data = s.payload.doc.data() as UsersAgentesaude
            return { id, ...data };
          })
        })
      )
 }

   getById(id: string){ // buscar por Id
      return this.usersCollection.doc<UsersAgentesaude>(id).valueChanges();
   }

}
