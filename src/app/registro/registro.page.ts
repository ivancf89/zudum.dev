import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  IonNote,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';
import { 
  ReactiveFormsModule, 
  FormGroup, 
  FormBuilder, 
  Validators 
} from '@angular/forms';
import { CommonModule } from '@angular/common'; 
// IMPORTAMOS NUESTRO VALIDADOR PERSONALIZADO
import { passwordMatchValidator } from '../validators/password-match.validator'; 


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'], // Apunta al archivo SCSS que confirmamos
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
    IonNote,
    IonBackButton,
    IonButtons,
    CommonModule, 
    ReactiveFormsModule 
  ]
})
export class RegistroPage implements OnInit {
  
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router
  ) {
    // Definimos el formulario con validadores y le pasamos el custom validator al grupo
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], // Mínimo de 6 caracteres
      confirmPassword: ['', [Validators.required]],
    }, {
      // Aplicamos el validador personalizado al nivel del FormGroup
      validators: passwordMatchValidator
    });
  }

  ngOnInit() {
    // Si necesitas inicializar algo al cargar la página (por ahora, vacío)
  }

  // Helper para acceder fácil a los campos
  get f() {
    return this.registroForm.controls;
  }

  registrar() {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    // SIMULACIÓN: Registro exitoso
    console.log('Registro exitoso:', this.registroForm.value);
    
    // NAVEGAMOS A LOGIN (Simulamos que el registro fue exitoso)
    this.router.navigate(['/login']);
  }
}