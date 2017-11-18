/**
 * Creates generic drop-down box, passing object "context"
 * with following data members:
 *
 * id: selection.id
 * index:
 * classes: selection.className
 * options: array of options specified as [val1, text1, val2, text2, ..., valN, textN]
 * selected: selected element
 * onchange: function fired on "onchange" event
 */
function makeDropDownBox(context) {
	var sel = document.createElement("select");
	if (typeof context.id !== CONST_UNDEFINED) {
		sel.id = context.id;
	}
	if (typeof context.classes !== CONST_UNDEFINED) {
		sel.className = context.classes;
	}
	if (typeof context.options !== CONST_UNDEFINED) {
		for (var i = 0; i < context.options.length; i+=2) {
		    var option = document.createElement("option");
		    option.value = context.options[i];
		    if (typeof context.selected !== CONST_UNDEFINED && option.value === context.selected) {
		    	option.setAttribute('selected', 'selected');
		    	//console.log("Selected option " + selElem + " for option.value=" + option.value + " and text=" + optArray[i+1]);
		    }
		    option.text = context.options[i+1];
		    sel.appendChild(option);
		}
	}
	if (typeof context.onchange !== CONST_UNDEFINED) {
		sel.setAttribute("onchange", context.onchange);
	}
	return sel;
}


function getGenericDropDownBox(context) {
	if (context.classes !== CONST_UNDEFINED) {
		context.classes += " clsDropDownBox";
	} else {
		context.classes = "clsDropDownBox";
	}
	return makeDropDownBox(context);
}


// Врста речи
function getWordTypeDropDownBox(context) {
	context.options = [
		"-", "",
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
		CONST_WORD_TYPE_RESIDUAL,     "Остало",
		CONST_WORD_TYPE_PUNCTUATION,  "Интерпункција"];
	context.classes = "clsWordTypeDropDownBox";
	context.id = "idWordType-" + context.index;
	return getGenericDropDownBox(context);
}


// Род
function getGenderDropDownBox(context) {
	context.options = [
		"-", "",
		CONST_GENDER_MASCULINE, "мушки",
		CONST_GENDER_FEMININE, "женски",
		CONST_GENDER_NEUTRAL, "средњи"];
	context.classes = "clsGenderDropDownBox";
	context.id = "idGender-" + context.index;
	return getGenericDropDownBox(context);
}

// Број
function getNumberDropDownBox(context) {
	context.options = [
		"-", "",
		CONST_NUMBER_SINGULAR, "једнина",
		CONST_NUMBER_PLURAL, "множина"];
	context.classes = "clsNumberDropDownBox";
	context.id = "idNumber-" + context.index;
	return getGenericDropDownBox(context);
}

// Падеж
function getCaseDropDownBox(context) {
	context.options = [
		"-", "",
		CONST_CASE_NOMINATIVE,   "номинатив",
		CONST_CASE_GENITIVE,     "генитив",
		CONST_CASE_DATIVE,       "датив",
		CONST_CASE_ACCUSATIVE,   "акузатив",
		CONST_CASE_VOCATIVE,     "вокатив",
		CONST_CASE_INSTRUMENTAL, "инструментал",
		CONST_CASE_LOCATIVE,     "локатив"];
	context.classes = "clsCaseDropDownBox";
	context.id = "idCase-" + context.index;
	return getGenericDropDownBox(context);
}

// Биће / предмет
function getAnimateDropDownBox(context) {
	context.options = [
		"-", "",
		"n", "предмет",
		"y", "живо биће"];
	context.classes = "clsAnimateDropDownBox";
	context.id = "idAnimate-" + context.index;
	return getGenericDropDownBox(context);
}

// Врста именице
function getNounTypeDropDownBox(context) {
	context.options = [
		"-", "",
		CONST_NOUN_TYPE_COMMON, "заједничка",
		CONST_NOUN_TYPE_PROPER, "властита",
		CONST_NOUN_TYPE_MASS, "градивна",
		CONST_NOUN_TYPE_COLLECTIVE, "збирна"];
	context.classes = "clsNounTypeDropDownBox";
	context.id = "idNounType-" + context.index;
	return getGenericDropDownBox(context);
}

// Врста глагола
function getVerbTypeDropDownBox(context) {
	context.options = [
		"-", "",
		CONST_VERB_TYPE_MAIN,      "главни",
		CONST_VERB_TYPE_AUXILIARY, "помоћни",
		CONST_VERB_TYPE_COPULA,    "односни",
		CONST_VERB_TYPE_REFLEXIVE, "повратни"];
	context.classes = "clsVerbTypeDropDownBox";
	context.id = "idVerbType-" + context.index;
	return getGenericDropDownBox(context);
}

// Глаголско време
function getVerbTenseDropDownBox(context) {
	context.options = [
		"-", "",
		CONST_VERB_TENSE_INFINITIVE, "инфинитив",
		CONST_VERB_TENSE_PARTICIPLE, "партицип",
		CONST_VERB_TENSE_PRESENT,    "презент",
		CONST_VERB_TENSE_FUTURE,     "футур",
		CONST_VERB_TENSE_IMPERATIVE, "императив",
		CONST_VERB_TENSE_AORIST,     "аорист",
		CONST_VERB_TENSE_IMPERFECT,  "имперфект"];
	context.classes = "clsVerbTenseDropDownBox";
	context.id = "idVerbTense-" + context.index;
	return getGenericDropDownBox(context);
}

// Глаголско лице
function getPersonDropDownBox(context) {
	context.options = [
		"-", "",
		"1", "прво",
		"2", "друго",
		"3", "треће"];
	context.classes = "clsPersonDropDownBox";
	context.id = "idPerson-" + context.index;
	return getGenericDropDownBox(context);
}

// Одричан глагол
function getVerbNegateDropDownBox(context) {
	context.options = [
		"-", "",
		"n", "негативан",
		"y", "позитиван"];
	context.classes = "clsVerbNegateDropDownBox";
	context.id = "idVerbNegate-" + context.index;
	return getGenericDropDownBox(context);
}

// Врста придева
function getAdjectiveTypeDropDownBox(context) {
	context.options = [
		"-", "",
		"g", "описни",
		"s", "присвојни",
		"p", "радни глаголски"];
	context.classes = "clsAdjectiveTypeDropDownBox";
	context.id = "idAdjectiveType-" + context.index;
	return getGenericDropDownBox(context);
}

// Степен поређења придева
function getAdjectiveDegreeDropDownBox(context) {
	context.options = [
		"-", "",
		CONST_DEGREE_POSITIVE, "позитив",
		CONST_DEGREE_COMPARATIVE, "компаратив",
		CONST_DEGREE_SUPERLATIVE, "суперлатив"];
	context.classes = "clsAdjectiveDegreeDropDownBox";
	context.id = "idAdjectiveDegree-" + context.index;
	return getGenericDropDownBox(context);
}

// Вид: одређени/неодређени
function getDefinitenessDropDownBox(context) {
	context.options = [
		"-", "",
		"n", "неодређени",
		"y", "одређени"];
	context.classes = "clsDefinitenessDropDownBox";
	context.id = "idDefiniteness-" + context.index;
	return getGenericDropDownBox(context);
}

// Врста заменице
function getPronounTypeDropDownBox(context) {
	context.options = [
		"-", "",
		"p", "лична",
		"d", "показна",
		"i", "неодређена",
		"s", "присвојна",
		"q", "упитна",
		"r", "релативна",
		"x", "повратна"];
	context.classes = "clsPronounTypeDropDownBox";
	context.id = "idPronounType-" + context.index;
	return getGenericDropDownBox(context);
}

// Врста прилога
function getAdverbTypeDropDownBox(context) {
	context.options = [
		"-", "",
		"g", "општи",
		"r", "глаголски садашњи",
		"p", "глаголски прошли"];
	context.classes = "clsAdverbTypeDropDownBox";
	context.id = "idAdverbType-" + context.index;
	return getGenericDropDownBox(context);
}

// Степен поређења придева
function getAdverbDegreeDropDownBox(context) {
	context.options = [
		"-", "",
		CONST_DEGREE_POSITIVE, "позитив",
		CONST_DEGREE_COMPARATIVE, "компаратив",
		CONST_DEGREE_SUPERLATIVE, "суперлатив"];
	context.classes = "clsAdverbDegreeDropDownBox";
	context.id = "idAdverbDegree-" + context.index;
	return getGenericDropDownBox(context);
}

// Падеж предлога
function getPrepositionCaseDropDownBox(context) {
	context.options = [
		"-", "",
		CONST_CASE_GENITIVE, "генитив",
		CONST_CASE_DATIVE, "датив",
		CONST_CASE_ACCUSATIVE, "акузатив",
		CONST_CASE_INSTRUMENTAL, "инструментал",
		CONST_CASE_LOCATIVE, "локатив"];
	context.classes = "clsPrepositionCaseDropDownBox";
	context.id = "idPrepositionCase-" + context.index;
	return getGenericDropDownBox(context);
}


function getConjunctionTypeDropDownBox(context) {
	context.options = ["-", "", "c", "саставни", "s", "зависни"];
	context.classes = "clsConjunctionTypeDropDownBox";
	context.id = "idConjunctionType-" + context.index;
	return getGenericDropDownBox(context);
}


function getNumeralFormDropDownBox(context) {
	context.options = [
		"-", "",
		"d", "цифарски",
		"r", "римски",
		"l", "словни"];
	context.classes = "clsNumeralFormDropDownBox";
	context.id = "idNumeralForm-" + context.index;
	return getGenericDropDownBox(context);
}


function getNumeralTypeDropDownBox(context) {
	context.options = [
		"-", "",
		"c", "основни",
		"o", "редни",
		"m", "вишеструки",
		"s", "посебни"];
	context.classes = "clsNumeralTypeDropDownBox";
	context.id = "idNumeralType-" + context.index;
	return getGenericDropDownBox(context);
}


function getParticleTypeDropDownBox(context) {
	context.options = [
		"-", "",
		"z", "одрична",
		"q", "упитна",
		"o", "модална",
		"r", "потврдна"];
	context.classes = "clsParticleTypeDropDownBox";
	context.id = "idParticleType-" + context.index;
	return getGenericDropDownBox(context);
}


function getResidualTypeDropDownBox(context) {
	context.options = [
		"-", "",
		CONST_RESIDUAL_TYPE_FOREIGN, "страно",
		CONST_RESIDUAL_TYPE_WEB, "веб",
		CONST_RESIDUAL_TYPE_EMO, "емотикон",
		CONST_RESIDUAL_TYPE_HASHTAG, "хештег",
		CONST_RESIDUAL_TYPE_AT, "ет"];
	context.classes = "clsResidualTypeDropDownBox";
	context.id = "idResidualType-" + context.index;
	return getGenericDropDownBox(context);
}

function getDialectDropDownBox(context) {
	context.options = [
		CONST_DIALECT_ALL, "оба",
		CONST_DIALECT_EKAVIAN, "екавско",
		CONST_DIALECT_IEKAVIAN, "ијекавско"];
	context.classes = "clsDialectDropDownBox";
	context.id = "idDialect-" + context.index;
	return getGenericDropDownBox(context);
}
