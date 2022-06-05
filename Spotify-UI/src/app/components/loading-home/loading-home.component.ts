import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-loading-home',
  templateUrl: './loading-home.component.html',
  styleUrls: ['./loading-home.component.scss']
})
export class LoadingHomeComponent implements OnInit {

  code:string = "" ;
  token:string = "" ;

  constructor(private apiSerive:ApiService, private route:ActivatedRoute
     , private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.queryParamMap.get('code') || "";
    
    this.apiSerive.getAccessToken(this.code)
    .subscribe({
      next: (response) => {this.token = response.access_token || ""},
      error: (e) => {console.log(e)},
      complete: () => { 
        if(this.token == ""){
          this.router.navigateByUrl('/error');
      }
      else{
        localStorage.setItem( 'token' , this.token);
        this.router.navigateByUrl('/home');
      }
      },
    });
  }

}
