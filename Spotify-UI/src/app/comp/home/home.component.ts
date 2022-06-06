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
  tok = ''
  User = ''
  
  constructor(private api:ApiService){
    
  }
  ngOnInit(){
    this.tok = localStorage.getItem('token') || ''
    this.api.getImage(this.tok).subscribe({
      next:(res)=>{
        this.picture=res.url;
        this.User = res.user;

      },
      error:(error)=>{console.log("it's fucked")},
      complete:()=>{console.log("succeed: "+this.title)}
    })
  }

}
