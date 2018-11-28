import { Injectable } from '@angular/core';
// import {decode, tokenNotExpired } from 'jwt-decode';
// import { tokenNotExpired } from 'angular2-jwt';
// import jwt_decode from "jwt-decode"
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
    constructor(public jwtHelper: JwtHelperService) {}
  public getToken(): string {
    return localStorage.getItem('access_token');
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}