import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';


@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss'],
})
export class BookcontainerComponent implements OnInit {

  @Input() booksData: any[] = [];

  bookList: any;
  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.allBookState.subscribe((res) => {this.booksData = res;console.log(res)} );
  }

  handleClick(data: any) {
    console.log(data.bookId);
    this.router.navigate([`/dashboard/bookdetails`, data.bookId]);
  }
}