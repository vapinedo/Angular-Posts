import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PostService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  dataSource: any;
  displayedColumns: string[] = ['id', 'title', 'body', 'idEditar'];
  @ViewChild(MatPaginator) paginator: any;
  spinner = true;

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.listarTodos().subscribe((posts: any) => {
      // duplicar el id del post para usar 2 veces en mat-table
     for ( let i=0; i<posts.length; i++ ) {
       posts[i].idEditar = posts[i].id;
     }

      this.dataSource = new MatTableDataSource(posts);
      this.spinner = false;
      this.dataSource.paginator = this.paginator;
    });
 }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}