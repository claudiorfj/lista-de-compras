import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  public appPages = [
    { title: 'Importante', url: '/Importante', icon: 'warning' },
    { title: 'Compras', url: '/Compras', icon: 'calculator' },
    { title: 'FLV', url: '/Flv', icon: 'nutrition' },
    { title: 'Breakfast', url: '/Breakfast', icon: 'cafe' },
    { title: 'Mercearia', url: '/Mercearia', icon: 'bag' },
    { title: 'Talho', url: '/Talho', icon: 'fish' },
    { title: 'Higiene', url: '/Higiene', icon: 'accessibility' },
    { title: 'Limpeza', url: '/Limpeza', icon: 'sparkles' },
    { title: 'Rafaela', url: '/Rafaela', icon: 'heart' },
    { title: 'Farmácia', url: '/Farmacia', icon: 'bandage' },
  ];
  public labels = ['Teste'];

  constructor() { }

  ngOnInit() {}

}
