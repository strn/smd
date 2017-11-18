// Functions that create group of widgets for entering specific types of words

// Noun - ok
function getNounWidgets(context) {
	var cw = getWidgetContainer(context);
	cw.innerHTML += ' тип&nbsp;';
	context.selected = context.msd.type;
	cw.appendChild(getNounTypeDropDownBox(context));
	cw.innerHTML += ' род&nbsp;';
	context.selected = context.msd.gender;
	cw.appendChild(getGenderDropDownBox(context));
	cw.innerHTML += ' број&nbsp;';
	context.selected = context.msd.number;
	cw.appendChild(getNumberDropDownBox(context));
	cw.innerHTML += ' падеж&nbsp;';
	context.selected = context.msd.case;
	cw.appendChild(getCaseDropDownBox(context));
	cw.innerHTML += ' особина&nbsp;';
	context.selected = context.msd.animate;
	cw.appendChild(getAnimateDropDownBox(context));
	return cw;
}


// Pronoun - ok
function getPronounWidgets(context) {
	var cw = getWidgetContainer(context);
	cw.innerHTML += ' тип&nbsp;';
	context.selected = context.msd.type;
	cw.appendChild(getPronounTypeDropDownBox(context));
	cw.innerHTML += ' лице&nbsp;';
	context.selected = context.msd.person;
	cw.appendChild(getPersonDropDownBox(context));
	cw.innerHTML += ' род&nbsp;';
	context.selected = context.msd.gender;
	cw.appendChild(getGenderDropDownBox(context));
	cw.innerHTML += ' број&nbsp;';
	context.selected = context.msd.number;
	cw.appendChild(getNumberDropDownBox(context));
	cw.innerHTML += ' падеж&nbsp;';
	context.selected = context.msd.case;
	cw.appendChild(getCaseDropDownBox(context));
	cw.innerHTML += ' особина&nbsp;';
	context.selected = context.msd.animate;
	cw.appendChild(getAnimateDropDownBox(context));
	return cw;
}


// Adjective - ok
function getAdjectiveWidgets(context) {
	var cw = getWidgetContainer(context);
	cw.innerHTML += ' тип&nbsp;';
	context.selected = context.msd.type;
	cw.appendChild(getAdjectiveTypeDropDownBox(context));
	cw.innerHTML += ' степен&nbsp;';
	context.selected = context.msd.degree;
	cw.appendChild(getAdjectiveDegreeDropDownBox(context));
	cw.innerHTML += ' род&nbsp;';
	context.selected = context.msd.gender;
	cw.appendChild(getGenderDropDownBox(context));
	cw.innerHTML += ' број&nbsp;';
	context.selected = context.msd.number;
	cw.appendChild(getNumberDropDownBox(context));
	cw.innerHTML += ' падеж&nbsp;';
	context.selected = context.msd.case;
	cw.appendChild(getCaseDropDownBox(context));
	cw.innerHTML += ' одређеност&nbsp;';
	context.selected = context.msd.definiteness;
	cw.appendChild(getDefinitenessDropDownBox(context));
	cw.innerHTML += ' особина&nbsp;';
	context.selected = context.msd.animate;
	cw.appendChild(getAnimateDropDownBox(context));
	return cw;
}


// Numeral - ok
function getNumeralWidgets(context) {
	var cw = getWidgetContainer(context);
	cw.innerHTML += ' форма&nbsp;';
	context.selected = context.msd.form;
	cw.appendChild(getNumeralFormDropDownBox(context));
	cw.innerHTML += ' тип&nbsp;';
	context.selected = context.msd.type;
	cw.appendChild(getNumeralTypeDropDownBox(context));
	cw.innerHTML += ' род&nbsp;';
	context.selected = context.msd.gender;
	cw.appendChild(getGenderDropDownBox(context));
	cw.innerHTML += ' број&nbsp;';
	context.selected = context.msd.number;
	cw.appendChild(getNumberDropDownBox(context));
	cw.innerHTML += ' падеж&nbsp;';
	context.selected = context.msd.case;
	cw.appendChild(getCaseDropDownBox(context));
	cw.innerHTML += ' особина&nbsp;';
	context.selected = context.msd.animate;
	cw.appendChild(getAnimateDropDownBox(context));
	return cw;
}

// Verb - ok
function getVerbWidgets(context) {
	var cw = getWidgetContainer(context);
	cw.innerHTML += ' тип&nbsp;';
	context.selected = context.msd.type;
	cw.appendChild(getVerbTypeDropDownBox(context));
	cw.innerHTML += ' форма&nbsp;';
	context.selected = context.msd.form;
	cw.appendChild(getVerbTenseDropDownBox(context));
	cw.innerHTML += ' лице&nbsp;';
	context.selected = context.msd.person;
	cw.appendChild(getPersonDropDownBox(context));
	cw.innerHTML += ' број&nbsp;';
	context.selected = context.msd.number;
	cw.appendChild(getNumberDropDownBox(context));
	cw.innerHTML += ' род&nbsp;';
	context.selected = context.msd.gender;
	cw.appendChild(getGenderDropDownBox(context));
	cw.innerHTML += ' одричан&nbsp;';
	context.selected = context.msd.negative;
	cw.appendChild(getVerbNegateDropDownBox(context));
	return cw;
}


// Adverb - ok
function getAdverbWidgets(context) {
	var cw = getWidgetContainer(context);
	cw.innerHTML += ' тип&nbsp;';
	context.selected = context.msd.type;
	cw.appendChild(getAdverbTypeDropDownBox(context));
	cw.innerHTML += ' степен&nbsp;';
	context.selected = context.msd.degree;
	cw.appendChild(getAdverbDegreeDropDownBox(context));
	return cw;
}


// Preposition
function getPrepositionWidgets(context) {
	var cw = getWidgetContainer(context);
	cw.innerHTML += ' падеж&nbsp;';
	context.selected = context.msd.case;
	cw.appendChild(getPrepositionCaseDropDownBox(context));
	return cw;
}


// Conjunction - ok
function getConjunctionWidgets(context) {
	var cw = getWidgetContainer(context);
	cw.innerHTML += ' тип&nbsp;';
	context.selected = context.msd.type;
	cw.appendChild(getConjunctionTypeDropDownBox(context));
	return cw;
}


// Interjection - ok
function getInterjectionWidgets(context) {
	var cw = getWidgetContainer(context);
	return cw;
}


// Particle - ok
function getParticleWidgets(context) {
	var cw = getWidgetContainer(context);
	cw.innerHTML += ' тип&nbsp;';
	context.selected = context.msd.type;
	cw.appendChild(getParticleTypeDropDownBox(context));
	return cw;
}


// Abbreviation - ok
function getAbbreviationWidgets(context) {
	var cw = getWidgetContainer(context);
	return cw;
}


// Residual
function getResidualWidgets(context) {
	var cw = getWidgetContainer(context);
	cw.innerHTML += ' тип&nbsp;';
	context.selected = context.msd.type;
	cw.appendChild(getResidualTypeDropDownBox(context));
	return cw;
}


// Punctuation - ok
function getPunctuationWidgets(context) {
	var cw = getWidgetContainer(context);
	return cw;
}


// Creates widget that will contain other word widgets
function getWidgetContainer(context) {
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
	container.innerHTML += 'Врста&nbsp;';
	context.selected = context.msd.category;
	container.appendChild(getWordTypeDropDownBox(context));
	return container;
}


// Common function to indicate which choice box changed
function wordMetaCboxChanged(dropDownBox, index) {
	//console.log("wordMetaCboxChanged: " + dropDownBox.id + ", index: " + index);
	var hiddChanged = document.getElementById("idChanged-" + index);
	hiddChanged.value = true;
}
