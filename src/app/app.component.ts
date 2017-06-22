import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'hbro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hbro';
  constructor(
      private _router: Router
  ) {

  }
  ngOnInit(): void {
    this._router.navigate(['/test']).then(() => null);
  }
}
