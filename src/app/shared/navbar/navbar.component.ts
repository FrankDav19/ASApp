import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items = [
    { name: 'Inicio', route: '/home'},
    { name: 'Crea tu estacion', route: '/build'},
    { name: 'Documentacion', route: '/docs' },
    { name: 'Mi Cuenta', route: '/myAccount' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
