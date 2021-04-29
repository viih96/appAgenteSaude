import { Symptoms } from './../symptoms/shared/symptoms';
import { subAttend } from './../attendance/shared/subattend';
import { AttendanceService } from './shared/attendance.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  attend: Observable<any[]>;
  symptoms: Observable<any[]>;

  constructor(
    private attendanceService: AttendanceService
  ) {
  }

  ngOnInit() {
    this.getAll();
    this.getAllU();
  }

  getAll() {
    this.attend = this.attendanceService.getAll();
  }

  getAllU() {
    this.symptoms = this.attendanceService.getAllU();
  }


}
