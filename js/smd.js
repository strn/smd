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
    var divGenerate = document.getElementById("divGenerate");
    var preOutput = document.getElementById("preOutput");

    resultMessage.innerHTML = "", errorMessage.innerHTML = "";

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Expect JSON array
            var res = JSON.parse(this.responseText);
            if (res.length == 0) {
                resultMessage.innerHTML = "Реч „" + word + "“ није нађена. Ако желите да је додате, изаберите врсту речи и кликните на дугме „Додај“.";
                divAdd.style.display = 'block';
                divGenerate.style.display = 'none';
                divAddWord.innerHTML = '';
                tblWords.innerHTML = '';
                addAddWordWidgets(word);
            } else {
                divAddWord.innerHTML = '';
                tblWords.innerHTML = '';
                createWordsHeader();
                // Loop over results
                for (var i = 0; i < res.length; i++) {
                    //console.log("res[i].wordform: " + res[i].wordform + ", res[i].lemma: " + res[i].lemma + ", res[i].msd: " + res[i].msd);
                    addWordWidgets(res[i], i);
                }
                divGenerate.style.display = 'block';
            }
            inpLemma.value = word;
		}
		if (this.readyState == 4 && this.status == 404) {
			errorMessage.innerHTML = "Дошло је до грешке. Реч „" + word + "“ није нађена.";
		}
        preOutput.innerHTML = '';
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
    btnAddWord.setAttribute( "onclick", "addNonExistentWord('" + word +"')" );
    divAddWord.appendChild(btnAddWord);
}

// Add word that does not exist in database
function addNonExistentWord(word) {
    createWordsHeader();
    // Get word type from main word type selector
    var wordType = document.getElementById("idWordType-main").value;
    result = getEmptyMSD(wordType);
    result.wordform = word;
    result.id = 0;
    addWordWidgets(result, 0);
    disableNewWordFields();
    document.getElementById("divGenerate").style.display = 'block';
}


// Disables "Word type" and "Add" buttons so that
// user can't change word type once he starts
// adding new word data
function disableNewWordFields() {
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
function addWordWidgets(result, index) {
    var rowTr = document.createElement("tr");
    rowTr.id = 'idWordRow-' + index;
    rowTr.className = CONST_TR_CLASS_WORD_ROW;

    // Assemble row together
    var tblWords = document.getElementById("tblWords");
    rowTr.appendChild( getColumnWordForm(result.wordform, index) );
    rowTr.appendChild( getWordMetaWidgets(result, index) );
    rowTr.appendChild( getNavButtons(index) );
    tblWords.appendChild( rowTr );
}


// Adds one row to table with words
function getColumnWordForm(wordForm, index) {

    var inpWordForm = document.createElement("input");
    inpWordForm.className = "clsInputWordForm";
    inpWordForm.id = "idWordForm-" + index;
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
        case CONST_WORD_TYPE_RESIDUAL: // остало
            wordMetadata = getResidualWidgets(result, index);
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
    var dialect = getDialectDropDownBox(result.dialect, index);
    wordMetadata.innerHTML += ' наречје&nbsp;';
    wordMetadata.appendChild(dialect);
    tdWordMetadata.appendChild(wordMetadata);
    return tdWordMetadata;
}


// Navigational buttons
function getNavButtons(index) {
    var btn;
    var tdNavButtons = document.createElement("td");
    tdNavButtons.className = "clsColumnNavButtons";
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "DelDb-" + index;
    checkbox.id = CONST_CHECKBOX_MARK_DELЕТЕ_ID + "-" + index;
    checkbox.setAttribute('onchange', "delRowChanged(this, " + index + ")");
    var label = document.createElement('label')
    label.id = CONST_LABEL_DEL_DB_ID + '-' + index;
    label.setAttribute("for", checkbox.id);
    label.innerHTML = CONST_LABEL_DEL_DB_TEXT;
    tdNavButtons.appendChild(checkbox);
    tdNavButtons.appendChild(label);
    tdNavButtons.innerHTML += '<br/>';
    var btn = document.createElement('input');
    btn.type = 'submit';
    btn.id = 'idBtnAdd-' + index;
    btn.value = ' Додај ред ';
    btn.setAttribute( 'onclick', "addWordRow(" + index + ")" );
    tdNavButtons.appendChild(btn);
    tdNavButtons.innerHTML += '  ';
    var btn = document.createElement('input');
    btn.type = 'submit';
    btn.id = 'idBtnDel-' + index;
    btn.value = ' Избриши ред ';
    btn.setAttribute( 'onclick', "deleteWordRow(this)" );
    tdNavButtons.appendChild(btn);
    return tdNavButtons;
}

// Deletes row in a word table
function deleteWordRow(row){
    var d = row.parentNode.parentNode.rowIndex;
    document.getElementById('tblWords').deleteRow(d);
}

// Create new row in word table. Use current row
// to determine word type
function addWordRow(index) {
    // Get word type from previous row
    var wordType = document.getElementById("idWordType-" + index).value;
    result = getEmptyMSD(wordType);
    // Add lemma, thus helping operator entering text
    result.wordform = document.getElementById("lemma").value;
    addWordWidgets(result, index+1);
}

// Construct empty MSD (except word type)
function getEmptyMSD(wordType) {
    var txt = '{"id":"0","wordform":"","msd":{"category":"' + wordType + '",';

    switch( wordType ) {
        case CONST_WORD_TYPE_NOUN :        // именица
        case CONST_WORD_TYPE_PRONOUN :     // заменица
        case CONST_WORD_TYPE_ADJECTIVE :   // придев
        case CONST_WORD_TYPE_NUMERAL :     // број
        case CONST_WORD_TYPE_VERB :        // глагол
        case CONST_WORD_TYPE_ADVERB :      // прилог
        case CONST_WORD_TYPE_CONJUNCTION : // везник
        case CONST_WORD_TYPE_RESIDUAL:     // остало
        case CONST_WORD_TYPE_PARTICLE :    // речца
            txt = txt + '"type":""}';
            break;
        case CONST_WORD_TYPE_PREPOSITION : // предлог
            txt = txt + '"case":""}';
            break;
        case CONST_WORD_TYPE_INTERJECTION : // узвик
        case CONST_WORD_TYPE_ABBREVIATION : // скраћеница
        case CONST_WORD_TYPE_PUNCTUATION : // интерпункција
            txt = txt + '"dummy":""}';
            break;
        default:
            alert("Непозната врста речи: " + wordType);
            txt = "{}";
            break;
    }
    txt = txt + "}";
    //console.log("Constructed object: "+ txt);
    return JSON.parse(txt);
}

function onLoad() {
    document.getElementById("divGenerate").style.display = 'none';
}

// Reacts on checkbox state
function delRowChanged(checkbox, index) {
    var delDbLabel = document.getElementById(CONST_LABEL_DEL_DB_ID + '-' + index);
    if (checkbox.checked) {
        delDbLabel.style = CONST_LABEL_DEL_DB_STYLE_HIGHLIGHT;
    } else {
        delDbLabel.style = '';
    }
}
