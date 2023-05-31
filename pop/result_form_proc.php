<?
	$home = str_replace("\\", "/",$_SERVER["DOCUMENT_ROOT"]);
	include $home."/include/check.php";


  $tablename=escape_string($_REQUEST["tablename"]);
  $uname=escape_string($_REQUEST["uname"]);
  $utel=escape_string($_REQUEST["utel"]);
  $sql = "select uid,uname,utel,event_kind from $tablename where uname='$uname' and utel= '$utel' and event_kind != '' ";
  $data=$db->row($sql);


	include $home."/INC/tableset.php";


  if(!$data['uid']) $code = "0";
  else {
    $code = $data['event_kind'];
    $goods = $ARR_BOARD_TYPE[$code];
  }


  exit(json_encode(array('code' => $code,'goods' => $goods)));
?>