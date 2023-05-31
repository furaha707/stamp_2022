//달력 관련
$(function() {

	if ( $('#view_sdate').length ){
		//$( "#view_sdate" ).datepicker( );
		$( "#view_sdate" ).datepicker({ 
			defaultDate : ''	//1985-01-01
			,showButtonPanel: true //140423 추가
			,closeText: '닫기' //140423 추가
		});
		/*
		$( "#view_sdate3" ).datepicker({ 
			defaultDate : '1980-01-01'
			,showButtonPanel: true //140423 추가
			,closeText: '닫기' //140423 추가
		});*/
		$( "#view_edate" ).datepicker({
			showButtonPanel: true //140423 추가
			,closeText: '닫기' //140423 추가
		} );
	}


	if ( $('#view_sdate1').length ){
		$( "#view_sdate1" ).datepicker({
			showButtonPanel: true //140423 추가
			,closeText: '닫기' //140423 추가
		} );
		$( "#view_edate1" ).datepicker( {
			showButtonPanel: true //140423 추가
			,closeText: '닫기' //140423 추가
		});
	}

	if ( $('#view_sdate2').length ){
		$( "#view_sdate2" ).datepicker({
			showButtonPanel: true //140423 추가
			,closeText: '닫기' //140423 추가
		} );
		$( "#view_edate2" ).datepicker( {
			showButtonPanel: true //140423 추가
			,closeText: '닫기' //140423 추가
		});
	}


	if ( $('#view_sdate3').length ){
		$( "#view_sdate3" ).datepicker({
			showButtonPanel: true //140423 추가
			,closeText: '닫기' //140423 추가
		} );
		$( "#view_edate3" ).datepicker( {
			showButtonPanel: true //140423 추가
			,closeText: '닫기' //140423 추가
		});
	}

	if ( $('.datepicker').length ){
		$( ".datepicker" ).datepicker({
			showButtonPanel: true //140423 추가
			,closeText: '닫기' //140423 추가
		} );
	}

/*
 $("#view_sdate").datepicker({
  showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
  buttonImage: "/application/db/jquery/images/calendar.gif", // 버튼 이미지
  buttonImageOnly: true, // 버튼에 있는 이미지만 표시한다.
  changeMonth: true, // 월을 바꿀수 있는 셀렉트 박스를 표시한다.
  changeYear: true, // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.
  minDate: '-100y', // 현재날짜로부터 100년이전까지 년을 표시한다.
  nextText: '다음 달', // next 아이콘의 툴팁.
  prevText: '이전 달', // prev 아이콘의 툴팁.
  numberOfMonths: [1,1], // 한번에 얼마나 많은 월을 표시할것인가. [2,3] 일 경우, 2(행) x 3(열) = 6개의 월을 표시한다.
  //stepMonths: 3, // next, prev 버튼을 클릭했을때 얼마나 많은 월을 이동하여 표시하는가. 
  yearRange: 'c-100:c+10', // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.
  showButtonPanel: true, // 캘린더 하단에 버튼 패널을 표시한다. 
  currentText: '오늘 날짜' , // 오늘 날짜로 이동하는 버튼 패널
  closeText: '닫기',  // 닫기 버튼 패널
  dateFormat: "yy-mm-dd", // 텍스트 필드에 입력되는 날짜 형식.
  showAnim: "slide", //애니메이션을 적용한다.
  showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
  dayNamesMin: ['월1', '화', '수', '목', '금', '토', '일'], // 요일의 한글 형식.
  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] // 월의 한글 형식.
                    
 });

*/



});

// 첨부파일 추가 ============
function add_file(){

	var ord_count = parseInt(signform.file_num.value);
	add = parseInt(ord_count+1);
	document.signform.file_num.value = add;

	if(add<=10) {
		text = "<br><div class='input_wrap file_box mt_05' style='width:300px;'><p></p><span class='btn_type_file'>찾아보기</span><input type='file' name='in_file[]' size='50'></div>";
		var Tag = document.getElementById("fname_span");
		Tag.innerHTML += text;
	} else {
		alert("10개 까지만 첨부 가능합니다.");
		return;
	}
	  function file_upload(){
    var tmp = $(this).val();
    $(this).siblings('p').text(tmp);
  };
  $('.file_box > input').change(file_upload);

}

function add_file2(){

	var ord_count = parseInt(signform.file_num2.value);
	add = parseInt(ord_count+1);
	document.signform.file_num2.value = add;

	if(add<=10) {
		text = "<br><input type='file' name='in_file2[]' size='50'>";
		var Tag = document.getElementById("fname_span2");
		Tag.innerHTML += text;
	} else {
		alert("10개 까지만 첨부 가능합니다.");
		return;
	}
	  function file_upload(){
    var tmp = $(this).val();
    $(this).siblings('p').text(tmp);
  };
  $('.file_box > input').change(file_upload);

}


//아이디 확인
$(document).ready(function(){
	$(document).on("keyup", "input[name='mid']", function(){
		var idVal = $('input[name="mid"]').val();

			$("#idchk").val('');
			var IdChkExp =  /^[a-z0-9_-]{5,15}$/; // 아이디 검사식

			//var IdChkExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일검사식
								 
			if(idVal.length < 5){
				$("#loginId").html('※ 5자 이상 입력해주세요.');
			} else {
				if(!IdChkExp.test(idVal)) {
					$("#loginId").html('※ 아이디는 영문과 숫자조합만 가능합니다.');
					return false;
				}
				else
				{					
					if(idVal.length >= 5){

						$.ajax({
							type : "POST"
							, url : "/INC/other_ajax.php"
							, dataType : "json"
							, data : "mode=duplicate&v="+idVal
							, beforeSend: function(){  $("#curtainTop").show(); }
							, success : function(res){ $("#curtainTop").hide();
							 if(res.code=='1'){
								$("#loginId").html('※ 중복된 아이디 입니다.');
								//$('input[name="id"]').val('');
							 }else{
								$("#loginId").html('');
								$("#idchk").val('1');
							 }
							}
						});
					}else{
							$("#loginId").html('※ 5자 이상 입력해주세요.');
					}
				}

			}

	});


	//관리자에서 아이디 사용
	$(document).on("keyup","input[name='mid_1']", function(){
		var idVal = $('input[name="mid_1"]').val();

			var IdChkExp =  /^[a-z0-9_-]{5,15}$/; // 아이디 검사식
			if(!IdChkExp.test(idVal)) {
				$("#loginId").html('<b style="color:#ff0000">영문,숫자만 가능</b>');
				return false;
			}


			if(idVal.length >= 4){

				$.ajax({
					type : "POST"
					, url : "/INC/other_ajax.php"
					, dataType : "json"
					, data : "mode=duplicate&v="+idVal
					, beforeSend: function(){  $("#curtainTop").show(); }
					, success : function(res){ $("#curtainTop").hide();
					 if(res.code=='1'){
						$("#loginId").html('<b style="color:#ff0000">중복된 아이디 입니다.</b>');
						//$('input[name="id"]').val('');
					 }else{
						$("#loginId").html('사용가능');
					 }
					}
				});
			}else{
					$("#loginId").html('<b style="color:#ff0000">5자 이상 입력</b>');
			}
	});


	//지점아이디 에서 아이디 사용
	$(document).on("keyup","input[name='jijum_mid']", function(){
		var idVal = $('input[name="jijum_mid"]').val();

			var IdChkExp =  /^[a-z0-9_-]{5,15}$/; // 아이디 검사식
			if(!IdChkExp.test(idVal)) {
				$("#jijumId").html('<b style="color:#ff0000">영문,숫자만 가능</b>');
				return false;
			}


			if(idVal.length >= 4){

				$.ajax({
					type : "POST"
					, url : "/INC/other_ajax.php"
					, dataType : "json"
					, data : "mode=jijumidcheck&v="+idVal
					, beforeSend: function(){  $("#curtainTop").show(); }
					, success : function(res){ $("#curtainTop").hide();
					 if(res.code=='1'){
						$("#jijumId").html('<b style="color:#ff0000">중복된 아이디 입니다.</b>');
						//$('input[name="id"]').val('');
					 }else{
						$("#jijumId").html('사용가능');
					 }
					}
				});
			}else{
					$("#jijumId").html('<b style="color:#ff0000">5자 이상 입력</b>');
			}
	});



	//비밀번호 확인
	$(document).on("keyup","input[name='upasswd']", function(){
		var idVal = $('input[name="upasswd"]').val();
		var idVal_1 = $('input[name="upasswd1"]').val();

			var PwChkExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*=])(?=.*[0-9]).{3,16}$/;
			if(!PwChkExp.test(idVal)) {
				$("#passId").html('※ 영문,숫자,특수문자 조합하여 6~16자로 입력해주세요.');
				return false;
			}

			if(idVal.length < 6){
				$("#passId").html('※ 글자수가 작습니다. 6글자 이상 입력해주세요.');
			} else {
				$("#passId").html('');
				$("#passchk").val('1');
			}

	});

	$(document).on("keyup","input[name='upasswd1']", function(){
		var idVal = $('input[name="upasswd"]').val();
		var idVal_1 = $('input[name="upasswd1"]').val();

		if(idVal_1.length > 0){
			if(idVal!=idVal_1) {
				$("#passId_1").html('※ 비밀번호가 일치하지 않습니다.');
				$("#passchk1").val('');
			} else {
				$("#passId_1").html('');
				$("#passchk1").val('1');
			}
		}
	});

	
	//닉네임확인
	$(document).on("keyup","input[name='unickname']", function(){
		var nickVal = $('input[name="unickname"]').val();

			var NickChkExp =  /^[a-z0-9_-]{3,16}$/; // 아이디 검사식
			/*if(!NickChkExp.test(nickVal)) {
				$("#loginNick").html('<b style="color:#ff0000">영문,숫자만 가능</b>');
				return false;


			if(nickVal.length >= 2){

				$.ajax({
					type : "POST"
					, url : "/INC/other_ajax.php"
					, dataType : "json"
					, data : "mode=nickcheck&v="+nickVal
					, beforeSend: function(){  $("#curtainTop").show(); }
					, success : function(res){ $("#curtainTop").hide();
					//alert(res.code);
					 if(res.code=='1'){
						$("#loginNick").html('<b style="color:#ff0000">중복</b>');
						$('input[name=nickcheck]').attr('value',"no");  
					 }else{
						$("#loginNick").html('사용가능');
						$('input[name=nickcheck]').attr('value',"ok");
					 }
					}
				});
			}else{
					$("#loginNick").html('<b style="color:#ff0000">2자 이상 입력</b>');
			}
			}*/
	});


}); //end $(document).ready(function(){


//주소상동
function addr_copy() {

 if(signform.par_zip1){
	signform.par_zip1.value=signform.uzip1.value;
	signform.par_zip2.value=signform.uzip2.value;
	signform.par_addr1.value=signform.uaddr1.value;
	signform.par_addr2.value=signform.uaddr2.value;
 }
}

//선택한 회원 처리
function select_member_change(type,link) {

	var j = 0;
	var length = 0;
	var arrItemList = new Array();
	var Itemlist = new Array();


	/* uid 배열로 구한다.  */
	for(var i = 0; i<document.listform.length; i++) {
		if(document.listform.elements[i].checked == true) {
			if(document.listform.elements[i].value != 0) {
				arrItemList[j] = document.listform.elements[i].value;
				j += 1 ;
			}
		}
	}

	Itemlist = arrItemList.join(",");

	if(type=="board_view"){		//게시물 숨기기
		if( j == 0 ){
			alert("선택한 항목이 없습니다");
			return;
			}
		selectBoardview(Itemlist,link);
	}

	if(type=="board_delete"){		//게시물 숨기기
		if( j == 0 ){
			alert("선택한 항목이 없습니다");
			return;
			}
		selectBoarddelete(Itemlist,link);
	}

	if(type=="user_board_delete"){		//게시물 숨기기
		if( j == 0 ){
			alert("선택한 항목이 없습니다");
			return;
			}
		user_selectBoarddelete(Itemlist,link);
	}

}

//선택한 회원 탈퇴 시키기
function selectMemberout(Itemlist,link){
	temp1 = confirm("선택한 회원을 탈퇴 시키겠습니까?");
	if(temp1 == true) {
		var ref = link + "&uid=" + Itemlist;
		//window.open = ref;
		fancyboxOpen_w(ref,'300');
	} else {
		return;
	}

}  //end function

function memberOut(){
	temp = confirm("회원탈퇴 신청을 하겠습니까?");
	if(temp == true) {
		signform_1.submit();
	} else {
		return;
	}
}


//선택한 정보 fancyboxopen으로 처리
function sel_action_open(link,txt) {
	var j = 0;
	var length = 0;
	var arrItemList = new Array();
	var Itemlist = new Array();


	/* uid 배열로 구한다.  */
	for(var i = 0; i<document.listform.length; i++) {
		if(document.listform.elements[i].checked == true) {
			if(document.listform.elements[i].value != 0) {
				arrItemList[j] = document.listform.elements[i].value;
				j += 1 ;
			}
		}
	}
	Itemlist = arrItemList.join(",");
	if( j == 0 ){
		alert("선택한 항목이 없습니다");
		return;
	}
	temp1 = confirm("선택한 게시물을 "+txt+" 하겠습니까?");
	if(temp1 == true) {
		var ref = link + "&uid=" + Itemlist;
		fancyboxOpen_w(ref,'300');
	} else {
		return;
	}

}

//선택한 정보 처리
function sel_action(link,txt) {
	Itemlist = "";
	temp1 = confirm(txt+" 하겠습니까?");
	if(temp1 == true) {
		var ref = link + "&uid=" + Itemlist;
		window.location = ref;
	} else {
		return;
	}

}


//선택한 게시물 삭제
function user_selectBoarddelete(Itemlist,link){
	temp1 = confirm("선택한 게시물을 삭제 하겠습니까?");
	if(temp1 == true) {
		var ref = link + "&uid=" + Itemlist;
		window.location= ref;		
	} else {
		return;
	}

}  //end function

//선택한 정보처리 
function sel_action_box(link,tit){
	temp1 = confirm(tit+" 처리 하겠습니까?");

	if(temp1 == true) {
		var ref = link;
		fancyboxOpen_w(ref,'300');
	} else {
		return;
	}

}  //end function




//선택한 정보 처리
function sel_user_action(link,txt) {

	temp1 = confirm(txt+" 하겠습니까?");
	if(temp1 == true) {
		var ref = link;
		window.location = ref;
	} else {
		return;
	}

}

//선택한 회원 승인
function selectMemberinok(link,tit){
	temp1 = confirm("선택한 정보를 "+tit+" 처리 하겠습니까?");

	if(temp1 == true) {
		var ref = link;
		fancyboxOpen_w(ref,'300');
	} else {
		return;
	}

}  //end function


//선택한 정보 처리
function sel_uid_action(link,txt) {
	var j = 0;
	var length = 0;
	var arrItemList = new Array();
	var Itemlist = new Array();


	/* uid 배열로 구한다.  */
	for(var i = 0; i<document.listform.length; i++) {
		if(document.listform.elements[i].checked == true) {
			if(document.listform.elements[i].value != 0) {
				arrItemList[j] = document.listform.elements[i].value;
				j += 1 ;
			}
		}
	}
	Itemlist = arrItemList.join(",");
	if( j == 0 ){
		alert("선택한 항목이 없습니다");
		return;
	}

	temp1 = confirm(txt+" 하겠습니까?");
	if(temp1 == true) {
		var ref = link + "&uid=" + Itemlist;
		window.location = ref;
	} else {
		return;
	}

}

//선택한 정보 처리
function sel_uid_action_1(link,txt) {
	var j = 0;
	var length = 0;
	var arrItemList = new Array();
	var Itemlist = new Array();


	/* uid 배열로 구한다.  */
	for(var i = 0; i<document.listform.length; i++) {
		if(document.listform.elements[i].checked == true) {
			if(document.listform.elements[i].value != 0) {
				arrItemList[j] = document.listform.elements[i].value;
				j += 1 ;
			}
		}
	}
	Itemlist = arrItemList.join(",");
	if( j == 0 ){
		alert("선택한 항목이 없습니다");
		return;
	}


	var ref = link + "&uid=" + Itemlist;
	window.location = ref;

}



//게시판 글 등록 체크
function boardDelcheck(){

	if(isBlank(signform.pass.value)) {
		alert("비밀번호를 입력해 주세요.");
		signform.pass.focus();
		return false;
	}

	signform.submit();

} 




//게시판 글 등록 체크
function jumpoWritecheck(){

	if(isBlank(signform.title.value)) {
		alert("제목을 입력해 주세요.");
		signform.title.focus();
		return false;
	}


	//파일 체크 한다.
	if(signform.fileadd) {
		if(signform.fileadd.value) {

			var obj = signform.fileadd;
			var no  = obj.value.lastIndexOf(".");
			var file_name = obj.value.substr(no+1, 3);
			//이미지/ PDF/ 오피스/ 한글
			if ((file_name.toUpperCase() != "JPG") && (file_name.toUpperCase() != "GIF") && (file_name.toUpperCase() != "PNG") && (file_name.toUpperCase() != "XLS") && (file_name.toUpperCase() != "XLSX")  && (file_name.toUpperCase() != "PDF") && (file_name.toUpperCase() != "HWP") ) {
				alert("jpg,gif,png,pdf,hwp,xls 파일만 업로드 가능합니다.");
				signform.fileadd.focus();
				return false;
			}

		}
	}
	//파일 체크 한다.
	if(signform.fileadd1) {
		if(signform.fileadd1.value) {

			var obj = signform.fileadd1;
			var no  = obj.value.lastIndexOf(".");
			var file_name = obj.value.substr(no+1, 3);

			if ((file_name.toUpperCase() != "JPG") && (file_name.toUpperCase() != "GIF") && (file_name.toUpperCase() != "PNG") && (file_name.toUpperCase() != "XLS") && (file_name.toUpperCase() != "XLSX")  && (file_name.toUpperCase() != "PDF") && (file_name.toUpperCase() != "HWP") ) {
				alert("jpg,gif,png,pdf,hwp,xls 파일만 업로드 가능합니다.");
				signform.fileadd1.focus();
				return false;
			}

		}
	}

	return true;	
	//signform.submit();

} //function jumpoWritecheck(){


//게시판 글 등록 체크
function onlineWritecheck(){

	if(signform.mode){
		if(!signform.mode.value){
			alert("분류를 선택해 주세요.");
			signform.mode.focus();
			return false;
		}
	}

	return true;	
	//signform.submit();
}


function isBlank(str) {
    str = str.replace(/\s/g, '');
    return (str.length==0);
}

//이미지 포맷 체크 함수
function Check_Img(obj) {

	var no = obj.value.lastIndexOf(".");
	var file_name = obj.value.substr(no+1, 3);

	if (!((file_name.toUpperCase() == "JPG") || (file_name.toUpperCase() == "GIF")))	{
		return false;
	}

	return true;
}

// 게시판 글 삭제 한다 (페이지수,게시물번호)
function contentDel(val){
	temp = confirm("삭제 하겠습니까?");
	if(temp == true) {
		window.location = val;
	} else {
		return;
	}
}


// 게시판 수정 한다 (변수,경고글)
function contentModify(val,cont){
	temp = confirm(cont);
	if(temp == true) {
		window.location = val;
	} else {
		return;
	}
}

// 게시판 수정 한다 (변수,경고글)
function contentModify_form(val,cont){
	temp = confirm(cont);
	if(temp == true) {
		signform.action = val;
		signform.target = "_self";
		signform.method ="post";
		signform.submit();
	} else {
		return;
	}
}




//댓글 게시판 글 등록
function memoCheck(){

	if(memoform.uname){
		if(isBlank(memoform.uname.value)) {
			alert("이름을 입력해 주세요.");
			memoform.uname.focus();
			return;
		}
	}


	if(memoform.pass){
		if(isBlank(memoform.pass.value)) {
			alert("비밀번호를 입력해 주세요.");
			memoform.pass.focus();
			return;
		}
	}


	if(isBlank(memoform.content.value)) {
		alert("내용을 입력해 주세요.");
		memoform.content.focus();
		return;
	}

	memoform.submit();
} 



function showhide(what,num) {

	if (what.style.display=='') {
		closewhide(what);
	return ;
	}

	for(j=1;j>=30;j++) {
		if(j<=num)
			menu_cont_+j+'.style.display=none';
	}
	if (what.style.display=='none') {
		what.style.display='';
	}
}

//이용후기 내용 감추기
function closewhide(what) {
	what.style.display='none';
}

//메일 직업입력 부분 
function changeEmail ( email ) { 

	if(email == "1") { 
		//document.getElementById("email2").style.display = "block"; 
		document.signform.uemail2.value = ""; 
	} else { 
		//document.getElementById("email2").style.display = "none"; 
		document.signform.uemail2.value = email; 
	} 
} 

function changeEmail_1 ( email ) { 
	if(email == "1") { 
		document.signform_1.uemail2_1.value = ""; 
	} else { 
		document.signform_1.uemail2_1.value = email; 
	} 
} 

function changeEmail_parent ( email ) { 
	if(email == "1") { 
		document.signform.parent_email2.value = ""; 
	} else { 
		document.signform.parent_email2.value = email; 
	} 
} 


//파일 업로드 체크
function file_upload() {
	obj = document.getElementById('fileupload');
	var filename = $(obj).val().substring($(obj).val().lastIndexOf('\\')+1);

	var ext = filename.substring(filename.lastIndexOf('.')+1).toLowerCase();


	if(!ext) {
		alert("파일을 선택해 주세요.");
		return;
	}

	if(ext == "xls" || ext == "txt" || ext == "csv") {
		//alert("업로드 가능");
		frm_up.submit();
	} else {
		alert("업로드가능한 파일이 아닙니다. 다시 선택해 주세요.");
		frm_up.fileupload.focus();
		return;
	}

}

//파일 업로드 체크
function csv_file_upload() {
	obj = document.getElementById('fileupload');
	var filename = $(obj).val().substring($(obj).val().lastIndexOf('\\')+1);

	var ext = filename.substring(filename.lastIndexOf('.')+1).toLowerCase();


	if(!ext) {
		alert("파일을 선택해 주세요.");
		return;
	}
	if(ext == "csv") {
		//alert("업로드 가능");
		frm_up.submit();
	} else {
		alert("csv 파일만 업로드 가능합니다. 확인해 주세요.");
		frm_up.fileupload.focus();
		return;
	}

}

//문자열 길이 체크 (글자수길이,변수명)
function CheckMsg(lenval,nameval) {
	var str,msg;
	var len = 0;
	var temp;
	var count = 0;

	var msg = $('#'+nameval).val();
	str = new String(msg);
	len = str.length;

	for (k=0 ; k<len ; k++){
		temp = str.charAt(k);
		if (escape(temp).length > 4) {
			count += 2;
		}
		else if (temp == '\r' && str.charAt(k+1) == '\n') { // \r\n일 경우
			count += 2;
		}
		else if (temp != '\n') {
			count++;
		}
	}

	allSend.innerText = count;
	/*
	if(count > lenval) {
		//$('#'+nameval).blur();
		//$('#'+nameval).focus();
		CutChar(lenval,nameval);
	}*/
}

function CutChar(endval,nameval) {
	var str,msg;
	var len=0;
	var temp;
	var count;
	count = 0;

	msg = $('#'+nameval).val();
	str = new String(msg);
	len = str.length;

	for(k=0 ; k<len ; k++) {
		temp = str.charAt(k);

		if(escape(temp).length > 4) {
			count += 2;
		}
		else if (temp == '\r' && str.charAt(k+1) == '\n') { // \r\n일 경우
			count += 2;
		}
		else if(temp != '\n') {
			count++;
		}
		if(count > endval) {
			str = str.substring(0,k);
			break;
		}
	}

	$('#'+nameval).value = str;
	alert("내용은 "+endval+"byte 까지만 가능합니다.");
	//CheckMsg();
} //end function CutChar() {


// Radio(CheckBox) 설정값 가져오기 ##################################################
function getRadioVal(obj) {

	var i, value = "";

	if (obj) {
		if (typeof(obj.length) == "undefined") {
			if (obj.checked) {
				value = obj.value;
			}
		}
		else {
			for (i=0; i<obj.length; i++) {
				if (obj[i].checked) {
					value = obj[i].value;
					break;
				}
			}
		}
	}
	return value;
}

// Radio 설정하기 ##################################################
function setRadioVal(obj, value) {
	var i;

	if (obj) {
		if (typeof(obj.length) == "undefined") {
			if (obj.value == value) {
				obj.checked = true;
			}
		}
		else {
			for(i=0; i<obj.length; i++) {
				if (obj[i].value == value) {
					obj[i].checked = true;
					break;
				}
			}
		}
	}
}

// 통화형태로 변환 ##################################################
function toCurrency(obj) {
	if (obj.disabled) return false;

	var num = obj.value.stripspace();
	if (num == "") return false;

	if (!checkNum(stripComma(num))) {
		//alert ("숫자만 입력해주세요.");
		num = stripCharFromNum(num, false);
		obj.blur(); obj.focus();
	}
	num = stripCharFromNum(stripComma(num), false);
	num = removePreZero(num);
	obj.value = formatComma(num);
}

// 숫자 문자열에서 문자열 제거 ##################################################
function stripCharFromNum(value, isDec) {
	var i;
	var minus = "-";
	var nums = "1234567890"+((isDec) ? "." : "");
	var result = "";

	for(i=0; i<value.length; i++) {
		numChk = value.charAt(i);
		if (i == 0 && numChk == minus) {
			result += minus;
		}
		else {
			for(j=0; j<nums.length; j++) {
				if(numChk == nums.charAt(j)) {
					result += nums.charAt(j);
					break;
				}
			}
		}
	}
	return result;
}

// 공백 확인 ##################################################
function checkEmpty(obj) {
	if (obj.value.stripspace() == "") {
		return true;
	}
	else {
		return false;
	}
}


//메인 로그아웃 처리
	$(document).ready(function(){
		$("#main_logout").css("cursor","pointer");
		$("#main_logout").click(function(){
				$.ajax({
					type : "POST"
					, url : "/INC/userlogin_ajax1.php"
					, dataType : "JSON"
					, data : "mode=logout"
					, success : function(res){
						if(res.code=="1"){
							location.replace("/main/main.html");
						}
					}
				});
		});
	});


function topsearchCheck(){
	if(!topsearchForm.top_find_word.value){
		alert("검색어를 입력하세요");
		topsearchForm.top_find_word.focus();
		return false;
	}
	topsearchForm.submit();
}


//주문자 정보와 동일
function equal(f) 	{
	if(f.alter.checked == true) {
		f.rcvr_name.value=f.buyr_name.value;
		f.rcvr_tel1.value=f.buyr_tel1.value;
		f.rcvr_tel2.value=f.buyr_tel2.value;

		f.rcvr_zipx.value=f.uzip.value;
		f.rcvr_add1.value=f.uaddr1.value;
		f.rcvr_add2.value=f.uaddr2.value;
	}else{
		f.rcvr_name.value="";
		f.rcvr_tel1.value="";
		f.rcvr_tel2.value="";

		f.rcvr_zipx.value="";
		f.rcvr_add1.value="";
		f.rcvr_add2.value="";
	}
}

//수량 변경 하기 
function Cartjumucount(buytype,num,val) {
	ref="/menu1/cart_basket.php?buytype="+buytype+"&uid="+num+"&jumuncount="+val;
	window.location = ref;
}

//선택한 정보 승인
function selectInfook(link,tit){
	temp1 = confirm(tit+" 처리 하겠습니까?");
	if(temp1 == true) {
		var ref = link;
		fancyboxOpen_w(ref,'300');
	} else {
		return;
	}
}  //end function

//경고창 없이 바로 진행 
function selectInfook_ing(link,tit){
	var ref = link;
	fancyboxOpen_w(ref,'300');
}  //end function


function checkall_box(frm){
   var i=0;  
      for(i=1; i<=3; i++){
         if(frm.yark_all.checked){			
            eval("signform.yark"+i+".checked=true;");
         }else{
            eval("signform.yark"+i+".checked=false;");
      }
    }
} //end checkall(frm)

function checkall_box_1(frm){
   var i=0;  
      for(i=1; i<=6; i++){
         if(frm.yark_all.checked){			
            eval("signform.yark"+i+".checked=true;");
         }else{
            eval("signform.yark"+i+".checked=false;");
      }
    }
} //end checkall(frm)



$(document).ready(function(){

	//체크 박스 전체선택 
	$("#check_all").click(function() {
		//만약 전체 선택 체크박스가 체크된상태일경우
		if($("#check_all").prop("checked")) {
			//해당화면에 전체 checkbox들을 체크해준다
			$("input[type=checkbox]").prop("checked",true);
		// 전체선택 체크박스가 해제된 경우
		} else {
			//해당화면에 모든 checkbox들의 체크를해제시킨다.
			$("input[type=checkbox]").prop("checked",false);
		}

	});

});



//================= 이미지 사이즈 제한 
//참고  onChange="choose(this.files,'230','140',this.name,'');"
//참고(배열로 하는 경우) id="fileadd1" onChange="choose(this.files,'503','366',this.name,this);"
function readImage(file,wf,hf,vname,idname) {

	var reader = new FileReader();
	var image  = new Image();

	reader.readAsDataURL(file);  
	reader.onload = function(_file) {
		image.src    = _file.target.result;              // url.createObjectURL(file);
		image.onload = function() {
			var w = this.width,
				h = this.height,
				t = file.type,                           // ext only: // file.type.split('/')[1],
				n = file.name,
				s = ~~(file.size/1024) +'KB';

				wwd = wf;	//원하는 사이즈
				hhd = hf;	//원하는 사이즈

			//이미지가로사이즈가지정한사이즈보다클때메세지와함께폼전송을중지합니다.   
			if(w != wwd) {  
				alert('첨부한 이미지의 가로 사이즈는'+w+'입니다.\n\n이미지의 가로 사이즈는'+wwd+'이어야 합니다.');				
				if(idname) {
					 document.getElementById(idname).value= ""; //아이디가 있는경우 아이값 변경
					//eval("signform."idname+".value=''");	
				} else {
					eval("signform."+vname+".value=''");
				}
				//$('.choose').val("ssss");
				//$('#form_id input[type="text"]').val(""); 
				return false;
			}

			if(hhd=="all") {
				//all 인경우 상관없이 올릴수 있다.
			} else {
				//이미지세로사이즈가지정한사이즈보다클때메세지와함께폼전송을중지합니다.
				if(h != hhd) {  
					alert('첨부한 이미지의 세로 사이즈는'+h+'입니다.\n\n이미지의 세로 사이즈는'+hhd+'이어야  합니다.');
					return false;
				}

			}

			//$('#uploadPreview').append('<img src="'+ this.src +'"> '+w+'x'+h+' '+s+' '+t+' '+n+'<br>');
		};
		image.onerror= function() {
			alert("jpg,gif,png,jpeg 만 업로드 가능합니다.");
		};      
	};

}		
function choose(F,wf,hf,vname,idname) {
	if(idname) {
		idname = document.getElementById(idname.getAttribute('id')).getAttribute('id');
	}

	//var F = this.files;
	if(F && F[0]) for(var i=0; i<F.length; i++) readImage( F[i],wf,hf,vname,idname);
}
//================= END 이미지 사이즈 제한 

// 선택 게시물 디비 처리 한다 (변수,경고글)
function contentChange(val,cont){
	temp = confirm(cont);
	if(temp == true) {
		window.location = val;
	} else {
		return;
	}
}



//================== sns 보내기2  =============
function sendSns(sns, url, txt, isApp){
    var o;
    var _url = encodeURIComponent(url);
    var _txt = encodeURIComponent(txt);
    var _br  = encodeURIComponent('\r\n');
 
    switch(sns)
    {
        case 'facebook':
            o = {
                method:'popup',
                url:'http://www.facebook.com/sharer/sharer.php?u=' + _url
            };
            break;
 
        case 'twitter':
            o = {
                method:'popup',
                url:'http://twitter.com/intent/tweet?text=' + _txt + '&url=' + _url
            };
            break;
 
        case 'me2day':
            o = {
                method:'popup',
                url:'http://me2day.net/posts/new?new_post[body]=' + _txt + _br + _url + '&new_post[tags]=epiloum'
            };
            break;
 
        case 'kakaostory':
            o = {
                method:'web2app',
                param:'posting?post=' + _txt + _br + _url + '&apiver=1.0&appver=2.0&appid=dev.epiloum.net',
                a_store:'itms-apps://itunes.apple.com/app/id486244601?mt=8',
                g_store:'market://details?id=com.kakao.story',
                a_proto:'storylink://',
                g_proto:'scheme=kakaolink;package=com.kakao.story'
            };
            break;
 
        case 'band':
            o = {
                method:'web2app',
                param:'create/post?text=' + _txt + _br + _url,
                a_store:'itms-apps://itunes.apple.com/app/id542613198?mt=8',
                g_store:'market://details?id=com.nhn.android.band',
                a_proto:'bandapp://',
                g_proto:'scheme=bandapp;package=com.nhn.android.band'
            };
            break;

		case 'kakaotalk':
            o = {
                method:'web2app',
                param:'kakaolink://send?msg=' + _txt + '&url=' + _url + '&type=link&apiver=2.0.1&appver=2.0&appid=dev.epiloum.net',
                a_store:'itms-apps://itunes.apple.com/app/id362057947?mt=8',
                g_store:'market://details?id=com.kakao.talk',
                a_proto:'kakaolink://',
                g_proto:'scheme=kakaolink;package=com.kakao.talk'
            };
            break;
 
        default:
            alert('지원하지 않는 SNS입니다.');
            return false;
    }

	if( isApp == "Y" )
		o.method = "app";
 
    switch(o.method)
    {
		case "app" : location.href = "link://?url=" + o.url; break;

        case 'popup':
            window.open(o.url);
            break;
 
        case 'web2app':
            if(navigator.userAgent.match(/android/i)){
                // Android
				//alert( "intent://" + o.param + "#Intent;" + o.g_proto + ";end" );
                setTimeout(function(){ location.href = 'intent:' + o.param + '#Intent;' + o.g_proto + ';end'}, 100);
            } else if(navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)) {
                // Apple
                setTimeout(function(){ location.href = o.a_store; }, 200);          
                setTimeout(function(){ location.href = o.a_proto + o.param }, 100);
            } else {
                alert('이 기능은 모바일에서만 사용할 수 있습니다.');
            }
        break;
    }
}
//================== END sns 보내기2  =============

//================== sns 보내기3  =============
function sendSns3(sns, url, txt, isApp){
    var o;
    var _url = encodeURIComponent(url);
    var _txt = encodeURIComponent(txt);
    var _br  = encodeURIComponent('\r\n');
 
    switch(sns) {
        case 'facebook':
			url = 'http://www.facebook.com/sharer/sharer.php?u=' + _url
			window.location = url;

        break; 
        case 'twitter':

			url = 'http://twitter.com/intent/tweet?text=' + _txt + '&url=' + _url
			window.location = url;
        break; 
        default:
            alert('지원하지 않는 SNS입니다.');
            return false;
    }
}

//================ 입력 글자 바이트 출력 
$(document).ready(function(){
	$('input.write_byte').keyup(function(){
	bytesHandler(this);
	});

	$('input.write_byte2').keyup(function(){
	bytesHandler2(this);
	});
});
function bytesHandler(obj){
	var text = $(obj).val();
	$('span.bytes').text(getTextLength(text));
}
function bytesHandler2(obj){
	var text = $(obj).val();
	$('span.bytes2').text(getTextLength(text));
}

function getTextLength(str) {
	var len = 0;
	for (var i = 0; i < str.length; i++) {
		if (escape(str.charAt(i)).length == 6) {
		len++;
	}
		len++;
	}
		return len;
}

//================ END 입력 글자 바이트 출력 


//============= 클립보드 복사 
function CopyToClipboard ( tagToCopy, textarea ){ 

		textarea.parentNode.style.display = "block"; 

		var textToClipboard = ""; 
		if ( "value" in tagToCopy ){    textToClipboard = tagToCopy.value;    } 
		else {    textToClipboard = ( tagToCopy.innerText ) ? tagToCopy.innerText : tagToCopy.textContent;    } 

		var success = false; 

		if ( window.clipboardData ){ 
				window.clipboardData.setData ( "Text", textToClipboard ); 
				success = true; 
		} 
		else { 
				textarea.value = textToClipboard; 

				var rangeToSelect = document.createRange(); 

				rangeToSelect.selectNodeContents( textarea ); 

				var selection = window.getSelection(); 
				selection.removeAllRanges(); 
				selection.addRange( rangeToSelect ); 

				success = true; 

				try { 
					if ( window.netscape && (netscape.security && netscape.security.PrivilegeManager) ){ 
						netscape.security.PrivilegeManager.enablePrivilege( "UniversalXPConnect" ); 
					} 

					textarea.select(); 
					success = document.execCommand( "copy", false, null ); 
				} 
				catch ( error ){  success = false;  } 
		} 

		textarea.parentNode.style.display = "none"; 
		textarea.value = ""; 

		if ( success ){ alert( ' 클립보드에 복사되었습니다. \n "Ctrl+v"를 사용하여 원하는 곳에 붙여넣기 하세요. ' ); } 
		else {    alert( " 복사하지 못했습니다. " );    } 

} 
//============= END 클립보드 복사 



//게시판 글 등록 체크
function boardWritecheck(){

	if(isBlank(signform.title.value)) {
		alert("제목을 입력해야지!!!");
		signform.title.focus();
		return false;
	}

	//alert(myeditor.outputBodyHTML());

	if(isBlank(signform.content.value)) {
		alert("내용 입력해야지!!!");
		signform.content.focus();
		return false;
	}


	if(document.getElementById("fm_post")){
		myeditor.outputBodyHTML()	//에디터 삽입관련
	}

	if(document.getElementById("fm_post1")){
		myeditor1.outputBodyHTML()	//에디터 삽입관련
	}
	signform.submit();


} //function boardWritecheck(){


//숫자와 하이폰만 입력 
function NumberHipun(check_num){
    var inText = check_num;
    var ret;
    for (var i=0; i<inText.length; i++)  {

        ret = inText.charCodeAt(i);
        if (ret != 45) {
            if ((ret<48) || (ret>57)) {
                alert("숫자 또는 - 만 입력 하여 주시기 바랍니다.");
                check_num.value = "";
                check_num.focus();
                return false
            }    
        }
    }
}