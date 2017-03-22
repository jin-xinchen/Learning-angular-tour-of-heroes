import { Component, OnInit } from '@angular/core';


import { Router }   from '@angular/router';

//export class Hero {
//  id: number;
//  name: string;
//}
import { Hero } from '../shared/hero.model';

//const HEROES: Hero[] = [
//  { id: 11, name: 'Mr. Nice' },
//  { id: 12, name: 'Narco' },
//  { id: 13, name: 'Bombasto' },
//  { id: 14, name: 'Celeritas' },
//  { id: 15, name: 'Magneta' },
//  { id: 16, name: 'RubberMan' },
//  { id: 17, name: 'Dynama' },
//  { id: 18, name: 'Dr IQ' },
//  { id: 19, name: 'Magma' },
//  { id: 20, name: 'Tornado' }
//];

import { HeroService } from '../shared/hero.service';

@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  //template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>',
  //template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>',
  //template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2><div><label>id: </label>{{hero.id}}</div><div><label>name: </label>{{hero.name}}</div>',
  
//  template:`
//  <h1>{{title}}</h1>
//  <h2>{{hero.name}} details!</h2>
//  <div><label>id: </label>{{hero.id}}</div>
//  <div>
//    <label>name: </label>
//    <input value="{{hero.name}}" placeholder="name">
//  </div>
//  `,
  
//  template:`
// <!-- <h1>{{title}}</h1> -->
//<div  *ngIf="selectedHero">  
//  <h2>{{selectedHero.name}} details!</h2>
//  <div><label>id: </label>{{selectedHero.id}}</div>
//  <div>
//    <label>name: </label>
//    <input [(ngModel)]="selectedHero.name" placeholder="name" />
//  </div>
//</div>
//<h2>My Heroes</h2>
//<ul class="heroes">
//    <!-- each hero goes here -->
//    <li *ngFor="let hero of heroes" (click)="onSelect(hero)"
//    [class.selected]="hero === selectedHero">
//     <span class="badge">{{hero.id}}</span> {{hero.name}}
//  </li>
//</ul>
//<!--  h1>begin app-hero-detail</h1>
//< app -hero-detail [hero ]=" s electedHero">< / app-hero-detail>
//<h1>end of app-hero-detail</h1 -->
//<div *ngIf="selectedHero">
//  <h2>
//    {{selectedHero.name | uppercase}} is my hero
//  </h2>
//  <button (click)="gotoDetail()">View Details</button>
//</div>

//  `,  
  styleUrls: ['./heroes.component.css']
  //styles: [``]
//,providers: [HeroService]
})
export class HeroesComponent implements OnInit{
  //title = 'app works!';
  title = 'Tour of Heroes';
  //hero = 'Windstorm';
  //hero: Hero = { id: 1,name:'Windstorm' };
  //heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  ngOnInit(): void {
    this.getHeroes();
    this.heroes=[{ id: 0, name: '' }];
  }
  constructor(private heroService: HeroService,
              private router: Router ) { }
  
  onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
    
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}


add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = hero;
    });
}
delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}
  
}
