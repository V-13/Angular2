import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';   //nammal add cheyyunath
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { NavComponent } from './nav/nav.component';
import{HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';  //nammal add cheyyunath
import{ Routes,RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';


const appRoutes:Routes=[
  {path :'',component:DetailsComponent},
  {path:'view', component:ViewComponent},
  {path:'search',component:SearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    NavComponent,
    ViewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes)   //formsmodule,http nammal add cheyyunath
  ],
  providers: [],
  bootstrap: [AppComponent,NavComponent]
})
export class AppModule { }
