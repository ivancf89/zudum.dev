import { Component, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonSelect, 
  IonSelectOption, 
  IonTextarea,
  IonNote, // ¡Importante para los mensajes de error!
  IonToast // Para dar feedback (el requisito de retroalimentación)
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeriesService } from '../services/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    CommonModule, 
    ReactiveFormsModule,
    IonList, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonButton, 
    IonSelect, 
    IonSelectOption, 
    IonTextarea,
    IonNote, // <-- AÑADIDO: NECESARIO PARA MOSTRAR LOS ERRORES
    IonToast 
  ]
})
export class Tab2Page implements OnInit {

  agregarForm: FormGroup;
  estados = ['Pendiente', 'Viendo', 'Terminada']; 

  constructor(
    private fb: FormBuilder,
    private seriesService: SeriesService,
    private router: Router
  ) {
    this.agregarForm = this.fb.group({
      titulo: ['', [Validators.required]],
      sinopsis: ['', [Validators.required, Validators.maxLength(250)]],
      temporadas: ['', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]*$')]], 
      estado: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.agregarForm.reset({
        estado: ''
    }); 
    this.agregarForm.markAsUntouched();
  }

  get f() {
    return this.agregarForm.controls;
  }

  agregarSerie() {
    if (this.agregarForm.invalid) {
      this.agregarForm.markAllAsTouched();
      return;
    }

    this.seriesService.addSerie(this.agregarForm.value);

    // Navegamos a la Tab 1 (la lista)
    this.router.navigate(['/tabs/tab1']);
  }
}