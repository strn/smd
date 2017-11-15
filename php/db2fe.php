<?php
	// Database to front-end (DB2FE)

	// Function to convert MSD tag to structure used in front-end
	function msd2array($msd) {

		$ret = [];
		if (!isset($msd)) {
			return $ret;
		} else {
			// Find first character od a tag
			$firstchr = substr($msd, 0, 1);
			$rest = str_split(substr($msd, 1));
			$ret[ "category" ] = $firstchr;
		}

		switch ($firstchr) {
			case 'N': // Noun - именица
				$ret = array_merge($ret, _get_noun_tag($rest)); break;
			case 'V': // Verb - глагол
				$ret = array_merge($ret, _get_verb_tag($rest)); break;
			case 'A': // Adjective - придев
				$ret = array_merge($ret, _get_adjective_tag($rest)); break;
			case 'P': // Pronoun - заменица
				$ret = array_merge($ret, _get_pronoun_tag($rest)); break;
			case 'R': // Adverb - прилог
				$ret = array_merge($ret, _get_adverb_tag($rest)); break;
			case 'S': // Preposition - предлог
				$ret = array_merge($ret, _get_adposition_tag($rest)); break;
			case 'C': // Conjunction - везник
				$ret = array_merge($ret, _get_conjunction_tag($rest)); break;
			case 'M': // Numeral - број
				$ret = array_merge($ret, _get_numeral_tag($rest)); break;
			case 'Q': // Particle - речца
				$ret = array_merge($ret, _get_particle_tag($rest)); break;
			case 'X': // Residual - остале речи
				$ret = array_merge($ret, _get_residual_tag($rest)); break;
			default: break;
		}
		return $ret;
	} // end msd2array

	// Noun - именица
	function _get_noun_tag($tagrest) {
		$ret[ 'type'   ] = $tagrest[0];
		$ret[ 'gender' ] = $tagrest[1];
		$ret[ 'number' ] = $tagrest[2];
		$ret[ 'case'   ] = $tagrest[3];
		if (isset($tagrest[4])) {
    		$ret[ 'animate' ] = $tagrest[4];
    	}
		return $ret;
	} // end _get_noun_tag

	// Verb - глагол
	function _get_verb_tag($tagrest) {
		$ret[ 'type' ] = $tagrest[0];
		if (isset($tagrest[1])) {
    		$ret[ 'form' ] = $tagrest[1];
    	}
    	if (isset($tagrest[2])) {
    		$ret[ 'person' ] = $tagrest[2];
    	}
    	if (isset($tagrest[3])) {
    		$ret[ 'number' ] = $tagrest[3];
    	}
    	if (isset($tagrest[4])) {
    		$ret[ 'gender' ] = $tagrest[4];
    	}
    	if (isset($tagrest[5])) {
    		$ret[ 'negative' ] = $tagrest[5];
    	}
		return $ret;
	} // end _get_verb_tag

    // Adjective - A
    function _get_adjective_tag($tagrest) {
    	$ret[ 'type'   ] = $tagrest[0];
    	$ret[ 'degree' ] = $tagrest[1];
    	$ret[ 'gender' ] = $tagrest[2];
    	$ret[ 'number' ] = $tagrest[3];
    	$ret[ 'case'   ] = $tagrest[4];
    	if (isset($tagrest[5])) {
    		$ret[ 'definiteness' ] = $tagrest[5];
    	}
    	if (isset($tagrest[6])) {
    		$ret[ 'animate' ] = $tagrest[6];
    	}
		return $ret;
    } // _get_adjective_tag

    // Pronoun - P
    function _get_pronoun_tag($tagrest) {
    	$ret[ 'type' ] = $tagrest[0];
    	if (isset($tagrest[1])) {
    		$ret[ 'person' ] = $tagrest[1];
    	}
    	if (isset($tagrest[2])) {
    		$ret[ 'gender' ] = $tagrest[2];
    	}
    	if (isset($tagrest[3])) {
    		$ret[ 'number' ] = $tagrest[3];
    	}
    	if (isset($tagrest[4])) {
    		$ret[ 'case' ] = $tagrest[4];
    	}
    	if (isset($tagrest[5])) {
    		$ret[ 'animate' ] = $tagrest[5];
    	}
		return $ret;
    }

    // Adverb - R
    function _get_adverb_tag($tagrest) {
    	$ret[ 'type' ] = $tagrest[0];
    	if (isset($tagrest[1])) {
    		$ret[ 'degree' ] = $tagrest[1];
    	}
		return $ret;
    }

    // Adposition - S
    function _get_adposition_tag($tagrest) {
    	$ret[ 'case' ] = $tagrest[0];
		return $ret;
    }

    // Conjunction - C
    function _get_conjunction_tag($tagrest) {
    	$ret[ 'type' ] = $tagrest[0];
    	if (isset($tagrest[1])) {
    		$ret[ 'formation' ] = $tagrest[1];
    	}
		return $ret;
    }

    // Numeral - M
    function _get_numeral_tag($tagrest) {
    	$ret[ 'form'   ] = $tagrest[0];
    	$ret[ 'type'   ] = $tagrest[1];
    	if (isset($tagrest[2])) {
    		$ret[ 'gender' ] = $tagrest[2];
    	}
    	if (isset($tagrest[3])) {
    		$ret[ 'number' ] = $tagrest[3];
    	}
    	if (isset($tagrest[4])) {
    		$ret[ 'case' ] = $tagrest[4];
    	}
    	if (isset($tagrest[5])) {
    		$ret[ 'animate' ] = $tagrest[5];
    	}
		return $ret;
    }

    // Particle - Q
    function _get_particle_tag($tagrest) {
    	$ret[ 'type' ] = $tagrest[0];
		return $ret;
    }

    // Residual
    function _get_residual_tag($tagrest) {
    	$ret[ 'type' ] = $tagrest[0];
		return $ret;
    }

    function map_result($id, $wordform, $lemma, $msd, $source, $dialect) {
    	$ret[ 'id'       ] = $id;
    	$ret[ 'wordform' ] = $wordform;
    	$ret[ 'lemma'    ] = $lemma;
    	$ret[ 'source'   ] = $source;
    	$ret[ 'dialect'  ] = $dialect;
    	$ret[ 'msd'      ] = msd2array($msd);
    	return $ret;
    }
?>
