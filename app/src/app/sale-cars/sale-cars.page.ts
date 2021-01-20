import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollectionGroup, AngularFirestoreModule} from '@angular/fire/firestore';
import {UserService} from '../user.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import admin from 'firebase/app';

import { firestore } from 'firebase-admin';


@Component({
  selector: 'app-sale-cars',
  templateUrl: './sale-cars.page.html',
  styleUrls: ['./sale-cars.page.scss'],
})
export class SaleCarsPage implements OnInit {

  public name = 'John';

  marka:string 
  model:string
  yil:string
  kilometre:string
  
  userInfos

  constructor(public router:Router, 
    public afStore:AngularFirestore,
    public service:UserService) { 
      const satilacak_araclar=this.afStore.doc(`users/${this.service.getUID()}`)
      this.userInfos=satilacak_araclar.valueChanges()
    }

  ngOnInit() {
  }
  async anasayfayagit(){
    this.router.navigate(['/anasayfa'])
    
  }

}
