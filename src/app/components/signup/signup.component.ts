import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
isLoading = false;
errorMessage = undefined;
  form!: FormGroup;
  role :string[] = [];
user = { username: '',password:'',email:'', role:[]};
  router: any;

  constructor(private authSrv:AuthService, private fb:FormBuilder) {

  }

  ngOnInit(): void {

    this.form= this.fb.group ({
      username: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      role: new FormControl(null,Validators.required)
    })



  }
   onSubmit(DatiForm:{value:{roles: any; username : '', password:'',email:'', role:[]}}){
     this.isLoading = true
     this.role=[];
     this.role.push(this.form.value.role)
   this.form.value.role= this.role
this.user.username = DatiForm.value.username;
this.user.password= DatiForm.value.password;
this.user.email= DatiForm.value.email;
this.user.role = DatiForm.value.role;

this.authSrv.signup(this.user).subscribe( res =>{
  console.log (res);
  this.router.navigate(['']);
});
this.form.reset()
this.isLoading = false
console.log(this.user)

   }catch (error: any){
  this.isLoading = false;
  this.errorMessage= error
  console.error(error);

  }
  }




