import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  serverResponse:string = "Nothing Yet";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  login(): void{
      this.apiService.getLoginSpotify()
      .subscribe({
        next: (response) => {
          console.log("We got it");
        this.serverResponse = response.login_url;
      },
      error: (error) => {

        },
      complete: () => {  console.log("Request Complete");
        console.log(this.serverResponse);
        window.location.href = this.serverResponse;
      }
    });

     
  }

}
