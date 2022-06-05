import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
