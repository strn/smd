// Functions that create group of widgets
// representing specific types of words

var meta = (function(){

	var my = {};

	// Creates widget that will contain other word widgets
	my.getWidgetContainer = function(context) {
		var container = document.createElement("div");
		// Create holder for id
		var inpId   = document.createElement("input");
		inpId.id    = "id-" + context.index;
		inpId.value = context.dbId;
		inpId.type  = "hidden";
		container.appendChild(inpId);
		inpId       = document.createElement("input");
		inpId.id    = "idChanged-" + context.index;
		inpId.value = false;
		inpId.type  = "hidden";
		container.appendChild(inpId);
		var lblType = document.createElement("label");
		lblType.id = CONST_LABEL_WORD_TYPE_ID + "-" + context.index;
		lblType.innerHTML = 'Врста&nbsp;';
		container.appendChild(lblType);
		context.selected = context.msd[0];
		container.appendChild(ddbox.getWordType(context));
		return container;
	};

	// Generic fuction for creating widgets for
	// given word type
	my.getGenericMSDWidgets = function(context, msdDesc) {
		var cw = my.getWidgetContainer(context);
		for (key in msdDesc) {
			//console.log("key: " + key + ", msdDesc[key]: " + msdDesc[key] + ", context.msd: " + context.msd);
			cw.innerHTML += ' ' + msdDesc[key][1] + '&nbsp;';
			if (context.msd[key] !== CONST_UNDEFINED) {
				context.selected = context.msd[key];
				cw.appendChild(msdDesc[key][0](context));
			}
		}
		return cw;
	};

	// Get a single character selected in dropdown box
	// holding word types
	my.getWordTypeChar = function(index) {
	    var sel = document.getElementById( "idWordType-" + index );
	    return sel.options[sel.selectedIndex].text;
	};

	// Strips longest uninterrupted dash substring
	// from right
	//
	// returns: stripped string
	my.stripRightDashes = function(str) {
	    if (str === CONST_UNDEFINED) {
	        return "";
	    }
	    var i, ret = str.trim();
	    for (i = ret.length-1; i >= 0; i--) {
	        if (ret.charAt(i) !== "-") {
	            break;
	        }
	    }
	    return ret.slice(0, i+1);
	};

	// Get generic MSD. Input is array containing
	// partial IDs for elements
	//
	// returns: string representing word's MSD or type description (in Serbian language)
	my.getGenericData = function(type, arr, index) {
	    var ret = "";
	    var sel;
	    var wordType = my.getWordTypeChar(index);
	    //console.log("getGenericData: type=" + type + ", arr=" + arr + ", index=" + index);

	    for (var i = 0; i < arr.length; i++) {
	        //console.log("i: " + i + ", arr[i]: " + arr[i])
	        sel = document.getElementById( "id" + arr[i] + "-" + index );
	        if (type === CONST_OUTPUT_MSD) {
	            ret += sel.value;
	        } else if (type === CONST_OUTPUT_DESCRIPTION) {
	            ret += sel.options[sel.selectedIndex].text + " ";
	        } else {
	            ret += sel.value;
	        }
	    }
	    if (type === CONST_OUTPUT_MSD) {
	        return my.stripRightDashes(ret);
	    } else {
	        return wordType + " " + ret;
	    }
	};

	// именица
	my.getNoun = function(type, index) {
	    return my.getGenericData( type,
	    	["NounType", "Gender", "Number", "Case", "Animate"], index);
	};

	// заменица
	my.getPronoun = function(type, index) {
	    return my.getGenericData( type,
	    	["PronounType", "Person", "Gender", "Number", "Case", "Animate"], index );
	};

	// придев
	my.getAdjective = function(type, index) {
	    return my.getGenericData( type,
	    	["AdjectiveType", "AdjectiveDegree", "Gender", "Number", "Case", "Definiteness", "Animate"], index);
	};

	// број
	my.getNumeral = function(type, index) {
	    return my.getGenericData( type,
	    	["NumeralForm", "NumeralType", "Gender", "Number", "Case", "Animate"], index);
	};

	// глагол
	my.getVerb = function(type, index) {
	    return my.getGenericData( type,
	    	["VerbType", "VerbTense", "Person", "Number", "Gender", "VerbNegate"], index);
	};

	// прилог
	my.getAdverb = function(type, index) {
	    return my.getGenericData( type,
	    	["AdverbType", "AdverbDegree"], index);
	};

	// предлог
	my.getPreposition = function(type, index) {
	    return my.getGenericData( type,
	    	["PrepositionCase"], index);
	};

	// везник
	my.getConjunction = function(type, index) {
	    return my.getGenericData( type,
	    	["ConjunctionType"], index);
	};

	// речца
	my.getParticle = function(type, index) {
	    return my.getGenericData( type,
	    	["ParticleType"], index);
	};

	// остало
	my.getResidual = function(type, index) {
	    return my.getGenericData( type,
	    	["ResidualType"], index);
	};

	// Input:
	//     wordType: first character in MSD denoting word type
	//     index: ordinal number in table representing word forms
	//
	// Return:
	//     object containing word's MSD and its human-readable description
	my.getRowMetadata = function(wordType, index) {
		var msd, description, dialect, retval;

		switch( wordType ) {
	        case CONST_WORD_TYPE_NOUN : // именица
	            msd = my.getNoun(CONST_OUTPUT_MSD, index);
	            description = my.getNoun(CONST_OUTPUT_DESCRIPTION, index);
	            break;
	        case CONST_WORD_TYPE_PRONOUN : // заменица
	            msd = my.getPronoun(CONST_OUTPUT_MSD, index);
	            description = my.getPronoun(CONST_OUTPUT_DESCRIPTION, index);
	            break;
	        case CONST_WORD_TYPE_ADJECTIVE : // придев
	            msd = my.getAdjective(CONST_OUTPUT_MSD, index);
	            description = my.getAdjective(CONST_OUTPUT_DESCRIPTION, index);
	            break;
	        case CONST_WORD_TYPE_NUMERAL : // број
	            msd = my.getNumeral(CONST_OUTPUT_MSD, index);
	            description = my.getNumeral(CONST_OUTPUT_DESCRIPTION, index);
	            break;
	        case CONST_WORD_TYPE_VERB : // глагол
	            msd = my.getVerb(CONST_OUTPUT_MSD, index);
	            description = my.getVerb(CONST_OUTPUT_DESCRIPTION, index);
	            break;
	        case CONST_WORD_TYPE_ADVERB : // прилог
	            msd = my.getAdverb(CONST_OUTPUT_MSD, index);
	            description = my.getAdverb(CONST_OUTPUT_DESCRIPTION, index);
	            break;
	        case CONST_WORD_TYPE_PREPOSITION : // предлог
	            msd = my.getPreposition(CONST_OUTPUT_MSD, index);
	            description = my.getPreposition(CONST_OUTPUT_DESCRIPTION, index);
	            break;
	        case CONST_WORD_TYPE_CONJUNCTION : // везник
	            msd = my.getConjunction(CONST_OUTPUT_MSD, index);
	            description = my.getConjunction(CONST_OUTPUT_DESCRIPTION, index);
	            break;
	        case CONST_WORD_TYPE_INTERJECTION : // узвик
	        case CONST_WORD_TYPE_ABBREVIATION : // скраћеница
	        case CONST_WORD_TYPE_PUNCTUATION : // интерпункција
	            msd = "";
	            description = "Нема описа";
	            break;
	        case CONST_WORD_TYPE_RESIDUAL : // остало
	            msd = my.getResidual(CONST_OUTPUT_MSD, index);
	            description = my.getResidual(CONST_OUTPUT_DESCRIPTION, index);
	            break;
	        case CONST_WORD_TYPE_PARTICLE : // речца
	            msd = my.getParticle(CONST_OUTPUT_MSD, index);
	            description = my.getParticle(CONST_OUTPUT_DESCRIPTION, index);
	            break;
	        default:
	            msd = "Непознато";
	            description = "Нема описа";
	            break;
	    } // switch
	    // Get dialect
	    dialect = my.getDialect(CONST_OUTPUT_MSD, index);
	    //console.log("meta.getRowMetadata: msd=" + wordType + msd + ", description='" + description.trim() + "'");
	    retval = '{"msd":"' + wordType + msd + '","description":"' + description.trim() + '","dialect":"' + dialect + '"}';
	    return retval;
	};

	// Noun
	my.getNounWidgets = function(context) {
		return my.getGenericMSDWidgets(context,
			{	1 : [ ddbox.getNounType, "тип"], 2 : [ ddbox.getGender, "род"],	3 : [ ddbox.getNumber, "број"],
				4 : [ ddbox.getCase, "падеж"], 5 : [ ddbox.getAnimate, "особина"] }
		);
	};

	// Pronoun
	my.getPronounWidgets = function(context) {
		return my.getGenericMSDWidgets(context,
			{	1: [ ddbox.getPronounType, "тип" ], 2 : [ ddbox.getPerson, "лице" ], 3 : [ ddbox.getGender, "род" ],
				4: [ ddbox.getNumber, "број" ], 5 : [ ddbox.getCase, "падеж" ], 6 : [ ddbox.getAnimate, "особина" ]}
		);
	};

	// Adjective
	my.getAdjectiveWidgets = function(context) {
		return my.getGenericMSDWidgets(context,
			{	1 : [ ddbox.getAdjectiveType, "тип" ], 2 : [ ddbox.getAdjectiveDegree, "степен" ], 3 : [ ddbox.getGender, "род" ],
				4 : [ ddbox.getNumber, "број" ], 5 : [ ddbox.getCase, "падеж"], 6 : [ ddbox.getDefiniteness, "одређеност" ],
				7 : [ ddbox.getAnimate, "особина" ]	}
		);
	};

	// Numeral
	my.getNumeralWidgets = function(context) {
		return my.getGenericMSDWidgets(context,
			{	1 : [ ddbox.getNumeralForm, "форма" ], 2 : [ ddbox.getNumeralType, "тип" ], 3 : [ ddbox.getGender, "род" ],
				4 : [ ddbox.getNumber, "број" ], 5 : [ ddbox.getCase, "падеж" ], 6 : [ ddbox.getAnimate, "особина" ] }
		);
	};

	// Verb
	my.getVerbWidgets = function(context) {
		return my.getGenericMSDWidgets(context,
			{	1 : [ ddbox.getVerbType, "тип" ], 2 : [ ddbox.getVerbTense, "форма" ], 3 : [ ddbox.getPerson, "лице" ],
				4 : [ ddbox.getNumber, "број" ], 5 : [ ddbox.getGender, "род" ], 6 : [ ddbox.getVerbNegate, "одричан" ]}
		);
	};

	// Adverb
	my.getAdverbWidgets = function(context) {
		return my.getGenericMSDWidgets(context, { 1 : [ddbox.getAdverbType, "тип" ],
			2 : [ ddbox.getAdverbDegree, "степен" ] });
	};

	// Preposition
	my.getPrepositionWidgets = function(context) {
		return my.getGenericMSDWidgets(context, { 1 : [ ddbox.getPrepositionCase, "падеж" ] });
	};

	// Conjunction
	my.getConjunctionWidgets = function(context) {
		return my.getGenericMSDWidgets(context, { 1 : [ ddbox.getConjunctionType, "тип" ] });
	};

	// Interjection
	my.getInterjectionWidgets = function(context) {
		return my.getGenericMSDWidgets(context, {});
	};

	// Abbreviation
	my.getAbbreviationWidgets = function(context) {
		return my.getGenericMSDWidgets(context, {});
	};

	// Particle
	my.getParticleWidgets = function(context) {
		return my.getGenericMSDWidgets(context, { 1 : [ ddbox.getParticleType, "тип" ] });
	};

	// Punctuation
	my.getPunctuationWidgets = function(context) {
		return my.getGenericMSDWidgets(context, {});
	};

	// Residual
	my.getResidualWidgets = function(context) {
		return my.getGenericMSDWidgets(context, { 1 : [ ddbox.getResidualType, "тип" ]});
	};

	// Get a single letter or text selected in dropdown box
	// that holds dialects
	my.getDialect = function(type, index) {
	    var sel = document.getElementById("idDialect-" + index);
	    if (type === CONST_OUTPUT_MSD) {
	        return sel.value;
	    } else if (type === CONST_OUTPUT_DESCRIPTION) {
	        return sel.options[sel.selectedIndex].text;
	    } else {
	        return "";
	    }
	};

	return my;
}());
