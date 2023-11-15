import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { StoreService } from 'src/app/shared/store/store.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  constructor(private storeService: StoreService) {}
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.storeService.setCanvas(this.canvas.nativeElement);
  }
}
