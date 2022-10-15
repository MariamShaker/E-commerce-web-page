import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { About } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private fireStore:AngularFirestore) { }

  getAllData(){
    return this.fireStore.collection<About>(`${environment.aboutApi}`).valueChanges()
  }
}
