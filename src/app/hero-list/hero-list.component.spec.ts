import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroListComponent } from './hero-list.component';
import { HeroListService } from './hero-list.service'
import { of } from 'rxjs';

describe('HeroListComponent', () => {
  let fixture: ComponentFixture <HeroListComponent>;
  let component: HeroListComponent;
  let service: HeroListService;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        HeroListComponent
      ],
      providers: [HeroListService]
    }).compileComponents();
    fixture = TestBed.createComponent(HeroListComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    service = debugElement.injector.get(HeroListService);
  }));

  afterEach(() => {
    service = null;
    localStorage.removeItem('heroes-data');
  });

  it('If herores-data exist in localstorage then get heroes data', () => {
      //@todo write a test case for above condition. Please set the heroes-data in localStorage and then verify if it exist.
  });

  it('If herores-data does not exist in localsotrage then get heroes data', () => {
    const response = [];
    //@todo write spy for service.getJSON method and return response
    spyOn(service,"getJSON");
    expect(localStorage.getItem('heroes-data')).toBeFalsy();
    component.callHeroList();
    //expect(service.getJSON).toHaveBeenCalled();
  });

});
