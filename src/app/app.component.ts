import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ AppService ]
})
export class AppComponent {

constructor(private appService: AppService) { } 
        

  title = 'app';
  persones;
    getAll(){
  		this.appService.getPersones()
            .subscribe(
            data => { this.persones = data;},
            err => console.error(err))
    }
}
