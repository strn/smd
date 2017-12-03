<?php
	// Database to front-end (DB2FE)

    function map_result($id, $wordform, $lemma, $msd, $source, $dialect) {
    	$ret[ 'id'       ] = $id;
    	$ret[ 'wordform' ] = $wordform;
    	$ret[ 'lemma'    ] = $lemma;
    	$ret[ 'source'   ] = $source;
    	$ret[ 'dialect'  ] = $dialect;
    	$ret[ 'msd'      ] = $msd;
    	return $ret;
    }
?>
