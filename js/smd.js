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
    var selWordType = document.getElementById("idSelWordType").value;
    var body = document.getElementById("idBody");
    var result = {};

    resultMessage.innerHTML = "", errorMessage.innerHTML = "";

    xhttp.onreadystatechange = function() {
        body.style.cursor = "default";
        if (this.readyState == 4 && this.status == 200) {
            // Expect JSON array
            var res = JSON.parse(this.responseText);
            //console.log("Response: " + res);
            if (res.length == 0) {
                resultMessage.innerHTML = "Реч „" + word + "“ не постоји у речнику. ";
                resultMessage.innerHTML += "Ако желите да је додате, изаберите врсту речи и кликните на дугме „Додај“. ";
                resultMessage.innerHTML += "Такође, можете да изаберете „пречицу“ из понуђене листе претходно дефинисаних ставки.";
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
        if (selWordType === '') {
            result.msd = '';
            result.dialect = '';
        } else {
            result = JSON.parse(meta.getRowMetadata(selWordType, CONST_ID_SEARCH_WIDGETS));
        }
        //console.log("result: " + JSON.stringify(result));
        var msd = result.msd.replace(/\-/g, "_") + "%";
        //console.log("getWord: word=" + word.trim() + " original msd=" + result.msd + " msd=" + msd + " dialect=" + result.dialect);
    	xhttp.open("GET", "/php/smd/findword.php?word=" + word.trim() + "&msd=" + msd + "&dialect=" + result.dialect, true);
    	xhttp.send();
        body.style.cursor = "progress";
    }
}

// Creates widgets for adding word
function addAddWordWidgets(word) {
    var divAddWord = document.getElementById("divAddWord");
    divAddWord.innerHTML += 'Врста речи&nbsp;';
    var ddbWordType = ddbox.getWordType({selected: "N", index:"main"});
    divAddWord.appendChild(ddbWordType);
    divAddWord.innerHTML += '&nbsp;';

    var btnAddWord = document.createElement("input");
    btnAddWord.id = "idBtnAddWord";
    btnAddWord.type = "submit";
    btnAddWord.value = " Додај ";
    btnAddWord.setAttribute( "onclick", "addNonExistentWord('" + word +"')" );
    divAddWord.appendChild(btnAddWord);
    divAddWord.innerHTML += '&nbsp;Раније дефинисане ставке&nbsp;';

    divAddWord.appendChild(ddbox.getPredefinedItems());
}


// Add word that does not exist in database
function addNonExistentWord(word) {
    var ddboxPredefined = document.getElementById(CONST_DDBOX_ID_PREDEFINED_ITEMS + "-" + CONST_ID_SEARCH_WIDGETS);
    createWordsHeader();
    // See if user picked predefined item
    if (ddboxPredefined.value === "") {
        // Get word type from main word type selector
        var wordType = document.getElementById("idWordType-main").value;
        result = getEmptyMSD(wordType, word);
        //console.log("addNonExistentWord: result=" + JSON.stringify(result));
        addWordWidgets(result, 0);
        var hiddChanged = document.getElementById("idChanged-0");
        hiddChanged.value = true;

    } else {
        fillWithPredefinedValues(ddboxPredefined.value, word);
    }
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
    th.innerHTML = "#";
    tr.appendChild(th);
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
    rowTr.appendChild( getRowNumber(index) );
    rowTr.appendChild( getColumnWordForm(result.wordform, index) );
    rowTr.appendChild( getColumnWordMetaWidgets(result, index) );
    rowTr.appendChild( getNavButtons(index) );
    tblWords.appendChild( rowTr );
}

// Get column representing metawidgets for certain word
function getColumnWordMetaWidgets(result, index) {
    var tdWordMetadata = document.createElement("td");
    tdWordMetadata.className = "clsWordMetadata";
    tdWordMetadata.appendChild(getWordMetaWidgets(result, index));
    return tdWordMetadata;
}

// Creates table cell holding a number equivalent to "index+1"
function getRowNumber(index) {
    var tdRowNumber = document.createElement("td");
    tdRowNumber.id = CONST_TD_COLUMN_ROW_NUMBER_ID + "-" + index;
    tdRowNumber.className = CONST_TR_CLASS_COLUMN_ROW_NUMBER;
    tdRowNumber.innerHTML = (index+1); // We need "1" rather than "01"
    return tdRowNumber;
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
    inpWordForm.setAttribute("onkeydown", "onWordFormChange(this," + index + ")");

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
    var context = {msd : result.msd, index : index, dbId : result.id};
    context.onchange = CONST_DROPDOWN_BOX_ONCHANGE_FUNCTION + "(this," + index + ")";
    // See what word type should be added
    //console.log("getWordMetaWidgets: result=" + JSON.stringify(result));
    if (result === '') {
        wordType = document.getElementById("idSelWordType").value;
    } else {
        wordType = result.msd[0];
    }

    switch( wordType ) {
        case CONST_WORD_TYPE_NOUN : // именица
            wordMetadata = meta.getNounWidgets(context);
            break;
        case CONST_WORD_TYPE_PRONOUN : // заменица
            wordMetadata = meta.getPronounWidgets(context);
            break;
        case CONST_WORD_TYPE_ADJECTIVE : // придев
            wordMetadata = meta.getAdjectiveWidgets(context);
            break;
        case CONST_WORD_TYPE_NUMERAL : // број
            wordMetadata = meta.getNumeralWidgets(context);
            break;
        case CONST_WORD_TYPE_VERB : // глагол
            wordMetadata = meta.getVerbWidgets(context);
            break;
        case CONST_WORD_TYPE_ADVERB : // прилог
            wordMetadata = meta.getAdverbWidgets(context);
            break;
        case CONST_WORD_TYPE_PREPOSITION : // предлог
            wordMetadata = meta.getPrepositionWidgets(context);
            break;
        case CONST_WORD_TYPE_CONJUNCTION : // везник
            wordMetadata = meta.getConjunctionWidgets(context);
            break;
        case CONST_WORD_TYPE_INTERJECTION : // узвик
            wordMetadata = meta.getInterjectionWidgets(context);
            break;
        case CONST_WORD_TYPE_PARTICLE : // речца
            wordMetadata = meta.getParticleWidgets(context);
            break;
        case CONST_WORD_TYPE_ABBREVIATION : // скраћеница
            wordMetadata = meta.getAbbreviationWidgets(context);
            break;
        case CONST_WORD_TYPE_RESIDUAL: // остало
            wordMetadata = meta.getResidualWidgets(context);
            break;
        case CONST_WORD_TYPE_PUNCTUATION : // интерпункција
            wordMetadata = meta.getPunctuationWidgets(context);
            break;
        default:
            alert("Непозната врста речи: " + wordType);
            wordMetadata = document.createElement("div");
            break;
    }
    context.selected = result.dialect;
    var dialect = ddbox.getDialect(context);
    wordMetadata.innerHTML += ' наречје&nbsp;';
    wordMetadata.appendChild(dialect);
    return wordMetadata;
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
    checkbox.setAttribute('onchange', "delDbRowChanged(this, " + index + ")");
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
    var result = JSON.parse(meta.getRowMetadata(wordType, index));
    // Add lemma as word form, thus helping operator entering data
    result.wordform = document.getElementById("lemma").value;
    result.id = 0;
    //console.log("addWordRow: result="+ JSON.stringify(result));
    // Add row with index equal to number of rows in table
    var tableRows = document.getElementById("tblWords").rows.length-1;
    //addWordWidgets(result, index+1);
    addWordWidgets(result, tableRows);
    //var hiddChanged = document.getElementById("idChanged-" + (index+1));
    var hiddChanged = document.getElementById("idChanged-" + tableRows);
    hiddChanged.value = true;
}


// Construct empty MSD (except for word type)
function getEmptyMSD(wordType, word) {
    var txt = '{"id":"0","wordform":"' + word + '","msd":"' + wordType + '"}';
    //console.log("getEmptyMSD: "+ txt);
    return JSON.parse(txt);
}

function onLoad() {
    document.getElementById("divGenerate").style.display = 'none';
    document.getElementById("idSearchWidgets").innerHTML = '';
}


// Reacts on checkbox state
function delDbRowChanged(checkbox, index) {
    var delDbLabel = document.getElementById(CONST_LABEL_DEL_DB_ID + '-' + index);
    if (checkbox.checked) {
        delDbLabel.style = CONST_LABEL_DEL_DB_STYLE_HIGHLIGHT;
    } else {
        delDbLabel.style = '';
    }
}

function onWordFormChange(textfield, index) {
    //console.log("onWordFormChange: index " + index);
    var hiddChanged = document.getElementById("idChanged-" + index);
    hiddChanged.value = true;
}

// Function handles press on ENTER key in field for word search
function handleEnter(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        getWord();
    }
}

// Fired on change in word type dropdown box, generating search widgets
function wordTypeSelected(ddbox) {
    var div = document.getElementById("idSearchWidgets");
    var w, mw;
    var ddValue = ddbox.value;
    if (ddValue !== '') {
        result = getEmptyMSD(ddValue, '');
        mw = getWordMetaWidgets(result, CONST_ID_SEARCH_WIDGETS);
        div.innerHTML = mw.innerHTML;
        w = document.getElementById(CONST_LABEL_WORD_TYPE_ID + "-" + CONST_ID_SEARCH_WIDGETS);
        w.style.display = 'none';
        w = document.getElementById("idWordType-" + CONST_ID_SEARCH_WIDGETS);
        w.style.display = 'none';
    } else {
        div.innerHTML = '';
    }
}
