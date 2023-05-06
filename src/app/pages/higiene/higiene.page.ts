import { Component, OnInit } from '@angular/core';
import { SectorMenu, Labels } from 'src/app/common/data';

@Component({
  selector: 'app-higiene',
  templateUrl: './higiene.page.html',
  styleUrls: ['./higiene.page.scss'],
})
export class HigienePage implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  constructor() { }

  ngOnInit() {
  }

}
