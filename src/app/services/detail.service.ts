import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { DetailsComponent } from '../reservations/details/details.component';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private componentRef!: ComponentRef<DetailsComponent>;
  private componentSubscriber!: Subject<string>;
  constructor(private resolver: ComponentFactoryResolver) { }

  openModal(entry: ViewContainerRef, modalTitle: string,  bookingId: any) {    
    let factory = this.resolver.resolveComponentFactory(DetailsComponent);
    this.componentRef = entry.createComponent(factory);
    this.componentRef.instance.title = modalTitle;    
    this.componentRef.instance.body = bookingId;    
    this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
    this.componentSubscriber = new Subject<string>();
    return this.componentSubscriber.asObservable();
  }

  closeModal() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }

  confirm() {
    this.componentSubscriber.next('confirm');
    this.closeModal();
  }
}