import { Component, OnInit } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFirestore}from '@angular/fire/firestore';
import {UserService} from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  kullanici:string=""
  parola:string=""
  parola2:string=""

  constructor(public afAuth:AngularFireAuth, 
    public alert:AlertController, 
    public router:Router,
    public afStore:AngularFirestore,
    public service:UserService
    ) { }

  ngOnInit() {
  }

  async signup(){

    const {kullanici, parola, parola2}=this

    if(parola!==parola2){
      return this.alertGoster("Hata", "Parolalar aynı olmak zorunda")
    }
    else{
    try{
      const sonuc = await this.afAuth.createUserWithEmailAndPassword(kullanici,parola)
      console.log(sonuc);
      if(sonuc.user){
      this.afStore.doc(`users/${sonuc.user.uid}`).set({
        username:kullanici
      })
      this.service.setUser({
        kullanici:kullanici,
        id:sonuc.user.uid
      })
    }
      this.alertGoster("Başarılı", "Kayıt oldunuz.")
      this.router.navigate(['/login'])
    }

    catch(err){
      
      console.dir(err)
      this.alertGoster("Hata", err.message)
    }
  }
  }

  async alertGoster(header:string, message:string){

    const alert = await this.alert.create({
      header,
      message,
      buttons:["Tamam"]
    })
  await alert.present()
  }



}
