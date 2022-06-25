import { Component, OnInit } from '@angular/core';
import { FavoriteServiceService } from './favorite-service.service';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  public listdeVideos:any = []
  constructor(private RestService:RestService){

  }
  ngOnInit(): void{


  }

  public cargarData(){
    this.RestService.get('http://localhost:3000/posts')
    .subscribe(respuesta => {
      this.listdeVideos = respuesta;
      console.log(respuesta);
    })

  }

}
