<?php
	require("config.php"); // Configuration
	require("db2fe.php"); // Load function to convert MSD tag

	// Function determines what query to return
	// based on arguments passed
	function get_query_params($word, $msd, $dialect, $myconfig) {
		$retArr = array(':lemma' => $word);
		if ($msd != null) {
			$retArr[ ':msd' ] = $msd;
			if ($dialect != null) {
				$retArr[ ':dialect' ] = $dialect;
				return array( $myconfig[ 'qry_lemma_msd_dialect' ], $retArr );
			} else {
				return array( $myconfig[ 'qry_lemma_msd' ], $retArr );
			}
		} else {
			if ($dialect != null) {
				$retArr[ ':dialect' ] = $dialect;
				return array( $myconfig[ 'qry_lemma_dialect' ], $retArr );
			} else {
				return array( $myconfig[ 'qry_lemma_only' ], $retArr );
			}
		}
	}

	// Main program

	$method = $_SERVER['REQUEST_METHOD'] ?? '';
	if ($method == '') {
		echo "\$_SERVER undefined, aborting ...\n";
		return;
	} else {
		switch($method) {
			case 'GET': $request = &$_GET; break;
			case 'POST': echo "I don't serve POST request.\n"; return;
			default: echo 'Unknown request method $method, aborting ...\n'; return;
		}
	}

	// Get script parameters
	$word = trim($request['word']);
	if ($word == null) {
		header('X-Input-Word: null', true, 404);
		return;
	}

	// Word is OK, get other parameters
	$msd = $request['msd'];
	$dialect = $request['dialect'];
	$searchType = $request['search'];

	// Based on search type load configuration
	if ($searchType == 's') {
		$config = $config_single_word;
	} else {
		$config = $config_multi_words;
	}

	// Appropriate configuration is loaded; check word
	if ( ! preg_match($config['regex_input'], $word) ) {
		header("X-Invalid-Input-Word: " . $word, true, 404);
		return;
	}

	$connstr = 'pgsql:dbname=' . $config_common['dbname'] . ';user=' . $config_common[ 'user' ];
	$connstr = $connstr . ';host=' . $config_common[ 'host' ] . ';port=' . $config_common[ 'port' ];
	$pdo = new PDO($connstr);

	$qry_params = get_query_params($word, $msd, $dialect, $config);
	//error_log("Query parameters: " . $qry_params[0]);
	$sth = $pdo->prepare($qry_params[0]);
	$sth->execute($qry_params[1]);

	$result = $sth->fetchAll(PDO::FETCH_FUNC, "map_result");
	echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
