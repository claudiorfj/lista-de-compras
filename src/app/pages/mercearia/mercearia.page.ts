import { Component, OnInit } from '@angular/core';
import { SectorMenu, Labels } from 'src/app/common/data';

@Component({
  selector: 'app-mercearia',
  templateUrl: './mercearia.page.html',
  styleUrls: ['./mercearia.page.scss'],
})
export class MerceariaPage implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  constructor() { }

  ngOnInit() {
  }

}
