import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Rendszer } from './rendszer';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RendszerService {
 url: string;

  constructor(
  private http: HttpClient
 ) { this.url = 'http://localhost:8080/rendszer';}
  
  getRendszerek(): Observable<any> {
	 
   return this.http.get('//localhost:8080/'); 
  }
  
  getRendszer(rendszer: Rendszer | number): Observable<Rendszer> {
  const id = typeof rendszer === 'number' ? rendszer : rendszer.id; 
  return this.http.get<Rendszer>(this.url + '/' + id);
  }

 
deleteRendszer (rendszer: Rendszer | number): Observable<Rendszer> {
  const id = typeof rendszer === 'number' ? rendszer : rendszer.id;
  return this.http.delete<Rendszer>(this.url + '/' + id, httpOptions).pipe(
      tap(_ => this.log(`delete rendszer id`)),
      catchError(this.handleError<Rendszer>('deleteRendszer'))
    );
}
updateRendszer (rendszer: Rendszer): Observable<any> {

	return this.http.put<Rendszer>(this.url, rendszer, httpOptions).pipe(
      tap(_ => this.log(`updated rendszer id=${rendszer.id}`)),
      catchError(this.handleError<Rendszer>('updateRendszer'))
    );
}
createRendszer (rendszer: Rendszer): Observable<any> {
	return this.http.post<Rendszer>(this.url , rendszer, httpOptions).pipe(
      tap(_ => this.log(`created new rendszer name=${rendszer.name}`)),
      catchError(this.handleError<Rendszer>('updateRendszer'))
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