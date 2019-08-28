import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'; //we added it

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  insertData(data){
              return this.http.post("http://angular-info.herokuapp.com/read2",data)
  }

  getData(){
    return this.http.get("http://angular-info.herokuapp.com/viewAPI2");
  }

  searchData(data)
  {
    return this.http.post("http://angular-info.herokuapp.com/studentsearchAPI",data);
  }

  deleteData(data)
  {
    return this.http.post("http://angular-info.herokuapp.com/studentdeleteAPI",data);
  }
  
  updateData(data)
  {
    return this.http.post("http://angular-info.herokuapp.com/studentupdate",data)
  }

}
