import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../interfaces/fatture';
import { ClientiService } from 'src/app/service/clienti.service';
@Component({
  selector: 'app-fatture-client',
  templateUrl: './fatture-client.component.html',
  styleUrls: ['./fatture-client.component.scss']
})
export class FattureClientComponent implements OnInit {
  idCliente!: number;
	page!: number;
	pageSize!: number;
	response: any;
	fatture!: Fatture[];

  constructor(private clientSrv: ClientiService,
		private router: Router,
		private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
			this.idCliente = +params['id'];
			console.log(this.idCliente);
			this.Carica();

  });

}
Carica() {
  if (this.idCliente) {
    this.clientSrv.GetByCliente(this.idCliente, 0).subscribe(c => {
      console.log(c);
      this.response = c;
      this.fatture = c.content;
    });} else {
			this.clientSrv.GetAll(0).subscribe(c => {
				console.log(c);
				this.response = c;
				this.fatture = c.content;
			});
		}
	}
  CambiaPagina(p: number) {
		if (this.idCliente) {
			this.clientSrv.GetByCliente(this.idCliente, p).subscribe(c => {
				console.log(c);
				this.response = c;
				this.fatture = c.content;
			});
		}
		else {
			this.clientSrv.GetAll(p).subscribe(c => {
				console.log(c);
				this.response = c;
				this.fatture = c.content;
			});
		}
	}
	counter(i: number) {
		return new Array(i);
	}

	confirmDelete(name: number, id: number, i: number) {
		if (confirm("Are you sure to delete " + name)) {
			console.log("Implement delete functionality here");
			this.clientSrv.Delete(id).subscribe(c => {
				console.log(c);
				this.fatture.splice(i, 1);
			});
		}
	}





}
