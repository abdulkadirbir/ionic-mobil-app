import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollectionGroup, AngularFirestoreModule} from '@angular/fire/firestore';
import {UserService} from '../user.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import admin from 'firebase/app';

import { firestore } from 'firebase-admin';

@Component({
  selector: 'app-rental-cars',
  templateUrl: './rental-cars.page.html',
  styleUrls: ['./rental-cars.page.scss'],
})
export class RentalCarsPage implements OnInit {

  marka:string 
  model:string
  yil:string
  kilometre:string

  userInfos

  constructor(public router:Router, 
    public afStore:AngularFirestore,
    public service:UserService) { 
      const kiralanacak_araclar=this.afStore.doc(`users/${this.service.getUID()}`)
      this.userInfos=kiralanacak_araclar.valueChanges()
    }

    async sat(){
      const {marka, model, yil, kilometre}=this
      
    const s = this.afStore.doc(`users/${this.service.getUID()}`);
    const removeRes = await s.update({
      kiralanacak_araclar: admin.firestore.FieldValue.arrayRemove({
        marka,
        model,
        kilometre,
        yil
      })
    });
      }


ngOnInit() {
  }

  async anasayfayagit(){
    this.router.navigate(['/anasayfa'])
    
  }
}
