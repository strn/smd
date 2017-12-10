CREATE OR REPLACE VIEW ijekavski_vw AS
 SELECT words.wordform,
    words.lemma
   FROM words
  WHERE words.lemma LIKE '%је%'
ORDER BY 2;

COMMENT ON VIEW ijekavski_vw IS 'Речи које у себи садрже групу "-је-" и тиме могу бити ијекавске';

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

CREATE OR REPLACE VIEW sve_imenice_vw AS
    SELECT words.wordform, words.lemma, words.msd
    FROM words
   WHERE words.msd LIKE 'N%'
  ORDER BY words.lemma, words.wordform;

COMMENT ON VIEW sve_imenice_vw IS 'Све именице у речнику';

CREATE OR REPLACE VIEW sve_zamenice_vw AS
    SELECT words.wordform, words.lemma, words.msd
    FROM words
   WHERE words.msd LIKE 'P%'
  ORDER BY words.lemma, words.wordform;

COMMENT ON VIEW sve_zamenice_vw IS 'Све заменице у речнику';

CREATE OR REPLACE VIEW svi_pridevi_vw AS
    SELECT words.wordform, words.lemma, words.msd
    FROM words
   WHERE words.msd LIKE 'A%'
  ORDER BY words.lemma, words.wordform;

COMMENT ON VIEW svi_pridevi_vw IS 'Сви придеви у речнику';

CREATE OR REPLACE VIEW svi_brojevi_vw AS
    SELECT words.wordform, words.lemma, words.msd
    FROM words
   WHERE words.msd LIKE 'M%'
  ORDER BY words.lemma, words.wordform;

COMMENT ON VIEW svi_brojevi_vw IS 'Сви бројеви у речнику';

CREATE OR REPLACE VIEW svi_glagoli_vw AS
    SELECT words.wordform, words.lemma, words.msd
    FROM words
   WHERE words.msd LIKE 'V%'
  ORDER BY words.lemma, words.wordform;

COMMENT ON VIEW svi_glagoli_vw IS 'Сви глаголи у речнику';

CREATE OR REPLACE VIEW svi_prilozi_vw AS
    SELECT words.wordform, words.lemma, words.msd
    FROM words
   WHERE words.msd LIKE 'R%'
  ORDER BY words.lemma, words.wordform;

COMMENT ON VIEW svi_prilozi_vw IS 'Сви прилози у речнику';

CREATE OR REPLACE VIEW svi_predlozi_vw AS
    SELECT words.wordform, words.lemma, words.msd
    FROM words
   WHERE words.msd LIKE 'S%'
  ORDER BY words.lemma, words.wordform;

COMMENT ON VIEW svi_predlozi_vw IS 'Сви предлози у речнику';

CREATE OR REPLACE VIEW svi_veznici_vw AS
    SELECT words.wordform, words.lemma, words.msd
    FROM words
   WHERE words.msd LIKE 'C%'
  ORDER BY words.lemma, words.wordform;

COMMENT ON VIEW svi_veznici_vw IS 'Сви везници у речнику';

CREATE OR REPLACE VIEW svi_uzvici_vw AS
    SELECT words.wordform, words.lemma, words.msd
    FROM words
   WHERE words.msd LIKE 'I%'
  ORDER BY words.lemma, words.wordform;

COMMENT ON VIEW svi_uzvici_vw IS 'Сви узвици у речнику';

CREATE OR REPLACE VIEW sve_retchce_vw AS
    SELECT words.wordform, words.lemma, words.msd
    FROM words
   WHERE words.msd LIKE 'Q%'
  ORDER BY words.lemma, words.wordform;

COMMENT ON VIEW sve_retchce_vw IS 'Сви речце у речнику';
