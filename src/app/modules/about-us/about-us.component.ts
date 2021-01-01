import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, state, style, animate, query, stagger } from '@angular/animations';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ transform: 'translateX(-100%)', opacity: 0 }),
      stagger('500ms', animate('1000ms ease-in', style({ transform: 'translateX(0%)', opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);

const imageAnimation = trigger('imageAnimation', [
  state('start', style({ transform: 'translateX(0%)' })),
  transition(':enter', [
    style({ transform: 'translateX(100%)'}),
    animate('1s 300ms ease-in')
  ])
]);

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [imageAnimation, listAnimation]
})
export class AboutUsComponent implements OnInit {

  faPaperPlane = faPaperPlane;
  aboutUsParagraphs: string[] = [];

  constructor() { this.initParagraphs(); }

  ngOnInit(): void {
  }

  initParagraphs():void {
    this.aboutUsParagraphs.push("En E-Smark 4U, entendemos que el cambio no siempre es sencillo, es por ello que, desde el año 2020 hemos ayudado a PYMES a responder a los cambios de la industria para que puedan seguir siendo competitivas. Nuestros altos niveles de conocimientos en marketing nos han enseñado a siempre hacer del éxito de su empresa nuestra prioridad.");
    this.aboutUsParagraphs.push("Nuestro principal objetivo es ayudar a las PYMES en Colombia a incrementar sus ventas y a que sean reconocidas en todo el país, esto lo logramos utilizando las últimas tecnologías relacionadas con las Campañas inteligentes de Google, estas campañas se apoyan de machine learning para optimizar los anuncios concentrándose en aparecer en los resultados de búsqueda, y están hechas especialmente para pequeñas empresas.");
    this.aboutUsParagraphs.push("Nuestro equipo de expertos está preparado para ayudarle a desarrollar estrategias no sólo para sobrevivir sino para prosperar en el futuro. Llámenos hoy mismo para concertar una primera consulta.");
  }

}
