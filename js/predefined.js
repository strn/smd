// Functions that depend fill table with predefined values
// Dependency: smd.js

var pred = (function(){

    var my = {};

    my.getMap = function(selection) {
        var dataMap = {
            "nounCommonMasculine" : [ "Ncmsn", "Ncmsg", "Ncmsd", "Ncmsa", "Ncmsv", "Ncmsi", "Ncmsl",
                                      "Ncmpn", "Ncmpg", "Ncmpd", "Ncmpa", "Ncmpv", "Ncmpi", "Ncmpl" ],
            "nounCommonFeminine"  : [ "Ncfsn", "Ncfsg", "Ncfsd", "Ncfsa", "Ncfsv", "Ncfsi", "Ncfsl",
                                      "Ncfpn", "Ncfpg", "Ncfpd", "Ncfpa", "Ncfpv", "Ncfpi", "Ncfpl" ],
            "nounCommonNeutral"   : [ "Ncnsn", "Ncnsg", "Ncnsd", "Ncnsa", "Ncnsv", "Ncnsi", "Ncnsl",
                                      "Ncnpn", "Ncnpg", "Ncnpd", "Ncnpa", "Ncnpv", "Ncnpi", "Ncnpl" ],
            "nounProperMasculine" : [ "Npmsn", "Npmsg", "Npmsd", "Npmsa", "Npmsv", "Npmsi", "Npmsl",
                                      "Npmpn", "Npmpg", "Npmpd", "Npmpa", "Npmpv", "Npmpi", "Npmpl" ],
            "nounProperFeminine"  : [ "Npfsn", "Npfsg", "Npfsd", "Npfsa", "Npfsv", "Npfsi", "Npfsl",
                                      "Npfpn", "Npfpg", "Npfpd", "Npfpa", "Npfpv", "Npfpi", "Npfpl" ],
            "nounProperNeutral"   : [ "Npnsn", "Npnsg", "Npnsd", "Npnsa", "Npnsv", "Npnsi", "Npnsl",
                                      "Npnpn", "Npnpg", "Npnpd", "Npnpa", "Npnpv", "Npnpi", "Npnpl" ],

            "adjectiveGeneralPositiveMasculine" :    [ "Agpmsnn", "Agpmsgn", "Agpmsdn", "Agpmsan", "Agpmsvn", "Agpmsin", "Agpmsln",
                                                       "Agpmpnn", "Agpmpgn", "Agpmpdn", "Agpmpan", "Agpmpvn", "Agpmpin", "Agpmpln" ],
            "adjectiveGeneralComparativeMasculine" : [ "A" ],
            "adjectiveGeneralSuperlativeMasculine" : [ "A" ],

            "adjectiveGeneralPositiveFeminine"     : [ "A" ],
            "adjectiveGeneralComparativeFeminine"  : [ "A" ],
            "adjectiveGeneralSuperlativeFeminine"  : [ "A" ],

            "adjectiveGeneralPositiveNeutral"      : [ "A" ],
            "adjectiveGeneralComparativeNeutral"   : [ "A" ],
            "adjectiveGeneralSuperlativeNeutral"   : [ "A" ],

            "adjectivePossessiveMasculinePositive"    : [ "A" ],
            "adjectivePossessiveMasculineComparative" : [ "A" ],
            "adjectivePossesiveMasculineSuperlative"  : [ "A" ],

            "adjectivePossessiveFemininePositive"    : [ "A" ],
            "adjectivePossessiveFeminineComparative" : [ "A" ],
            "adjectivePossessiveFeminineSuperlative" : [ "A" ],

            "adjectivePossessiveNeutralPositive"    : [ "A" ],
            "adjectivePossessiveNeutralComparative" : [ "A" ],
            "adjectivePossessiveNeutralSuperlative" : [ "A" ],
        };
        return dataMap[ selection ];
    };

    // Generic function for filling table with rows of word data
    my.getGenericPredefinedItems = function (msds, word) {
        var result = getEmptyMSD('', word);
        var hiddChanged;
        //console.log("getGenericPredefinedItems: word=" + word + " msds=" + msds);
        for (var i=0; i < msds.length; i++) {
            result.msd = msds[i];
            //console.log("i=" + i + ", result=" + JSON.stringify(result));
            addWordWidgets(result, i);
            // Mark items added in such way changed so that they can be
            // picked for output generation
            hiddChanged = document.getElementById("idChanged-" + i);
            hiddChanged.value = true;
        }
    };

    // Fills table with predefined items
    my.fillWithPredefinedValues = function (selection, word) {
        var msds = my.getMap(selection);
        //console.log("fillWithPredefinedValues: selection=" + selection + ", word=" + word + ", map=" + msds);

        if (msds !== CONST_UNDEFINED && msds !== "") {
            my.getGenericPredefinedItems(msds, word);
        } else {
            alert("Избор „" + selection + "“ није имплементиран.");
        }
    };

    return my;
}());

