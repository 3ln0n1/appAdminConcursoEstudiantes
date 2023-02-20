import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SpinnerService } from '../../loader/services/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor {
  constructor(private spinnerService:SpinnerService ,private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    console.log("entro el interceptor");
    const token: string = ""+localStorage.getItem('token');

    let request = req;

    /*if (token || token!="") {
      request = req.clone({
        setHeaders: {
          //authorization: `Bearer ${ token }`,
          rejectUnauthorized: 'false',
        }
      });
    }*/

    return next.handle(request).pipe(finalize(()=>this.spinnerService.hide()),
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/concursoestudiantes/login');
        }

        return throwError( err );

      })
    );
  }

}
