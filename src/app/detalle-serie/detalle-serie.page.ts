import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonInput, 
  IonButton, 
  IonList, 
  IonItem, 
  IonSelect, 
  IonSelectOption, 
  IonTextarea,
  IonBackButton, 
  IonButtons,
  IonAlert, 
  IonToast,
  IonIcon,
  IonNote // <--- ¡AÑADIDO PARA SOLUCIONAR EL ERROR DE COMPILACIÓN!
} from '@ionic/angular/standalone';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SeriesService } from '../services/series.service';
import { Serie } from '../models/serie.model';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.page.html',
  styleUrls: ['./detalle-serie.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonInput,
    IonButton,
    IonList,
    IonItem,
    IonSelect, 
    IonSelectOption, 
    IonTextarea,
    IonBackButton, 
    IonButtons,
    IonAlert,
    IonToast,
    IonIcon,
    IonNote, // <--- ¡AÑADIDO AQUÍ TAMBIÉN!
    CommonModule, 
    ReactiveFormsModule
  ]
})
export class DetalleSeriePage implements OnInit {
  
  detalleForm: FormGroup;
  serieId: string | null = null;
  // Inicializamos a null para evitar errores de carga
  serie: Serie | null = null; 
  estados = ['Pendiente', 'Viendo', 'Terminada'];
  isAlertOpen = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private seriesService: SeriesService
  ) {
    addIcons({ trash });
    
    // Formulario de edición con las mismas validaciones de la creación
    this.detalleForm = this.fb.group({
      titulo: ['', [Validators.required]],
      sinopsis: ['', [Validators.required, Validators.maxLength(250)]],
      temporadas: ['', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]*$')]], 
      estado: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.loadSerieDetails();
  }

  loadSerieDetails() {
    this.serieId = this.activatedRoute.snapshot.paramMap.get('id');
    
    if (this.serieId) {
      const serieEncontrada = this.seriesService.getSerie(this.serieId);
      
      if (serieEncontrada) {
        this.serie = serieEncontrada;
        
        // Rellena el formulario con los datos de la serie
        this.detalleForm.patchValue({
            titulo: serieEncontrada.titulo,
            sinopsis: serieEncontrada.sinopsis,
            temporadas: serieEncontrada.temporadas,
            estado: serieEncontrada.estado
        });
        
      } else {
        // Si no se encuentra, redirige a la lista
        this.router.navigate(['/tabs/tab1']);
      }
    }
  }

  get f() {
    // Retorna los controles del formulario
    return this.detalleForm.controls;
  }

  // Función para guardar los cambios (UPDATE)
  actualizarSerie() {
    if (this.detalleForm.invalid || !this.serieId) {
      this.detalleForm.markAllAsTouched();
      return;
    }

    const updatedSerie: Serie = {
      id: this.serieId,
      ...this.detalleForm.value
    };

    this.seriesService.updateSerie(updatedSerie);
    this.router.navigate(['/tabs/tab1']);
  }
  
  // ----------------------------------------------------
  // DELETE (Eliminar y Confirmación)
  // ----------------------------------------------------
  
  // Abre el diálogo de confirmación
  openDeleteAlert() {
    this.isAlertOpen = true;
  }

  // Función que se ejecuta si se confirma el borrado
  confirmDelete(confirmed: boolean) {
    this.isAlertOpen = false;
    
    if (confirmed && this.serieId) {
      this.seriesService.deleteSerie(this.serieId);
      // Navega a la lista tras eliminar
      this.router.navigate(['/tabs/tab1']);
    }
  }
  
  // Configuración del ion-alert (para el requisito de confirmación)
  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        this.confirmDelete(false);
      },
    },
    {
      text: 'Eliminar',
      role: 'confirm',
      handler: () => {
        this.confirmDelete(true);
      },
    },
  ];
  
  public alertInputs = [];
}