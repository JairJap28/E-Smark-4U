import { Component, OnInit } from '@angular/core';
import { FaqEntity } from './FaqEntity';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  listQuestions: FaqEntity[];
  tmpList: FaqEntity[];
  search: string = '';

  constructor() {
    this.initQuestions();
    this.onKey({target: { value: '' }});
  }

  ngOnInit(): void {
  }

  initQuestions(): void {
    this.tmpList = [
      {
        id: "Q1",
        question: "¿CÓMO PERSONALIZAN SUS SERVICIOS PARA EMPRESAS QUE OPERAN EN NICHOS DE MERCADO?",
        answer: "Es prioridad para nosotros comprender cual es la mejor estrategia para tú empresa según el medio en el que se mueva y los clientes para los que va dirigido tú producto o servicio, es por ello que, para iniciar, realizamos un rápido pero profundo análisis sobre tú empresa para de esta forma planificar la mejor estrategia para incrementar tus clientes y con ello tus ventas."
      },
      {
        id: "Q2",
        question: "¿CÓMO SÉ QUE E-SMARK 4U ES LA AGENCIA CONSULTORA INDICADA PARA MÍ?",
        answer: "En E-Smark 4U nos preocupamos por aquellas PYMES que están pasando por tiempos dificiles por los cambios que ha tenido el mundo y el mercado en los últimos tiempos, es por ello que enfocamos nuestros servicios a pequeñas empresas teniendo en cuenta sus actuales recursos, de esta forma, optimizamos nuestros servicios para hacerlos lo más económicos posibles"
      },
      {
        id: "Q3",
        question: "MI EMPRESA ESTÁ PASANDO POR DIFICULTADES EN EL MERCADO. ¿PUEDEN AYUDARNOS A SEGUIR SIENDO IMPORTANTES?",
        answer: "¡Claro que sí! E-Smark 4U nació precisamente con el objetivo de ayudar a las empresas a continuar en el mercado aún en los cambios que han sufrido los diferentes mercados en los últimos tiempos."
      }
    ];
  }

  onKey(event: any) { // without type info
    this.search = event.target.value;

    if(this.search){
      this.listQuestions = this.tmpList.filter(
          item => item.question.toLowerCase().includes(this.search.toLowerCase())
          || item.answer.toLowerCase().includes(this.search.toLowerCase())
        );
    } else {
      this.listQuestions = this.tmpList;
    }
  }
}
