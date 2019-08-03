import { Component, OnInit } from '@angular/core';
import { HeroListService } from './hero-list.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  providers: [ HeroListService ]
})
export class HeroListComponent implements OnInit {
  public heroesList: Array<Hero> = [];

  constructor(private _heroListService: HeroListService) {
    this.getList();
  }
  getList() {
    const heroData = JSON.parse(localStorage.getItem('heroes-data'));
    if (heroData && heroData.length) {
      this.heroesList = heroData;
    } else {
      this.callHeroList();
    }
  }

  callHeroList() {
    this._heroListService.getJSON().subscribe(data => {
      this.heroesList = data;
      localStorage.setItem('heroes-data', JSON.stringify( data ));
    });
  }

  ngOnInit() {
  }

}
