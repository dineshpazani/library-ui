import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBookComponent } from './view-book/view-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { RegisterIssuedBookComponent } from './register-issued-book/register-issued-book.component';
import { ViewIssuedBookComponent } from './view-issued-book/view-issued-book.component';

const routes: Routes = [
  { path: 'view-books', component: ViewBookComponent},
  { path: 'add-book', component: AddBookComponent},
  { path: 'register', component: RegisterIssuedBookComponent},
  { path: 'view-issued', component: ViewIssuedBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ViewBookComponent, AddBookComponent, RegisterIssuedBookComponent, ViewIssuedBookComponent]
