import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <h1>Angular 2 Weather</h1>  
    </header>
    <weather-search></weather-search>
    <weather-list></weather-list>
  `,
})
export class AppComponent { }
