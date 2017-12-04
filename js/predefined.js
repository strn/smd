// Functions that depend fill table with predefined values
// Dependency: smd.js

// Fills table with predefined items
function fillWithPredefinedValues(selection, word) {
    //console.log("fillWithPredefinedValues: selection=" + selection + " word=" + word);
    switch (selection) {
        case CONST_ID_PREDEFINED_ITEM_COMMON_NOUN_MASCULINE:
            getCommonNounMasculineItems(word);
            break;
        case CONST_ID_PREDEFINED_ITEM_COMMON_NOUN_FEMININE:
            getCommonNounFeminineItems(word);
            break;
        case CONST_ID_PREDEFINED_ITEM_COMMON_NOUN_NEUTRAL:
            getCommonNounNeutralItems(word);
            break;
        case CONST_ID_PREDEFINED_ITEM_PROPER_NOUN_MASCULINE:
            getProperNounMasculineItems(word);
            break;
        case CONST_ID_PREDEFINED_ITEM_PROPER_NOUN_FEMININE:
            getProperNounFeminineItems(word);
            break;
        case CONST_ID_PREDEFINED_ITEM_PROPER_NOUN_NEUTRAL:
            getProperNounNeutralItems(word);
            break;
        default:
            alert("Избор „" + selection + "“ није имплементиран.");
            break;
    }
}


function getGenericPredefinedItems(msds, word) {
    var result = getEmptyMSD('', word);
    var hiddChanged;
    //console.log("getGenericPredefinedItems: word=" + word + " msds=" + msds);
    for (var i=0; i < msds.length; i++) {
        result.msd = msds[i];
        addWordWidgets(result, i);
        // Mark items added in such way changed so that they can be
        // picked for output generation
        hiddChanged = document.getElementById("idChanged-" + i);
        hiddChanged.value = true;
    }
}

function getCommonNounMasculineItems(word) {
    var msds = [ "Ncmsn", "Ncmsg", "Ncmsd", "Ncmsa", "Ncmsv", "Ncmsi", "Ncmsl",
                 "Ncmpn", "Ncmpg", "Ncmpd", "Ncmpa", "Ncmpv", "Ncmpi", "Ncmpl"];
    getGenericPredefinedItems(msds, word);
}

function getCommonNounFeminineItems(word) {
    var msds = [ "Ncfsn", "Ncfsg", "Ncfsd", "Ncfsa", "Ncfsv", "Ncfsi", "Ncfsl",
                 "Ncfpn", "Ncfpg", "Ncfpd", "Ncfpa", "Ncfpv", "Ncfpi", "Ncfpl"];
    getGenericPredefinedItems(msds, word);
}

function getCommonNounNeutralItems(word) {
    var msds = [ "Ncnsn", "Ncnsg", "Ncnsd", "Ncnsa", "Ncnsv", "Ncnsi", "Ncnsl",
                 "Ncnpn", "Ncnpg", "Ncnpd", "Ncnpa", "Ncnpv", "Ncnpi", "Ncnpl"];
    getGenericPredefinedItems(msds, word);
}

// Filling metadata table with sensible options for proper noun
function getProperNounMasculineItems(word) {
    var msds = [ "Npmsn", "Npmsg", "Npmsd", "Npmsa", "Npmsv", "Npmsi", "Npmsl",
                 "Npmpn", "Npmpg", "Npmpd", "Npmpa", "Npmpv", "Npmpi", "Npmpl" ];
    getGenericPredefinedItems(msds, word);
}

function getProperNounFeminineItems(word) {
    var msds = [ "Npfsn", "Npfsg", "Npfsd", "Npfsa", "Npfsv", "Npfsi", "Npfsl",
                 "Npfpn", "Npfpg", "Npfpd", "Npfpa", "Npfpv", "Npfpi", "Npfpl" ];
    getGenericPredefinedItems(msds, word);
}

function getProperNounNeutralItems(word) {
    var msds = [ "Npnsn", "Npnsg", "Npnsd", "Npnsa", "Npnsv", "Npnsi", "Npnsl",
                 "Npnpn", "Npnpg", "Npnpd", "Npnpa", "Npnpv", "Npnpi", "Npnpl" ];
    getGenericPredefinedItems(msds, word);
}
