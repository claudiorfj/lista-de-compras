import { Component, OnInit } from '@angular/core';
import { SectorMenu, Labels } from 'src/app/common/data';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.page.html',
  styleUrls: ['./farmacia.page.scss'],
})
export class FarmaciaPage implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  constructor() { }

  ngOnInit() {
  }

}
