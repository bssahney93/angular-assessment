import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroInformationService } from './hero-information.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-hero-information',
  templateUrl: './hero-information.component.html',
  styleUrls: ['./hero-information.component.scss'],
  providers: [ HeroInformationService ]
})
export class HeroInformationComponent implements OnInit {

  private hero: Hero;
  dateOfBirth : string = "";

  constructor(private _activatedRoute: ActivatedRoute,
  private _heroInformationService: HeroInformationService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      interval(1000).subscribe(() => {
        this.hero = this._heroInformationService.getHeroById(params['id'])[0];
        if (this.hero !=undefined){
          this.dateOfBirth = "" + this.hero.DOB.getDate() + " " + this.hero.DOB.getMonth() + " " + this.hero.DOB.getFullYear();
        }
      });
    });
  }

}
