// Gets word from database

function getWord() {

    var xhttp = new XMLHttpRequest();
    var resultMessage = document.getElementById("resultMessage");
    var errorMessage = document.getElementById("errorMessage");
    var divAdd = document.getElementById("divAdd");
    var word = document.getElementById("word").value;
    var divAddWord = document.getElementById("divAddWord");
    var tblWords = document.getElementById("tblWords");
    var inpLemma = document.getElementById("lemma");

    resultMessage.innerHTML = "", errorMessage.innerHTML = "";

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Expect JSON array
            var res = JSON.parse(this.responseText);
            if (res.length == 0) {
                resultMessage.innerHTML = "Реч „" + word + "“ није нађена. Ако желите да је додате, изаберите врсту речи и кликните на дугме „Додај“.";
                divAdd.style.display = 'block';
                divAddWord.innerHTML = '';
                tblWords.innerHTML = '';
                addAddWordWidgets(word);
            } else {
                //resultMessage.innerHTML = this.responseText;
                divAddWord.innerHTML = '';
                tblWords.innerHTML = '';
                createWordsHeader();
                // Loop over results
                for (var i = 0; i < res.length; i++) {
                    //console.log("res[i].wordform: " + res[i].wordform + ", res[i].lemma: " + res[i].lemma + ", res[i].msd: " + res[i].msd);
                    createWordWidgets(res[i], i);
                }
            }
            inpLemma.value = word;
		}
		if (this.readyState == 4 && this.status == 404) {
			errorMessage.innerHTML = "Дошло је до грешке. Реч „" + word + "“ није нађена.";
		}
    };
    // Perform minimal validation
    var status = validateWord(word);
    if ( status != "" ) {
        alert(status);
    } else {
    	xhttp.open("GET", "/php/smd/findword.php?word=" + word.trim(), true);
    	xhttp.send();
    }
}

// Creates widgets for adding word
function addAddWordWidgets(word) {
    var divAddWord = document.getElementById("divAddWord");
    divAddWord.innerHTML += 'Врста речи:&nbsp;';

    var ddbWordType = getWordTypeDropDownBox("N", "main");
    divAddWord.appendChild(ddbWordType);
    divAddWord.innerHTML += '&nbsp;';

    var btnAddWord = document.createElement("input");
    btnAddWord.id = "idBtnAddWord";
    btnAddWord.type = "submit";
    btnAddWord.value = " Додај ";
    btnAddWord.setAttribute( "onclick", "createWordsHeader();createWordWidgets('" + word + "','" + word + "','',0);disableNewWordFields()" );
    divAddWord.appendChild(btnAddWord);
}

// Disables "Word type" and "Add" buttons so that
// user can't change word type once he starts
// adding new word data
function disableNewWordFields() {
    //var btnAddWord = document.getElementById("idBtnAddWord");
    //btnAddWord.disabled = 'disabled';
    //var ddbWordType = document.getElementById("idWordType-main");
    //ddbWordType.disabled = 'disabled';
    var divAdd = document.getElementById("divAdd");
    divAdd.style.display = 'none';
}

function createWordsHeader() {
    var tblWords = document.getElementById("tblWords");
    var th, tr;

    tr = document.createElement("tr");
    th = document.createElement("th");
    th.innerHTML = "Изведена реч";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Метаподаци";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Навигација";
    tr.appendChild(th);
    tblWords.appendChild(tr);
}


// Creates row representing entry from word database
function createWordWidgets(result, index) {
    var rowTr = document.createElement("tr");
    rowTr.className = "clsWordRow";

    // Assemble row together
    var tblWords = document.getElementById("tblWords");
    rowTr.appendChild( getColumnWordForm(result.wordform) );
    //rowTr.appendChild( getColumnLemma(result.lemma) );
    rowTr.appendChild( getWordMetaWidgets(result, index) );
    rowTr.appendChild( getNavButtons() );
    tblWords.appendChild( rowTr );
}


// Adds one row to table with words
function getColumnWordForm(wordForm) {

    var inpWordForm = document.createElement("input");
    inpWordForm.className = "clsInputWordForm";
    inpWordForm.value = wordForm;
    inpWordForm.setAttribute("type", "text");
    inpWordForm.setAttribute("maxLength", CONST_MAX_LENGTH_WORDFORM);
    inpWordForm.setAttribute("size", CONST_SIZE_WORDFORM);

    var tdWordForm = document.createElement("td");
    tdWordForm.className = "clsColumnWordForm";
    tdWordForm.appendChild(inpWordForm);
    return tdWordForm;
}


// Adds one row to table with words
function getColumnLemma(lemma) {

    var inpLemma = document.createElement("label");
    inpLemma.className = "clsInputLemma";
    inpLemma.innerHTML = lemma;
    var tdWordLemma = document.createElement("td");
    tdWordLemma.className = "clsColumnLemma";
    tdWordLemma.appendChild(inpLemma);
    return tdWordLemma;
}


// Returns metadata area for given word
function getWordMetaWidgets(result, index) {
    var wordType;
    var wordMetadata;

    //console.log("result: " + JSON.stringify(result));
    // See what word type should be added
    if (result === '') {
        wordType = document.getElementById("idWordType-main").value;
    } else {
        wordType = result.msd.category;
    }

    switch( wordType ) {
        case CONST_WORD_TYPE_NOUN : // именица
            wordMetadata = getNounWidgets(result, index);
            break;
        case CONST_WORD_TYPE_PRONOUN : // заменица
            wordMetadata = getPronounWidgets(result, index);
            break;
        case CONST_WORD_TYPE_ADJECTIVE : // придев
            wordMetadata = getAdjectiveWidgets(result, index);
            break;
        case CONST_WORD_TYPE_NUMERAL : // број
            wordMetadata = getNumeralWidgets(result, index);
            break;
        case CONST_WORD_TYPE_VERB : // глагол
            wordMetadata = getVerbWidgets(result, index);
            break;
        case CONST_WORD_TYPE_ADVERB : // прилог
            wordMetadata = getAdverbWidgets(result, index);
            break;
        case CONST_WORD_TYPE_PREPOSITION : // предлог
            wordMetadata = getPrepositionWidgets(result, index);
            break;
        case CONST_WORD_TYPE_CONJUNCTION : // везник
            wordMetadata = getConjunctionWidgets(result, index);
            break;
        case CONST_WORD_TYPE_INTERJECTION : // узвик
            wordMetadata = getInterjectionWidgets(result, index);
            break;
        case CONST_WORD_TYPE_PARTICLE : // речца
            wordMetadata = getParticleWidgets(result, index);
            break;
        case CONST_WORD_TYPE_ABBREVIATION : // скраћеница
            wordMetadata = getAbbreviationWidgets(result, index);
            break;
        case CONST_WORD_TYPE_PUNCTUATION : // интерпункција
            wordMetadata = getPunctuationWidgets(result, index);
            break;
        default:
            alert("Непозната врста речи: " + wordType);
            wordMetadata = document.createElement("div");
            break;
    }
    var tdWordMetadata = document.createElement("td");
    tdWordMetadata.className = "clsWordMetadata";
    tdWordMetadata.appendChild(wordMetadata);
    return tdWordMetadata;
}


// Navigational buttons
function getNavButtons() {
    var tdNavButtons = document.createElement("td");
    tdNavButtons.className = "clsColumnNavButtons";
    return tdNavButtons;
}
