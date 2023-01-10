console.group('Cuadrado');
const squareSide = 5;
const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;

console.log({
	squareSide,
	squarePerimeter,
	squareArea,
});

const calculateSquare = (side) => {
	return {
		perimetro: side * 4,
		area: side * side,
	};
};

console.groupEnd('Cuadrado');

console.group('Triangulo');
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleSideBase = 4;
const triangleHeight = 5.5;

const perimeterTriangle = triangleSide1 + triangleSide2 + triangleSideBase;
const areaTriangle = (triangleSideBase * triangleHeight) / 2;

const calculateTriangle = (side1, side2, base, height) => {
	return {
		perimetro: side1 + side2 + base,
		area: (base * height) / 2,
	};
};

console.log({
	triangleSide1,
	triangleSide2,
	triangleSideBase,
	triangleHeight,
	perimeterTriangle,
	areaTriangle,
});

console.groupEnd('Triangulo');
