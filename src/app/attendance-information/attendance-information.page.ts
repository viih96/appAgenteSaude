import { subAttend } from './../attendance/shared/subattend';
import { AttendanceService } from './../attendance/shared/attendance.service';
import { Component, OnInit } from '@angular/core';
import { Attend } from '../attendance/shared/attend';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../attendance/shared/user';
import { Symptoms } from '../attendance/shared/symptoms';

@Component({
  selector: 'app-attendance-information',
  templateUrl: './attendance-information.page.html',
  styleUrls: ['./attendance-information.page.scss'],
})
export class AttendanceInformationPage implements OnInit {
  attend: Attend;
  subAttend: subAttend;
  symptoms: Symptoms;
  user: User;
  attendId: string;
  userId: string;
  symptomsId: string;

  subAttends : any[] = [];
  users: any[];
  symptom: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private attendanceService: AttendanceService,
              private router: Router) { }

ngOnInit() {
  this.attend = new Attend();
  this.subAttend = new subAttend();
  this.user = new User();

  this.attendId = this.activatedRoute.snapshot.params['id'];

  if(this.attendId){
    const subscribe = this.attendanceService.getById(this.attendId).subscribe( (data: any) =>{
     subscribe.unsubscribe();
     const { date, name, cartaosus, status, uId } = data;
     this.attend.name = name;
     this.attend.date = date;
     this.attend.cartaosus = cartaosus;
     this.idUser();
     console.log(data);
    })
     this.getAllSubAttend();
     this.getAllSymptoms();
  }

}

getAllSubAttend(){
  const subscribe = this.attendanceService.getAllSubAttend(this.attendId).subscribe( (dataSub: any) =>{
    subscribe.unsubscribe();
    console.log(dataSub);
    this.subAttends = dataSub;
  })

}
idUser(){
  this.userId = this.activatedRoute.snapshot.params['id'];
  this.getByUid();
}
getAllSymptoms(){
  const subscribe = this.attendanceService.getAllSymptoms(this.symptomsId).subscribe( (dataSym: any) =>{
    subscribe.unsubscribe();
    console.log(dataSym);
    this.symptom = dataSym;
  })

}

getByUid(){
  const subscribe = this.attendanceService.getByUid(this.userId).subscribe( (data: any) =>{
    subscribe.unsubscribe();
    const { datanascimento, tiposanguineo, sexo } = data;
    this.user.datanascimento = this.user.datanascimento == null ? '' : datanascimento;
    this.user.tiposanguineo = tiposanguineo;
    this.user.sexo = sexo;
    console.log(data);
    this.users = data;
  })

}


}

