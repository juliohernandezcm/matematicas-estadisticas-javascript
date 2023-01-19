// Analisis personal para Juanita
const searchPersonById = (id) => {
	return salaries.find((person) => person.id === id);
};

const searchPersonByName = (personInSearch) => {
	return salaries.find((person) => person.name === personInSearch);
};

// Calcular mediana de salarios por persona
const medianByPerson = (personName) => {
	const works = searchPersonByName(personName).works;
	const salaries = works.map((element) => element.salario);
	return MathFunctions.calculateMedian(salaries);
};

// Proyección de sueldo
const salaryProjectionByPerson = (personName) => {
	const works = searchPersonByName(personName).works;

	let allGrowthPercentages = []; // Porcentajes de crecimiento

	for (let i = 1; i < works.length; i++) {
		const currentSalary = works[i].salario;
		const pastSalary = works[i - 1].salario;
		const growth = currentSalary - pastSalary;
		const growthPercentage = (growth / pastSalary) * 100;
		allGrowthPercentages.push(growthPercentage);
	}

	const medianGrowthPercentages =
		MathFunctions.calculateMedian(allGrowthPercentages);

	const lastSalary = works[works.length - 1].salario;
	const increases = (lastSalary * medianGrowthPercentages) / 100;
	const newSalary = lastSalary + increases;

	return `Segun tu sueldos y sus recpectivos aumentos tu proyección de salario seria de ${newSalary}`;
};

const companies = {};

for (person of salaries) {
	for (work of person.works) {
		if (!companies[work.company]) {
			companies[work.company] = {};
		}
		if (!companies[work.company][work.year]) {
			companies[work.company][work.year] = [];
		}
		companies[work.company][work.year].push(work.salario);
	}
}

const medianCompanyForYear = (companyName, year) => {
	if (!companies[companyName]) {
		console.warn('La empresa no existe');
	} else if (!companies[companyName][year]) {
		console.warn('La empresa no dio salarios ese año');
	} else {
		return MathFunctions.calculateMedian(companies[companyName][year]);
	}
};

const salaryProjectionByCompany = (companyName) => {
	if (!companies[companyName]) {
		console.warn('La empresa no existe');
	} else {
		const companyYears = Object.keys(companies[companyName]);
		const listMedianYears = companyYears.map((year) => {
			return medianCompanyForYear(companyName, year);
		});

		let allGrowthPercentages = [];

		for (let i = 1; i < listMedianYears.length; i++) {
			const currentSalary = listMedianYears[i];
			const pastSalary = listMedianYears[i - 1];
			const growth = currentSalary - pastSalary;
			const growthPercentage = (growth / pastSalary) * 100;
			allGrowthPercentages.push(growthPercentage);
		}

		const medianGrowthPercentages =
			MathFunctions.calculateMedian(allGrowthPercentages);

		const lastSalaryMedian = listMedianYears[listMedianYears.length - 1];
		const increases = (lastSalaryMedian * medianGrowthPercentages) / 100;
		const newMedian = lastSalaryMedian + increases;

		return `${newMedian}`;
	}
};

const generalMedian = () => {
	const mediansList = salaries.map((person) => medianByPerson(person.name));

	const median = MathFunctions.calculateMedian(mediansList);

	return median;
};

const medianTopTen = () => {
	const medianList = salaries.map((person) => medianByPerson(person.name));
	const medianListSorted = MathFunctions.sortList(medianList);

	const amount = medianList.length / 10;
	const limit = medianList.length - amount;

	const top10 = medianListSorted.slice(limit, medianListSorted.length);

	const medianTop10 = MathFunctions.calculateMedian(top10);
	return medianTop10;
};
