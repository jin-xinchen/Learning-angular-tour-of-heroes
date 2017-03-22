import { Component, OnInit } from '@angular/core';


@Component({
moduleId: module.id,
  selector: 'app-root',
 
  template:`
  <h1>{{title}}</h1>

<!--<a routerLink="/heroes">Heroes</a>
  < my - heroes ></my-heroes>  -->
   <nav>
     <a routerLink="/dashboard"  routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>
<router-outlet></router-outlet>
  `
  ,styleUrls: [ './app.component.css' ]

})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';

  ngOnInit(): void {

  }
  constructor() { }
  
}
