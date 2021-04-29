import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { UsersService } from '../users/shared/users.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  userid: string;

  constructor(
    private router: Router,
    private afa: AngularFireAuth,
    private userService: UsersService,
    private toast: ToastService
  ){}



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    return this.afa.user.pipe( //pipeline de execução
      take(1), //pega 1 usuário
      map(user => !!user), // mapeamento do usuário
      tap(usuarioLogado =>{ // comparação do usuário
        if(!usuarioLogado){
          this.router.navigate(['/login']);
          this.toast.showMessageTop('Usuário não logado!!!', 'warning');
        }
        else {
          this.afa.authState.subscribe(user =>{
            if (user.uid) {
            this.userService.getById(user.uid).subscribe( (data: any) =>{
              if (data.tipousuario =='paciente'){
                this.router.navigate(['/login']);
                this.toast.showMessageTop('Usuário Paciente sem permissão!!!', 'danger');
              }
              if (data.tipousuario =='agentesaude'){
                if (data.admin =='false'){
                  this.router.navigate(['/dashboard']);
                  this.toast.showMessageTop('Usuário sem permissão, não é Administrador !!!', 'danger');
                }
              }
            })
          }
          })
        }

      })
    )


    true;
  }

}


