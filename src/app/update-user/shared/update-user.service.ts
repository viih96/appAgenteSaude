import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UpdateUser } from './update-user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private usersCollection: AngularFirestoreCollection<UpdateUser>;
  constructor(private afs: AngularFirestore,) {
    this.usersCollection = this.afs.collection<UpdateUser>('users');
   }

  getById(id: string){ // buscar por Id
    return this.usersCollection.doc<UpdateUser>(id).valueChanges();
  }

 updateUser(user:UpdateUser, id: string){

  this.usersCollection.doc<UpdateUser>(id).update(Object.assign({}, user));
}
}
