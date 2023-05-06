import { Component, OnInit } from '@angular/core';
import { SectorMenu, Labels } from 'src/app/common/data';

@Component({
  selector: 'app-limpeza',
  templateUrl: './limpeza.page.html',
  styleUrls: ['./limpeza.page.scss'],
})
export class LimpezaPage implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  constructor() { }

  ngOnInit() {
  }

}
