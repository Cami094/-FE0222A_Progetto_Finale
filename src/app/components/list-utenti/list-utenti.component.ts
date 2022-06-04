import { Component, OnInit } from '@angular/core';
import { UtentiService } from 'src/app/service/utenti.service';
import { userData } from '../interfaces/userData';
import { CommonModule } from '@angular/common';

@Component ({
  selector: 'app-list-utenti',
  templateUrl: './list-utenti.component.html',
  styleUrls: ['./list-utenti.component.scss']
})
export class ListUtentiComponent implements OnInit {
users : any;
response !: any;
page!: number
pageSize!:number;

  constructor(private utentiSrv: UtentiService) { }

  ngOnInit(): void {
    this.Carica();

  }
Carica(){
this.utentiSrv.getUtenti(0).subscribe((c)=>{
  console.log(c);
  this.response = c;
  this.users = c.content;
})
}

cambiaPagina(p:number){
  this.utentiSrv.getUtenti(p).subscribe(res =>{
    this.response = res;
    this.users = res.content
  });
}
counter(i:number){
return new Array (i);
}
}
