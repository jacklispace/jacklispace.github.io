class DrawingSquare extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
      this.contextReal.fillStyle = "#6e737b";
      this.origX = coord[0];
      this.origY = coord[1];
    }
    onDragging(coord, event) {
      this.contextDraft.fillStyle = "#6e737b";
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      let squareLength;
      if ((coord[0] - this.origX) < (coord[1] - this.origY)) {
        squareLength = coord[1] - this.origY;
      } else {
        squareLength = coord[0] - this.origX;
      };
      this.contextDraft.fillRect(
        this.origX,
        this.origY,
        squareLength,
        squareLength
      );
    }
    onMouseMove() {}
    onMouseUp(coord) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      let squareLength;
      if ((coord[0] - this.origX) < (coord[1] - this.origY)) {
        squareLength = coord[1] - this.origY;
      } else {
        squareLength = coord[0] - this.origX;
      };
      this.contextReal.fillRect(
        this.origX,
        this.origY,
        squareLength,
        squareLength
      );
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }
  