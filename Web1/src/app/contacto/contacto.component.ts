import { Component } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, FormBuilder, FormGroup, Validators],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
