var pic = document.getElementById("vimage");
var b = document.getElementById("button");

var first = true;
var prevX, prevY = 0;

var dots = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    prevX = x;
    prevY = y;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    if (!first) {
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1", prevX);
	l.setAttribute("y1", prevY);
	l.setAttribute("x2", x);
	l.setAttribute("y2", y);
	l.setAttribute("stroke", "black");
	pic.appendChild(l);
    };
    first = false;
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
};

var clear = function() {
    while (pic.lastChild)
	pic.removeChild(pic.lastChild);
};

pic.addEventListener("click", dots);
b.addEventListener("click", clear);


