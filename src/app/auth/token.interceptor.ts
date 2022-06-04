import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
tenant:string;
token: string;

  constructor(private authSrv:AuthService) {
    this.tenant=environment.adminTenant;
    this.token='Bearer ' + environment.adminToken;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    let success:string;

    let myReq:HttpRequest<any> = request
      myReq= request.clone({
        headers: request.headers
        .set ('Authorization', this.token)
        .set('X-TENANT-ID',this.tenant)
        });
      return next.handle(myReq).pipe(
        tap(
          event =>{
            success= event instanceof HttpResponse ? 'succeeded' : ''
          }
        ),
        catchError((error:HttpErrorResponse)=>{
        return throwError(error)
        })
      );

}


}
