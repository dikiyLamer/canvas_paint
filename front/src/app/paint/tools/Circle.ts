import Tool from './Tool';

export default class Circle extends Tool {
  mouseDown?: boolean;
  startX: number = 0;
  startY: number = 0;
  saved!: string;
  constructor(canvas: HTMLCanvasElement, store: StoreService) {
    super(canvas, store);
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
    this.startX = e.pageX - e.target.offsetLeft;
    this.startY = e.pageY - e.target.offsetTop;
    this.saved = this.canvas.toDataURL();
  }
  mouseMoveHandler(e: any) {
    if (this.mouseDown) {
      let currentX = e.pageX - e.target.offsetLeft;
      let currentY = e.pageY - e.target.offsetTop;
      let width = currentX - this.startX;
      let height = currentY - this.startY;
      let radius = Math.sqrt(width ** 2 + height ** 2);
      this.draw(this.startX, this.startY, radius);
    }
  }
  draw(x: number, y: number, radius: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.canvas.width = this.canvas.width;
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.arc(x, y, radius, 0, 2 * Math.PI, false);
      this.ctx?.fill();
      this.ctx?.stroke();
    };
  }
}
