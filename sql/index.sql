DROP INDEX IF EXISTS words_lemma_idx;
DROP INDEX IF EXISTS words_wordform_idx;
DROP INDEX IF EXISTS words_wordform_lemma_idx;
DROP INDEX IF EXISTS words_wordform_lemma_msd_idx;

DROP INDEX IF EXISTS multiwords_lemma_idx;
DROP INDEX IF EXISTS multiwords_wordform_idx;
DROP INDEX IF EXISTS multiwords_wordform_lemma_idx;
DROP INDEX IF EXISTS multiwords_wordform_lemma_msd_idx;

CREATE        INDEX words_lemma_idx              ON words (lemma);
CREATE        INDEX words_wordform_idx           ON words (wordform);
CREATE        INDEX words_wordform_lemma_idx     ON words (wordform, lemma);
CREATE UNIQUE INDEX words_wordform_lemma_msd_idx ON words (wordform, lemma, msd);

CREATE        INDEX multiwords_lemma_idx              ON multiwords (lemma);
CREATE        INDEX multiwords_wordform_idx           ON multiwords (wordform);
CREATE        INDEX multiwords_wordform_lemma_idx     ON multiwords (wordform, lemma);
CREATE UNIQUE INDEX multiwords_wordform_lemma_msd_idx ON multiwords (wordform, lemma, msd);

COMMENT ON INDEX words_lemma_idx IS 'Индекс по основним речима.';
COMMENT ON INDEX words_wordform_idx IS 'Индекс по изведеним речима.';
COMMENT ON INDEX words_wordform_lemma_idx IS 'Индекс по основним+изведеним речима.';
COMMENT ON INDEX words_wordform_lemma_msd_idx IS 'Јединствени индекс по изведена+основна+ознака.';

COMMENT ON INDEX multiwords_lemma_idx IS 'Индекс по основним речима.';
COMMENT ON INDEX multiwords_wordform_idx IS 'Индекс по изведеним речима.';
COMMENT ON INDEX multiwords_wordform_lemma_idx IS 'Индекс по основним+изведеним речима.';
COMMENT ON INDEX multiwords_wordform_lemma_msd_idx IS 'Јединствени индекс по изведена+основна+ознака.';

COMMIT;
