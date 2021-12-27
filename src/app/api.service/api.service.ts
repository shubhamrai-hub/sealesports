import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postEmail(data:any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  // getTeamDetail(){
  //   return this.http.get<any>("http://localhost:3000/posts")
  //   .pipe(map((res: any)=>{
  //     return res;
  //   }))
  // }


  // editTeamDetail(id : number){
  //   return this.http.get<any>("http://localhost:3000/posts/"+id)
  // }

  // updateTeamDetail(id, data){
  //   return this.http.put<any>("http://localhost:3000/posts/"+id, data)
  // }

  // deleteTeamDetail(id : number){
  //   return this.http.delete<any>("http://localhost:3000/posts/"+id)
  //   .pipe(map((res: any)=>{
  //     return res;
  //   }))
  }


