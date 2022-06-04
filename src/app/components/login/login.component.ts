import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { userData } from '../interfaces/userData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  errorMessage = undefined;
  form!: FormGroup;
  role: string[] = [];

  utente!: userData;

  constructor(
    private authSrv: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl(null, Validators.required),

      password: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    console.log(this.form.value);
    this.isLoading = true;
    this.role = [];
    this.role.push(this.form.value.role);
    this.form.value.role = this.role;

    this.authSrv.login(this.form.value).subscribe(data =>{
      let json = JSON.stringify(data);
localStorage.setItem('utentelog',
      json)} );


    this.isLoading = false;




    this.router.navigate(['/']);


  }catch(error: any){
    this.isLoading= false
    this.form.reset();
    alert(error)
    console.error(error)
  }

}

/*
  this.form= this.fb.group({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),


  })


}*/

/*
  console.log(form)

     this.authSrv.login(form.value)
this.form.reset()

}catch(error: any){
  this.errorMessage= error
  console.error(error)
}*/
