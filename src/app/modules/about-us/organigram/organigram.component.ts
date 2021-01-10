import { Component, OnInit } from '@angular/core';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-organigram',
  templateUrl: './organigram.component.html',
  styleUrls: ['./organigram.component.css']
})
export class OrganigramComponent implements OnInit {
  faTrophy = faTrophy;

  team: any = [];

  constructor() {
    this.initTeam();
  }

  ngOnInit(): void {
  }

  initTeam(){
    this.team.push({
      name: "Yaneth Villota",
      position:  "Product Owner",
      img: "../../../../assets/Team/yaneth.png"
    });
    this.team.push({
      name: "Sebastian Castro",
      position:  "Scrum Master",
      img: "../../../../assets/Team/castro.png"
    });
    this.team.push({
      name: "Jair Jimenez",
      position:  "Development Team",
      img: "../../../../assets/Team/jair.png"
    });
    this.team.push({
      name: "Farid Mayorga",
      position:  "Development Team",
      img: "../../../../assets/Team/farid.png"
    });
    this.team.push({
      name: "Harold Leon",
      position:  "Content Creator",
      img: "../../../../assets/Team/harold.png"
    });
    this.team.push({
      name: "Carlos Navarrete",
      position:  "Content Creator",
      img: "../../../../assets/Team/carlos.png"
    });
    this.team.push({
      name: "Diana Jordan",
      position:  "Lead Designer",
      img: "../../../../assets/Team/diana.png"
    });
    this.team.push({
      name: "Diego Achury",
      position:  "Data Analyst",
      img: "../../../../assets/Team/diego.png"
    });
    this.team.push({
      name: "Laura Osorio",
      position:  "Digital Strategy",
      img: "../../../../assets/Team/laura.png"
    });
    this.team.push({
      name: "Lorena Moreno",
      position:  "Digital Strategy",
      img: "../../../../assets/Team/lorena.png"
    });
  }

}
