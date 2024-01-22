import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionsComponent} from "./pages/transactions/transactions.component";
import {ViewAllTransactionsComponent} from "./pages/view-all-transactions/view-all-transactions.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {FaqPageComponent} from "./pages/faq-page/faq-page.component";

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    pathMatch: "full"
  },
  {
    path: 'view-all-transactions',
    component: ViewAllTransactionsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'faq',
    component: FaqPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
