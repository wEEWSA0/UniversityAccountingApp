import { Component, OnInit } from '@angular/core';
import { Building } from '../../models/Building';
import { BuildingServiceService } from '../../services/building-service.service';

@Component({
  selector: 'app-buildings-list',
  standalone: true,
  imports: [],
  templateUrl: './buildings-list.component.html',
  styleUrl: './buildings-list.component.css'
})
export class BuildingsListComponent implements OnInit {
  buildings?: Building[];
  currentBuilding: Building = {
    name: '',
    addres: '',
    id: BigInt(0),
    floors: 0
  };
  currentIndex = -1;
  name = '';

  constructor(private buildingService: BuildingServiceService) { }

  ngOnInit(): void {
    this.reciveBuildings();
  }

  reciveBuildings(): void {
    this.buildingService.getAll()
      .subscribe({
        next: (data) => {
          this.buildings = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.reciveBuildings();
    this.currentBuilding = {
      name: '',
      addres: '',
      id: BigInt(0),
      floors: 0
    };
    this.currentIndex = -1;
  }

  setActiveBuilding(building: Building, index: number): void {
    this.currentBuilding = building;
    this.currentIndex = index;
  }

  searchBuilding(): void {
    this.currentBuilding = {
      name: '',
      addres: '',
      id: BigInt(0),
      floors: 0
    };
    this.currentIndex = -1;

    this.buildingService.findByTitle(this.name)
      .subscribe({
        next: (data) => {
          this.buildings = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
