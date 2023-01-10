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

const calculateTriangleHeigth = (sides, base) => {
	if (sides === base) {
		console.warn('Este no es triángulo isosceles');
	} else {
		return Math.sqrt(sides ** 2 - base ** 2 / 4);
	}
};

const calculateHeightScalenTriangle = (side1, side2, base) => {
	if (side1 == side2 || side1 == base || side2 == base) {
		console.warn('Este no es un triángulo Escaleno');
	} else {
		const semiperimeter = (side1 + side2 + base) / 2;
		return (
			(2 / side1) *
			Math.sqrt(
				semiperimeter *
					(semiperimeter - side1) *
					(semiperimeter - side2) *
					(semiperimeter - base)
			)
		);
	}
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

console.group('Circle');

const circleRadio = 3;
const circleDiameter = circleRadio * 2;

const circumference = circleDiameter * Math.PI.toFixed(3);
const circleArea = circleRadio ** 2 * Math.PI.toFixed(3);

console.log({
	circleRadio,
	circleDiameter,
	circumference,
	circleArea,
});

const calculateCircle = (radio) => {
	const diameter = radio * 2;
	const radiusSquared = Math.pow(radio, 2);
	return {
		circunferencia: diameter * Math.PI.toFixed(3),
		area: radiusSquared * Math.PI.toFixed(3),
	};
};

console.groupEnd('Circle');
