import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero.model';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  //  template: `
  //  <div *ngIf="hero">
  //    <h2>{{hero.name}} details!</h2>
  //    <div><label>id: </label>{{hero.id}}</div>
  //    <div>
  //      <label>name: </label>
  //      <input [(ngModel)]="hero.name" placeholder="name"/>
  //    </div>
  //  </div>
  //  <button (click)="goBack()">Back</button>
 // `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;
  //constructor() { }
constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}

goBack(): void {
  this.location.back();
}
save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
}
}
