import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs/Observable'
import { Book } from './models/books';
import { RegisterForm } from './models/RegisterForm';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _bookdetails : string = "http://localhost:8080/v1/book/get";

  private _librarydetails : string ="http://localhost:8080/v1/library/get";

  private _addNewBook : string ="http://localhost:8080/v1/book/addbook";

  private __resgister : string ="http://localhost:8080/v1/library/addissuedbook";

  constructor(private http: HttpClient) { } 

  private _bookMessageSource = new Subject<any>();
  bookMessage$ = this._bookMessageSource.asObservable();

  sendBook(bookMsg: string){
    this._bookMessageSource.next(bookMsg);
  }


  getBookDetails(): Observable<Book[]> {
    return this.http.get<Book[]>(this._bookdetails)
    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error")
  }

  getRegisteredDetails(): Observable<RegisterForm[]> {
    return this.http.get<RegisterForm[]>(this._librarydetails)
    .catch(this.errorHandler);
  }

  addNewBook(data: any): Observable<any> {
    return this.http.post<any>(this._addNewBook, data)
    .catch(this.errorHandler)
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.__resgister, data)
    .catch(this.errorHandler)
  }
}
