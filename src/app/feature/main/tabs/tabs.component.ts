import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  
  isExpanded: boolean = false;

  togglePanel(event: Event): void {
  
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }
  handleHeaderClick(event: Event): void {

    event.stopPropagation();
    alert('hhhhh')
  }
  
  constructor(private serv:UsersService) { }

  ngOnInit() {
  }

}
