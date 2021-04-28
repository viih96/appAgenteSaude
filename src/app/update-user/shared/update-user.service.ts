import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { UpdateUser } from './update-user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private usersCollection: AngularFirestoreCollection<UpdateUser>;
  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {
    this.usersCollection = this.afs.collection<UpdateUser>('users');
   }

  getById(id: string){ // buscar por Id
    return this.usersCollection.doc<UpdateUser>(id).valueChanges();
  }

 updateUser(user:UpdateUser, id: string, file: File){

  this.usersCollection.doc<UpdateUser>(id).update(Object.assign({}, user));

  if(file){
    this.uploadImg(id, file);
  }
}
  // Adicionar a imagem
  uploadImg(id: string, file: File){
    // /symptoms/id/file.name
    const filePath = `users/${id}/${file.name}`;
    const ref = this.storage.ref(filePath);
    const taks = ref.put(file);
    taks.snapshotChanges().pipe(
      finalize( ()=> {
        ref.getDownloadURL().subscribe( (url: any) => {
          this.usersCollection.doc<UpdateUser>(id).update({ imgUrl: url, filePath: filePath })
        })
      })
    ).subscribe();
  }

  // Remover a imagem
  removerImg(id: string, filePath: string, upDateUsers: boolean = true){
    const ref = this.storage.ref(filePath);
    ref.delete();
    if(upDateUsers){
      this.usersCollection.doc<UpdateUser>(id).update({ imgUrl: '', filePath: ''});
    }
  }

}
