import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  
  public books = [];
  public errorMsg;

  constructor(private _bookservice: BookService) { }

  ngOnInit() {
    this._bookservice.getBookDetails()
    .subscribe(data => this.books = data,
               error => this.errorMsg = error);
  }

  updateBook(value) {
    this._bookservice.sendBook(value);
  }



}
