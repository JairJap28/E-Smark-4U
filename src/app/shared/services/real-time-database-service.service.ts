import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import ProductEntity from '../../modules/products/ProductEntity';
import { FaqEntity } from '../../core/faq/FaqEntity';
import CaseEntity from '../../modules/success-cases/CaseEntity';
import SubscribeEntity from '../../core/subscribe-dialog/SubscribeEntity';
import ContactEntity from '../../modules/contact/ContactEntity';

@Injectable({
  providedIn: 'root'
})
export class RealTimeDatabaseServiceService {

  constructor(private realtimeDb: AngularFireDatabase, private firestore: AngularFirestore) { }

  getData<T>(path: string):Observable<any> {
    return this.realtimeDb
      .list<T>(path)
      .valueChanges();
  }

  getRealTimeSuccessCases(): Observable<any>{
    return this.getData<CaseEntity>('SuccessCases');
  }

  getRealTimeFAQ(): Observable<any>{
    return this.getData<ProductEntity>('FAQ');
  }

  getServices(): Observable<any> {
    return this.getData<ProductEntity>('services');
  }

  getTrusthingOnUs(): Observable<any> {
    return this.getData<CaseEntity>('TrustingOnUs');
  }

  saveSubscriber(suscriber: SubscribeEntity) {
    new Promise((req, res) => {
      this.firestore
          .collection("Subscribers")
          .add(suscriber);
    });
  }

  saveContact(contact: ContactEntity){
    new Promise((req, res) => {
      this.firestore
          .collection("ToContact")
          .add(contact);
    });
  }
}
