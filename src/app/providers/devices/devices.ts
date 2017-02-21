import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
 
@Injectable()
export class Devices {
  devices : any;
  private path = 'https://hightech-browser.herokuapp.com/name?id=';
  constructor(private http: Http){
    this.devices = localStorage.getItem('devices');

    if(!this.devices){
      this.devices = [];
    }
  }

  load() {
    let req = [];
    this.devices.map(item =>{
      console.log(item);
    });
    // Promise.all[];
  }

  add(item) {
    this.get(item.hash).subscribe(result => {
      this.devices.push(result);
    });
    console.log(this.devices);
    this.load();
  }

  get(hash) : Observable<Comment[]>{
    return this.http.get(this.path + hash)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}