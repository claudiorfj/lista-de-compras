import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labels, SectorMenu } from 'src/app/common/data';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent  implements OnInit {

  public sectorMenu = SectorMenu
  public labels = Labels

  constructor(private router: Router,) { }

  ngOnInit() {}

  selectItem(sector: { isSelected: boolean; }) {
    for (let i = 0; i < this.sectorMenu.length; i++) {
      this.sectorMenu[i].isSelected = false;
    }
  
    sector.isSelected = true;
    console.log('sector.isSelected', sector.isSelected)
  
    // navega para a página selecionada
    // this.navController.navigateRoot(item.url);
  }

}
