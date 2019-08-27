import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';   //nammal add cheyyunath
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { NavComponent } from './nav/nav.component';
import{HttpClientModule} from '@angular/common/http';  //nammal add cheyyunath

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule    //formsmodule,http nammal add cheyyunath
  ],
  providers: [],
  bootstrap: [AppComponent,DetailsComponent,NavComponent]
})
export class AppModule { }
