import { Component } from '@angular/core';

import { Carousel, Dropdown, initTE,  Ripple } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'audioyaApp';
  ngOnInit() {
    initTE({ Carousel, Dropdown, Ripple  });
  }
}
