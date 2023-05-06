import { Component, OnInit } from '@angular/core';
import { Labels, SectorMenu } from 'src/app/common/data';

@Component({
  selector: 'app-hortifruti',
  templateUrl: './hortifruti.page.html',
  styleUrls: ['./hortifruti.page.scss'],
})
export class HortifrutiPage implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  constructor() { }

  ngOnInit() {
  }

}
