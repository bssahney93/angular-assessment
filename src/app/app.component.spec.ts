import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'

const routes: Routes = [
  { path: '', redirectTo: 'hero-list', pathMatch: 'full' },
  { path: 'hero-list', component: HeroListComponent }
];

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let app: AppComponent;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        HeroListComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation()

  }));

  it('should create the app', () => {
    // @todo Verify if app is initialized
  });

  it(`should have as title 'heroes'`, () => {
    expect(app.title).toBe("heroes");
   // @todo Verify of the app.title is equal to heroes
  });

  it('navigate to "" redirects you to /hero-list', () => {
    router.navigate(['']);
   // @todo Check if router navigates to hero-list path. Please use location.path() to get the path.
  });
});
