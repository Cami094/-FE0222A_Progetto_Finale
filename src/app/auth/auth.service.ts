import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { userData } from '../components/interfaces/userData';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { signupData } from '../components/interfaces/signupData';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  GetAll(p: number) {
    console.log('getusers')
   return this.http.get<any>(this.pathApi + '/api/users?page='+ p + '&size=20&sort=id,ASC' );
  }
  pathApi: string

  private authSubject = new BehaviorSubject<null | userData>(null);
  loggedIn = false;
  private userLoggedIn = new Subject<any>()
  private userLoggedOut = new Subject<any>()
  userLoggedIn$ = this.userLoggedIn.asObservable()
  userLoggedOut$ = this.userLoggedOut.asObservable()


  constructor(private http: HttpClient, private router: Router) {
    this.pathApi= environment.pathApi;

  }

  login(data: any) {
    console.log(data);
    return (
      this.http
        .post<any>(this.pathApi +'/api/auth/login', data)
    )
  }

  get isLogged():boolean{
    return localStorage.getItem('utentelog')!= null

  }

  signup(data: signupData) {
    console.log(data)
    return this.http
      .post<any>(this.pathApi +'/api/auth/signup', data)
      }
      logout(){
        this.authSubject.next(null);
        localStorage.removeItem('utentecorrente')
        this.router.navigate(['/signup'])
      }

    }
