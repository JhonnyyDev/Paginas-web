import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'; // Librerías para manejar formularios
import { HttpClient } from '@angular/common/http'; // Cliente HTTP para enviar datos al servidor (o en este caso, FormSubmit)

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule], // Importamos las herramientas para formularios reactivos
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})

export class ContactoComponent {
  // Creamos un grupo de controles del formulario
  miFormulario = new FormGroup({
    // Cada control es un campo del formulario
    nombreEmpresa: new FormControl('', Validators.required), // Campo obligatorio
    email: new FormControl('', [Validators.required, Validators.email]), // Obligatorio y debe ser un email válido
    mensaje: new FormControl('', Validators.required), // Campo obligatorio
  });

  constructor(private http: HttpClient) {} // Inyectamos HttpClient para hacer solicitudes HTTP

  enviarFormulario() {
    if (this.miFormulario.valid) {
      const formData = this.miFormulario.value;
      
      // Usamos el endpoint AJAX específico de FormSubmit
      this.http.post('https://formsubmit.co/ajax/jhonnyydev@gmail.com', formData).subscribe({
        next: () => {
          alert('Mensaje enviado con éxito');
          this.miFormulario.reset(); // Limpiamos el formulario
        },
        error: (error) => {
          console.error('Error real:', error);
          alert('Error al enviar el mensaje');
        }
      });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}