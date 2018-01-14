// Validations

function validateWord(word, searchType) {

	if (searchType === 's') {
		return validateSingleWord(word);
	} else if (searchType === 'm') {
		return validateMultiWord(word);
	}
	return "";
}

function validateSingleWord(word) {

	if (typeof word === CONST_UNDEFINED || word === null) {
		return "Реч није унета.";
	} else if (word.trim() == '') {
		return "Нема шта да се тражи - реч није унета.";
	} else if (word.trim().match(/^[0-9абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШIVXLCDM\.]+[\-]?[0-9абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШIVXLCDM\.]*$/) === null) {
		return "Дозвољени знаци су слова српске ћирилице, „.“, „-“, бројеви и латинска слова I, V, X, L, C, D и M.";
	}
	return "";
}

function validateMultiWord(word) {
	if (typeof word === CONST_UNDEFINED || word === null) {
		return "Речи нису унете.";
	} else if (word.trim() == '') {
		return "Нема шта да се тражи - речи нису унете.";
	} else if (word.trim().match(/^[0-9абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ]+( [0-9абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ]+)+$/) === null) {
		return "Дозвољени знаци су слова српске ћирилице и бројеви.";
	}
	return "";
}
