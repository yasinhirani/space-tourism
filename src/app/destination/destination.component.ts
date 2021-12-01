import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  data: any;
  destination: any;
  spaceDetails: any;

  constructor(private space: SpaceService) {
    this.getDestination('Moon');
   }

  ngOnInit(): void {
  }

  getDestination(space: String){
    this.space.getDestination().subscribe((res) => {
      this.data = res;
      this.destination = this.data.destinations;
      for (let i = 0; i < this.destination.length; i++) {
        if (this.destination[i].name === space) {
          this.spaceDetails = this.destination[i];
        }
        // console.log(this.destination[i].name);
      }
      // console.log(this.spaceDetails);
      // console.log(this.destination);
    })
  }

}
