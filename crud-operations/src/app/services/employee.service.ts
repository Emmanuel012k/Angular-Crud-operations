import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee
  (data:any){
    return this._http.post('http://localhost:3000/empolyee',data);
  }
  
  UpdateEmployee
  (id: number,data:any){
    return this._http.put(`http://localhost:3000/empolyee/${id}`,data);
  }

  
  getEmployeeList
  (){
    return this._http.get('http://localhost:3000/empolyee');
  }

 deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employee/${id}`);
  }

}
