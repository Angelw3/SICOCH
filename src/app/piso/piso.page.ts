import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // 👈 IMPORTANTE

@Component({
  selector: 'app-piso',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule], // 👈 Asegúrate de incluir RouterModule aquí
  templateUrl: './piso.page.html',
  styleUrls: ['./piso.page.scss'],
})
export class PisoPage {
  largo: number = 0;
  ancho: number = 0;
  resultado: any = null;

  calcular() {
    const area = this.largo * this.ancho;
    const cemento = area * 0.2; // por ejemplo
    const arena = area * 0.05;
    const grava = area * 0.1;

    this.resultado = { area, cemento, arena, grava };
  }

  formatNumber(num: number, decimales: number): string {
    return num?.toFixed(decimales).toString().replace('.', ',');
  }
}
