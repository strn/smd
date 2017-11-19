<?php
	require("config.php"); // Configuration
	require("db2fe.php"); // Load function to convert MSD tag

	// Functio determines what query to return
	// based on arguments passed
	function get_query_params($word, $type, $dialect, $config) {
		$retArr = array(':lemma' => $word);
		if ($type != null) {
			$retArr[ ':wordtype' ] = $type . '%';
			if ($dialect != null) {
				$retArr[ ':dialect' ] = $dialect;
				return array( $config[ 'qry_lemma_type_dialect' ], $retArr );
			} else {
				return array( $config[ 'qry_lemma_type' ], $retArr );
			}
		} else {
			if ($dialect != null) {
				$retArr[ ':dialect' ] = $dialect;
				return array( $config[ 'qry_lemma_dialect' ], $retArr );
			} else {
				return array( $config[ 'qry_lemma_only' ], $retArr );
			}
		}
	}

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
	} else {
		if ( ! preg_match('/^[0-9абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШCDIMVX\-]+$/', $word) ) {
			header("X-Invalid-Input-Word: " . $word, true, 404);
			return;
		}
	}

	// Word is OK, get other parameters
	$type = $request['type'];
	$dialect = $request['dialect'];
	$connstr = 'pgsql:dbname=' . $config['dbname'] . ';user=' . $config[ 'user' ];
	$connstr = $connstr . ';host=' . $config[ 'host' ] . ';port=' . $config[ 'port' ];
	$pdo = new PDO($connstr);

	$qry_params = get_query_params($word, $type, $dialect, $config);
	$sth = $pdo->prepare($qry_params[0]);
	$sth->execute($qry_params[1]);

	$result = $sth->fetchAll(PDO::FETCH_FUNC, "map_result");
	echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
