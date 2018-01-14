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
            "adjectiveGeneralComparativeMasculine" : [ "Agcmsnn", "Agcmsgn", "Agcmsdn", "Agcmsan", "Agcmsvn", "Agcmsin", "Agcmsln",
                                                       "Agcmpnn", "Agcmpgn", "Agcmpdn", "Agcmpan", "Agcmpvn", "Agcmpin", "Agcmpln" ],
            "adjectiveGeneralSuperlativeMasculine" : [ "Agsmsnn", "Agsmsgn", "Agsmsdn", "Agsmsan", "Agsmsvn", "Agsmsin", "Agsmsln",
                                                       "Agsmpnn", "Agsmpgn", "Agsmpdn", "Agsmpan", "Agsmpvn", "Agsmpin", "Agsmpln" ],

            "adjectiveGeneralPositiveFeminine"     : [ "Agpfsnn", "Agpfsgn", "Agpfsdn", "Agpfsan", "Agpfsvn", "Agpfsin", "Agpfsln",
                                                       "Agpfpnn", "Agpfpgn", "Agpfpdn", "Agpfpan", "Agpfpvn", "Agpfpin", "Agpfpln" ],
            "adjectiveGeneralComparativeFeminine"  : [ "Agcfsnn", "Agcfsgn", "Agcfsdn", "Agcfsan", "Agcfsvn", "Agcfsin", "Agcfsln",
                                                       "Agcfpnn", "Agcfpgn", "Agcfpdn", "Agcfpan", "Agcfpvn", "Agcfpin", "Agcfpln" ],
            "adjectiveGeneralSuperlativeFeminine"  : [ "Agsfsnn", "Agsfsgn", "Agsfsdn", "Agsfsan", "Agsfsvn", "Agsfsin", "Agsfsln",
                                                       "Agsfpnn", "Agsfpgn", "Agsfpdn", "Agsfpan", "Agsfpvn", "Agsfpin", "Agsfpln" ],

            "adjectiveGeneralPositiveNeutral"      : [ "Agpnsnn", "Agpnsgn", "Agpnsdn", "Agpnsan", "Agpnsvn", "Agpnsin", "Agpnsln",
                                                       "Agpnpnn", "Agpnpgn", "Agpnpdn", "Agpnpan", "Agpnpvn", "Agpnpin", "Agpnpln" ],
            "adjectiveGeneralComparativeNeutral"   : [ "Agcnsnn", "Agcnsgn", "Agcnsdn", "Agcnsan", "Agcnsvn", "Agcnsin", "Agcnsln",
                                                       "Agcnpnn", "Agcnpgn", "Agcnpdn", "Agcnpan", "Agcnpvn", "Agcnpin", "Agcnpln" ],
            "adjectiveGeneralSuperlativeNeutral"   : [ "Agsnsnn", "Agsnsgn", "Agsnsdn", "Agsnsan", "Agsnsvn", "Agsnsin", "Agsnsln",
                                                       "Agsnpnn", "Agsnpgn", "Agsnpdn", "Agsnpan", "Agsnpvn", "Agsnpin", "Agsnpln" ],

            "adjectivePossessiveMasculinePositive"    : [ "Aspmsnn", "Aspmsgn", "Aspmsdn", "Aspmsan", "Aspmsvn", "Aspmsin", "Aspmsln",
                                                          "Aspmpnn", "Aspmpgn", "Aspmpdn", "Aspmpan", "Aspmpvn", "Aspmpin", "Aspmpln" ],
            "adjectivePossessiveMasculineComparative" : [ "Ascmsnn", "Ascmsgn", "Ascmsdn", "Ascmsan", "Ascmsvn", "Ascmsin", "Ascmsln",
                                                          "Ascmpnn", "Ascmpgn", "Ascmpdn", "Ascmpan", "Ascmpvn", "Ascmpin", "Ascmpln" ],
            "adjectivePossesiveMasculineSuperlative"  : [ "Assmsnn", "Assmsgn", "Assmsdn", "Assmsan", "Assmsvn", "Assmsin", "Assmsln",
                                                          "Assmpnn", "Assmpgn", "Assmpdn", "Assmpan", "Assmpvn", "Assmpin", "Assmpln" ],

            "adjectivePossessiveFemininePositive"     : [ "Aspfsnn", "Aspfsgn", "Aspfsdn", "Aspfsan", "Aspfsvn", "Aspfsin", "Aspfsln",
                                                          "Aspfpnn", "Aspfpgn", "Aspfpdn", "Aspfpan", "Aspfpvn", "Aspfpin", "Aspfpln" ],
            "adjectivePossessiveFeminineComparative"  : [ "Ascfsnn", "Ascfsgn", "Ascfsdn", "Ascfsan", "Ascfsvn", "Ascfsin", "Ascfsln",
                                                          "Ascfpnn", "Ascfpgn", "Ascfpdn", "Ascfpan", "Ascfpvn", "Ascfpin", "Ascfpln" ],
            "adjectivePossessiveFeminineSuperlative"  : [ "Assfsnn", "Assfsgn", "Assfsdn", "Assfsan", "Assfsvn", "Assfsin", "Assfsln",
                                                          "Assfpnn", "Assfpgn", "Assfpdn", "Assfpan", "Assfpvn", "Assfpin", "Assfpln" ],

            "adjectivePossessiveNeutralPositive"    : [ "Aspnsnn", "Aspnsgn", "Aspnsdn", "Aspnsan", "Aspnsvn", "Aspnsin", "Aspnsln",
                                                        "Aspnpnn", "Aspnpgn", "Aspnpdn", "Aspnpan", "Aspnpvn", "Aspnpin", "Aspnpln" ],
            "adjectivePossessiveNeutralComparative" : [ "Ascnsnn", "Ascnsgn", "Ascnsdn", "Ascnsan", "Ascnsvn", "Ascnsin", "Ascnsln",
                                                        "Ascnpnn", "Ascnpgn", "Ascnpdn", "Ascnpan", "Ascnpvn", "Ascnpin", "Ascnpln" ],
            "adjectivePossessiveNeutralSuperlative" : [ "Assnsnn", "Assnsgn", "Assnsdn", "Assnsan", "Assnsvn", "Assnsin", "Assnsln",
                                                        "Assnpnn", "Assnpgn", "Assnpdn", "Assnpan", "Assnpvn", "Assnpin", "Assnpln" ],
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

