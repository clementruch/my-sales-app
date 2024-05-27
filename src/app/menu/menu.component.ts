import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule],
  template: `
    @for(item of menuItems; track item.path){
      <a mat-list-item [href]="item.path">{{item.label}}</a>
    }
  `,
  styles: ``
})

export class MenuComponent {
  menuItems: Array<MenuItem> = [
    { 
      path: '/', 
      label: 'Accueil' 
    },
    { 
      path: '/categories', 
      label: 'Catégories' 
    },
    { 
      path: '/suppliers', 
      label: 'Fournisseurs' 
    },
  ]
}

export interface MenuItem {
  /**
   * Le chemin sera chargé lorsque vous cliquez sur le menu
   */
  path: string;
  /**
   * Le texte qui sera affiché dans 
   */
  label: string;
}
