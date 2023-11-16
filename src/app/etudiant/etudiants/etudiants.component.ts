import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css'],
})
export class EtudiantsComponent implements OnInit {
  etudiants: any[] = [];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void {
    this.etudiantService.getEtudiants().subscribe((data) => {
      this.etudiants = data;
    });
  }

  removeEtudiant(id: number): void {
    this.etudiantService.removeEtudiant(id).subscribe(() => {
      this.getEtudiants(); // Refresh the list after deletion
    });
  }
}
