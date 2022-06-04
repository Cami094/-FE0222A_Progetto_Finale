import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { userData } from '../components/interfaces/userData';
@Injectable({
  providedIn: 'root'
})
export class ClientiService {
  pathApi: string;
urlUtenti= environment.pathApi;

  constructor(private http: HttpClient) {
    this.pathApi = environment.pathApi;
   }
   caricaClienti() {
    return this.http.get<userData[]>(
      `${this.urlUtenti}/api/clienti?page=0&size=20&sort=id,ASC`
    );
  }
  GetClienti(p: number) {
    return this.http.get<any>(
      this.urlUtenti + '/api/clienti?page=' + p + '&size=20&sort=id,ASC'
    );
  }
  GetByIdCliente(ID: number) {
    return this.http.get<any>(this.urlUtenti + '/api/clienti/' + ID);
  }

  regClienti(data: any) {
    return this.http.post<any>(`${this.urlUtenti}/api/clienti`, data);
  }

  prendiCliente(data: number) {
    return this.http.get<any>(`${this.urlUtenti}/api/clienti/1` + data);
  }
  modificaCliente(id: number) {
    return this.http.get<any>(`${this.urlUtenti}/api/clienti/${id}`);
  }

  SaveCliente(id: number, item: any) {
    if (!id) {
      return this.http.post<any>(this.urlUtenti + '/api/clienti', item);
    } else {
      return this.http.put<any>(this.urlUtenti + '/api/clienti/' + id, item);
    }
  }

  GetTipiClienti() {
    return this.http.get<any>(this.urlUtenti + '/api/clienti/tipicliente');
  }
  Delete(id: number) {
    return this.http.delete<boolean>(this.urlUtenti + '/api/clienti/' + id);
  }
   //FATTURE//

   caricaFatture() {
    return this.http.get<any>(
      `${this.urlUtenti}/api/fatture?page=0&size=20&sort=id,ASC`
    );
  }
  GetAll(p: number) {
    return this.http.get<any>(
      this.urlUtenti + '/api/fatture?page=' + p + '&size=20&sort=id,ASC'
    );
  }
  GetAllStato(p: number) {
    return this.http.get<any>(
      this.urlUtenti + '/api/statifattura?page=' + p + '&size=20&sort=id,ASC'
    );
  }

  GetByCliente(ID: number, p: number) {
    return this.http.get<any>(
      this.urlUtenti +
        '/api/fatture/cliente/' +
        ID +
        '?page=' +
        p +
        '&size=20&sort=id,ASC'
    );
  }

  GetById(ID: number) {
    return this.http.get<any>(this.urlUtenti + '/api/fatture/' + ID);
  }
  dettaglioFatture(id: number) {
    return this.http.get<any>(
      `${this.urlUtenti}/api/fatture/cliente/${id}?page=0&size=20&sort=id,ASC`
    );
  }

  cancellaFattura(id: number) {
    return this.http.delete<boolean>(this.urlUtenti + '/api/fatture/' + id);
  }

  Save(id: number, item: any) {
    if (id === 0) {
      return this.http.post<any>(this.urlUtenti + '/api/fatture', item);
    } else {
      return this.http.put<any>(this.urlUtenti + '/api/fatture/' + id, item);
    }
  }

  //COMUNI//
  caricaComuni(c: number) {
    return this.http.get<any>(
      this.urlUtenti + '/api/comuni?page=' + c + '&size=20&sort=id,ASC'
    );
  }
  GetComuni(p: number) {
    return this.http.get<any>(
      this.urlUtenti + '/api/comuni?page=' + p + '&size=20&sort=id,ASC'
    );
  }

  // PROVINCE //
  caricaProvince(p: number) {
    return this.http.get<any>(
      this.urlUtenti + '/api/province?page=' + p + '&size=20&sort=id,ASC'
    );
  }

  GetProv(p: number) {
    return this.http.get<any>(
      this.urlUtenti + '/api/province?page=' + p + '&size=20&sort=id,ASC'
    );
  }
}

