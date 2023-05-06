import { Labels, SectorMenu } from './../../common/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importante',
  templateUrl: './importante.page.html',
  styleUrls: ['./importante.page.scss'],
})
export class ImportantePage implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  constructor() { }

  ngOnInit() {
  }

}
