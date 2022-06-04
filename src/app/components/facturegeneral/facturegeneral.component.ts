import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientiService } from 'src/app/service/clienti.service';

import { Fatture } from '../interfaces/fatture';
@Component({
  selector: 'app-facturegeneral',
  templateUrl: './facturegeneral.component.html',
  styleUrls: ['./facturegeneral.component.scss']
})
export class FacturegeneralComponent implements OnInit {
idClient!: number;
page!: number;
pageSize!:number;
response:any;
fatture!: Fatture[]

  constructor( private clientSrv: ClientiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.idClient = + params ['id'];
      console.log(this.idClient);
      this.Carica();
    })
  }
  Carica(){
    if(this.idClient){
      this.clientSrv.GetByCliente(this.idClient,0).subscribe((c)=>{
        console.log(c);
        this.response= c;
        this.fatture= c.content;
      });
    } else {
      this.clientSrv.GetAll(0).subscribe((c)=>{
        console.log(c);
        this.response = c;
        this.fatture= c.content;
      });
    }
  }
  CambiaPagina (p:number){
    if(this.idClient){
      this.clientSrv.GetByCliente(this.idClient,p).subscribe((c)=>{
        console.log(c);
        this.response=c;
        this.fatture = c.content;
      })
    } else {
      this.clientSrv.GetAll(p).subscribe((c)=>{
        console.log(c);
        this.response= c;
        this.fatture = c.content;
      });
    }
  }
counter (i:number){
  return new Array (i);
}
cancella(name:number, id:number, i:number){
  if(confirm("cancellare fattura"+ name+ '?')){
    console.log("Implement delete functionality here");
    this.clientSrv.cancellaFattura(id).subscribe(c =>{
      console.log(c);
      this.fatture.splice(i,1);
    });
  }
}
}
