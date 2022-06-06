import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  serverResponse:string = "Nothing Yet";
  picture = ''

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  
  
  
  login(): void{
    console.log("Loggin function working I guess")
      this.apiService.getLoginSpotify().subscribe({
        next: (res) => {this.serverResponse = res.login_url; console.log(this.serverResponse);},
      error: (error) => {console.log("Get Fucked")},
      complete: () => {  console.log("Request Complete");
        console.log(this.serverResponse);
        console.log("come onn it completed")
        window.location.href = this.serverResponse;
      }
    });

     console.log("DID it complete or not wtffff")
  }

}
