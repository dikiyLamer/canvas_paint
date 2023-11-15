import { StoreService } from 'src/app/shared/store/store.service';
import Tool from './Tool';

export default class Brush extends Tool {
  mouseDown?: boolean;
  constructor(canvas: HTMLCanvasElement, store: StoreService) {
    super(canvas, store);
    console.log(canvas);

    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler(e: any) {
    this.mouseDown = false;
  }
  mouseDownHandler(e: any) {
    console.log(e);

    this.mouseDown = true;
    this.ctx?.beginPath();
    this.ctx?.moveTo(
      e.pageX - e.target.offsetLeft,
      e.pageY - e.target.offsetTop
    );
  }
  mouseMoveHandler(e: any) {
    console.log(12);

    if (this.mouseDown) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
  }
  draw(x: number, y: number) {
    this.ctx?.lineTo(x, y);
    this.ctx?.stroke();
    console.log('draw brush');
  }
}
