import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validador personalizado que verifica si el valor de dos campos coincide.
 * @param controlName Nombre del campo de control de la contraseña.
 * @param matchingControlName Nombre del campo de control para repetir la contraseña.
 */
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  
  // Obtenemos los campos de contraseña y repetir contraseña del grupo de control
  const passwordControl = control.get('password');
  const confirmPasswordControl = control.get('confirmPassword');

  // Si no existen, o si son nulos, retornamos null
  if (!passwordControl || !confirmPasswordControl) {
    return null;
  }

  // Si el campo de confirmación ya tiene un error de 'required' u otro, 
  // no lo machacamos con el error de 'mismatch'
  if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
    return null;
  }

  // Comparamos los valores
  if (passwordControl.value !== confirmPasswordControl.value) {
    // Si no coinciden, establecemos el error 'passwordMismatch' en el campo de confirmación
    confirmPasswordControl.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true }; // Se devuelve el error al grupo, aunque lo mostraremos en el campo de confirmación
  } else {
    // Si coinciden o si inicialmente estaban erróneos, eliminamos el error
    confirmPasswordControl.setErrors(null);
    return null;
  }
};