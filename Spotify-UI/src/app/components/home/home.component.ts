import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any = "CURRENT";

  constructor(private http:HttpClient,private apiService:ApiService) { }

  ngOnInit(): void {

    this.apiService.testGetMe(localStorage.getItem("token") || "").
      subscribe({
        next: (response) => {
          this.data = response.display_name ;
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
        complete: ()=>{
          console.log("Finished Me");
        }
      })
  }

}
