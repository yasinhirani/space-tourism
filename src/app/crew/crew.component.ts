import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  crew: any;
  crewDetails: any;

  constructor(private space: SpaceService) { 
    this.getCrew(0);
  }

  ngOnInit(): void {
  }

  getCrew(crewNumber: number){
    this.space.getDestination().subscribe((res) => {
      this.crew = res;
      this.crewDetails = this.crew.crew[crewNumber];
      // for (let i = 0; i < this.crewDetails.length; i++) {
      //   console.log(this.crewDetails[i]);
      // }
      // console.log(this.crewDetails);
    })
  }

}
