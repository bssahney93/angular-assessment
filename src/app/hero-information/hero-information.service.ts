import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Injectable()
export class HeroInformationService {

  private heroList: Array<Hero> = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.heroList = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("../../assets/data/heroes-list.json");
  }

  public getHeroById(id) {
    if (id < 3) {
      return this.heroList.filter(hero => hero['id'] === id);
    } else {
      const heroData = JSON.parse(localStorage.getItem('heroes-data'));
      return heroData.filter(hero => hero['id'] === id);
    }
    return [];
  }
}
