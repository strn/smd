SET search_path TO serbdic, public;

DROP TABLE IF EXISTS words CASCADE; -- Све речи у једној табели
DROP TABLE IF EXISTS words_lex CASCADE; -- Све речи у једној табели
DROP TABLE IF EXISTS words_wic CASCADE; -- Све речи у једној табели
DROP TABLE IF EXISTS word_sources CASCADE;

DROP TYPE IF EXISTS dialect_enum;

COMMIT;
