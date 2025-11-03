import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonNote // Para mostrar mensajes de error
} from '@ionic/angular/standalone';
// ¡¡IMPORTANTE: Añadimos las herramientas para formularios!!
import { 
  ReactiveFormsModule, 
  FormGroup, 
  FormBuilder, 
  Validators 
} from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para usar *ngIf en el HTML

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonText,
    IonNote, // Añadido
    RouterLink,
    CommonModule, // Añadido
    ReactiveFormsModule // ¡¡Añadido!!
  ]
})
export class LoginPage implements OnInit { // <-- Fíjate que implementa OnInit
  
  loginForm: FormGroup; // <-- Variable para nuestro formulario

  // Inyectamos el FormBuilder (para crear el form) y el Router (para navegar)
  constructor(
    private fb: FormBuilder, 
    private router: Router
  ) {
    // Creamos el formulario y sus reglas de validación
    this.loginForm = this.fb.group({
      // El campo 'email' es obligatorio y debe tener formato email
      email: ['', [Validators.required, Validators.email]],
      // El campo 'password' es obligatorio
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  // Función que se llamará al presionar "Ingresar"
  login() {
    // Si el formulario NO es válido, no hacemos nada
    if (this.loginForm.invalid) {
      // Marcamos todos los campos como "tocados" 
      // para que muestren sus mensajes de error
      this.loginForm.markAllAsTouched();
      return;
    }

    // Si el formulario SÍ es válido...
    console.log('Formulario válido:', this.loginForm.value);
    
    // NAVEGAMOS A LAS TABS
    // (Simulamos un login exitoso)
    this.router.navigate(['/tabs']);
  }

  // Pequeña función "helper" para acceder fácil a los campos en el HTML
  get f() {
    return this.loginForm.controls;
  }
}