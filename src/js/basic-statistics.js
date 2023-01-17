const MathFunctions = {};

// With for loop
MathFunctions.calculateAverage = (list) => {
	let sum = 0;
	for (let i = 0; i < list.length; i++) {
		const element = list[i];
		sum += element;
	}
	return sum / list.length;
};

// With array method reduce()
MathFunctions.calculateAverageTwo = (list) => {
	return list.reduce((sum, element) => sum + element) / list.length;
};

// Par
MathFunctions.listIsEven = (list) => {
	return !(list.length % 2);
};

// impar
MathFunctions.listIsOdd = (list) => {
	return list.length % 2;
};

// Ordena array
MathFunctions.sortList = (unorderedList) => {
	return (unorderedList = list.sort((a, b) => a - b));
};

//calcula moda
MathFunctions.calculateMode = (list) => {
	const countElementsInList = {};

	list.map((item) => {
		countElementsInList[item]
			? (countElementsInList[item] += 1)
			: (countElementsInList[item] = 1);
	});

	// Transforma el objeto countElementsInList a un array
	const listArray = Object.entries(countElementsInList);
	// Ordena lista bidimencional
	const sortList = listArray.sort((a, b) => a[1] - b[1]);
	// seleccion la propiedad que mas se repite
	const listMayorValue = sortList[sortList.length - 1];
	return `La moda es: ${listMayorValue[0]}`;
};

// Calcula media
MathFunctions.calculateMedian = (list) => {
	const isOdd = listIsOdd(list);

	let middleIndex;
	let median;

	if (isOdd) {
		list.sort((a, b) => a - b);
		middleIndex = Math.round(list.length / 2);
		return (median = list[middleIndex - 1]);
	} else {
		list.sort((a, b) => a - b);
		middleIndex = Math.round(list.length / 2);
		return (median = (list[middleIndex] + list[middleIndex - 1]) / 2);
	}
};
