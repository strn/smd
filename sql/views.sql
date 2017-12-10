CREATE OR REPLACE VIEW ijekavski_vw AS
 SELECT words.wordform,
    words.lemma
   FROM words
  WHERE words.lemma LIKE '%је%'
ORDER BY 2;

COMMENT ON VIEW ijekavski_vw IS 'Речи које у себи садрже групу "-је-" и тиме могу бити ијекавске';

/*CREATE OR REPLACE VIEW lex_unique_lemmas_vw AS
 SELECT DISTINCT words_lex.lemma
   FROM words_lex
  ORDER BY 1;

COMMENT ON VIEW lex_unique_lemmas_vw IS 'Јединствене речи у корпусу';

CREATE OR REPLACE VIEW wic_unique_lemmas_vw AS
 SELECT DISTINCT words_wic.lemma
   FROM words_wic
  ORDER BY 1;

COMMENT ON VIEW wic_unique_lemmas_vw IS 'Јединствене речи са Википедије';

CREATE OR REPLACE VIEW wic_not_in_lex_vw AS
	SELECT t.wordform, t.lemma, t.msd, t.frequency, t.source FROM (
 		SELECT words_wic.wordform, words_wic.lemma, words_wic.msd, words_wic.frequency, words_wic.source
 		  FROM words_wic
 		 WHERE words_wic.lemma NOT IN (select distinct words_lex.lemma from words_lex)
 	) AS t ORDER BY t.lemma;

COMMENT ON VIEW wic_not_in_lex_vw IS 'Речи са Википедије које нису у корпусу';*/


CREATE OR REPLACE VIEW ekavian_synth_dict_vw AS
	SELECT words.wordform, words.lemma, words.msd, words.frequency
	  FROM words
	 WHERE words.dialect IN ('e', 'E', 'е', 'Е', 's', 'S', 'с', 'С')
  ORDER BY words.wordform;

COMMENT ON VIEW ekavian_synth_dict_vw IS 'Екавски синтетички речник';

CREATE OR REPLACE VIEW ekavian_hunspell_dict_vw AS
	SELECT DISTINCT words.wordform
	  FROM words
	 WHERE words.dialect IN ('e', 'E', 'е', 'Е', 's', 'S', 'с', 'С')
  ORDER BY words.wordform;

COMMENT ON VIEW ekavian_hunspell_dict_vw IS 'Екавски HUNSPELL речник';

CREATE OR REPLACE VIEW jekavian_synth_dict_vw AS
    SELECT words.wordform, words.lemma, words.msd, words.frequency
	  FROM words
	 WHERE words.dialect IN ('i', 'I', 'и', 'И', 's', 'S', 'с', 'С')
  ORDER BY words.wordform;

COMMENT ON VIEW jekavian_synth_dict_vw IS 'Ијекавски синтетички речник';

CREATE OR REPLACE VIEW jekavian_hunspell_dict_vw AS
    SELECT DISTINCT words.wordform
	  FROM words
	 WHERE words.dialect IN ('i', 'I', 'и', 'И', 's', 'S', 'с', 'С')
  ORDER BY words.wordform;

COMMENT ON VIEW jekavian_hunspell_dict_vw IS 'Ијекавски HUNSPELL речник';
