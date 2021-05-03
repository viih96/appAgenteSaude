import { User } from './user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Attend } from './attend';
import { map } from 'rxjs/operators';
import { subAttend } from './subattend';
import { Symptoms } from './symptoms';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private attendanceCollection: AngularFirestoreCollection<Attend>;
  private usersCollection: AngularFirestoreCollection<User>;


  constructor(
    private afs: AngularFirestore
  ) {
    this.attendanceCollection = this.afs.collection<Attend>('attend');
    this.usersCollection = this.afs.collection<User>('users');
  }

  getAll() {
    // return this.afs.collection('symptoms', ref => ref.orderBy('name','asc'))
    return this.afs.collection('attend', ref => ref.orderBy('status','desc'))
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(s => {
            const id = s.payload.doc.id;
            const data = s.payload.doc.data() as Attend
            return { id, ...data };
          })
        })
      )
  }

  getAllU() {
    return this.afs.collection('users')
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(s => {
            const id = s.payload.doc.id;
            const data = s.payload.doc.data() as User
            return { id, ...data };
          })
        })
      )
  }

  getById(id: string) { // buscar por Id
    return this.attendanceCollection.doc<Attend>(id).valueChanges();
  }

  getByUid(id: string) { // buscar por Id
    return this.usersCollection.doc<User>(id).valueChanges();
  }

  getAllSubAttend(id: string) {
    return this.afs.collection('attend').doc(id).collection('subAttend')
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(s => {
            const id = s.payload.doc.id;
            const data = s.payload.doc.data() as subAttend
            return { id, ...data };
          })
        })
      )
  }

  getAllSymptoms(id: string) {
    return this.afs.collection('attend').doc(id).collection('subSymptoms')
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(s => {
            const id = s.payload.doc.id;
            const data = s.payload.doc.data() as Symptoms
            return { id, ...data };
          })
        })
      )
  }

  getTotalAttendance(status: string) {
    return this.afs.collection('attend', ref => ref.where('status', '==', status))
    .snapshotChanges().pipe(
      map(changes => {
        return changes.length;
      })
    )
  }
}
