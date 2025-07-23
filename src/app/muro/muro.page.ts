import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muro',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './muro.page.html',
  styleUrls: ['./muro.page.scss'],
})
export class MuroPage {
  largo: number = 0;
  alto: number = 0;

  constructor(private router: Router) {}

  resultado?: {
    area: number;
    blocks: number;
    bultosPegado: number;
    bultosRepello: number;
  };

  calcular() {
    if (this.largo > 0 && this.alto > 0) {
      const area = this.largo * this.alto;
      const blocks = area * 12.5;
      const bultosPegado = blocks / 35;
      const bultosRepello = area * 0.16;

      this.resultado = {
        area,
        blocks,
        bultosPegado,
        bultosRepello,
      };
    } else {
      this.resultado = undefined;
    }
  }

  formatNumber(value: number | undefined, digits: number): string {
    return value !== undefined ? value.toFixed(digits) : '';
  }

  regresar() {
    this.router.navigate(['/especialidades']);  // Ajusta esta ruta al menú de especialidades si es diferente
  }
}
