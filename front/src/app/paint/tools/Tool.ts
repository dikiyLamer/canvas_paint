import { StoreService } from 'src/app/shared/store/store.service';

export default class Tool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  settings$: any;

  constructor(canvas: HTMLCanvasElement, store: StoreService) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.destroyEvents();
    this.settings$ = store.getSettings().subscribe((settings) => {
      this.ctx!.lineWidth = settings.lineWidth;
    });
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
    this.settings$.unsubscribe();
  }
}
