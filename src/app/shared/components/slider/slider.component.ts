import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private router:Router) { }

  ngOnInit() {}

  gotoLogin(){
    this.router.navigate(["register"]);
  }

}
