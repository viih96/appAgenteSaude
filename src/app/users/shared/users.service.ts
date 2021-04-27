import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
import { UsersAgentesaude } from './users-agentesaude';
//import { UsersPaciente } from './users-paciente';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersagentesaudeCollection: AngularFirestoreCollection<UsersAgentesaude>;
  //private userspacienteCollection: AngularFirestoreCollection<UsersPaciente>;

  constructor(
      private afs: AngularFirestore,
      private storage: AngularFireStorage){
      this.usersagentesaudeCollection = this.afs.collection<UsersAgentesaude>('users');
      //this.userspacienteCollection = this.afs.collection<UsersPaciente>('users');
  }


 getAllUsers(tipousuario: string){
// return this.afs.collection('symptoms', ref => ref.orderBy('name','asc'))
      // return this.afs.collection('users')
      if(tipousuario == 'paciente'){
      return this.afs.collection('users', ref => ref.where('tipousuario', '==', tipousuario).orderBy('name','asc'))
        .snapshotChanges().pipe(
          map( changes => {
            return changes.map( s => {
              const id = s.payload.doc.id;
              //const data = s.payload.doc.data() as UsersPaciente
              //return { id, ...data };
            })
          })
        )
      }else{
//
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
      return this.usersagentesaudeCollection.doc<UsersAgentesaude>(id).valueChanges();
   }

}
