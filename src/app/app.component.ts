import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <header>
          <h1>Angular 2 Weather</h1>
      </header>
      <nav class="navbar navbar-inverse bg-inverse">
          <div class="row">
              <div class="offset-xl-11 col-xl-1 offset-lg-11 col-lg-1 offset-md-10 col-md-2 offset-sm-10 col-sm-2 offset-xs-9 col-xs-3"> 
                  <button type="button" class="btn btn-outline-success" style="width: 100%;"><i class="fa fa-cogs" aria-hidden="true"></i></button>
              </div>     
          </div>    
      </nav>
      <div class="container-fluid">
          <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12" style="margin-top: 1%;">  
                  <sidebar></sidebar>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-9 col-sm-8 col-xs-12">
                  <weather-search></weather-search>
                  <weather-list></weather-list>
              </div>  
          </div>
      </div>  
  `
})
export class AppComponent { }
