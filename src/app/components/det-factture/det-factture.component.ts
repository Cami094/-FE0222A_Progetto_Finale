import { Component, OnInit } from '@angular/core';
import { Fatture } from '../interfaces/fatture';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { StatoFatture } from '../interfaces/statoFatture';
import { ClientiService } from 'src/app/service/clienti.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-det-factture',
  templateUrl: './det-factture.component.html',
  styleUrls: ['./det-factture.component.scss']
})
export class DetFacttureComponent implements OnInit {
idClient!: number;
id!:number;
form!: FormGroup;
fattura !: Fatture;
statoFatture!: StatoFatture[];
  constructor( private fb:FormBuilder,
    private  clientSrv:ClientiService,
    private router: Router,
    private route: ActivatedRoute) { }

clienSave ( DatiForm:{value: { data: string; numero: number; anno: number; importo: number; stato: number; };}){
  console.log(0);
  console.log(DatiForm.value);
  if (!this.id) {
    this.id = 0;
    this.fattura = { id: 0, numero: 0, anno: 0, data: '', importo: 0, stato: { id: 0, nome: '' }, cliente: {} };
  }
  this.fattura.id = this.id;
  this.fattura.data = DatiForm.value.data;
  this.fattura.numero = DatiForm.value.numero;
  this.fattura.anno = DatiForm.value.anno;
  this.fattura.importo = DatiForm.value.importo;
  this.fattura.stato.id = DatiForm.value.stato;
  if (this.idClient) { this.fattura.cliente.id = this.idClient; }

  this.clientSrv.Save(this.id, this.fattura).subscribe(res => {
    console.log(res);
    this.router.navigate(['/facturegeneral']);
  });
}
  ngOnInit(): void {
    console.log('ngOnInit');
		this.route.params.subscribe(params => {
			this.id = +params['id'];
			this.idClient = +params['idCliente'];
			console.log(this.id);
			this.InizializzaForm();
			this.Carica();
		});
		this.CaricaStatoFatture();
  }

  InizializzaForm() {
		console.log('InizializzaForm');
		this.form = this.fb.group({
			data: new FormControl('', [Validators.required]),
			numero: new FormControl('', [Validators.required]),
			anno: new FormControl('', [Validators.required]),
			importo: new FormControl('', [Validators.required]),
			stato: new FormControl(''),
		});

}
Carica() {
  if (this.id !== 0) {
    this.clientSrv.GetById(this.id).subscribe(
      data => {
        console.log(data);
        this.fattura = data;
        this.fattura.data = this.fattura.data.substr(0, 10);
        this.form.patchValue({
          data: this.fattura.data,
          numero: this.fattura.numero,
          anno: this.fattura.anno,
          importo: this.fattura.importo
        })
      }
    );
  }

}
CaricaStatoFatture() {
  this.clientSrv.GetAllStato(0).subscribe(
    data => {
      this.statoFatture = data.content;
    }
  );
}

}
