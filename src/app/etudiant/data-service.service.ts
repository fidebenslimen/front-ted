import { Injectable } from '@angular/core';
import{HttpClient,HttpClientModule} from '@angular/common/http';
import{map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor( private _http:HttpClient) { }
  postActivite(data:any) {
    return this._http.post<any>('http://localhost:3000/demandes',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getActivite(){
    return this._http.get<any>(" http://localhost:3000/demandes")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateActivite(data:any,id:number){
    return this._http.put<any>(" http://localhost:3000/demandes"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteActivite(id:number){
    return this._http.delete<any>(" http://localhost:3000/demandes/"+id)
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }
}
