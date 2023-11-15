import { Component } from '@angular/core';
import { StoreService } from 'src/app/shared/store/store.service';
import Brush from '../../tools/Brush';
import Rect from '../../tools/Rect';
import Circle from '../../tools/Circle';
import Line from '../../tools/Line';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private storeService: StoreService) {}

  async onPickBrush() {
    this.storeService.getCanvas().subscribe((data) => {
      new Brush(data);
    });
  }

  async onPickRect() {
    this.storeService.getCanvas().subscribe((data) => {
      new Rect(data);
    });
  }

  async onPickCircle() {
    this.storeService.getCanvas().subscribe((data) => {
      new Circle(data);
    });
  }
  async onPickLine() {
    this.storeService.getCanvas().subscribe((data) => {
      new Line(data);
    });
  }
}
