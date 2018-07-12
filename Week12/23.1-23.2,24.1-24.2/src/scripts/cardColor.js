const findFirstType = str => {
	if (String(str).indexOf(",") !== -1) {
		return String(str).substr(0, String(str).indexOf(","));
	}
	return String(str);
};

export const cardColor = type => {
	if (findFirstType(type).includes(`พืช`)) {
		return `Card-Grass`;
	} else if (findFirstType(type).includes(`ไฟ`)) {
		return `Card-Fire`;
	} else if (findFirstType(type).includes(`น้ำ`)) {
		return `Card-Water`;
	} else if (findFirstType(type).includes(`แมลง`)) {
		return `Card-Bug`;
	} else if (findFirstType(type).includes(`ปกติ`)) {
		return `Card-Normal`;
	} else if (findFirstType(type).includes(`พิษ`)) {
		return `Card-Poison`;
	} else if (findFirstType(type).includes(`ไฟฟ้า`)) {
		return `Card-Electric`;
	} else if (findFirstType(type).includes(`ดิน`)) {
		return `Card-Ground`;
	} else if (findFirstType(type).includes(`นางฟ้า`)) {
		return `Card-Fairy`;
	} else if (findFirstType(type).includes(`ต่อสู้`)) {
		return `Card-Fighting`;
	} else if (findFirstType(type).includes(`พลังจิต`)) {
		return `Card-Psychic`;
	} else if (findFirstType(type).includes(`หิน`)) {
		return `Card-Rock`;
	}
};