import { Labels, SectorMenu } from './../../common/data';
import { Component, OnInit } from '@angular/core';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

@Component({
  selector: 'app-importante',
  templateUrl: './importante.page.html',
  styleUrls: ['./importante.page.scss'],
})
export class ImportantePage implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  titulo = 'Importante teste'

  constructor() { }

  ngOnInit() {
  }

}
