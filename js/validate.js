// Validations

function validateWord(word) {

	if (typeof word === CONST_UNDEFINED || word === null) {
		return "Реч није унета.";
	} else if (word.trim() == '') {
		return "Нема шта да се тражи - реч није унета.";
	} else if (word.trim().match(/^[0-9абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШIVXLCDM\.]+[ \-]?[0-9абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШIVXLCDM\.]*$/) === null) {
		return "Дозвољени знаци су слова српске ћирилице, „.“, „-“, бројеви и латинска слова I, V, X, L, C, D и M.";
	}
	return "";
}
