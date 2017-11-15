DROP INDEX IF EXISTS lemma_idx;
DROP INDEX IF EXISTS wordform_idx;
DROP INDEX IF EXISTS wordform_lemma_idx;

DROP INDEX IF EXISTS lex_lemma_idx;
DROP INDEX IF EXISTS lex_wordform_idx;
DROP INDEX IF EXISTS lex_wordform_lemma_idx;

DROP INDEX IF EXISTS wic_lemma_idx;
DROP INDEX IF EXISTS wic_wordform_idx;
DROP INDEX IF EXISTS wic_wordform_lemma_idx;

--DROP INDEX IF EXISTS wordform_lemma_msd_idx;

CREATE INDEX lemma_idx          ON words (lemma);
CREATE INDEX wordform_idx       ON words (wordform);
CREATE INDEX wordform_lemma_idx ON words (wordform, lemma);

CREATE INDEX lex_lemma_idx          ON words_lex (lemma);
CREATE INDEX lex_wordform_idx       ON words_lex (wordform);
CREATE INDEX lex_wordform_lemma_idx ON words_lex (wordform, lemma);

CREATE INDEX wic_lemma_idx          ON words_wic (lemma);
CREATE INDEX wic_wordform_idx       ON words_wic (wordform);
CREATE INDEX wic_wordform_lemma_idx ON words_wic (wordform, lemma);

--CREATE UNIQUE INDEX wordform_lemma_msd_idx ON words (wordform, lemma, msd);

COMMENT ON INDEX lemma_idx IS 'Индекс по основним речима.';
COMMENT ON INDEX wordform_idx IS 'Индекс по изведеним речима.';
COMMENT ON INDEX wordform_lemma_idx IS 'Индекс по основним+изведеним речима.';

COMMENT ON INDEX lex_lemma_idx IS 'Индекс по основним речима.';
COMMENT ON INDEX lex_wordform_idx IS 'Индекс по изведеним речима.';
COMMENT ON INDEX lex_wordform_lemma_idx IS 'Индекс по основним+изведеним речима.';

COMMENT ON INDEX wic_lemma_idx IS 'Индекс по основним речима.';
COMMENT ON INDEX wic_wordform_idx IS 'Индекс по изведеним речима.';
COMMENT ON INDEX wic_wordform_lemma_idx IS 'Индекс по основним+изведеним речима.';

--COMMENT ON INDEX wordform_lemma_msd_idx IS 'Јединствени индекс по изведена+основна+ознака.';

COMMIT;
