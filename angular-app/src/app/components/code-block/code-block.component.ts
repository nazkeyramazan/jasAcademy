import {Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements  OnInit  {
  data: any[] = []
  length: number = 62
  limit: number = 20
  offset: number = 0
  currentPage: number = 0
  constructor() { }

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData(){
    fetch(`https://www.breakingbadapi.com/api/characters?limit=${this.limit}&offset=${this.offset}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.data = data
      });
  }
  paginate(e:any){
    this.currentPage = e.pageIndex
    if(e.pageIndex > e.previousPageIndex){
      this.offset = this.offset + 20
      this.fetchData()
    } else {
      this.offset = this.offset - 20
      this.fetchData()
    }
  }
}
