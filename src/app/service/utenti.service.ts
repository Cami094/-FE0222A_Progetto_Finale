import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { userData } from '../components/interfaces/userData';


@Injectable({
  providedIn: 'root'
})
export class UtentiService {

UrlUtenti = environment.pathApi;

  constructor(private http: HttpClient) { }
  caricaUtenti(){
    return this.http.get<userData[]>(`${this.UrlUtenti}/api/users`);
  }
  getUtenti(p:number){
    console.log('getall');
    return this.http.get<any>(
      this.UrlUtenti + '/api/users?page='+ p + '&size=20&sort=id,ASC'
    );
  }
}
