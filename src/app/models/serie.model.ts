// src/app/models/serie.model.ts

/**
 * Interfaz que define la estructura de una Serie en Zudum
 */
export interface Serie {
  // Identificador único (usaremos la fecha en Angular)
  id: string; 
  // Rúbrica: Campo de texto (título de la serie)
  titulo: string;
  // Rúbrica: Otro campo de texto (descripción/sinopsis)
  sinopsis: string;
  // Rúbrica: Campo numérico (Temporadas)
  temporadas: number; 
  // Rúbrica: Campo para estado (Pendiente, Viendo, Terminada)
  estado: 'Pendiente' | 'Viendo' | 'Terminada'; 
}