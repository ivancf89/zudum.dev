// src/app/services/series.service.ts

import { Injectable } from '@angular/core';
import { Serie } from '../models/serie.model';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la aplicación (Singleton)
})
export class SeriesService {

  // Lista de series en memoria (simulando una base de datos)
  private series: Serie[] = [
    {
      id: '2025-01-01T10:00:00Z',
      titulo: 'The Mandalorian',
      sinopsis: 'Un cazarrecompensas solitario viaja a través de la galaxia.',
      temporadas: 3,
      estado: 'Viendo'
    },
    {
      id: '2025-01-02T11:00:00Z',
      titulo: 'Arcane: League of Legends',
      sinopsis: 'La historia de dos hermanas separadas por el conflicto entre Piltover y Zaun.',
      temporadas: 1,
      estado: 'Terminada'
    },
    {
      id: '2025-01-03T12:00:00Z',
      titulo: 'Cyberpunk: Edgerunners',
      sinopsis: 'Un chico de la calle intenta sobrevivir en Night City.',
      temporadas: 1,
      estado: 'Pendiente'
    }
  ];

  constructor() { }

  // ----------------------------------------------------
  // READ (Listar Series)
  // ----------------------------------------------------
  getSeries(): Serie[] {
    // Retorna una copia de la lista
    return [...this.series]; 
  }

  getSerie(id: string): Serie | undefined {
    return this.series.find(s => s.id === id);
  }

  // ----------------------------------------------------
  // CREATE (Agregar Serie)
  // ----------------------------------------------------
  addSerie(newSerie: Omit<Serie, 'id'>) {
    // Genera un ID único basado en la fecha
    const serieConId: Serie = {
      ...newSerie,
      id: new Date().toISOString() 
    };
    this.series.push(serieConId);
  }

  // ----------------------------------------------------
  // UPDATE (Actualizar Serie)
  // ----------------------------------------------------
  updateSerie(updatedSerie: Serie) {
    const index = this.series.findIndex(s => s.id === updatedSerie.id);
    if (index > -1) {
      this.series[index] = updatedSerie;
    }
  }

  // ----------------------------------------------------
  // DELETE (Eliminar Serie)
  // ----------------------------------------------------
  deleteSerie(id: string) {
    this.series = this.series.filter(s => s.id !== id);
  }
}