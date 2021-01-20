import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.page.html',
  styleUrls: ['./anasayfa.page.scss'],
})
export class AnasayfaPage implements OnInit {

  constructor(public router:Router) { }


  ngOnInit() {
  }

  async satiliklar(){
    this.router.navigate(['/sale-cars'])
    
  }
  async login(){
    this.router.navigate(['/login'])
    
  }
  async kayit(){
    this.router.navigate(['/register'])
    
  }
  async kiraliklar(){
    this.router.navigate(['/rental-cars'])
    
  }
  async aracekle(){
    this.router.navigate(['/add-car'])
    
  }

}
