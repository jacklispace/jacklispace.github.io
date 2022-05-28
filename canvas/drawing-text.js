// // // https://www.google.com/search?q=canvas+javascript+add+text&rlz=1C1ONGR_zh-HKHK967HK967&oq=Canvas+javascript+add+&aqs=chrome.1.69i57j0i30j0i8i30l5j69i61.8148j0j7&sourceid=chrome&ie=UTF-8

// class DrawingText extends PaintFunction {
//     constructor(contextReal, contextDraft) {
//         super();
//         this.contextReal = contextReal;
//         this.contextDraft = contextDraft;
//     }
//     onMouseDown(coord, event) { 
//         this.contextReal.fillStyle = "cornflowerblue";
//         this.origX = coord[0];
//         this.origY = coord[1];
//         console.log("a") // X,Y

//         this.contextReal.textBaseline = 'top'; // determines the text baseline when drawing the element
//         this.contextReal.textAlign = 'left'; // determines the alignment for text content
//         this.contextReal.font = '24px serif';
//         this.contextReal.fillStyle = '#173561';
//         // this.addInput(this.origX, this.origY);
//         // saveState(canvasReal);
//       }
//    /*  onDragging() {}
//     onMouseMove() {}
//     onMouseUp() {}
//     onMouseLeave() {}
//     onMouseEnter() {}
//     addInput(x, y) {

//        this.input = document.createElement('input'); // creates new element called input/textbox
    
//         this.input.type = 'text'; // defines new element input as text 
//         // this.input.style.position = 'fixed'; // defines that new element wil be at fixed position
//         this.input.style.left = (x) + 'px'; //offsets position of x and adds px to determine position on the doc
//         this.input.style.top = (y) + 'px'; //offsets position of y and adds px to determine position on the doc
    
//         this.input.onkeydown = this.handleEnter; // defines that on keydown, the handle enter function will be called
    
//         document.body.appendChild(this.input);  // appends the child element (input) to the body of the document 
    
//         // this.input.focus(); // the input element will be the main focus of any keyboard and similar events
    
//     }
    
//     drawText(txt, x, y) { 
//         this.contextReal.textBaseline = 'top'; // determines the text baseline when drawing the element
//         this.contextReal.textAlign = 'left'; // determines the alignment for text content
//         this.contextReal.font = '24px serif';
//         this.contextReal.fillStyle = '#173561';
//         this.contextReal.fillText(txt, x, y); //determines where text will be placed, offsetting the position of x and y by -4 
//         }*/
// }

let canvas = document.getElementsByTagName("canvas");
let ctx = canvas.getcontext("2d");
let mouseX = 0;
let mouseY = 0;
let startingX = 0;

canvas.addEventListener("click",function(e){
console.log("a");
return false;
    // mouseX = e.pageX - canvas.offsetLeft;
    // mouseY = e.pageY - canvas.offsetTop;
},false);
