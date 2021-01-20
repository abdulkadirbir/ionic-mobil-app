import {Injectable} from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';

interface user{
    kullanici:string,
    id:string
}

export class UserService{
    private user:user

    constructor(){}

    setUser(user:user){
        this.user=user
    }

    getUID(){
        return this.user.id
    }
}