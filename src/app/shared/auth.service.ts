import { Login } from './../users/shared/login';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UsersAgentesaude } from '../users/shared/users-agentesaude';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userUID: string;
  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) { }

  login(Login: Login){
    return this.afa.signInWithEmailAndPassword(Login.email, Login.password)

  }

  logout(){
    this.afa.signOut();
    this.router.navigate(['/login']);
  }

  registerAgente(user: UsersAgentesaude){
    this.afa.createUserWithEmailAndPassword(user.email, user.password);
  }


  addProfileId(user: UsersAgentesaude){
    this.afa.onAuthStateChanged((userProfile)=>{
      this.userUID = userProfile.uid;
      this.registerAgentesaude(user, userProfile.uid);
      userProfile.updateProfile({displayName: user.name, photoURL: ''});
      // if(userProfile){
      //this.logout();
      // }
    })

  }

  registerAgentesaude(user: UsersAgentesaude, id: string){
        const { email,
          name,
          professional,
          id_professional,
          registro,
          address_state,
          contato,
          sexo,
          tipousuario, } = user;
    this.afs.collection('users').doc(id).set(
      {
        email: email,
        name: name,
        professional: professional,
        id_professional: id_professional,
        registro: registro,
        address_state: address_state,
        contato: contato,
        sexo: sexo,
        tipousuario: tipousuario
      }
    )
  }

}

