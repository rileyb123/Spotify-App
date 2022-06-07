import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  tokenUrl:string ="https://accounts.spotify.com/api/token";
  CLIENT_ID:string="857d0328d11a46c8b005072bf1ede343";
  CLIENT_SECRET:string="";

  params:URLSearchParams = new URLSearchParams();
  encodedString:string = this.CLIENT_ID + ':' + this.CLIENT_SECRET;

  constructor(private http: HttpClient) { }

  ngOnInit(){
 
  }

  testGetMe(token:string): Observable<any>{
    return this.http.get("http://localhost:3001/me?token=" + token);
  }

  getLoginSpotify(): Observable<any> {
    return this.http.get("http://localhost:3001/");
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
          "Content-Type" : "application/x-www-form-urlencoded",
        })
      }
    )
  }
}
