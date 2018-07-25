import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StarsService } from './stars.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StarwarsComponent } from './starwars/starwars.component';


@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [StarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
