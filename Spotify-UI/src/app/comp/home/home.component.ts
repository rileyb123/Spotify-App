import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Spotify-UI';
  picture = ''
  
  constructor(private api:ApiService){
    
  }
  ngOnInit(){
    this.api.getImage().subscribe({
      next:(res)=>{this.picture=res.url; console.log(this.picture)
      },
      error:(error)=>{console.log("it's fucked")},
      complete:()=>{console.log("succeed")}
    })
  }

}
