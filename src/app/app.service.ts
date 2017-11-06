import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {

   private listPersones = 'http://172.17.10.106/prova.php';

   constructor(private http: Http) {}

   private headers = new Headers({
     'Content-Type': 'application/json'
     });


   getPersones() {   
      return this.http.get(this.listPersones,{
          headers : this.headers
      })
          .map(res => res.json());
    }

   
}