// Functions that create group of widgets for entering specific types of words

// Noun - ok
function getNounWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	cw.innerHTML += ' тип&nbsp;';
	cw.appendChild(getNounTypeDropDownBox(result.msd.type, index));
	cw.innerHTML += ' род&nbsp;';
	cw.appendChild(getGenderDropDownBox(result.msd.gender, index));
	cw.innerHTML += ' број&nbsp;';
	cw.appendChild(getNumberDropDownBox(result.msd.number, index));
	cw.innerHTML += ' падеж&nbsp;';
	cw.appendChild(getCaseDropDownBox(result.msd.case, index));
	cw.innerHTML += ' особина&nbsp;';
	if (result.msd.animate !== CONST_UNDEFINED) {
		cw.appendChild(getAnimateDropDownBox(result.msd.animate, index));
	} else {
		cw.appendChild(getAnimateDropDownBox("", index));
	}
	return cw;
}

// Pronoun - ok
function getPronounWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	cw.innerHTML += ' тип&nbsp;';
	cw.appendChild(getPronounTypeDropDownBox(result.msd.type, index));
	cw.innerHTML += ' лице&nbsp;';
	if (result.msd.person !== CONST_UNDEFINED) {
		cw.appendChild(getPersonDropDownBox(result.msd.person, index));
	} else {
		cw.appendChild(getPersonDropDownBox("", index));
	}
	cw.innerHTML += ' род&nbsp;';
	if (result.msd.gender !== CONST_UNDEFINED) {
		cw.appendChild(getGenderDropDownBox(result.msd.gender, index));
	} else {
		cw.appendChild(getGenderDropDownBox("", index));
	}
	cw.innerHTML += ' број&nbsp;';
	if (result.msd.number !== CONST_UNDEFINED) {
		cw.appendChild(getNumberDropDownBox(result.msd.number, index));
	} else {
		cw.appendChild(getNumberDropDownBox("", index));
	}
	cw.innerHTML += ' падеж&nbsp;';
	if (result.msd.case !== CONST_UNDEFINED) {
		cw.appendChild(getCaseDropDownBox(result.msd.case, index));
	} else {
		cw.appendChild("", index);
	}
	cw.innerHTML += ' особина&nbsp;';
	if (result.msd.animate !== CONST_UNDEFINED) {
		cw.appendChild(getAnimateDropDownBox(result.msd.animate, index));
	} else {
		cw.appendChild(getAnimateDropDownBox("", index));
	}
	return cw;
}

// Adjective - ok
function getAdjectiveWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	cw.innerHTML += ' тип&nbsp;';
	cw.appendChild(getAdjectiveTypeDropDownBox(result.msd.tyoe, index));
	cw.innerHTML += ' степен&nbsp;';
	cw.appendChild(getAdjectiveDegreeDropDownBox(result.msd.degree, index));
	cw.innerHTML += ' род&nbsp;';
	cw.appendChild(getGenderDropDownBox(result.msd.gender, index));
	cw.innerHTML += ' број&nbsp;';
	cw.appendChild(getNumberDropDownBox(result.msd.number, index));
	cw.innerHTML += ' падеж&nbsp;';
	cw.appendChild(getCaseDropDownBox(result.msd.case, index));
	cw.innerHTML += ' одређеност&nbsp;';
	if (result.msd.definiteness !== CONST_UNDEFINED) {
		cw.appendChild(getDefinitenessDropDownBox(result.msd.definiteness, index));
	} else {
		cw.appendChild(getDefinitenessDropDownBox("", index));
	}
	cw.innerHTML += ' особина&nbsp;';
	if (result.msd.animate !== CONST_UNDEFINED) {
		cw.appendChild(getAnimateDropDownBox(result.msd.animate, index));
	} else {
		cw.appendChild(getAnimateDropDownBox("", index));
	}
	return cw;
}

// Numeral - ok
function getNumeralWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	cw.innerHTML += ' форма&nbsp;';
	cw.appendChild(getNumeralFormDropDownBox(result.msd.form, index));
	cw.innerHTML += ' тип&nbsp;';
	cw.appendChild(getNumeralTypeDropDownBox(result.msd.type, index));
	cw.innerHTML += ' род&nbsp;';
	if (result.msd.gender !== CONST_UNDEFINED) {
		cw.appendChild(getGenderDropDownBox(result.msd.gender, index));
	} else {
		cw.appendChild(getGenderDropDownBox("", index));
	}
	cw.innerHTML += ' број&nbsp;';
	if (result.msd.number !== CONST_UNDEFINED) {
		cw.appendChild(getNumberDropDownBox(result.msd.number, index));
	} else {
		cw.appendChild(getNumberDropDownBox("", index));
	}
	cw.innerHTML += ' падеж&nbsp;';
	if (result.msd.case !== CONST_UNDEFINED) {
		cw.appendChild(getCaseDropDownBox(result.msd.case, index));
	} else {
		cw.appendChild("", index);
	}
	cw.innerHTML += ' особина&nbsp;';
	if (result.msd.animate !== CONST_UNDEFINED) {
		cw.appendChild(getAnimateDropDownBox(result.msd.animate, index));
	} else {
		cw.appendChild(getAnimateDropDownBox("", index));
	}
	return cw;
}

// Verb - ok
function getVerbWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	cw.innerHTML += ' тип&nbsp;';
	cw.appendChild(getVerbTypeDropDownBox(result.msd.type, index));
	cw.innerHTML += ' форма&nbsp;';
	if (result.msd.form !== CONST_UNDEFINED) {
		cw.appendChild(getVerbTenseDropDownBox(result.msd.form, index));
	} else {
		cw.appendChild("", index);
	}
	cw.innerHTML += ' лице&nbsp;';
	if (result.msd.person !== CONST_UNDEFINED) {
		cw.appendChild(getPersonDropDownBox(result.msd.person, index));
	} else {
		cw.appendChild(getPersonDropDownBox("", index));
	}
	cw.innerHTML += ' број&nbsp;';
	if (result.msd.number !== CONST_UNDEFINED) {
		cw.appendChild(getNumberDropDownBox(result.msd.number, index));
	} else {
		cw.appendChild(getNumberDropDownBox("", index));
	}
	cw.innerHTML += ' род&nbsp;';
	if (result.msd.gender !== CONST_UNDEFINED) {
		cw.appendChild(getGenderDropDownBox(result.msd.gender, index));
	} else {
		cw.appendChild(getGenderDropDownBox("", index));
	}
	cw.innerHTML += ' одричан&nbsp;';
	if (result.msd.negative !== CONST_UNDEFINED) {
		cw.appendChild(getVerbNegateDropDownBox(result.msd.negative, index));
	} else {
		cw.appendChild(getVerbNegateDropDownBox("", index));
	}
	return cw;
}


// Adverb - ok
function getAdverbWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	cw.innerHTML += ' тип&nbsp;';
	cw.appendChild(getAdverbTypeDropDownBox(result.msd.type, index));
	cw.innerHTML += ' степен&nbsp;';
	if (result.msd.degree !== CONST_UNDEFINED) {
		cw.appendChild(getAdjectiveDegreeDropDownBox(result.msd.degree, index));
	} else {
		cw.appendChild(getAdjectiveDegreeDropDownBox("", index));
	}
	return cw;
}


// Preposition
function getPrepositionWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	cw.innerHTML += ' падеж&nbsp;';
	cw.appendChild(getPrepositionCaseDropDownBox(result.msd.case, index));
	return cw;
}


// Conjunction - ok
function getConjunctionWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	cw.innerHTML += ' тип&nbsp;';
	cw.appendChild(getConjunctionTypeDropDownBox(result.msd.type, index));
	return cw;
}


// Interjection - ok
function getInterjectionWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	return cw;
}


// Particle - ok
function getParticleWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	cw.innerHTML += ' тип&nbsp;';
	cw.appendChild(getParticleTypeDropDownBox(result.msd.type, index));
	return cw;
}


// Abbreviation - ok
function getAbbreviationWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	return cw;
}

// Residual
function getResidualWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	cw.innerHTML += ' тип&nbsp;';
	cw.appendChild(getResidualTypeDropDownBox(result.msd.type, index));
	return cw;
}


// Punctuation - ok
function getPunctuationWidgets(result, index) {
	var cw = getWidgetContainer(result, index);
	return cw;
}

// Creates widget that will contain other word widgets
function getWidgetContainer(result, index) {
	var container = document.createElement("div");
	// Create holder for id
	var inpId   = document.createElement("input");
	inpId.id    = "id-" + index;
	inpId.value = result.id;
	inpId.type  = "hidden";
	container.appendChild(inpId);
	container.innerHTML += 'Врста&nbsp;';
	var category = getWordTypeDropDownBox(result.msd.category, index);
	container.appendChild(category);
	return container;
}
