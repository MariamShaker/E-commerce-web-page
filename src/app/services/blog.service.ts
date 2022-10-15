import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { Blog } from '../model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private fireStore:AngularFirestore ) { }

  getData(){
    return this.fireStore.collection<Blog>(`${environment.blogApi}`, ref=>ref.orderBy('number','asc')).valueChanges()
  }
}
