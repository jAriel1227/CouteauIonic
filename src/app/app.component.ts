import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Género', url: '/gender', icon: 'female' },
    { title: 'Universidad', url: '/uni', icon: 'school' },
    { title: 'Edad', url: '/edad', icon: 'people' },
    { title: 'Clima', url: '/locate', icon: 'sunny' },
    { title: 'Contacto', url: '/me', icon: 'code-slash' },
  ];
}
