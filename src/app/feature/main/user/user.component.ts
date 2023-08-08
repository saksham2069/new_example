import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  matchpassword} from './password-match.validator';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router , private serv:UsersService) { 
    
  }
  panelOpenState = false;
  displayedColumns: string[] = ['client_name', 'gender', 'phone_number', 'email_address','marital_status','date','status','address_line_1','city','actions']; 
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.getdata()
  }
  getdata(){
    this.serv.get_clients().subscribe({
      next:(res:any)=>{      
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      },
      error:()=>{
        console.log("error");
      }
    })
  }

  foods:any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


 

  

  selectedValue: string='';
  showFiller:boolean= true;
  course: string[]=["Post-Graduate","Graduate","Undergraduate","10+2","Other"]
  username=localStorage.getItem('user');
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


 
}
