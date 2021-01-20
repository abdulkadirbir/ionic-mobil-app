import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollectionGroup, AngularFirestoreModule} from '@angular/fire/firestore';
import {UserService} from '../user.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import admin from 'firebase/app';

import { firestore } from 'firebase-admin';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  marka:string 
  model:string
  yil:string
  kilometre:string
  

  constructor(public router:Router, 
  public afStore:AngularFirestore, 
  public service:UserService
  
  ) { }

  ngOnInit() {
  }
 
  async satilacak(){
    const {marka, model, yil, kilometre}=this
    
  const a = this.afStore.doc(`users/${this.service.getUID()}`);
  const unionRes = await a.update({
    satilacak_araclar: admin.firestore.FieldValue.arrayUnion({
      marka,
      model,
      kilometre,
      yil
    })
  });
    }

  async kiralanacak(){
    const {marka, model, yil, kilometre}=this
    
  const a = this.afStore.doc(`users/${this.service.getUID()}`);
  const unionRes = await a.update({
    kiralanacak_araclar: admin.firestore.FieldValue.arrayUnion({
      marka,
      model,
      kilometre,
      yil
    })
  });
    
  }






  async anasayfayagit(){
    this.router.navigate(['/anasayfa'])
    
  }

}
