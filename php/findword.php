<?php
	require("config.php"); // Configuration
	require("db2fe.php"); // Load function to convert MSD tag

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

	$connstr = 'pgsql:dbname=' . $config['dbname'] . ';user=' . $config[ 'user' ];
	$connstr = $connstr . ';host=' . $config[ 'host' ] . ';port=' . $config[ 'port' ];
	$pdo = new PDO($connstr);
	$sql = "SELECT id, wordform, lemma, msd, source, dialect FROM words WHERE lemma = :lemma ORDER BY msd";
	$sth = $pdo->prepare($sql);

	// Get script parameter
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

	$sth->execute(array(':lemma' => $word));
	$result = $sth->fetchAll(PDO::FETCH_FUNC, "map_result");
	echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
