import { Component, OnInit } from '@angular/core';
import { UniversiteService } from '../universite.service';
import { Universite } from 'src/app/models/universite.model';

@Component({
  selector: 'app-all-universite',
  templateUrl: './all-universite.component.html',
  styleUrls: ['./all-universite.component.css'],
})
export class AllUniversiteComponent implements OnInit {
  universites: Universite[] = [];

  constructor(private universiteService: UniversiteService) {}

  ngOnInit(): void {
    this.getUniversites();
  }

  getUniversites(): void {
    this.universiteService
      .retrieveAllUniversites()
      .subscribe((universites) => (this.universites = universites));
  }
}
