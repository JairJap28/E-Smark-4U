import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: AngularFirestore) { }


  login(user: string, password: string): Observable<any> {
    return this.firestore.collection(
      'Users', ref => ref.where('user', '==', user).where('password', '==', password)).valueChanges();
  }
}
