import { Component, OnInit } from '@angular/core';
import { Building } from '../../models/Building';
import { BuildingServiceService } from '../../services/building-service.service';

@Component({
  selector: 'app-add-building',
  standalone: true,
  imports: [],
  templateUrl: './add-building.component.html',
  styleUrl: './add-building.component.css'
})
export class AddBuildingComponent implements OnInit {
  building: Building = {
    name: '',
    addres: '',
    id: BigInt(0),
    floors: 0
  };
  submitted = false;

  constructor(private buildingService: BuildingServiceService) { }

  ngOnInit(): void {
  }

  saveBuilding(): void {
    const data = {
      name: this.building.name,
      addres: this.building.addres,
      floors: this.building.floors
    };

    this.buildingService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newBuilding(): void {
    this.submitted = false;
    this.building = {
      name: '',
      addres: '',
      id: BigInt(0),
      floors: 0
    };
  }
}
