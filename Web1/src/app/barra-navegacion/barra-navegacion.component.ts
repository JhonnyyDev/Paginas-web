import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-barra-navegacion',
  imports: [NgIf],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {

modoclaro = false;

cambiomodo() {
  this.modoclaro = !this.modoclaro;
  if (this.modoclaro) {document.body.classList.add("white");
  }
  else {document.body.classList.remove("white");
  };  
}

menuOpen = false;

abrirMenu() {
  this.menuOpen = !this.menuOpen
}

  }