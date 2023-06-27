import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,],
})
export class HomePage {
  resultado: number = 0;
      exibir(numero: number) {
      let res = document.getElementById('resultado')!.innerHTML; 
      document.getElementById('resultado')!.innerHTML += numero;
       this.resultado = numero * 1; 
      } 
      exibirOP(op: string){
         let res = document.getElementById('resultado')!.innerHTML; 
         document.getElementById('resultado')!.innerHTML += op;
         } 
         clear(){ document.getElementById('resultado')!.innerHTML = ""; 
        }
        back() {
          const element = document.getElementById('resultado');
          if (element) {
            const res = element.textContent!;
            element.textContent = res.slice(0, -1);
          }
        }
        
        calcular() {
          let res = document.getElementById('resultado')!.innerHTML;
          if (res) {
            document.getElementById('resultado')!.innerHTML = eval(res);
          }
        }
      
}

