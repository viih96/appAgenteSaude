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

    this.afa.onAuthStateChanged((userProfile)=>{
      userProfile.updateProfile({displayName: user.name, photoURL: ''});
      if(userProfile){
        this.registerAgentesaude(user, userProfile.uid);
      }
    })
  }

  registerAgentesaude(user: UsersAgentesaude, id: string){
        const { name,
          email,
          registro,
          address_state,
          id_professional,
          professional,   } = user;
    this.afs.collection('users').doc(id).set(
      {
        name: name,
        email: email,
        registro: registro,
        address_state: address_state,
        id_professional: id_professional,
        professional: professional,
      }
    )
  }

}

