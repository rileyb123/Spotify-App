import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any = "CURRENT";
  image  = '';

  constructor(private http:HttpClient,private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {

    this.apiService.testGetMe(localStorage.getItem("token") || "").
      subscribe({
        next: (response) => {
          this.data = response.display_name ;
          this.image = response.images[0].url;
          console.log(response);
        },
        error: (error) => {
          console.log(error);
          this.router.navigateByUrl('/error');
        },
        complete: ()=>{
          console.log("Finished Me");
        }
      })

     
  }

  logout(){
    localStorage.clear();
    console.log("log out successfull");
    this.router.navigateByUrl('/login');
  }

}
