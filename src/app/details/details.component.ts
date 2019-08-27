import { Component, OnInit } from '@angular/core';
import{NgForm}from '@angular/forms';     //we did
import{ApiService} from '../api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  
  getname='';
  getroll='';
  getadm='';
  getbranch='';
  getemail='';
  
  onSubmit(data:NgForm)
  {
    console.log(data.value);
  



    this.apiService.insertData(data.value).subscribe((response)=>{
   console.log(response);
   alert('successfully inserted');
 });
}

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

}
