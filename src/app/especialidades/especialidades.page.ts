import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // Importante para routerLink

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.page.html',
  styleUrls: ['./especialidades.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule // Necesario para que routerLink funcione
  ]
})
export class EspecialidadesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

