import { Injectable } from '@angular/core';
import{HttpClient,HttpClientModule} from '@angular/common/http';
import{map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PaiementPreuveService {
  constructor( private _http:HttpClient) { }
  postPaiment(data:any) {
    return this._http.post<any>(' http://localhost:3000/Paiement',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getPaiement(){
    return this._http.get<any>("  http://localhost:3000/Paiement")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateActivite(data:any,id:number){
    return this._http.put<any>("  http://localhost:3000/Paiement"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deletePaiment(id:number){
    return this._http.delete<any>("http://localhost:3000/Paiement"+id)
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }
}


