// Gathers input as a string
function gatherInput() {
    var tbl = document.getElementById("tblWords");
    var msd, wordType, wordForm, id, dialect, index, description;
    var output = "=========== ОДАВДЕ КОПИРАТИ ===========\n"; // Gather all output here
    var lemma = document.getElementById("lemma").value;

    // Skip header, so we start counting rows from 1
    for (var i = 1; i < tbl.rows.length; i++) {

        // Get word data in current row
        index = i-1;
        id = document.getElementById("id-" + index).value;
        wordForm = document.getElementById("idWordForm-" + index).value;
        wordType = document.getElementById("idWordType-" + index).value;
        dialect = getDialect(CONST_OUTPUT_MSD, index);

        // Determine what other elements to get
        switch( wordType ) {
            case CONST_WORD_TYPE_NOUN : // именица
                msd = getNoun(CONST_OUTPUT_MSD, index);
                description = getNoun(CONST_OUTPUT_DESCRIPTION, index);
                break;
            case CONST_WORD_TYPE_PRONOUN : // заменица
                msd = getPronoun(CONST_OUTPUT_MSD, index);
                description = getPronoun(CONST_OUTPUT_DESCRIPTION, index);
                break;
            case CONST_WORD_TYPE_ADJECTIVE : // придев
                msd = getAdjective(CONST_OUTPUT_MSD, index);
                description = getAdjective(CONST_OUTPUT_DESCRIPTION, index);
                break;
            case CONST_WORD_TYPE_NUMERAL : // број
                msd = getNumeral(CONST_OUTPUT_MSD, index);
                description = getNumeral(CONST_OUTPUT_DESCRIPTION, index);
                break;
            case CONST_WORD_TYPE_VERB : // глагол
                msd = getVerb(CONST_OUTPUT_MSD, index);
                description = getVerb(CONST_OUTPUT_DESCRIPTION, index);
                break;
            case CONST_WORD_TYPE_ADVERB : // прилог
                msd = getAdverb(CONST_OUTPUT_MSD, index);
                description = getAdverb(CONST_OUTPUT_DESCRIPTION, index);
                break;
            case CONST_WORD_TYPE_PREPOSITION : // предлог
                msd = getPreposition(CONST_OUTPUT_MSD, index);
                description = getPreposition(CONST_OUTPUT_DESCRIPTION, index);
                break;
            case CONST_WORD_TYPE_CONJUNCTION : // везник
                msd = getConjunction(CONST_OUTPUT_MSD, index);
                description = getConjunction(CONST_OUTPUT_DESCRIPTION, index);
                break;
            case CONST_WORD_TYPE_INTERJECTION : // узвик
            case CONST_WORD_TYPE_ABBREVIATION : // скраћеница
            case CONST_WORD_TYPE_PUNCTUATION : // интерпункција
                msd = "";
                description = "Нема описа";
                break;
            case CONST_WORD_TYPE_RESIDUAL : // остало
                msd = getResidual(CONST_OUTPUT_MSD, index);
                description = getResidual(CONST_OUTPUT_DESCRIPTION, index);
                break;
            case CONST_WORD_TYPE_PARTICLE : // речца
                msd = getParticle(CONST_OUTPUT_MSD, index);
                description = getParticle(CONST_OUTPUT_DESCRIPTION, index);
                break;
            default:
                msd = "Непознато";
                description = "Нема описа";
                break;
        }
        output += id + "|" + wordForm + "|" + lemma + "|" + wordType + msd + "|" + dialect + "|\n";
        output += "-- " + description + ", наречје: " + getDialect(CONST_OUTPUT_DESCRIPTION, index) + "\n";
    }
    //console.log(output);
    output += "=========== ДОВДЕ КОПИРАТИ ===========";
    return output;
}


// именица
function getNoun(type, index) {
    return getGenericData( type, ["NounType", "Gender", "Number", "Case", "Animate"], index);
}


// заменица
function getPronoun(type, index) {
    return getGenericData( type, ["PronounType", "Person", "Gender", "Number", "Case", "Animate"], index );
}


// придев
function getAdjective(type, index) {
    return getGenericData( type, ["AdjectiveType", "AdjectiveDegree", "Gender", "Number", "Case", "Definiteness", "Animate"], index);
}


// број
function getNumeral(type, index) {
    return getGenericData( type, ["NumeralForm", "NumeralType", "Gender", "Number", "Case", "Animate"], index);
}


// глагол
function getVerb(type, index) {
    return getGenericData( type, ["VerbType", "VerbTense", "Person", "Number", "Gender", "VerbNegate"], index);
}


// прилог
function getAdverb(type, index) {
    return getGenericData( type, ["AdverbType", "AdverbDegree"], index);
}


// предлог
function getPreposition(type, index) {
    return getGenericData( type, ["PrepositionCase"], index);
}


// везник
function getConjunction(type, index) {
    return getGenericData( type, ["ConjunctionType"], index);
}


// речца
function getParticle(type, index) {
    return getGenericData( type, ["ParticleType"], index);
}


// остало
function getResidual(type, index) {
    return getGenericData( type, ["ResidualType"], index);
}


// Get generic MSD. Input is array containing
// partial IDs for elements
function getGenericData(type, arr, index) {
    var ret = "";
    var sel;
    var wordType = getWordType(index);

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
        return stripRightDashes(ret);
    } else {
        return wordType + " " + ret;
    }
}


function getWordType(index) {
    var sel = document.getElementById( "idWordType-" + index );
    return sel.options[sel.selectedIndex].text;
}


function getDialect(type, index) {
    var sel = document.getElementById("idDialect-" + index);
    if (type === CONST_OUTPUT_MSD) {
        return sel.value;
    } else if (type === CONST_OUTPUT_DESCRIPTION) {
        return sel.options[sel.selectedIndex].text;
    } else {
        return "";
    }
}


// Strips longest uninterrupted dash substring
// from right
function stripRightDashes(str) {
    // TODO
    return str;
}


// Displays gathered input
function displayEntries() {
    var ret = gatherInput();
    var pre = document.getElementById("preOutput");
    pre.innerHTML = ret;
}


// Sends gathered input via email
function sendEntriesByEmail() {
    // body...
}
