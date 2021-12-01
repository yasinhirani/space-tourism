import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle(e: any){
    if (e.target.checked) {
      document.querySelector('.fa')?.classList.remove('fa-bars');
      document.querySelector('.fa')?.classList.add('fa-times');
      // console.log('changed');
    }
    else{
      document.querySelector('.fa')?.classList.add('fa-bars');
      document.querySelector('.fa')?.classList.remove('fa-times');
    }
  }

}
