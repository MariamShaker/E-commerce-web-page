import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blog: Blog[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    return this.blogService.getData().subscribe((res) => {
      this.blog = res;
      // console.log(this.blog)
    });
  }

  onDataChanged(event: any) {
    this.page = event;
    this.getAllData();
  }
  onDataSizeChanged(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllData();
  }
}
