import { Component, Input, OnInit , ElementRef, OnDestroy} from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],

})
export class ModalComponent implements OnInit ,OnDestroy {

  @Input() modalID = ''

  constructor(
    public _modal:ModalService,
    private el:ElementRef
  ) {}

  ngOnDestroy(): void {
  document.body.removeChild(this.el.nativeElement)
  }

  ngOnInit(): void {
document.body.appendChild(this.el.nativeElement)
  }


}
