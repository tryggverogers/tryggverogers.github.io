import { Component, ViewChild, OnInit } from '@angular/core';
import { SharedModule } from '../../includes/shared.module';
//import 'rxjs/operator/filter';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Initialize view model variables
  private loggedIn;
  private activeNavID;
  private popupOpacity;

  constructor(private shared: SharedModule) { }

  ngOnInit() {
    let self = this;
    this.popupOpacity = 0.0;
    this.activeNavID = 'home-link';
    //const sendmail = require('sendmail')();
  
    // Function to be called each time the route changes
    this.shared.onRouteChange(function(data) {
      if(data.id !== 1) {
        // dont call this function when the route is initialized
        self.removeActive(self.activeNavID);
      }// end if the route was just initialized
    });
    // sendmail({
    //   from: 'no-reply@yourdomain.com',
    //   to: 'peter.cody14@gmail.com, test@sohu.com, test@163.com ',
    //   subject: 'test sendmail',
    //   html: 'Mail of test sendmail ',
    //   }, function(err, reply) {
    //   console.log(err && err.stack);
    //   console.dir(reply);
    // });
  }// end ngOnInit function 

  postScroll(id, reachedTarget) {
    // called each time user clicks link and scrolls to section
    if(reachedTarget) {
       this.removeActive(this.activeNavID);
       this.addActive(id);
    }// end if they reached the scroll position
  }// end function postScroll

  addActive(id) {
    $('#' + id).addClass("active");
    this.activeNavID = id;
  }// end function addActive

  removeActive(id) {
    $('#' + id).removeClass("active");
    this.activeNavID = null;
  }// end function removeActive

  openDialog() {
    console.log("poop");
    this.popupOpacity = 1.0
  }

  closePopup() {
    console.log("poop");
    this.popupOpacity = 0.0;
  }

  submit(){
    this.popupOpacity = 0.0;
  }

}// end class NavBarComponent
