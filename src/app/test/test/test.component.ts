import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'hbro-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
      private _router:Router,
      private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  go(): void {
    this._router.navigate(['../'], {relativeTo: this._activatedRoute}).then(() => null);
  }
}
