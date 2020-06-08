import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormBuilder, FormGroup, Validator, Validators, SelectControlValueAccessor } from '@angular/forms';
import { Book } from '../models/books';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public books: any;
  public errorMsg;
  public successMsg;
  public title = "Add New Book";

  constructor(private _bookservice: BookService, private fb: FormBuilder) { }

  bookForm: FormGroup;

  ngOnInit() {
    this.bookForm = this.fb.group({
      bookId: [''],
      bookName: ['', Validators.required],
      authorName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
    this.getBookMsg();

  }

  getBookMsg() {
    this._bookservice.bookMessage$.subscribe((data)=>{
      if(data){
        this.books = data;
        this.title = "Update the book";

        this.bookForm.get("bookId").setValue(this.books.bookId);
        this.bookForm.get("bookName").setValue(this.books.bookName);
        this.bookForm.get("authorName").setValue(this.books.authorName);
        this.bookForm.get("quantity").setValue(this.books.quantity);
      }     
    });
  }

  showSuccess() {
    if (this.books) {
      this.successMsg = " Book details saved sucessfully!."
    }

  }

  addNewBook() {
    this._bookservice.addNewBook(this.bookForm.value).subscribe(
      data => { this.books = data; this.showSuccess() },
      error => this.errorMsg = error);
  }


}