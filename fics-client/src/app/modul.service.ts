import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Modul } from './modul';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ModulService {
  url: string;
  constructor(private http: HttpClient) {this.url = 'http://localhost:8080/modul';}
  
  getModul(modul: Modul | number): Observable<any> {	 
	  const id = typeof modul === 'number' ? modul : modul.id;	  
   return this.http.get(this.url + id);
  }
  
   getAllModul(): Observable<any> {
   return this.http.get(this.url + '/all');
  }
  
updateModul (modul: Modul, number): Observable<any> {
	return this.http.put<Modul>(this.url + '/' + number, modul, httpOptions).pipe(
      tap(_ => this.log(`updateed modul id=${modul.id}`)),
      catchError(this.handleError<Modul>('updateRendszer'))
    );
}
createModul (modul: Modul, number): Observable<any> {	
	return this.http.post<Modul>(this.url + '/' + number, modul, httpOptions).pipe(
      tap(_ => this.log(`created new modul name=${modul.name}`)),
      catchError(this.handleError<Modul>('updateRendszer'))
    );
}
  
deleteModul (modul: Modul | number): Observable<Modul> {
  const id = typeof modul === 'number' ? modul : modul.id;
  return this.http.delete<Modul>(this.url + id, httpOptions).pipe(
      tap(_ => this.log(`delete modul id`)),
      catchError(this.handleError<Modul>('deleteModul'))
    );
}

private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.error(message); // log to console instead
  }
}
