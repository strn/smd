// Define various constants
const CONST_UNDEFINED = "undefined";

// Maximal lengths of word form and lemma
const CONST_MAX_LENGTH_LEMMA = 64;
const CONST_MAX_LENGTH_WORDFORM = 64;
const CONST_SIZE_LEMMA = 32;
const CONST_SIZE_WORDFORM = 20;

// Word types
const CONST_WORD_TYPE_NOUN         = "N"; // Noun
const CONST_WORD_TYPE_PRONOUN      = "P"; // Pronoun
const CONST_WORD_TYPE_ADJECTIVE    = "A"; // Adjective
const CONST_WORD_TYPE_NUMERAL      = "M"; // Numeral
const CONST_WORD_TYPE_VERB         = "V"; // Verb
const CONST_WORD_TYPE_ADVERB       = "R"; // Adverb
const CONST_WORD_TYPE_PREPOSITION  = "S"; // Preposition
const CONST_WORD_TYPE_CONJUNCTION  = "C"; // Conjunction
const CONST_WORD_TYPE_INTERJECTION = "I"; // Interjection
const CONST_WORD_TYPE_PARTICLE     = "Q"; // Particle
const CONST_WORD_TYPE_ABBREVIATION = "Y"; // Abbreviation
const CONST_WORD_TYPE_RESIDUAL     = "X"; // Residual
const CONST_WORD_TYPE_PUNCTUATION  = "Z"; // Punctuation

// Case
const CONST_CASE_NOMINATIVE   = "n";
const CONST_CASE_GENITIVE     = "g";
const CONST_CASE_DATIVE       = "d";
const CONST_CASE_ACCUSATIVE   = "a";
const CONST_CASE_VOCATIVE     = "v";
const CONST_CASE_INSTRUMENTAL = "i";
const CONST_CASE_LOCATIVE     = "l";

// Genders
const CONST_GENDER_MASCULINE = "m";
const CONST_GENDER_FEMININE  = "f";
const CONST_GENDER_NEUTRAL   = "n";

// Number
const CONST_NUMBER_SINGULAR = "s";
const CONST_NUMBER_PLURAL = "p";

// Degree
const CONST_DEGREE_POSITIVE    = "p";
const CONST_DEGREE_COMPARATIVE = "c";
const CONST_DEGREE_SUPERLATIVE = "s";

// Dialect
const CONST_DIALECT_EKAVIAN  = "e";
const CONST_DIALECT_IEKAVIAN = "i";
const CONST_DIALECT_ALL      = "";

// Noun types
const CONST_NOUN_TYPE_COMMON     = "c"; // заједничка именица
const CONST_NOUN_TYPE_PROPER     = "p"; // властита именица
const CONST_NOUN_TYPE_COLLECTIVE = "o"; // збирна именица
const CONST_NOUN_TYPE_MASS       = "m"; // градивна именица

// Verb types
const CONST_VERB_TYPE_MAIN      = "m"; // главни
const CONST_VERB_TYPE_AUXILIARY = "a"; // помоћни
const CONST_VERB_TYPE_COPULA    = "c"; // односни
const CONST_VERB_TYPE_REFLEXIVE = "r"; // повратни

// Verb tenses
const CONST_VERB_TENSE_INFINITIVE = "n"; // инфинитив
const CONST_VERB_TENSE_PARTICIPLE = "p"; // партицип
const CONST_VERB_TENSE_PRESENT    = "r"; // презент
const CONST_VERB_TENSE_FUTURE     = "f"; // футур
const CONST_VERB_TENSE_IMPERATIVE = "m"; // императив
const CONST_VERB_TENSE_AORIST     = "a"; // аорист
const CONST_VERB_TENSE_IMPERFECT  = "e"; // имперфект

// Residual types
const CONST_RESIDUAL_TYPE_FOREIGN = "f";
const CONST_RESIDUAL_TYPE_WEB     = "w";
const CONST_RESIDUAL_TYPE_EMO     = "e";
const CONST_RESIDUAL_TYPE_HASHTAG = "h";
const CONST_RESIDUAL_TYPE_AT      = "a";

// Output types
const CONST_OUTPUT_MSD = "msd";
const CONST_OUTPUT_DESCRIPTION = "description";

////////////////////////////////////////////
// GUI constants
////////////////////////////////////////////

// Word row
const CONST_TR_CLASS_WORD_ROW = "clsWordRow";
const CONST_TR_CLASS_COLUMN_ROW_NUMBER = "clsColumnRowNumber";
const CONST_TD_COLUMN_ROW_NUMBER_ID = "idColumnRowNumber";
const CONST_INPUT_WORD_ROW_ID = "wordId";

// Check box for marking records for deletion in database
const CONST_CHECKBOX_MARK_DELЕТЕ_ID = "idDelDb";

// Choice box (drop-down box) constants
const CONST_DROPDOWN_BOX_ONCHANGE_FUNCTION = "ddbox.wordMetaCboxChanged";

// check box label
const CONST_LABEL_DEL_DB_ID = 'idDelDbLabel';
const CONST_LABEL_DEL_DB_TEXT = " Обрисати из базе ";
const CONST_LABEL_DEL_DB_STYLE_HIGHLIGHT = "background-color: red; color: white; font-weight: bold;";
const CONST_LABEL_WORD_TYPE_ID = 'idLblWordType';
const CONST_ID_SEARCH_WIDGETS = 99999;

// General adjectives

// Possessive adjectives
const CONST_ID_PREDEFINED_ITEM_ADJECTIVE_POSSESSIVE_POSITIVE_MASCULINE = "adjectivePossessiveMasculine";
const CONST_ID_PREDEFINED_ITEM_ADJECTIVE_POSSESSIVE_POSITIVE_FEMININE  = "adjectivePossessiveFeminine";
const CONST_ID_PREDEFINED_ITEM_ADJECTIVE_POSSESSIVE_POSITIVE_NEUTRAL   = "adjectivePossessiveNeutral";

const CONST_DDBOX_ID_PREDEFINED_ITEMS = "idPredefinedItems";
