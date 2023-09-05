import { Component } from '@angular/core';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.css'],
})
export class WebWorkerComponent {
  result:any;
  inputNumber:number=0;

  loadHeavyComp() {
    if (typeof Worker !== 'undefined') {

      const worker = new Worker(new URL('web-worker.worker', import.meta.url));

      worker.postMessage(10);

      worker.onmessage = ({data}) =>{
        this.result = data.prime;
      }

    }
  }
}
