import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Importante', url: '/folder/Importante', icon: 'warning' },
    { title: 'Compras', url: '/folder/Compras', icon: 'calculator' },
    { title: 'FLV', url: '/folder/Flv', icon: 'nutrition' },
    { title: 'Breakfast', url: '/folder/Breakfast', icon: 'cafe' },
    { title: 'Mercearia', url: '/folder/Mercearia', icon: 'bag' },
    { title: 'Talho', url: '/folder/Talho', icon: 'fish' },
    { title: 'Higiene', url: '/folder/Higiene', icon: 'accessibility' },
    { title: 'Limpeza', url: '/folder/Limpeza', icon: 'sparkles' },
    { title: 'Rafaela', url: '/folder/Rafaela', icon: 'heart' },
    { title: 'Farmácia', url: '/folder/Farmacia', icon: 'bandage' },
  ];
  public labels = ['Teste'];
  constructor() {}
}

