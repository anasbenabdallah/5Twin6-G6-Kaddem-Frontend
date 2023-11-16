import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contrats: any[] = [];

  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    this.contractService.getContrats().subscribe(
      (data) => {
        this.contrats = data;
      },
      (error) => {
        console.error('Error fetching contracts', error);
      }
    );
  }
}
