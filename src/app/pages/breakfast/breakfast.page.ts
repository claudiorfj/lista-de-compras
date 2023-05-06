import { Component, OnInit } from '@angular/core';
import { SectorMenu, Labels } from 'src/app/common/data';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})
export class BreakfastPage implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  constructor() { }

  ngOnInit() {
  }

}
