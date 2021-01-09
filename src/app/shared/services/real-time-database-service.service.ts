import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import ProductEntity from '../../modules/products/ProductEntity';
import { FaqEntity } from '../../core/faq/FaqEntity';
import CaseEntity from '../../modules/success-cases/CaseEntity';

@Injectable({
  providedIn: 'root'
})
export class RealTimeDatabaseServiceService {

  constructor(private realtimeDb: AngularFireDatabase) { }

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
}
