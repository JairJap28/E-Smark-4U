import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query} from '@angular/animations';
import CaseEntity from './CaseEntity';
import { faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const ShakeAnimation = [
	style({ transform: 'rotate(0)' }),
	animate('0.1s', style({ transform: 'rotate(2deg)' })),
	animate('0.1s', style({ transform: 'rotate(-2deg)' })),
	animate('0.1s', style({ transform: 'rotate(2deg)' })),
	animate('0.1s', style({ transform: 'rotate(0)' })),
];
export const QueryShake = [
	trigger('queryShake', [
		transition('* => default', ShakeAnimation),
	]),
];

@Component({
  selector: 'app-success-cases',
  templateUrl: './success-cases.component.html',
  styleUrls: ['./success-cases.component.css'],
  animations: [
    trigger('BottomEnter', [
      state('enter', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(150%)' }),
        animate('1s 300ms ease-in')
      ])
    ])
  ]
})
export class SuccessCasesComponent implements OnInit {
  faCaretRight = faCaretRight;
  faTimes = faTimes;

  listCompanies: CaseEntity[] = [];
  public company: CaseEntity;

  constructor() {
    this.initData();
  }

  ngOnInit(): void {
  }

  showCompany(company: CaseEntity): void{
    this.company = company;
  }

  showNextCompany(){
    let index = this.listCompanies.findIndex(item => item.name == this.company.name) + 1;
    if(index >= this.listCompanies.length) index = 0;
    this.company = this.listCompanies[index];
  }

  showPreviosCompany(){
    let index = this.listCompanies.findIndex(item => item.name == this.company.name) - 1;
    if(index < 0) index = this.listCompanies.length - 1;
    this.company = this.listCompanies[index];
  }

  initData() {
    this.listCompanies.push({
      name: "Dulhan",
      description: "Somos una empresa colombiana ubicada en la ciudad de Bogotá, dedicada a la distribución y comercialización de productos de empaque y embalaje para satisfacer de forma especializada las necesidades de la industria en general. Para nosotros contar con los servicios de E-Smark 4U ha sido una gran experiencia puesto que hemos incrementado nuestras ventas y además tenemos muchos nuevos clientes, lo que nos acerca a nuestro objetivo de ser una empresa líder en la distribución y comercialización de materiales y maquinaria de empaque y embalaje de más alta calidad.",
      img: "../../../assets/cases/dulhan.png"
    });
    this.listCompanies.push({
      name: "Delisorpresas",
      description: "Nuestra experiencia con E-Smark 4U ha sido impresionante, nosotros somos una empresa dedicada a hacer regalos para todo tipo de ocasiones, desde cumpleaños hasta regalos empresariales, desde que iniciamos, manejamos nuestra empresa a través de las redes sociales, sin embargo, al conocer a E-Smark 4U, y empezar a utilizar su técnica de campañas inteligentes, nos dimos cuenta que aunque no estábamos haciendo las cosas mal ¡Ahora las podemos hacer mucho mejor! Nuestra empresa ahora es conocida por muchas más personas ¡Ahora no paramos de hacer envíos! En definitiva, E-Smark 4U nos ha permitido darle alegría a una cantidad impresionante de personas",
      img: "../../../assets/cases/delisorpresas.png"
    });
  }
}
