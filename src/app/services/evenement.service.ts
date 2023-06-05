
import{HttpClient,HttpClientModule} from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import{map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  open(content: TemplateRef<any>) {
    throw new Error('Method not implemented.');
  }


  constructor( private _http:HttpClient) { }
  postActivite(data:any) {
    return this._http.post<any>('http://localhost:3000/evenement',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getActivite(){
    return this._http.get<any>("  http://localhost:3000/evenement")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateActivite(data:any,id:number){
    return this._http.put<any>("  http://localhost:3000/evenement"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteActivite(id:number){
    return this._http.delete<any>("http://localhost:3000/evenement/"+id)
    .pipe(map((res:any)=>
    {
      return res;
    }))
}
}
