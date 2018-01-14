<?php
	require("config.php"); // Configuration
	define("CONST_NL", "\n");
	define("CONST_NL_DELIMITER", "\n");
	define("CONST_SYMBOL_PIPE", "|");
	define('SCRIPT_NAME', 'collect.php');

	// Determines table name for dynamically created SQL statements
	function get_table_name($type) {
		if ($type === 'm') {
			return "multiwords";
		} else {
			return "words";
		}
	}

	function get_delete_statement($str, $type) {
		$table = get_table_name($type);
		$strArray = explode(" ", $str);
		return "DELETE FROM " . $table . " WHERE id = " . $strArray[1] . ";" . CONST_NL;
	}


	function get_insert_statement($str, $type) {
		$strArray = explode(CONST_SYMBOL_PIPE, $str);
		$table = get_table_name($type);
		if ($strArray[4] != '') {
			$ret = "INSERT INTO " . $table . " (wordform, lemma, msd, source, dialect, contributed) VALUES ('";
		} else {
			$ret = "INSERT INTO " . $table . " (wordform, lemma, msd, source, contributed) VALUES ('";
		}
		$ret = $ret . $strArray[1] . "', '";
		$ret = $ret . $strArray[2] . "', '";
		$ret = $ret . $strArray[3] . "', 'web'";
		if ($strArray[4] != '') {
			$ret = $ret . ", '" . $strArray[4] . "'";
		}
		$ret = $ret . ", TRUE);" . CONST_NL;
		return $ret;
	}

	function get_update_statement($str, $type) {
		$strArray = explode(CONST_SYMBOL_PIPE, $str);
		$table = get_table_name($type);
		$ret = "UPDATE " . $table ." SET wordform = '";
		$ret = $ret . $strArray[1] . "', lemma = '";
		$ret = $ret . $strArray[2] . "', msd = '";
		$ret = $ret . $strArray[3] . "'";
		if ($strArray[4] != '') {
			$ret = $ret . ", dialect = '" . $strArray[4] . "'";
		}
		$ret = $ret . " WHERE id = ";
		$ret = $ret . $strArray[0] . ";" . CONST_NL;
		return $ret;
	}

	// Main program

	$method = $_SERVER['REQUEST_METHOD'] ?? '';
	if ($method == '') {
		echo "\$_SERVER undefined, aborting ..." . CONST_NL;
		error_log(SCRIPT_NAME . "\$_SERVER undefined, aborting ...");
		return;
	} else {
		switch($method) {
			case 'GET':
				echo SCRIPT_NAME . ": I don't serve GET request." . CONST_NL;
				break;
			case 'POST':
				$data = $_POST['data'] ?? '';
				$lemma = $_POST['lemma'] ?? '';
				$type = $_POST['type'] ?? '';
				break;
			default:
				echo 'Unknown request method $method, aborting ...' . CONST_NL;
				error_log(SCRIPT_NAME . ": Unknown request method $method, aborting ...");
				return;
		}
	}
	if ($data == '') {
		$msg = "Form attribute 'data' was not defined, aborting.";
		echo $msg . CONST_NL;
		error_log(SCRIPT_NAME . $msg);
		return;
	}
	if ($lemma == '') {
		$msg = "Form attribute 'lemma' was not defined, aborting.";
		echo $msg . CONST_NL;
		error_log(SCRIPT_NAME . $msg);
		return;
	}
	if ($type == '') {
		$msg = "Form attribute 'type' was not defined, aborting.";
		echo $msg . CONST_NL;
		error_log(SCRIPT_NAME . $msg);
		return;
	} else {
		// Read appropriate configuration
		if ($type == 'm') {
			$config = $config_multi_words;
		} else {
			$config = $config_single_word;
		}
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
				$out = $out . get_insert_statement($str, $type);
				break;
			case 208:
				// Брисати (delete)
				$out = $out . get_delete_statement($str, $type);
				break;
			default:
				$out = $out . get_update_statement($str, $type);
				break;
		}
	}
	unset($str);
	//error_log("SQL script: " . $out);

	if ($out != '') {
		// Encode all in UTF-8 and send as email
		$subj = sprintf($config['mail_subject'], $lemma, $_SERVER['REMOTE_ADDR'], gethostbyaddr($_SERVER['REMOTE_ADDR']));
		$subject = "=?UTF-8?B?" . base64_encode($subj) . "?=";
		$headers = "MIME-Version: 1.0" . "\r\n" . "Content-type: text/plain; charset=UTF-8" . "\r\n";
		mail($config_common['mail_recipient'], $subject, $out, $headers);
	}
	echo $out . CONST_NL;
?>
