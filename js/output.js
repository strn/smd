// Gathers input as a string
function gatherInput() {
    var msd, wordType, wordForm, id, dialect, index, description, delInDb, hiddChanged, result;
    var output = "=========== ОДАВДЕ КОПИРАТИ ===========\n"; // Gather all output here
    var lemma = document.getElementById("lemma").value;
    var wordRowIds = document.getElementsByName(CONST_INPUT_WORD_ROW_ID);

    /*for (var i = 0; i < wordRowIds.length; i++) {
        index = wordRowIds[i].id.split("-")[1]; // id-0, id-1 ...
        console.log("i=" + i + ", id=" + wordRowIds[i].id + ", index=" + index);
    }*/

    for (var i = 0; i < wordRowIds.length; i++) {
        // Get word data in current row
        index = wordRowIds[i].id.split("-")[1]; // id-0, id-1 ...
        // We must skip widget hidden in row with search widgets
        if (index == CONST_ID_SEARCH_WIDGETS) {
            continue;
        }
        id = document.getElementById("id-" + index).value;
        wordForm = document.getElementById("idWordForm-" + index).value;
        wordType = document.getElementById("idWordType-" + index).value;
        delInDb = document.getElementById(CONST_CHECKBOX_MARK_DELЕТЕ_ID + "-" + index).checked;
        hiddChanged = document.getElementById("idChanged-" + index).value;

        // Determine what other elements to get
        result = JSON.parse(meta.getRowMetadata(wordType, index));
        // Check if row is marked for deletion
        if (delInDb && id !== "0") {
            output += "БРИСАТИ " + id + "\n";
            output += "-- " + result.description.trim() + ", " + getDialectVerbal(result.dialect, index) + " (" + lemma + ", " + wordForm +")\n";
        } else {
            if (hiddChanged == 'true') { // hidden input type, hence must compare with string
                output += id + "|" + wordForm + "|" + lemma + "|" + result.msd + "|" + result.dialect + "|\n";
                output += "-- " + result.description + ", " + getDialectVerbal(result.dialect, index) + "\n";
            }
        }
    }
    //console.log(output);
    output += "=========== ДОВДЕ КОПИРАТИ ===========";
    return output;
}


// Returns human-readable description of selected dialect value
function getDialectVerbal(dialect, index) {
    var dialectText = meta.getDialect(CONST_OUTPUT_DESCRIPTION, index);
    if (dialect === CONST_DIALECT_ALL) {
        return dialectText + " наречја";
    } else if (dialect === CONST_DIALECT_EKAVIAN || dialect === CONST_DIALECT_IEKAVIAN) {
        return dialectText + " наречјe";
    } else {
        return "Непознати дијалект";
    }
}


// Displays gathered input in pre-formatted area
function displayEntries() {
    var ret = gatherInput();
    var pre = document.getElementById("preOutput");
    pre.innerHTML = ret;
}


function sendEntries() {

    var xhttp = new XMLHttpRequest();
    var preOutputText = document.getElementById("preOutput").innerHTML;
    var resultMessage = document.getElementById("resultMessage");
    var lemma = document.getElementById("lemma").value;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Подаци су успешно пренети.");
            //resultMessage.innerHTML = this.responseText;
        }
        if (this.readyState == 4 && this.status == 404) {
            alert("Дошло је до грешке приликом слања.");
        }
    };

    if (preOutputText.length === 0) {
        alert("Притисните прво дугме 'Прикажи ставке за базу података'.");
    } else {
        xhttp.open("POST", "/php/smd/collect.php", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("data=" + preOutputText + "&lemma=" + lemma);
    }
}
