import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AttendanceService } from '../attendance/shared/attendance.service';
import { UsersService } from './../users/shared/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  totalUserAgentesaude: Observable<number>;
  totalUserPacientes: Observable<number>;
  totalAttendanceOpened: Observable<number>;
  totalAttendanceClosed: Observable<number>;


  constructor(
    private usersService: UsersService,
    private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.totalUserAgentesaude = this.usersService.getTotalUsers('agentesaude');
    this.totalUserPacientes = this.usersService.getTotalUsers('paciente');
    this.totalAttendanceOpened = this.attendanceService.getTotalAttendance('opened');
    this.totalAttendanceClosed = this.attendanceService.getTotalAttendance('closed');

  }


}
