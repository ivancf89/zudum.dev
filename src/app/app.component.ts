import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    // FORZAMOS EL MODO CLARO (LIGHT)
    // Esto previene que Ionic use la clase 'dark'
    // aunque tu Windows esté en modo oscuro.
    document.body.setAttribute('color-scheme', 'light');
  }
}