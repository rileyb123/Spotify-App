import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError,retry } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  tokenUrl:string ="https://accounts.spotify.com/api/token";
  
  CLIENT_ID:string=environment.CLIENT;
  CLIENT_SECRET:string=environment.ClIENT_SECRET;

  params:URLSearchParams = new URLSearchParams();
  encodedString:string = this.CLIENT_ID + ':' + this.CLIENT_SECRET;

  constructor(private http: HttpClient) { }

  ngOnInit(){
 
  }
  getImage(tok:string):Observable<any>{
    const ret =  this.http.get('http://localhost:3001/img?token='+tok)
    return ret
  }

  getLoginSpotify(): Observable<any> {
    console.log("getLoginSpotify Function")
    return this.http.get('http://localhost:3001/')
  }

  getAccessToken(code:string): Observable<any> {
    this.params.append('code' , code);
    this.params.append("redirect_uri" , "http://localhost:4200/loading-home");
    this.params.append("grant_type" , "authorization_code");
    return this.http.post(
      this.tokenUrl,
      this.params,
      {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + btoa(this.encodedString),
          "Content-Type" : "application/x-www-form-urlencoded"
        })
      }
    )
  }
}



