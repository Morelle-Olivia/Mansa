import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { ViewAllTransactionsComponent } from './pages/view-all-transactions/view-all-transactions.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    TransactionsComponent,
    ViewAllTransactionsComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    // FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
