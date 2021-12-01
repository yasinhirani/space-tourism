import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technology: any;
  technologyDetails: any;
  image: any;
  orientation: any;

  constructor(private space: SpaceService) {
    this.getTechnology(0);
    document.addEventListener('resize', () =>{
      if (window.screen.width > 700) {
        this.orientation = 'portrait';
      }
      else{
        this.orientation = 'landscape';
      }
    })
   }

  ngOnInit(): void {
  }

  getTechnology(techNumber: number){
    this.space.getDestination().subscribe((res) => {
      this.technology = res;
      this.technologyDetails = this.technology.technology[techNumber];
      // console.log(this.technology.technology[techNumber].images[this.orientation]);
      // this.image = this.technology.technology[techNumber].images[this.orientation];
      console.log(this.technologyDetails);
    })
  }

}
