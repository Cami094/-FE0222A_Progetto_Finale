import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/service/clienti.service';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comune } from '../interfaces/comune';
import { Provincie } from '../interfaces/provincie';
import { Clienti } from '../interfaces/clienti';

@Component({
  selector: 'app-nuoveclient',
  templateUrl: './nuoveclient.component.html',
  styleUrls: ['./nuoveclient.component.scss']
})
export class NuoveclientComponent implements OnInit {
  form!: FormGroup;
  user !: Clienti;
comune!: Comune [];
provincia !: Provincie[];
comuni !: any;
province !: any;

  constructor( private clientSrv:ClientiService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      ragioneSociale : new FormControl('',[Validators.required]),
      partitaIva: new FormControl('',[Validators.required]),
      email: new FormControl ('',[Validators.required]),
      tipocliente : new FormControl('',[Validators.required]),
      pec:new FormControl('',Validators.required),
      telefono: new FormControl ('',[Validators.required]),
      nomeContatto: new FormControl( '',[Validators.required]),
      cognomeContatto: new FormControl('',[Validators.required]),
      telefonoContatto: new FormControl(''),
      emailContatto: new FormControl ('',[Validators.required]),
      indirizzosedeOperativa : this.fb.group({
        via: new FormControl(''),
        civico: new FormControl(''),
        cap: new FormControl(''),
        localita: new FormControl(''),
        comune: this.fb.group({
          id:new FormControl('', [Validators.required]),
          nome: '',
          provincia: {},
        })
      })
    })
  }
  regCliente(){
    this.user = this.form.value;
    this.clientSrv.regClienti(this.user).toPromise();
    this.router.navigate(['/clienti']);
    console.log(this.form.value);
  }
  carComuni(c:number){
    this.clientSrv.caricaComuni(c).subscribe((res)=>{
      this.comune = res.content;
    });
  }
carProvince(p:number){
  this.clientSrv.caricaProvince(p).subscribe((res)=>{
    this.provincia = res.content;
  });
}

}
