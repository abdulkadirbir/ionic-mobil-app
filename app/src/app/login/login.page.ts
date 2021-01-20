import { Component, OnInit } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import {AlertController} from '@ionic/angular';
//import {auth} from 'firebase/app';
import {Router} from '@angular/router';
import {UserService} from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  kullanici:string=""
  parola:string=""

  constructor(public afAuth:AngularFireAuth, 
    public alert:AlertController, 
    public router:Router,
    public service:UserService
    
    ) { }


  ngOnInit() {
  }
  async kayit(){
    this.router.navigate(['/register'])
  }

  async login(){
    const {kullanici,parola}=this
    try{
      const sonuc = await this.afAuth.signInWithEmailAndPassword(kullanici,parola)
      console.log(sonuc)
      if(sonuc.user){
        this.service.setUser({
          kullanici,
          id:sonuc.user.uid
        })
      }
      this.alertGoster("Başarılı", "Hoşgeldiniz")
      this.router.navigate(['/anasayfa'])
    }
    catch(err){
      //console.dir(err)
      if(err.code = "auth/user-not-found"){
        console.log("kullanıcı bulunamadı")
        this.alertGoster("Hata", "Kullanıcı bulunamadı")
        
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
