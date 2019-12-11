import { loginType } from './login.interface';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class loginService{

    private __user : loginType;

    getUser()
    {
        return this.__user;
    }

    login(user:string, password:string)
    {
        this.__user.user = user;
        this.__user.password = password;
    }
}