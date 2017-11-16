// Creates generic drop-down box
function makeDropDownBox(optArray, selElem, cssClasses, cssId) {
	var sel = document.createElement("select");
	if (typeof cssId !== CONST_UNDEFINED) {
		sel.id = cssId;
	}
	if (typeof cssClasses !== CONST_UNDEFINED) {
		sel.className = cssClasses;
	}
	if (typeof optArray !== CONST_UNDEFINED) {
		for (var i = 0; i < optArray.length; i+=2) {
		    var option = document.createElement("option");
		    option.value = optArray[i];
		    if (typeof selElem !== CONST_UNDEFINED && option.value === selElem) {
		    	option.setAttribute('selected', 'selected');
		    	//console.log("Selected option " + selElem + " for option.value=" + option.value + " and text=" + optArray[i+1]);
		    }
		    option.text = optArray[i+1];
		    sel.appendChild(option);
		}
	}
	return sel;
}

function getGenericDropDownBox(array, cssClasses, selElem, selId) {
	const cssClassName = "clsDropDownBox ";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = makeDropDownBox(array, selElem, cssClassName + cssClasses, selId);
	} else {
		var sel = makeDropDownBox(array, selElem, cssClassName + cssClasses);
	}
	return sel;
}

// Врста речи
function getWordTypeDropDownBox(selElem, selId) {
	const array = [
		CONST_WORD_TYPE_NOUN,         "Именица",
		CONST_WORD_TYPE_PRONOUN,      "Заменица",
		CONST_WORD_TYPE_ADJECTIVE,    "Придев",
		CONST_WORD_TYPE_NUMERAL,      "Број",
		CONST_WORD_TYPE_VERB,         "Глагол",
		CONST_WORD_TYPE_ADVERB,       "Прилог",
		CONST_WORD_TYPE_PREPOSITION,  "Предлог",
		CONST_WORD_TYPE_CONJUNCTION,  "Везник",
		CONST_WORD_TYPE_INTERJECTION, "Узвик",
		CONST_WORD_TYPE_PARTICLE,     "Речца",
		CONST_WORD_TYPE_ABBREVIATION, "Скраћеница",
		CONST_WORD_TYPE_PUNCTUATION,  "Остало"];
	const cssClassName = "clsWordTypeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idWordType-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}


// Род
function getGenderDropDownBox(selElem, selId) {
	const array = [
		"-", "",
		CONST_GENDER_MASCULINE, "мушки",
		CONST_GENDER_FEMININE, "женски",
		CONST_GENDER_NEUTRAL, "средњи"];
	const cssClassName = "clsGenderDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idGender-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Број
function getNumberDropDownBox(selElem, selId) {
	const array = [
		"-", "",
		CONST_NUMBER_SINGULAR, "једнина",
		CONST_NUMBER_PLURAL, "множина"];
	const cssClassName = "clsNumberDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idNumber-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Падеж
function getCaseDropDownBox(selElem, selId) {
	const array = [
		"-", "",
		CONST_CASE_NOMINATIVE, "номинатив",
		CONST_CASE_GENITIVE, "генитив",
		CONST_CASE_DATIVE, "датив",
		CONST_CASE_ACCUSATIVE, "акузатив",
		CONST_CASE_VOCATIVE, "вокатив",
		CONST_CASE_INSTRUMENTAL, "инструментал",
		CONST_CASE_LOCATIVE, "локатив"];
	const cssClassName = "clsCaseDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idCase-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Биће / предмет
function getAnimateDropDownBox(selElem, selId) {
	const array = ["-", "", "n", "предмет", "y", "живо биће"];
	const cssClassName = "clsAnimateDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idAnimate-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Врста именице
function getNounTypeDropDownBox(selElem, selId) {
	const array = ["-", "",
		CONST_NOUN_TYPE_COMMON, "заједничка",
		CONST_NOUN_TYPE_PROPER, "властита",
		CONST_NOUN_TYPE_MASS, "градивна",
		CONST_NOUN_TYPE_COLLECTIVE, "збирна"];
	const cssClassName = "clsNounTypeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idNounType-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Врста глагола
function getVerbTypeDropDownBox(selElem, selId) {
	var array = ["-", "", "m", "главни", "a", "помоћни", "c", "односни"];
	const cssClassName = "clsVerbTypeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idVerbType-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Глаголско време
function getVerbTenseDropDownBox(selElem, selId) {
	var array = [
		"-", "",
		CONST_VERB_TENSE_INFINITIVE, "инфинитив",
		CONST_VERB_TENSE_PARTICIPLE, "партицип",
		CONST_VERB_TENSE_PRESENT,    "презент",
		CONST_VERB_TENSE_FUTURE,     "футур",
		CONST_VERB_TENSE_IMPERATIVE, "императив",
		CONST_VERB_TENSE_AORIST,     "аорист",
		CONST_VERB_TENSE_IMPERFECT,  "имперфект"];
	const cssClassName = "clsVerbTenseDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idVerbTense-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Глаголско лице
function getPersonDropDownBox(selElem, selId) {
	var array = ["-", "", "1", "прво", "2", "друго", "3", "треће"];
	const cssClassName = "clsPersonDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idPerson-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Одричан глагол
function getVerbNegateDropDownBox(selElem, selId) {
	const array = ["-", "", "n", "негативан", "y", "позитиван"];
	const cssClassName = "clsVerbNegateDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idVerbNegate-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Врста придева
function getAdjectiveTypeDropDownBox(selElem, selId) {
	const array = ["-", "", "g", "описни", "s", "присвојни", "p", "радни глаголски"];
	const cssClassName = "clsAdjectiveTypeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idAdjectiveType-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Степен поређења придева
function getAdjectiveDegreeDropDownBox(selElem, selId) {
	const array = ["-", "", "p", "позитив", "c", "компаратив", "s", "суперлатив"];
	const cssClassName = "clsAdjectiveDegreeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idAdjectiveDegree-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Вид: одређени/неодређени
function getDefinitenessDropDownBox(selElem, selId) {
	const array = ["-", "", "n", "неодређени", "y", "одређени"];
	const cssClassName = "clsDefinitenessDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idDefiniteness-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Врста заменице
function getPronounTypeDropDownBox(selElem, selId) {
	const array = [
		"-", "",
		"p", "лична",
		"d", "показна",
		"i", "неодређена",
		"s", "присвојна",
		"q", "упитна",
		"r", "релативна",
		"x", "повратна"];
	const cssClassName = "clsPronounTypeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idPronounType-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Врста прилога
function getAdverbTypeDropDownBox(selElem, selId) {
	var array = ["-", "", "g", "општи", "r", "глаголски садашњи", "p", "глаголски прошли"];
	const cssClassName = "clsAdverbTypeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idAdverbType-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

// Падеж предлога
function getPrepositionCaseDropDownBox(selElem, selId) {
	var array = [
		"-", "",
		CONST_CASE_GENITIVE, "генитив",
		CONST_CASE_DATIVE, "датив",
		CONST_CASE_ACCUSATIVE, "акузатив",
		CONST_CASE_INSTRUMENTAL, "инструментал",
		CONST_CASE_LOCATIVE, "локатив"];
	const cssClassName = "clsPrepositionCaseDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idPrepositionCase-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}


function getConjunctionTypeDropDownBox(selElem, selId) {
	var array = ["-", "", "c", "саставни", "s", "зависни"];
	const cssClassName = "clsConjunctionTypeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idConjunctionType-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}


function getNumeralFormDropDownBox(selElem, selId) {
	var array = ["-", "", "d", "цифарски", "r", "римски", "l", "словни"];
	const cssClassName = "clsNumeralFormDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idNumeralForm-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}


function getNumeralTypeDropDownBox(selElem, selId) {
	var array = ["-", "", "c", "основни", "o", "редни", "m", "вишеструки", "s", "посебни"];
	const cssClassName = "clsNumeralTypeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idNumeralType-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}


function getParticleTypeDropDownBox(selElem, selId) {
	var array = ["-", "", "z", "одрична", "q", "упитна", "o", "модална", "r", "потврдна"];
	const cssClassName = "clsParticleTypeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idParticleType-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}


function getResidualTypeDropDownBox(selElem, selId) {
	var array = ["-", "", "f", "страно", "w", "веб", "e", "емотикон", "h", "хештег", "a", "ет"];
	const cssClassName = "clsResidualTypeDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idResidualType-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

function getDialectDropDownBox(selElem, selId) {
	var array = [
		CONST_DIALECT_ALL, "оба",
		CONST_DIALECT_EKAVIAN, "екавско",
		CONST_DIALECT_IEKAVIAN, "ијекавско"];
	const cssClassName = "clsDialectDropDownBox";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "idDialect-" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}

/*
function (selElem, selId) {
	var array = ["", "", "", ""];
	const cssClassName = "";
	if (typeof selId !== CONST_UNDEFINED) {
		var sel = getGenericDropDownBox(array, cssClassName, selElem, "" + selId);
	} else {
		var sel = getGenericDropDownBox(array, cssClassName, selElem);
	}
	return sel;
}
*/
