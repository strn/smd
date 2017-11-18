CREATE TYPE dialect_enum AS ENUM ('Е', 'И', 'е', 'и', 'E', 'I', 'e', 'i');

CREATE TABLE IF NOT EXISTS word_sources (
	code VARCHAR (4) PRIMARY KEY,
	description VARCHAR(32),
	url VARCHAR (64) DEFAULT NULL
);

COMMENT ON TABLE  word_sources IS 'Извори речи у српском речнику';
COMMENT ON COLUMN word_sources.code IS 'Шифра извора речи';
COMMENT ON COLUMN word_sources.description IS 'Опис извора речи';
COMMENT ON COLUMN word_sources.url IS 'Место на мрежи';

INSERT INTO word_sources VALUES ('lex', 'Корпус српског језика', '');
INSERT INTO word_sources VALUES ('wic', 'Викиречник српског језика', '');
INSERT INTO word_sources VALUES ('web', 'Мрежна страница за додавање', '');

CREATE TABLE IF NOT EXISTS words (
	id BIGSERIAL PRIMARY KEY,
	wordform VARCHAR (64) NOT NULL,
	lemma VARCHAR (64) NOT NULL,
	msd VARCHAR (8) NOT NULL,
	frequency INTEGER NOT NULL DEFAULT 0,
	source VARCHAR (4) REFERENCES word_sources DEFAULT NULL,
	dialect dialect_enum DEFAULT NULL,
	contributed BOOLEAN DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS words_lex (
	id BIGSERIAL PRIMARY KEY,
	wordform VARCHAR (64) NOT NULL,
	lemma VARCHAR (64) NOT NULL,
	msd VARCHAR (8) NOT NULL,
	frequency INTEGER NOT NULL DEFAULT 0,
	source VARCHAR (4) REFERENCES word_sources DEFAULT 'lex',
	dialect dialect_enum DEFAULT NULL,
	contributed BOOLEAN DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS words_wic (
	id BIGSERIAL PRIMARY KEY,
	wordform VARCHAR (64) NOT NULL,
	lemma VARCHAR (64) NOT NULL,
	msd VARCHAR (8) NOT NULL,
	frequency INTEGER NOT NULL DEFAULT 0,
	source VARCHAR (4) REFERENCES word_sources DEFAULT 'wic',
	dialect dialect_enum DEFAULT NULL,
	contributed BOOLEAN DEFAULT NULL
);

COMMENT ON TABLE  words IS 'Речник српског језика';
COMMENT ON COLUMN words.wordform IS 'Изведена реч';
COMMENT ON COLUMN words.lemma IS 'Основа или корен речи';
COMMENT ON COLUMN words.msd IS 'Ознака по MSD систему';
COMMENT ON COLUMN words.frequency IS 'Учестаност појављивања у тексту';
COMMENT ON COLUMN words.source IS 'Порекло речи (спољашњи извор)';
COMMENT ON COLUMN words.dialect IS 'Дијалект којем реч припада (е: само екавском, и: само ијекавском, NULL-обома)';
COMMENT ON COLUMN words.contributed IS 'TRUE ако је реч приложио сарадник, иначе FALSE/NULL';

COMMENT ON TABLE  words_lex IS 'Речник српског језика (лексички корпус)';
COMMENT ON COLUMN words_lex.wordform IS 'Изведена реч';
COMMENT ON COLUMN words_lex.lemma IS 'Основа или корен речи';
COMMENT ON COLUMN words_lex.msd IS 'Ознака по MSD систему';
COMMENT ON COLUMN words_lex.frequency IS 'Учестаност појављивања у тексту';
COMMENT ON COLUMN words_lex.source IS 'Порекло речи (спољашњи извор)';
COMMENT ON COLUMN words_lex.dialect IS 'Дијалект којем реч припада (е: само екавском, и: само ијекавском, NULL-обома)';
COMMENT ON COLUMN words_lex.contributed IS 'TRUE ако је реч приложио сарадник, иначе FALSE/NULL';

COMMENT ON TABLE  words_wic IS 'Речник српског језика (речи са Википедије)';
COMMENT ON COLUMN words_wic.wordform IS 'Изведена реч';
COMMENT ON COLUMN words_wic.lemma IS 'Основа или корен речи';
COMMENT ON COLUMN words_wic.msd IS 'Ознака по MSD систему';
COMMENT ON COLUMN words_wic.frequency IS 'Учестаност појављивања у тексту';
COMMENT ON COLUMN words_wic.source IS 'Порекло речи (спољашњи извор)';
COMMENT ON COLUMN words_wic.dialect IS 'Дијалект којем реч припада (е: само екавском, и: само ијекавском, NULL-обома)';
COMMENT ON COLUMN words_wic.contributed IS 'TRUE ако је реч приложио сарадник, иначе FALSE/NULL';

COMMIT;
