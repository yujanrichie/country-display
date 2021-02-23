import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CardItemDetailComponent } from './components/card-item-detail/card-item-detail.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardItemDetailComponent,
    CardItemComponent,
    CardListComponent,
    HeaderComponent,
    HomepageComponent,
    SearchFilterComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
