import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
    // this.ping()
    // this.listAll()
  }
  
  ping() {
    this.http
      .post('http://192.168.0.54:8000/auth-jwt/',{"username":"admin","password":"123"},httpOptions)
      .subscribe(data => {
            window.localStorage.setItem("access_token",data['token'])

      });
    

  }
  listAll() {
    this.http.get('http://192.168.0.54:8000/polosysbooks/listAllItems/').subscribe(resp=>{
      console.log(resp)
    })
  }
  delToken(){
    window.localStorage.removeItem("access_token");
  }
}
