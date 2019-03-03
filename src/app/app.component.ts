import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from './includes/shared.module';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // Boolean variables to keep track if we are displaying certain elements
  private show_sidebar_left: boolean = true;
  private show_sidebar_right: boolean = true;
  private show_item_spacing: boolean = false;
  private hiddenUrls: any;

  constructor(private router: Router,
              private shared: SharedModule) 
              {
                PageScrollConfig.defaultScrollOffset = 40;
                PageScrollConfig.defaultDuration = 350; // anchor link scroll speed
              }// end appComponent constructor

  ngOnInit() {
    let self = this;
    
    // List of URL's to determine if we are showing/hiding certain elements
    this.hiddenUrls = {
      no_item_spacing: ['/', '/contact', '/register'],
      no_sidebar_right: ['/', '/play', '/contact', '/register', '/about', '/services'],
      no_sidebar_left: ['/']
    };

    // Function to be called each time the route changes
    this.shared.onRouteChange(function() {
      // scroll to the top of the page
      window.scrollTo(0,0);
      // grab the current URL
      let url = self.router.url;
      self.show_sidebar_left = false;
      self.displayHandler(url, 'show_item_spacing');  
      self.displayHandler(url, 'show_sidebar_right');
    });
  }// end ngOninit function

  displayHandler(url, key) {
    // handler for hiding certain components
    let hiddenUrls = this.hiddenUrls[key.replace('show', 'no')];
   
    for(let str of hiddenUrls) {
      // for loop over all routes to hide
      if(url !== '/' && str !== '/') {
        this[key] = url.indexOf(str) == -1;
        if(!this[key]) {
          break;
        }// end if
      } else if(url !== '/' && str === '/' && hiddenUrls.length === 1) {
        // we have the home page in our array of length 1
        this[key] = true;
      }else {
        this[key] = false;  
      }// end if we are not on home page

    }// end for loop over no_sidebar_right

  }// end function componentHandler
  
  resize(){
    let description = document.getElementById("description");
    if (description.style.display === "none") {
      description.style.display = "block";
    } else {
      description.style.display = "none";
    }// end if description not displayed
  }// end function resize

}// end class AppComponent