import { User } from './user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
 private usersCollections: AngularFirestoreCollection<User>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
   this.usersCollections = this.afs.collection<User>('users');
  }

  getById(id: string){
    return this.usersCollections.doc<User>(id).valueChanges();
 }
}
