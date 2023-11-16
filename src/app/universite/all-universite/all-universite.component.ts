import { Component, OnInit, ViewChild } from '@angular/core';
import { UniversiteService } from '../universite.service';
import { Universite } from 'src/app/models/universite.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx'; // For exporting to Excel


@Component({
  selector: 'app-all-universite',
  templateUrl: './all-universite.component.html',
  styleUrls: ['./all-universite.component.css'],
})
export class AllUniversiteComponent implements OnInit {
  universites: Universite[] = [];
  dataSource: MatTableDataSource<Universite>;
  displayedColumns: string[] = ['idUniversite', 'nomUniv', 'descUniv','delete'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private universiteService: UniversiteService) {
    this.dataSource = new MatTableDataSource<Universite>([]);
  }

  ngOnInit(): void {
    this.getUniversites();
  }

  getUniversites(): void {
    this.universiteService.retrieveAllUniversites().subscribe(
      (universites) => {
        this.universites = universites;
        this.dataSource.data = universites;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error retrieving universites:', error);
      }
    );
  }

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.universites);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Universites');
    XLSX.writeFile(wb, 'universites.xlsx');
  }


  deleteUniversite(universiteId: number): void {
    // Assuming you have a service method to delete the university by ID
    this.universiteService.deleteUniversite(universiteId).subscribe(
      () => {
        // If the deletion is successful, refresh the data
        this.getUniversites();
      },
      (error) => {
        console.error('Error deleting universite:', error);
      }
    );
  }
  
  
  
}
