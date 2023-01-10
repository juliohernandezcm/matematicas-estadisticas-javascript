const inputPrice = document.querySelector('#discount_form-price');
const inputPercentage = document.querySelector('#discount_form-percentage');
const btnCalcular = document.querySelector('#discount_form-btn');
const divAlert = document.querySelector('#total_price');
const divDanger = document.querySelector('#total_error');
const priceCoupon = document.querySelector('#coupons_form-price');
const coupon = document.querySelector('#coupon');
const couponBtn = document.querySelector('#coupon_form-btn');
const divAlertCoupon = document.querySelector('#total_price-coupon');
const divDangerCoupon = document.querySelector('#total_error-coupon');

console.log(coupon);

btnCalcular.addEventListener('click', () => {
	getInputValues();
});

const getInputValues = () => {
	const price = Number(inputPrice.value);
	const percentage = Number(inputPercentage.value);

	if (!price || !percentage) {
		divAlert.classList.add('inactive');
		divDanger.classList.remove('inactive');
		divDanger.textContent = 'Please fill all required fields';
	} else if (percentage >= 100) {
		divDanger.classList.remove('inactive');
		divDanger.textContent = `El descuento no puede ser mayor al precio`;
	} else {
		const total = (price * (100 - percentage)) / 100;
		divDanger.classList.add('inactive');
		divAlert.classList.remove('inactive');
		divAlert.textContent = `El precio con descuento es: $${total}`;
	}
};

const couponList = [
	{ name: 'discount20', discount: 20 },
	{ name: 'discount30', discount: 30 },
	{ name: 'discount40', discount: 40 },
	{ name: 'discount50', discount: 50 },
];

function calculateDiscountWithCoupon() {
	const price = Number(priceCoupon.value);
	const couponValue = coupon.value;

	if (!price || !couponValue) {
		divAlertCoupon.classList.add('inactive');
		divDangerCoupon.classList.remove('inactive');
		divDangerCoupon.textContent = `Debe llenar ambos valores`;
		return;
	}

	let discount;

	let couponInArray = couponList.find((couponElement) => {
		return couponElement.name === couponValue;
	});

	if (couponInArray) {
		discount = couponInArray.discount;
		const priceWithCouponDiscount = (price * (100 - discount)) / 100;
		divDangerCoupon.classList.add('inactive');
		divAlertCoupon.classList.remove('inactive');
		divAlertCoupon.textContent = `El precio con descuento es: $${priceWithCouponDiscount}`;
	} else {
		divAlertCoupon.classList.add('inactive');
		divDangerCoupon.classList.remove('inactive');
		divDangerCoupon.textContent = `El cupón no es valido`;
	}
}

couponBtn.addEventListener('click', calculateDiscountWithCoupon);
