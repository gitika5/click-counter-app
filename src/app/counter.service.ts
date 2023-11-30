import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',

})
export class CounterService {

  containerSubject = new Subject<string>()

  setColor(containerID: string) {
    this.containerSubject.next(containerID)
  }

}
