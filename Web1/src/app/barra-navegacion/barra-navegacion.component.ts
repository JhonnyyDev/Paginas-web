import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  imports: [],
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
  }