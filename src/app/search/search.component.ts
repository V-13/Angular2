import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  private mydata:Array<object> =[];

 private status = false;
  

  constructor(private apiservice:ApiService) { }
  
  
  onSubmit(data:NgForm)
  {
    console.log(data.value)


    this.apiservice.searchData(data.value).subscribe((response:Array<object>)=>{
      if(response.length>0){
        this.status=true;
        this.mydata=response;
      }
     });
    }


    deleteuser()
    {
      console.log(this.mydata[0]);
      this.apiservice.deleteData(this.mydata[0]).subscribe((response:Array<object>)=>{
        if(response.length>0)
        {
          alert('deleted')
        }
      })
    }

    updateuser()
    {
      console.log(this.mydata[0]);
      this.apiservice.updateData(this.mydata[0]).subscribe((response:Array<object>)=>{
        if(response.length>0)
        {
          alert('updated')
        }
      })
    }







  ngOnInit() {
  }

}
