// 게시판 ajax 리스트 스크립트 (20.07.21 HHH)
// /INC/func_other.php   paging_new1 함수
// /Bboard/_ajaxlist.php

// 게시글 영역 아이디값  dptype+_listbody 
// 페이징영역또는 더보기 버튼 영역 아이디값 dptype+_paging_area
// dptype에 plusmode 문자열 포함시 더보기 형태, 아닐경우 ajax 페이징 형태
// plusmode 일 경우 page 변수에는 해당 페이지 사이즈값을 넣어주면 됨.
// 아닐경우 페이지번호로 사용됨.

function ajax_board_list(dptype,tablename,page,pagesize,search,wsql,uid){
	$.ajax({
		type : "POST"
		, url : "/Bboard/_ajaxlist.php"
		, dataType : "JSON"
		, data : {dptype: dptype, tablename: tablename, page: page, pagesize: pagesize, search: search, wsql: wsql, uid: uid}
		, success : function(data){
			if(dptype.indexOf("plusmode") != -1) {
			  $("#"+dptype+"_listbody").append(data.msg);
			  if(data.paging == ""){
				$("#"+dptype+"_paging_area").html("");
			  }
			}else{
			  $("#"+dptype+"_listbody").html(data.msg);
			  if(data.paging != ""){
				$("#"+dptype+"_paging_area").html(data.paging);
			  }else{
				$("#"+dptype+"_paging_area").html("");
			  }
			}
		}
	});
}


// plusmode 일때 해당 리스트 페이지 삽입
var page = <?=$pagesize?>;
function call_ajax_board_list(dptype,tablename){
		ajax_board_list(dptype, tablename, page, "<?=$pagesize?>", "", "", "<?=$uid?>");
		page = page + <?=$pagesize?>;
}
// plusmode 일때 해당 리스트 페이지 삽입


// ajax paging 일때 해당 리스트 페이지 삽입
function call_ajax_board_addlist(dptype,tablename){
		ajax_board_list(dptype, tablename, "<?=$page?>", "<?=$pagesize?>", "", "", "<?=$uid?>");
}
// plusmode 일때 해당 리스트 페이지 삽입