import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register-issued-book',
  templateUrl: './register-issued-book.component.html',
  styleUrls: ['./register-issued-book.component.css']
})
export class RegisterIssuedBookComponent implements OnInit {

 public selectedLevel: any;

 date=new Date();

registrationForm = this.fb.group({
    username: [''],
    issueddate: [this.datepipe.transform(this.date, 'yyyy-MM-dd')],
    issuedBooks: this.fb.group({
      bookId: [''],
    })

})

  public books = [];
  public registerdBook: any;
  public errorMsg;
  public successMsg;

  constructor(private _bookservice: BookService, private fb: FormBuilder, public datepipe: DatePipe) { }

  ngOnInit() {
    this._bookservice.getBookDetails()
    .subscribe(data => this.books = data,
               error => this.errorMsg = error);
  }

  showSuccess(){
    if(this.registerdBook){
      this.successMsg = "Registration Success!."
    }

  }
  
  register() {
    this._bookservice.register(this.registrationForm.value).subscribe( 
      data => {this.registerdBook = data; this.showSuccess()},
      error => this.errorMsg = error);
  }


}
