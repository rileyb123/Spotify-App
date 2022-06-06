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
  
  

  
}
