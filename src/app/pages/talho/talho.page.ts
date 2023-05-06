import { Component, OnInit } from '@angular/core';
import { SectorMenu, Labels } from 'src/app/common/data';

@Component({
  selector: 'app-talho',
  templateUrl: './talho.page.html',
  styleUrls: ['./talho.page.scss'],
})
export class TalhoPage implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  constructor() { }

  ngOnInit() {
  }

}
