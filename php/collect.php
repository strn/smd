<?php
	require("config.php"); // Configuration
	define("CONST_NL", "\n");
	define("CONST_NL_DELIMITER", "\n");
	define("CONST_SYMBOL_PIPE", "|");

	function get_delete_statement($str) {
		$strArray = explode(" ", $str);
		return "DELETE FROM words WHERE id = " . $strArray[1] . ";" . CONST_NL;
	}


	function get_insert_statement($str) {
		$strArray = explode(CONST_SYMBOL_PIPE, $str);
		if ($strArray[4] != '') {
			$ret = "INSERT INTO words (wordform, lemma, msd, source, dialect) VALUES ('";
		} else {
			$ret = "INSERT INTO words (wordform, lemma, msd, source) VALUES ('";
		}
		$ret = $ret . $strArray[1] . "', '";
		$ret = $ret . $strArray[2] . "', '";
		$ret = $ret . $strArray[3] . "', 'web'";
		if ($strArray[4] != '') {
			$ret = $ret . ", '" . $strArray[4] . "'";
		}
		$ret = $ret . ");" . CONST_NL;
		return $ret;
	}

	function get_update_statement($str) {
		$strArray = explode(CONST_SYMBOL_PIPE, $str);
		$ret = "UPDATE words SET wordform = '";
		$ret = $ret . $strArray[1] . "', lemma = '";
		$ret = $ret . $strArray[2] . "', msd = '";
		$ret = $ret . $strArray[3] . "'";
		if ($strArray[4] != '') {
			$ret = $ret . ", dialect = '" . $strArray[4] . "'";
		}
		$ret = $ret . " WHERE id = ";
		$ret = $ret . $strArray[0] . CONST_NL . ";";
		return $ret;
	}


	$method = $_SERVER['REQUEST_METHOD'] ?? '';
	if ($method == '') {
		echo "\$_SERVER undefined, aborting ..." . CONST_NL;
		return;
	} else {
		switch($method) {
			case 'GET':
				echo "I don't serve GET request." . CONST_NL;
				break;
			case 'POST':
				$data = $_POST['data'] ?? '';
				$lemma = $_POST['lemma'] ?? '';
				break;
			default:
				echo 'Unknown request method $method, aborting ...' . CONST_NL;
				return;
		}
	}
	if ($data == '') {
		echo "Form attribute 'data' was not defined, aborting." . CONST_NL;
		return;
	}
	if ($lemma == '') {
		echo "Form attribute 'lemma' was not defined, aborting." . CONST_NL;
		return;
	}

	$strArray = explode(CONST_NL_DELIMITER, $data);
	$out = '';

	foreach ($strArray as $str) {
		//echo "String: '" . $str . "'";
		//echo "Str: '" . ord($str[0]) . "'";
		$n = ord($str[0]);

		switch($n) {
			case 61:
				continue;
			case 45:
				// Comment
				$out = $out . $str . CONST_NL;
				break;
			case 48:
				// Insert statement
				$out = $out . get_insert_statement($str);
				break;
			case 208:
				// Брисати (delete)
				$out = $out . get_delete_statement($str);
				break;
			default:
				$out = $out . get_update_statement($str);
				break;
		}
	}
	unset($str);
	if ($out != '') {
		// Encode all in UTF-8 and send as email
		$subj = sprintf($config['mail_subject'], $lemma, $_SERVER['REMOTE_ADDR'], gethostbyaddr($_SERVER['REMOTE_ADDR']));
		$subject = "=?UTF-8?B?" . base64_encode($subj) . "?=";
		$headers = "MIME-Version: 1.0" . "\r\n" . "Content-type: text/plain; charset=UTF-8" . "\r\n";
		mail($config['mail_recipient'], $subject, $out, $headers);
	}
	echo $out . CONST_NL;
?>
