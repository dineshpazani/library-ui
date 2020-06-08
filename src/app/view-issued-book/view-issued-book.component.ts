import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormBuilder } from '@angular/forms';
import { IssuedBooks } from '../models/IssuedBooks';

@Component({
  selector: 'app-view-issued-book',
  templateUrl: './view-issued-book.component.html',
  styleUrls: ['./view-issued-book.component.css']
})
export class ViewIssuedBookComponent implements OnInit {

  Object = Object;
  public registers :any;
  public errorMsg;

  constructor(private _bookservice: BookService, private fb: FormBuilder) { }

  ngOnInit() {
    this._bookservice.getRegisteredDetails()
    .subscribe(
      (data )=> {
        this.registers = data;
        }, error => this.errorMsg = error);
  }

  update(value){
    this._bookservice.sendBook(value);
  }

  

}
