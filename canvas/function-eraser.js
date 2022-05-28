class FunctionEraser extends PaintFunction {
    constructor(contextReal) {
      super();
      this.contextReal = contextReal;
    }
    onMouseDown(coord, event) {
      this.contextReal.strokeStyle = "#e3c79f";
      this.contextReal.lineJoin = "round";
      this.contextReal.lineWidth = 3;
      this.contextReal.beginPath();
      this.contextReal.moveTo(coord[0], coord[1]);
      this.draw(coord[0], coord[1]);
    }
    onDragging(coord, event) {
      this.draw(coord[0], coord[1]);
    }
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
    draw(x, y) {
      this.contextReal.lineTo(x, y);
      this.contextReal.moveTo(x, y);
      this.contextReal.closePath();
      this.contextReal.stroke();
    }
  }

// const context = canvas.getContext('2d')
// context.globalCompositeOperation = 'destination-out'

// const erase = () => context.globalCompositeOperation = 'destination-out'

// const changeColor = color => {
//     context.strokeStyle = color
//     context.globalCompositeOperation = 'source-over' // new
//   }