import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/service/clienti.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Clienti } from '../interfaces/clienti';

import { Router } from '@angular/router';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss'],
})
export class ClientiComponent implements OnInit {
  form!: FormGroup;
  page!: number;
  pageSize!: number;
  response: any;
  arrClienti!: Clienti[];
  p!:number

  constructor(
    private clientsrv: ClientiService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.Carica();
    this.InizializzaForm();
  }
  Carica() {
    this.clientsrv.GetClienti(0).subscribe((c) => {
      console.log(c);
      this.response = c;
      this.arrClienti = c.content;
    });
  }
  InizializzaForm() {
    this.form = this.fb.group({
      Cerca: new FormControl(),
    });
  }
  CambiaPagina(p: number) {
    this.clientsrv.GetClienti(p).subscribe((c) => {
      console.log(c);
      this.response = c;
      this.arrClienti = c.content;
    });
  }
  counter(i: number) {
    return new Array(i);
  }

  confirmDelete(name: string, id: number, i: number) {
    if (confirm('Sicuro di eliminare ' + name + '?')) {
      console.log('Implement delete functionality here');
      this.clientsrv.Delete(id).subscribe((c) => {
        console.log(c);
        this.arrClienti.splice(i, 1);
      });
    }
  }
}
