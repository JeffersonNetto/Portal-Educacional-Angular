import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }

  public getIPAddress() {
    return this.http.get('https://api.ipify.org/?format=json').pipe(take(1));
  }
}
