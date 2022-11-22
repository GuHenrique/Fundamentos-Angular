import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João"
  dataNacimento = "1997-10-16"
  urlImagem = "/assets/joao.jpg"

  mostrarDataNascimento() {
    alert(`A data de nascimento do João é: ${this.dataNacimento}`)
  }
}
