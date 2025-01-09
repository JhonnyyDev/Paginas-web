import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-barra-navegacion',
  imports: [NgIf, CommonModule],
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

isActive = false;
 toggleActive() { 
  this.isActive = !this.isActive; 
 }

 ActivarFunciones() {
  this.abrirMenu();
  this.toggleActive();
}

}