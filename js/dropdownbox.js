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

var ddbox = (function() {

	var my = {};

	my.make = function(context) {
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
	}; // make

	my.fillExistingWithItems = function(ddbox, context) {
		ddbox.innerHTML = '';
		if (typeof context.options !== CONST_UNDEFINED) {
			for (var i = 0; i < context.options.length; i+=2) {
			    var option = document.createElement("option");
			    option.value = context.options[i];
			    if (typeof context.selected !== CONST_UNDEFINED && option.value === context.selected) {
			    	option.setAttribute('selected', 'selected');
			    	//console.log("Selected option " + selElem + " for option.value=" + option.value + " and text=" + optArray[i+1]);
			    }
			    option.text = context.options[i+1];
			    ddbox.appendChild(option);
			}
		}
	};

	// Adds some classes to generic drop-down box
	my.getGeneric = function(context) {
		if (context.classes !== CONST_UNDEFINED) {
			context.classes += " clsDropDownBox";
		} else {
			context.classes = "clsDropDownBox";
		}
		return my.make(context);
	}; // getGeneric

	// Врста речи
	my.getWordType = function(context) {
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
		return my.getGeneric(context);
	};

	// Род
	my.getGender = function(context) {
		context.options = [
			"-", "",
			CONST_GENDER_MASCULINE, "мушки р.",
			CONST_GENDER_FEMININE,  "женски р.",
			CONST_GENDER_NEUTRAL,   "средњи р."];
		context.classes = "clsGenderDropDownBox";
		context.id = "idGender-" + context.index;
		return my.getGeneric(context);
	};

	// Број
	my.getNumber = function(context) {
		context.options = [
			"-", "",
			CONST_NUMBER_SINGULAR, "једнина",
			CONST_NUMBER_PLURAL,   "множина"];
		context.classes = "clsNumberDropDownBox";
		context.id = "idNumber-" + context.index;
		return my.getGeneric(context);
	};

	// Падеж
	my.getCase = function(context) {
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
		return my.getGeneric(context);
	};

	// Биће / предмет
	my.getAnimate = function(context) {
		context.options = [
			"-", "",
			"n", "неживо",
			"y", "живо"];
		context.classes = "clsAnimateDropDownBox";
		context.id = "idAnimate-" + context.index;
		return my.getGeneric(context);
	};

	// Врста именице
	my.getNounType = function(context) {
		context.options = [
			"-", "",
			CONST_NOUN_TYPE_COMMON,     "заједничка",
			CONST_NOUN_TYPE_PROPER,     "властита",
			CONST_NOUN_TYPE_MASS,       "градивна",
			CONST_NOUN_TYPE_COLLECTIVE, "збирна"];
		context.classes = "clsNounTypeDropDownBox";
		context.id = "idNounType-" + context.index;
		return my.getGeneric(context);
	};

	// Врста глагола
	my.getVerbType = function(context) {
		context.options = [
			"-", "",
			CONST_VERB_TYPE_MAIN,      "главни",
			CONST_VERB_TYPE_AUXILIARY, "помоћни",
			CONST_VERB_TYPE_COPULA,    "односни",
			CONST_VERB_TYPE_REFLEXIVE, "повратни"];
		context.classes = "clsVerbTypeDropDownBox";
		context.id = "idVerbType-" + context.index;
		return my.getGeneric(context);
	};

	// Глаголско време
	my.getVerbTense = function(context) {
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
		return my.getGeneric(context);
	};

	// Глаголско лице
	my.getPerson = function(context) {
		context.options = [
			"-", "",
			"1", "прво л.",
			"2", "друго л.",
			"3", "треће л."];
		context.classes = "clsPersonDropDownBox";
		context.id = "idPerson-" + context.index;
		return my.getGeneric(context);
	};

	// Одричан глагол
	my.getVerbNegate = function(context) {
		context.options = [
			"-", "",
			"n", "није",
			"y", "одричан"];
		context.classes = "clsVerbNegateDropDownBox";
		context.id = "idVerbNegate-" + context.index;
		return my.getGeneric(context);
	};

	// Врста придева
	my.getAdjectiveType = function(context) {
		context.options = [
			"-", "",
			"g", "описни",
			"s", "присвојни",
			"p", "радни глаголски"];
		context.classes = "clsAdjectiveTypeDropDownBox";
		context.id = "idAdjectiveType-" + context.index;
		return my.getGeneric(context);
	};

	// Степен поређења придева
	my.getAdjectiveDegree = function(context) {
		context.options = [
			"-", "",
			CONST_DEGREE_POSITIVE,    "позитив",
			CONST_DEGREE_COMPARATIVE, "компаратив",
			CONST_DEGREE_SUPERLATIVE, "суперлатив"];
		context.classes = "clsAdjectiveDegreeDropDownBox";
		context.id = "idAdjectiveDegree-" + context.index;
		return my.getGeneric(context);
	};

	// Вид: одређени/неодређени
	my.getDefiniteness = function(context) {
		context.options = [
			"-", "",
			"n", "неодређени",
			"y", "одређени"];
		context.classes = "clsDefinitenessDropDownBox";
		context.id = "idDefiniteness-" + context.index;
		return my.getGeneric(context);
	};

	// Врста заменице
	my.getPronounType = function(context) {
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
		return my.getGeneric(context);
	};

	// Врста прилога
	my.getAdverbType = function(context) {
		context.options = [
			"-", "",
			"g", "општи",
			"r", "глаголски садашњи",
			"p", "глаголски прошли"];
		context.classes = "clsAdverbTypeDropDownBox";
		context.id = "idAdverbType-" + context.index;
		return my.getGeneric(context);
	};

	// Степен поређења придева
	my.getAdverbDegree = function(context) {
		context.options = [
			"-", "",
			CONST_DEGREE_POSITIVE,    "позитив",
			CONST_DEGREE_COMPARATIVE, "компаратив",
			CONST_DEGREE_SUPERLATIVE, "суперлатив"];
		context.classes = "clsAdverbDegreeDropDownBox";
		context.id = "idAdverbDegree-" + context.index;
		return my.getGeneric(context);
	};

	// Падеж предлога
	my.getPrepositionCase = function(context) {
		context.options = [
			"-", "",
			CONST_CASE_GENITIVE,     "генитив",
			CONST_CASE_DATIVE,       "датив",
			CONST_CASE_ACCUSATIVE,   "акузатив",
			CONST_CASE_INSTRUMENTAL, "инструментал",
			CONST_CASE_LOCATIVE,     "локатив"];
		context.classes = "clsPrepositionCaseDropDownBox";
		context.id = "idPrepositionCase-" + context.index;
		return my.getGeneric(context);
	};

	my.getNumeralForm = function(context) {
		context.options = [
			"-", "",
			"d", "цифарски",
			"r", "римски",
			"l", "словни"];
		context.classes = "clsNumeralFormDropDownBox";
		context.id = "idNumeralForm-" + context.index;
		return my.getGeneric(context);
	};

	my.getNumeralType = function(context) {
		context.options = [
			"-", "",
			"c", "основни",
			"o", "редни",
			"m", "вишеструки",
			"s", "посебни"];
		context.classes = "clsNumeralTypeDropDownBox";
		context.id = "idNumeralType-" + context.index;
		return my.getGeneric(context);
	};

	my.getParticleType = function(context) {
		context.options = [
			"-", "",
			"z", "одрична",
			"q", "упитна",
			"o", "модална",
			"r", "потврдна"];
		context.classes = "clsParticleTypeDropDownBox";
		context.id = "idParticleType-" + context.index;
		return my.getGeneric(context);
	};

	my.getResidualType = function(context) {
		context.options = [
			"-", "",
			CONST_RESIDUAL_TYPE_FOREIGN, "страно",
			CONST_RESIDUAL_TYPE_WEB, "веб",
			CONST_RESIDUAL_TYPE_EMO, "емотикон",
			CONST_RESIDUAL_TYPE_HASHTAG, "хештег",
			CONST_RESIDUAL_TYPE_AT, "ет"];
		context.classes = "clsResidualTypeDropDownBox";
		context.id = "idResidualType-" + context.index;
		return my.getGeneric(context);
	};

	my.getConjunctionType = function(context) {
		context.options = ["-", "", "c", "саставни", "s", "зависни"];
		context.classes = "clsConjunctionTypeDropDownBox";
		context.id = "idConjunctionType-" + context.index;
		return my.getGeneric(context);
	};

	// Returns drop-down box with dialects
	my.getDialect = function(context) {
		context.options = [
			CONST_DIALECT_ALL, "оба",
			CONST_DIALECT_EKAVIAN, "екавско",
			CONST_DIALECT_IEKAVIAN, "ијекавско"];
		context.classes = "clsDialectDropDownBox";
		context.id = "idDialect-" + context.index;
		return my.getGeneric(context);
	};

	my.wordMetaCboxChanged = function(dropDownBox, index) {
		//console.log("wordMetaCboxChanged: " + dropDownBox.id + ", index: " + index);
		var hiddChanged = document.getElementById("idChanged-" + index);
		hiddChanged.value = true;
	};

	// Creates drop-down box that should hold predefined items
	my.getPredefinedItems = function() {
		var context = {};
		context.options = [
			"", ""
		];
		context.index = CONST_ID_SEARCH_WIDGETS;
		context.id = CONST_DDBOX_ID_PREDEFINED_ITEMS + "-" + context.index;
		return my.getGeneric(context);
	};


	// Fills dropdown box with predefined noun items
	my.fillPredefinedNounItems = function(ddbox) {
		context = {};
		context.options = [
			"", "",
			"nounProperMasculine", "Именица властита мушког рода",
			"nounProperFeminine",  "Именица властита женског рода",
			"nounProperNeutral",   "Именица властита средњег рода",
			"nounCommonMasculine", "Именица заједничка мушког рода",
			"nounCommonFeminine",  "Именица заједничка женског рода",
			"nounCommonNeutral",   "Именица заједничка средњег рода"
		];
		my.fillExistingWithItems(ddbox, context);
	};


	// Fills dropdown box with predefined pronoun items
	my.fillPredefinedPronounItems = function(ddbox) {
		context = {};
		context.options = [
			"", ""
		];
		my.fillExistingWithItems(ddbox, context);
	};


	// Fills dropdown box with predefined adjective items
	my.fillPredefinedAdjectiveItems = function(ddbox) {
		context = {};
		context.options = [
			"", "",
			"adjectiveGeneralPositiveMasculine",    "Придев описни мушког рода, позитив",
			"adjectiveGeneralComparativeMasculine", "Придев описни мушког рода, компаратив",
			"adjectiveGeneralSuperlativeMasculine", "Придев описни мушког рода, суперлатив",

			"adjectiveGeneralPositiveFeminine",     "Придев описни женског рода, позитив",
			"adjectiveGeneralComparativeFeminine",  "Придев описни женског рода, компаратив",
			"adjectiveGeneralSuperlativeFeminine",  "Придев описни женског рода, суперлатив",

			"adjectiveGeneralPositiveNeutral",      "Придев описни средњег рода, позитив",
			"adjectiveGeneralComparativeNeutral",   "Придев описни средњег рода, компаратив",
			"adjectiveGeneralSuperlativeNeutral",   "Придев описни средњег рода, суперлатив",

			"adjectivePossesiveMasculinePositive",    "Придев присвојни мушког рода, позитив",
			"adjectivePossesiveMasculineComparative", "Придев присвојни мушког рода, компаратив",
			"adjectivePossesiveMasculineSuperlative", "Придев присвојни мушког рода, суперлатив",

			"adjectivePossessiveFemininePositive",    "Придев присвојни женског рода, позитив",
			"adjectivePossessiveFeminineComparative", "Придев присвојни женског рода, компаратив",
			"adjectivePossessiveFeminineSuperlative", "Придев присвојни женског рода, суперлатив",

			"adjectivePossessiveNeutralPositive",    "Придев присвојни средњег рода, позитив",
			"adjectivePossessiveNeutralComparative", "Придев присвојни средњег рода, компаратив",
			"adjectivePossessiveNeutralSuperlative", "Придев присвојни средњег рода, суперлатив"
		];
		my.fillExistingWithItems(ddbox, context);
	};


	// Fills dropdown box with predefined numeral items
	my.fillPredefinedNumeralItems = function(ddbox) {
		context = {};
		context.options = [
			"", ""
		];
		my.fillExistingWithItems(ddbox, context);
	};


	// Fills dropdown box with predefined verb items
	my.fillPredefinedVerbItems = function(ddbox) {
		context = {};
		context.options = [
			"", ""
		];
		my.fillExistingWithItems(ddbox, context);
	};


	// Fills existing drop-down box with predefined word items
	// calling appropriate functions
	my.fillWithPredefinedWordValues = function(ddbox, wordType) {
		switch(wordType) {
		case CONST_WORD_TYPE_NOUN:
			my.fillPredefinedNounItems(ddbox);
			break;
		case CONST_WORD_TYPE_PRONOUN:
			my.fillPredefinedPronounItems(ddbox);
			break;
		case CONST_WORD_TYPE_ADJECTIVE:
			my.fillPredefinedAdjectiveItems(ddbox);
			break;
		case CONST_WORD_TYPE_NUMERAL:
			my.fillPredefinedNumeralItems(ddbox);
			break;
		case CONST_WORD_TYPE_VERB:
			my.fillPredefinedVerbItems(ddbox);
			break;
		default:
			// Just remove whatever is there
			ddbox.innerHTML = '';
			break;
		}
	};

	return my;
}());
