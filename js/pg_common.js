
function stripslashes (str) {
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Ates Goral (http://magnetiq.com)
  // +      fixed by: Mick@el
  // +   improved by: marrtins
  // +   bugfixed by: Onno Marsman
  // +   improved by: rezna
  // +   input by: Rick Waldron
  // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
  // +   input by: Brant Messenger (http://www.brantmessenger.com/)
  // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: stripslashes('Kevin\'s code');
  // *     returns 1: "Kevin's code"
  // *     example 2: stripslashes('Kevin\\\'s code');
  // *     returns 2: "Kevin\'s code"
  return (str + '').replace(/\\(.?)/g, function (s, n1) {
    switch (n1) {
    case '\\':
      return '\\';
    case '0':
      return '\u0000';
    case '':
      return '';
    default:
      return n1;
    }
  });
}

//이미지 확장자 체크
function checkImgFile(obj,tg_name) {
	var filename = $(obj).val().substring($(obj).val().lastIndexOf('\\')+1);
	var ext = filename.substring(filename.lastIndexOf('.')+1).toLowerCase();
	if (ext == "jpg"  || ext == "png"  || ext == "gif"  ||
		ext == "ppt"  || ext == "xls"  || ext == "doc"  ||
		ext == "pptx" || ext == "xlsx" || ext == "docx" ||
		ext == "zip"  || ext == "txt"  || ext == "pdf"
	) {
		$(tg_name).val( filename );
		return true;
	} else {
		alert("업로드가능한 파일이 아닙니다. 다시 선택해 주세요.");
		return false;
	}
}

//이미지 확장자 체크
function checkFile(obj,tg_name) {
	var filename = $(obj).val().substring($(obj).val().lastIndexOf('\\')+1);
	var ext = filename.substring(filename.lastIndexOf('.')+1).toLowerCase();
	if (ext == "jpg"  || ext == "png"  || ext == "gif" ) {
		$(tg_name).val( filename );
		return true;
	} else {
		alert("이미지 파일이 아닙니다. 다시 선택해 주세요.");
		return false;
	}
}

	/// onFocus="clearText(this)" onBlur="clearTextOut(this)"
	function clearText(y){
		if (y.defaultValue==y.value){
			y.value = "";
		}
	}
	function clearTextOut(y){
		if (y.value==""){
			y.value = y.defaultValue;
		}
	}

	function clearImg(y){
		y.style.backgroundImage='url(none)';
	}

	function popup(url,id,w,h,sc){
		if(sc!="") sc = "yes";
		var window_left = (screen.width-640)/2;
		var window_top = (screen.height-480)/2;
	   //showModalDialog
		window.open(url,id,'width=' + w + ',height=' + h + ',status=no,scrollbars='+ sc +',menubar=no,top=' + window_top + ',left=' + window_left + '');
	}
	function popup2(url,id,w,h,sc){
		if(sc!="") sc = "yes";
		var window_left = (screen.width-640)/2;
		var window_top = (screen.height-480)/2;
		showModalDialog(url,id,'width=' + w + ',height=' + h + ',status=no,scrollbars='+ sc +',menubar=no,top=' + window_top + ',left=' + window_left + '');
	}

     function frmIdCheck(nv){

        var nameVal = nv.split(",")
        var inputName = new Array();
        var inputText,thislimit,inputValu;
        var n_cnt = nameVal.length;
        for(n=0;n<n_cnt;n++){
		   inputName[n] = $("#"+nameVal[n]);
		}

        var x_cnt = inputName.length;
        for(x=0;x<x_cnt;x++){

            inputText = inputName[x].attr('title');
            thislimit = inputName[x].attr('txtlimit');
            inputChks = inputName[x].attr('chk');

                    inputValu = inputName[x].val();
                    if(!inputValu ){
                            alert(inputText+"를(을) 입력해주세요");
                            inputName[x].focus();
                           return false;
                    }else{
                        if(thislimit){ ///txtlimit='n'
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
                                    alert(inputText+"의 글자 수가 작습니다.");
                                    inputName[x].focus();
                                    return false;
                            }
                        }
                    }

					if(inputChks){
						if(inputChks=="email"){
						    var EmailChkExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
							if(!EmailChkExp.test(inputName[x].val())) {
								alert('이메일 주소가 유효하지 않습니다');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="number"){
						    var NumberChkExp = /[^0-9.]/gi;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('숫자만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="eng"){
						    var NumberChkExp = /[^a-zA-Z]/g;;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('영문만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}
					} ///CHK

         }
        return true;
    }

	/// onsubmit="return frmCheck('name,name2');"
    function frmCheck(nv){

        var nameVal = nv.split(",")
        var inputName = new Array();
        var inputText,thislimit,inputValu;
        var n_cnt = nameVal.length;
        for(n=0;n<n_cnt;n++){

			var sVal = $("input[name="+nameVal[n]+"]").val();
			var sVal_1 = $("textarea[name="+nameVal[n]+"]").val();
			var sVal_2 = $("file[name="+nameVal[n]+"]").val();

			if(sVal==undefined){
				inputName[n] = $("textarea[name="+nameVal[n]+"]");				
				if(sVal_1==undefined) {
					inputName[n] = $("select[name="+nameVal[n]+"]");
				}
			}else{
				inputName[n] = $("input[name="+nameVal[n]+"]");
			}

		}

        var x_cnt = inputName.length;
        for(x=0;x<x_cnt;x++){

            inputText = inputName[x].attr('title');
            inputRead = inputName[x].attr('readonly');
            inputType = inputName[x].attr('type');
            inputChks = inputName[x].attr('chk');      //입력타입 email number eng fileimg
            thislimit = inputName[x].attr('txtlimit'); //글자수 txtlimit='n'

				if(inputType=="radio"){
                     if(!$(":radio[name="+nameVal[x]+"]:checked").val()){
                        alert(inputText+"를(을) 체크해주세요");
                        return false;
                     }

                }else if(inputType=="checkbox"){
                    if($("input:checkbox[name="+nameVal[x]+"]").is(":checked") != true ){
                        alert(inputText+"를(을) 체크해주세요");
                        return false;
                    }
                    /// 값가져오기 $('input:checkbox [ id="checkbox_id" ]').val();

                }else if(inputType=="text" || inputType=="textarea"){

                    inputValu = inputName[x].val();
                    if(!inputValu ){
						if (inputRead=="readonly"){
                            alert(inputText+"이(가) 입력 되지 않았습니다.");
                            inputName[x].focus();
                           return false;
						}else{
                            alert(inputText+"를(을) 입력해주세요");
                            inputName[x].focus();
                           return false;
						}
					}else{
                        if(thislimit){ ///txtlimit='n'
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
                                    alert(inputText+"의 글자 수가 작습니다.");
                                    inputName[x].focus();
                                    return false;
                            }
                        }
                    }

					if(inputChks){
						if(inputChks=="idcheck"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }

							  }
						}

						//관리자 아이디체크 
						if(inputChks=="idcheck_1"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }

							  }
						}


						if(inputChks=="email"){
						    var EmailChkExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
							if(!EmailChkExp.test(inputName[x].val())) {
								alert('이메일 주소가 유효하지 않습니다');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="number"){
						    var NumberChkExp = /[^0-9.]/gi;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('숫자만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="eng"){
						    var NumberChkExp = /[^a-zA-Z]/g;;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('영문만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}

					} ///CHK
                }else if(inputType=="hidden"){
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert(inputText+"의 값이 없습니다.");
                        return false;
                    }
                }else if(inputType=="password"){
                    inputValu = inputName[x].val();

					//비밀번호 확인 검사
					if(inputChks=="pwcheck"){
						  if (signform.upasswd.value != signform.upasswd1.value) {
							 alert("입력하신 비밀번호가 일치하지 않습니다.\n다시 확인하시고 입력하여 주십시오.");
							 signform.upasswd1.focus();
							 signform.upasswd1.select();
							 return false;
						  }
					}


                    if(!inputValu ){
                            alert(inputText+"를(을) 입력해주세요");
                            inputName[x].focus();
                           return false;
                    }else{
                        if(thislimit){
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
								alert(inputText+"의 글자 수가 작습니다.");
								inputName[x].focus();
								return false;
                            }
                        }
                    }
                }else{ ///select
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert(inputText+"를 선택해 주세요.");
						inputName[x].focus();
                        return false;
                    }

					if(inputChks=="fileimg"){ //이미지 파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG")) {
							alert("jpg, png, gif 파일만 업로드 가능합니다.");
							inputName[x].focus();
							return false;
						}
					}
					if(inputChks=="fileadd"){ //파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG") && (FilelastChkExp.toUpperCase() != "XLS") && (FilelastChkExp.toUpperCase() != "XLSX") && (FilelastChkExp.toUpperCase() != "PDF") && (FilelastChkExp.toUpperCase() != "HWP") && (FilelastChkExp.toUpperCase() != "DOC") && (FilelastChkExp.toUpperCase() != "TEXT") && (FilelastChkExp.toUpperCase() != "PPT") && (FilelastChkExp.toUpperCase() != "PPTX")) {
							alert("jpg, png, gif, xls,xlsx,pdf,hwp,doc,text,ppt,pptx 파일만 업로드 가능합니다.");
							inputName[x].focus();
							return false;
						}
					}

                } //inputType



         }
		
		return true;	
        
    } //end frmCheck)_;

    function frmCheck_signform2(nv){

        var nameVal = nv.split(",")
        var inputName = new Array();
        var inputText,thislimit,inputValu;
        var n_cnt = nameVal.length;
        for(n=0;n<n_cnt;n++){

			var sVal = $("input[name="+nameVal[n]+"]").val();
			var sVal_1 = $("textarea[name="+nameVal[n]+"]").val();
			var sVal_2 = $("file[name="+nameVal[n]+"]").val();

			if(sVal==undefined){
				inputName[n] = $("textarea[name="+nameVal[n]+"]");				
				if(sVal_1==undefined) {
					inputName[n] = $("select[name="+nameVal[n]+"]");
				}
			}else{
				inputName[n] = $("input[name="+nameVal[n]+"]");
			}

		}

        var x_cnt = inputName.length;
        for(x=0;x<x_cnt;x++){

            inputText = inputName[x].attr('title');
            inputRead = inputName[x].attr('readonly');
            inputType = inputName[x].attr('type');
            inputChks = inputName[x].attr('chk');      //입력타입 email number eng fileimg
            thislimit = inputName[x].attr('txtlimit'); //글자수 txtlimit='n'

				if(inputType=="radio"){
                     if(!$(":radio[name="+nameVal[x]+"]:checked").val()){
                        alert(inputText+"를(을) 체크해주세요");
                        return false;
                     }

                }else if(inputType=="checkbox"){
                    if($("input:checkbox[name="+nameVal[x]+"]").is(":checked") != true ){
                        alert(inputText+"를(을) 체크해주세요");
                        return false;
                    }
                    /// 값가져오기 $('input:checkbox [ id="checkbox_id" ]').val();

                }else if(inputType=="text" || inputType=="textarea"){

                    inputValu = inputName[x].val();
                    if(!inputValu ){
						if (inputRead=="readonly"){
                            alert(inputText+"이(가) 입력 되지 않았습니다.");
                            inputName[x].focus();
                           return false;
						}else{
							if(inputChks=="fm_post"){
								if(!myeditor.outputBodyHTML()) {
									alert(inputText+"를(을) 입력해주세요");
									return false;
								}
							} else {
								alert(inputText+"를(을) 입력해주세요");
								inputName[x].focus();
								return false;
							}
                           
						}
					}else{
                        if(thislimit){ ///txtlimit='n'
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
                                    alert(inputText+"의 글자 수가 작습니다.");
                                    inputName[x].focus();
                                    return false;
                            }
                        }
                    }

					if(inputChks){
						if(inputChks=="idcheck"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }
							  }
						}
						//관리자 아이디체크 
						if(inputChks=="idcheck_1"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }

							  }
						}


						if(inputChks=="email"){
						    var EmailChkExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
							if(!EmailChkExp.test(inputName[x].val())) {
								alert('이메일 주소가 유효하지 않습니다');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="number"){
						    var NumberChkExp = /[^0-9.]/gi;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('숫자만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="eng"){
						    var NumberChkExp = /[^a-zA-Z]/g;;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('영문만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="email_check"){
						    var NumberChkExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('한글 입력은 불가능 합니다.');
									inputName[x].focus();
								return false;
							}
						}

					} ///CHK
                }else if(inputType=="hidden"){
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert(inputText+"를(을) 선택해주세요");
                        return false;
                    }
                }else if(inputType=="password"){
                    inputValu = inputName[x].val();

					//비밀번호 확인 검사
					if(inputChks=="pwcheck"){
						  var PwChkExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
						  if(!PwChkExp.test(inputName[x].val())) {
								alert('비밀번호는 영문, 숫자, 특수문자 조합으로 사용가능합니다.');
								inputName[x].focus();
								return false;
						  }

						  if (signform.upasswd.value != signform.upasswd1.value) {
							 alert("입력하신 비밀번호가 일치하지 않습니다.\n다시 확인하시고 입력하여 주십시오.");
							 signform.upasswd1.focus();
							 signform.upasswd1.select();
							 return false;
						  }
					}


                    if(!inputValu ){
                            alert(inputText+"를(을) 입력해주세요");
                            inputName[x].focus();
                           return false;
                    }else{
                        if(thislimit){
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
								alert(inputText+"의 글자 수가 작습니다.");
								inputName[x].focus();
								return false;
                            }
                        }
                    }
                }else{ ///select
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert(inputText+"를 선택해 주세요.");
						inputName[x].focus();
                        return false;
                    }

					if(inputChks=="fileimg"){ //이미지 파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG")) {
							alert("jpg, png, gif 파일만 업로드 가능합니다.");
							inputName[x].focus();
							return false;
						}
					}
					if(inputChks=="fileadd"){ //파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG") && (FilelastChkExp.toUpperCase() != "XLS") && (FilelastChkExp.toUpperCase() != "XLSX") && (FilelastChkExp.toUpperCase() != "PDF") && (FilelastChkExp.toUpperCase() != "HWP") && (FilelastChkExp.toUpperCase() != "DOC") && (FilelastChkExp.toUpperCase() != "TEXT") && (FilelastChkExp.toUpperCase() != "PPT") && (FilelastChkExp.toUpperCase() != "PPTX")) {
							alert("jpg, png, gif, xls,xlsx,pdf,hwp,doc,text,ppt,pptx 파일만 업로드 가능합니다.");
							inputName[x].focus();
							return false;
						}
					}

                } //inputType



         }

		if(document.getElementById("fm_post")){
			myeditor.outputBodyHTML()	//에디터 삽입관련
		}

		if(document.getElementById("fm_post1")){
			myeditor1.outputBodyHTML()	//에디터 삽입관련
		}

		if(document.getElementById("fm_post2")){
			myeditor2.outputBodyHTML()	//에디터 삽입관련
		}

        signform2.submit();

    } //end frmCheck_signform2(nv){


    function frmCheck_new(nv){

        var nameVal = nv.split(",")
        var inputName = new Array();
        var inputText,thislimit,inputValu;
        var n_cnt = nameVal.length;
        for(n=0;n<n_cnt;n++){

			var sVal = $("input[name="+nameVal[n]+"]").val();
			var sVal_1 = $("textarea[name="+nameVal[n]+"]").val();
			var sVal_2 = $("file[name="+nameVal[n]+"]").val();

			if(sVal==undefined){
				inputName[n] = $("textarea[name="+nameVal[n]+"]");				
				if(sVal_1==undefined) {
					inputName[n] = $("select[name="+nameVal[n]+"]");
				}
			}else{
				inputName[n] = $("input[name="+nameVal[n]+"]");
			}

		}

        var x_cnt = inputName.length;
        for(x=0;x<x_cnt;x++){

            inputText = inputName[x].attr('title');
            inputRead = inputName[x].attr('readonly');
            inputType = inputName[x].attr('type');
            inputChks = inputName[x].attr('chk');      //입력타입 email number eng fileimg
            thislimit = inputName[x].attr('txtlimit'); //글자수 txtlimit='n'

				if(inputType=="radio"){
                     if(!$(":radio[name="+nameVal[x]+"]:checked").val()){
                        alert(inputText+"를(을) 체크해주세요");
                        return false;
                     }

                }else if(inputType=="checkbox"){
                    if($("input:checkbox[name="+nameVal[x]+"]").is(":checked") != true ){
                        alert(inputText+"를(을) 체크해주세요");
                        return false;
                    }
                    /// 값가져오기 $('input:checkbox [ id="checkbox_id" ]').val();

                }else if(inputType=="text" || inputType=="textarea"){

                    inputValu = inputName[x].val();
                    if(!inputValu ){
						if (inputRead=="readonly"){
                            alert(inputText+"이(가) 입력 되지 않았습니다.");
                            inputName[x].focus();
                           return false;
						}else{
							if(inputChks=="fm_post"){
								if(!myeditor.outputBodyHTML()) {
									alert(inputText+"를(을) 입력해주세요");
									return false;
								}
							} else {
								alert(inputText+"를(을) 입력해주세요");
								inputName[x].focus();
								return false;
							}
                           
						}
					}else{
                        if(thislimit){ ///txtlimit='n'
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
                                    alert(inputText+"의 글자 수가 작습니다.");
                                    inputName[x].focus();
                                    return false;
                            }
                        }
                    }

					if(inputChks){
						if(inputChks=="idcheck"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }
							  }
						}
						//관리자 아이디체크 
						if(inputChks=="idcheck_1"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }

							  }
						}


						if(inputChks=="email"){
						    var EmailChkExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
							if(!EmailChkExp.test(inputName[x].val())) {
								alert('이메일 주소가 유효하지 않습니다');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="number"){
						    var NumberChkExp = /[^0-9.]/gi;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('숫자만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="eng"){
						    var NumberChkExp = /[^a-zA-Z]/g;;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('영문만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="email_check"){
						    var NumberChkExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('한글 입력은 불가능 합니다.');
									inputName[x].focus();
								return false;
							}
						}

					} ///CHK
                }else if(inputType=="hidden"){
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert(inputText+"를(을) 선택해주세요");
                        return false;
                    }
                }else if(inputType=="password"){
                    inputValu = inputName[x].val();

					//비밀번호 확인 검사
					if(inputChks=="pwcheck"){
						  var PwChkExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
						  if(!PwChkExp.test(inputName[x].val())) {
								alert('비밀번호는 영문, 숫자, 특수문자 조합으로 사용가능합니다.');
								inputName[x].focus();
								return false;
						  }

						  if (signform.upasswd.value != signform.upasswd1.value) {
							 alert("입력하신 비밀번호가 일치하지 않습니다.\n다시 확인하시고 입력하여 주십시오.");
							 signform.upasswd1.focus();
							 signform.upasswd1.select();
							 return false;
						  }
					}


                    if(!inputValu ){
                            alert(inputText+"를(을) 입력해주세요");
                            inputName[x].focus();
                           return false;
                    }else{
                        if(thislimit){
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
								alert(inputText+"의 글자 수가 작습니다.");
								inputName[x].focus();
								return false;
                            }
                        }
                    }
                }else{ ///select
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert(inputText+"를 선택해 주세요.");
						inputName[x].focus();
                        return false;
                    }

					if(inputChks=="fileimg"){ //이미지 파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG")) {
							alert("jpg, png, gif 파일만 업로드 가능합니다.");
							inputName[x].focus();
							return false;
						}
					}
					if(inputChks=="fileadd"){ //파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG") && (FilelastChkExp.toUpperCase() != "XLS") && (FilelastChkExp.toUpperCase() != "XLSX") && (FilelastChkExp.toUpperCase() != "PDF") && (FilelastChkExp.toUpperCase() != "HWP") && (FilelastChkExp.toUpperCase() != "DOC") && (FilelastChkExp.toUpperCase() != "TEXT") && (FilelastChkExp.toUpperCase() != "PPT") && (FilelastChkExp.toUpperCase() != "PPTX")) {
							alert("jpg, png, gif, xls,xlsx,pdf,hwp,doc,text,ppt,pptx 파일만 업로드 가능합니다.");
							inputName[x].focus();
							return false;
						}
					}

                } //inputType



         }

		if(document.getElementById("fm_post")){
			myeditor.outputBodyHTML()	//에디터 삽입관련
		}

		if(document.getElementById("fm_post1")){
			myeditor1.outputBodyHTML()	//에디터 삽입관련
		}

		if(document.getElementById("fm_post2")){
			myeditor2.outputBodyHTML()	//에디터 삽입관련
		}

        signform.submit();

    } //end frmCheck_new(nv){


  function frmCheck_eng(nv){

        var nameVal = nv.split(",")
        var inputName = new Array();
        var inputText,thislimit,inputValu;
        var n_cnt = nameVal.length;
        for(n=0;n<n_cnt;n++){

			var sVal = $("input[name="+nameVal[n]+"]").val();
			var sVal_1 = $("textarea[name="+nameVal[n]+"]").val();
			var sVal_2 = $("file[name="+nameVal[n]+"]").val();

			if(sVal==undefined){
				inputName[n] = $("textarea[name="+nameVal[n]+"]");				
				if(sVal_1==undefined) {
					inputName[n] = $("select[name="+nameVal[n]+"]");
				}
			}else{
				inputName[n] = $("input[name="+nameVal[n]+"]");
			}

		}

        var x_cnt = inputName.length;
        for(x=0;x<x_cnt;x++){

            inputText = inputName[x].attr('title');
            inputRead = inputName[x].attr('readonly');
            inputType = inputName[x].attr('type');
            inputChks = inputName[x].attr('chk');      //입력타입 email number eng fileimg
            thislimit = inputName[x].attr('txtlimit'); //글자수 txtlimit='n'

				if(inputType=="radio"){
                     if(!$(":radio[name="+nameVal[x]+"]:checked").val()){
                        alert("Please check "+inputText);
                        return false;
                     }

                }else if(inputType=="checkbox"){
                    if($("input:checkbox[name="+nameVal[x]+"]").is(":checked") != true ){
                        alert("Please check "+inputText);
                        return false;
                    }
                    /// 값가져오기 $('input:checkbox [ id="checkbox_id" ]').val();

                }else if(inputType=="text" || inputType=="textarea"){

                    inputValu = inputName[x].val();
                    if(!inputValu ){
						if (inputRead=="readonly"){
                            alert(inputText+" was not entered.");
                            inputName[x].focus();
                           return false;
						}else{
                            alert("Please enter "+inputText);
                            inputName[x].focus();
                           return false;
						}
					}else{
                        if(thislimit){ ///txtlimit='n'
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
                                    alert("The number of characters in "+inputText+" is small.");
                                    inputName[x].focus();
                                    return false;
                            }
                        }
                    }

					if(inputChks){
						if(inputChks=="idcheck"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }
							  }
						}
						//관리자 아이디체크 
						if(inputChks=="idcheck_1"){
							  if(inputValu < 4 || inputValu > 12) {
								 alert("An ID must be consisted of 4 to 12 letters, numbers, or a combination of letters!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("An ID must be consisted of 4 to 12 letters, numbers, or a combination of letters!");
									return false;
								 }

							  }
						}


						if(inputChks=="email"){
						    var EmailChkExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
							if(!EmailChkExp.test(inputName[x].val())) {
								alert('Email address not valid');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="number"){
						    var NumberChkExp = /[^0-9.]/gi;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('Only enter numbers');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="eng"){
						    var NumberChkExp = /[^a-zA-Z]/g;;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('Only enter English');
									inputName[x].focus();
								return false;
							}
						}

					} ///CHK
                }else if(inputType=="hidden"){
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert("Please enter "+inputText);
                        return false;
                    }
                }else if(inputType=="password"){
                    inputValu = inputName[x].val();

					//비밀번호 확인 검사
					if(inputChks=="pwcheck"){
						  var PwChkExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
						  if(!PwChkExp.test(inputName[x].val())) {
								alert('비밀번호는 영문, 숫자, 특수문자 조합으로 사용가능합니다.');
								inputName[x].focus();
								return false;
						  }

						  if (signform.upasswd.value != signform.upasswd1.value) {
							  alert("Password does not match. Please check again.");
							 signform.upasswd1.focus();
							 signform.upasswd1.select();
							 return false;
						  }
					}


                    if(!inputValu ){
							alert("Please enter "+inputText);
                            inputName[x].focus();
                           return false;
                    }else{
                        if(thislimit){
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
								alert("The number of characters in "+inputText+" is small.");
								inputName[x].focus();
								return false;
                            }
                        }
                    }
                }else{ ///select
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert("Please enter "+inputText);
						inputName[x].focus();
                        return false;
                    }

					if(inputChks=="fileimg"){ //이미지 파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG")) {
							alert("jpg, png, gif files can be uploaded.");
							inputName[x].focus();
							return false;
						}
					}
					if(inputChks=="fileadd"){ //파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG") && (FilelastChkExp.toUpperCase() != "XLS") && (FilelastChkExp.toUpperCase() != "XLSX") && (FilelastChkExp.toUpperCase() != "PDF") && (FilelastChkExp.toUpperCase() != "HWP") && (FilelastChkExp.toUpperCase() != "DOC") && (FilelastChkExp.toUpperCase() != "TEXT") && (FilelastChkExp.toUpperCase() != "PPT") && (FilelastChkExp.toUpperCase() != "PPTX")) {
							alert("Only jpg, png, gif, xls,xlsx,pdf,hwp,doc,text,ppt,pptx files can be uploaded.");							
							inputName[x].focus();
							return false;
						}
					}

                } //inputType



         }

		if(document.getElementById("fm_post")){
			myeditor.outputBodyHTML()	//에디터 삽입관련
		}
		if(document.getElementById("fm_post1")){
			myeditor1.outputBodyHTML()	//에디터 삽입관련
		}
        signform.submit();

    } //end frmCheck_eng(nv){

    function frmCheck_cha(nv){

        var nameVal = nv.split(",")
        var inputName = new Array();
        var inputText,thislimit,inputValu;
        var n_cnt = nameVal.length;
        for(n=0;n<n_cnt;n++){

			var sVal = $("input[name="+nameVal[n]+"]").val();
			var sVal_1 = $("textarea[name="+nameVal[n]+"]").val();
			var sVal_2 = $("file[name="+nameVal[n]+"]").val();

			if(sVal==undefined){
				inputName[n] = $("textarea[name="+nameVal[n]+"]");				
				if(sVal_1==undefined) {
					inputName[n] = $("select[name="+nameVal[n]+"]");
				}
			}else{
				inputName[n] = $("input[name="+nameVal[n]+"]");
			}

		}

        var x_cnt = inputName.length;
        for(x=0;x<x_cnt;x++){

            inputText = inputName[x].attr('title');
            inputRead = inputName[x].attr('readonly');
            inputType = inputName[x].attr('type');
            inputChks = inputName[x].attr('chk');      //입력타입 email number eng fileimg
            thislimit = inputName[x].attr('txtlimit'); //글자수 txtlimit='n'

				if(inputType=="radio"){
                     if(!$(":radio[name="+nameVal[x]+"]:checked").val()){
                        alert("请检查"+inputText);
                        return false;
                     }

                }else if(inputType=="checkbox"){
                    if($("input:checkbox[name="+nameVal[x]+"]").is(":checked") != true ){
                        alert("请检查"+inputText);
                        return false;
                    }
                    /// 값가져오기 $('input:checkbox [ id="checkbox_id" ]').val();

                }else if(inputType=="text" || inputType=="textarea"){

                    inputValu = inputName[x].val();
                    if(!inputValu ){
						if (inputRead=="readonly"){
                            alert("未输入"+inputText);
                            inputName[x].focus();
                           return false;
						}else{
                            alert("请输入"+inputText);
                            inputName[x].focus();
                           return false;
						}
					}else{
                        if(thislimit){ ///txtlimit='n'
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
                                    alert(inputText+"의 글자 수가 작습니다.");
                                    inputName[x].focus();
                                    return false;
                            }
                        }
                    }

					if(inputChks){
						if(inputChks=="idcheck"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }
							  }
						}
						//관리자 아이디체크 
						if(inputChks=="idcheck_1"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }

							  }
						}


						if(inputChks=="email"){
						    var EmailChkExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
							if(!EmailChkExp.test(inputName[x].val())) {
								alert('이메일 주소가 유효하지 않습니다');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="number"){
						    var NumberChkExp = /[^0-9.]/gi;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('숫자만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="eng"){
						    var NumberChkExp = /[^a-zA-Z]/g;;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('영문만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}

					} ///CHK
                }else if(inputType=="hidden"){
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert(inputText+"를(을) 선택해주세요");
                        return false;
                    }
                }else if(inputType=="password"){
                    inputValu = inputName[x].val();

					//비밀번호 확인 검사
					if(inputChks=="pwcheck"){
						  var PwChkExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
						  if(!PwChkExp.test(inputName[x].val())) {
								alert('비밀번호는 영문, 숫자, 특수문자 조합으로 사용가능합니다.');
								inputName[x].focus();
								return false;
						  }

						  if (signform.upasswd.value != signform.upasswd1.value) {
							 alert("입력하신 비밀번호가 일치하지 않습니다.\n다시 확인하시고 입력하여 주십시오.");
							 signform.upasswd1.focus();
							 signform.upasswd1.select();
							 return false;
						  }
					}


                    if(!inputValu ){
                            alert("请输入"+inputText);
                            inputName[x].focus();
                           return false;
                    }else{
                        if(thislimit){
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
								alert(inputText+"의 글자 수가 작습니다.");
								inputName[x].focus();
								return false;
                            }
                        }
                    }
                }else{ ///select
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert(inputText+"를 선택해 주세요.");
						inputName[x].focus();
                        return false;
                    }

					if(inputChks=="fileimg"){ //이미지 파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG")) {
							alert("jpg, png, gif 파일만 업로드 가능합니다.");
							inputName[x].focus();
							return false;
						}
					}
					if(inputChks=="fileadd"){ //파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG") && (FilelastChkExp.toUpperCase() != "XLS") && (FilelastChkExp.toUpperCase() != "XLSX") && (FilelastChkExp.toUpperCase() != "PDF") && (FilelastChkExp.toUpperCase() != "HWP") && (FilelastChkExp.toUpperCase() != "DOC") && (FilelastChkExp.toUpperCase() != "TEXT") && (FilelastChkExp.toUpperCase() != "PPT") && (FilelastChkExp.toUpperCase() != "PPTX")) {
							alert("jpg, png, gif, xls,xlsx,pdf,hwp,doc,text,ppt,pptx 파일만 업로드 가능합니다.");
							inputName[x].focus();
							return false;
						}
					}

                } //inputType



         }

		if(document.getElementById("fm_post")){
			myeditor.outputBodyHTML()	//에디터 삽입관련
		}
		if(document.getElementById("fm_post1")){
			myeditor1.outputBodyHTML()	//에디터 삽입관련
		}
        signform.submit();

    } //end frmCheck_cha(nv){


    

   function frmCheck_jp(nv){

        var nameVal = nv.split(",")
        var inputName = new Array();
        var inputText,thislimit,inputValu;
        var n_cnt = nameVal.length;
        for(n=0;n<n_cnt;n++){

			var sVal = $("input[name="+nameVal[n]+"]").val();
			var sVal_1 = $("textarea[name="+nameVal[n]+"]").val();
			var sVal_2 = $("file[name="+nameVal[n]+"]").val();

			if(sVal==undefined){
				inputName[n] = $("textarea[name="+nameVal[n]+"]");				
				if(sVal_1==undefined) {
					inputName[n] = $("select[name="+nameVal[n]+"]");
				}
			}else{
				inputName[n] = $("input[name="+nameVal[n]+"]");
			}

		}

        var x_cnt = inputName.length;
        for(x=0;x<x_cnt;x++){

            inputText = inputName[x].attr('title');
            inputRead = inputName[x].attr('readonly');
            inputType = inputName[x].attr('type');
            inputChks = inputName[x].attr('chk');      //입력타입 email number eng fileimg
            thislimit = inputName[x].attr('txtlimit'); //글자수 txtlimit='n'

				if(inputType=="radio"){
                     if(!$(":radio[name="+nameVal[x]+"]:checked").val()){
                        alert(inputText+"チェックして下さい。");
                        return false;
                     }

                }else if(inputType=="checkbox"){
                    if($("input:checkbox[name="+nameVal[x]+"]").is(":checked") != true ){
                        alert(inputText+"チェックして下さい。");
                        return false;
                    }
                    /// 값가져오기 $('input:checkbox [ id="checkbox_id" ]').val();

                }else if(inputType=="text" || inputType=="textarea"){

                    inputValu = inputName[x].val();
                    if(!inputValu ){
						if (inputRead=="readonly"){
                            alert(inputText+"が入力されていません。");
                            inputName[x].focus();
                           return false;
						}else{
                            alert(inputText+"をご入力ください。");
                            inputName[x].focus();
                           return false;
						}
					}else{
                        if(thislimit){ ///txtlimit='n'
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
                                    alert(inputText+"의 글자 수가 작습니다.");
                                    inputName[x].focus();
                                    return false;
                            }
                        }
                    }

					if(inputChks){
						if(inputChks=="idcheck"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }
							  }
						}
						//관리자 아이디체크 
						if(inputChks=="idcheck_1"){
							  if(inputValu < 5 || inputValu > 20) {
								 alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
								 return false;
							  }
							  for(var i = 0; i < inputValu.length; i++) {
								 var chr = inputValu.substr(i,1);
								 if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
									alert("아이디는 5 ~ 20자의 영문 소문자나 숫자 또는 조합된 문자열이어야 합니다!");
									return false;
								 }

							  }
						}


						if(inputChks=="email"){
						    var EmailChkExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
							if(!EmailChkExp.test(inputName[x].val())) {
								alert('이메일 주소가 유효하지 않습니다');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="number"){
						    var NumberChkExp = /[^0-9.]/gi;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('숫자만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}
						if(inputChks=="eng"){
						    var NumberChkExp = /[^a-zA-Z]/g;;
							if(NumberChkExp.test(inputName[x].val())== true ) {
								alert('영문만 입력해주세요');
									inputName[x].focus();
								return false;
							}
						}

					} ///CHK
                }else if(inputType=="hidden"){
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert(inputText+"를(을) 선택해주세요");
                        return false;
                    }
                }else if(inputType=="password"){
                    inputValu = inputName[x].val();

					//비밀번호 확인 검사
					if(inputChks=="pwcheck"){
						  var PwChkExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
						  if(!PwChkExp.test(inputName[x].val())) {
								alert('비밀번호는 영문, 숫자, 특수문자 조합으로 사용가능합니다.');
								inputName[x].focus();
								return false;
						  }

						  if (signform.upasswd.value != signform.upasswd1.value) {
							 alert("입력하신 비밀번호가 일치하지 않습니다.\n다시 확인하시고 입력하여 주십시오.");
							 signform.upasswd1.focus();
							 signform.upasswd1.select();
							 return false;
						  }
					}


                    if(!inputValu ){
                            alert(inputText+"をご入力ください。");
                            inputName[x].focus();
                           return false;
                    }else{
                        if(thislimit){
                            var valcnt = inputValu.length;
                            if(thislimit > valcnt){
								alert(inputText+"의 글자 수가 작습니다.");
								inputName[x].focus();
								return false;
                            }
                        }
                    }
                }else{ ///select
                    inputValu = inputName[x].val();
                    if(!inputValu ){
                        alert(inputText+"를 선택해 주세요.");
						inputName[x].focus();
                        return false;
                    }

					if(inputChks=="fileimg"){ //이미지 파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG")) {
							alert("jpg, png, gif 파일만 업로드 가능합니다.");
							inputName[x].focus();
							return false;
						}
					}
					if(inputChks=="fileadd"){ //파일 첨부인 경우 체크 						
						var no  = inputValu.lastIndexOf(".");
						var FilelastChkExp = inputValu.substr(no+1, 3);
						if ((FilelastChkExp.toUpperCase() != "JPG") && (FilelastChkExp.toUpperCase() != "GIF") && (FilelastChkExp.toUpperCase() != "PNG") && (FilelastChkExp.toUpperCase() != "XLS") && (FilelastChkExp.toUpperCase() != "XLSX") && (FilelastChkExp.toUpperCase() != "PDF") && (FilelastChkExp.toUpperCase() != "HWP") && (FilelastChkExp.toUpperCase() != "DOC") && (FilelastChkExp.toUpperCase() != "TEXT") && (FilelastChkExp.toUpperCase() != "PPT") && (FilelastChkExp.toUpperCase() != "PPTX")) {
							alert("jpg, png, gif, xls,xlsx,pdf,hwp,doc,text,ppt,pptx 파일만 업로드 가능합니다.");
							inputName[x].focus();
							return false;
						}
					}

                } //inputType



         }

		if(document.getElementById("fm_post")){
			myeditor.outputBodyHTML()	//에디터 삽입관련
		}
		if(document.getElementById("fm_post1")){
			myeditor1.outputBodyHTML()	//에디터 삽입관련
		}
        signform.submit();

    } //end frmCheck_jp(nv){


//
//    // mini jQuery plugin that formats to two decimal places
//    (function($) {
//        $.fn.currencyFormat = function() {
//            this.each( function( i ) {
//                $(this).change( function( e ){
//                    if( isNaN( parseFloat( this.value ) ) ) return;
//                    this.value = parseFloat(this.value).toFixed(2);
//                });
//            });
//            return this; //for chaining
//        }
//    })( jQuery );
//
//    // apply the currencyFormat behaviour to elements with 'currency' as their class
//    $( function() {
//        $('.currency').currencyFormat();
//     });

function fillzero(obj, len) {
  obj= '000000000000000'+obj;
  return obj.substring(obj.length-len);
}
//사용법 fillzero(33, 5);
//결과 00033

function numberFormat(val){
    var number = val.toString();
    var minus = false;

    if (number.length > 3) {
        if (number.charAt(0) == '-') {
            number = number.substr(1);
            minus = true;
        }
        var mod = number.length % 3;
        var div = number.length / 3;
        var output = (mod > 0 ? (number.substring(0, mod)) : "");
        for (var i = 0; i < Math.floor(div); i++) {
            if ((mod == 0) && (i == 0)) {
                output += number.substring(mod + 3 * i, mod + 3 * i + 3);
            } else {
                output += "," + number.substring(mod + 3 * i, mod + 3 * i + 3);
            }
        }
        if (minus) {
            return "-"+ output;
        } else {
            return output;
        }
    } else {
        return number;
    }
}

/*  modal_name  띄우려는 내용에 해당하는 레이어 */
function modal_pop ( modal_id ,title, width) {
	$(function() {
		$( modal_id ).dialog({
			'autoOpen': true,
			'title' : title,
			'modal': true,
			'draggable': false,
			'resizable': false,
			'width': width,
				'buttons': {
					"닫기": function() {
						$( this ).dialog( "close" );
						history.back();
					}
				}

			});
	});
}

//modal_open ( 'modal_id', 'modal_title', modal_width, true, false, 'calendar1_id', 'calendar2_id' )
function modal_open ( modal_id, modal_title, modal_width, modal_resizable, modal_button, calendar1_id, calendar2_id ) {
	$(function() {
		$( modal_id ).dialog({
			'autoOpen': false,
			'title': modal_title,
			'resizable': modal_resizable,
			'closeOnEscape': true ,
			'buttons': [],
			'modal': true
		});
		if (modal_width > 0 ) {
			$( modal_id ).dialog({
				'width': modal_width
			});
		}
		if (modal_button) {
			$( modal_id ).dialog({
				'buttons': {
					"닫기": function() {
						$( this ).dialog( "close" );
					}
				}
			});
		}
	});

	if ( calendar1_id.length > 0 )
	{
		$(function() {
			$( "#"+calendar1_id ).datepicker( );
		});
	}
	if ( calendar2_id.length > 0 )
	{
		$(function() {
			$( "#"+calendar2_id ).datepicker( );
		});
	}

	$( modal_id ).dialog( "open" );
	return false;
}

//모달창으로 메시지를 보여줌.
function view_msg ( modal_id, modal_title, msg ) {
	$( "#"+modal_id ).html( msg );
	modal_open ( "#"+modal_id, modal_title, 0, false, false, "", "" );
}

 /*  //사용법
     javascript:parent.fancyboxClose();
     javascript:fancyboxOpen('../blank.html');
 */
// fancybox팝업창열기
function fancyboxOpen(u,w){
	if(w==''){
	    $.fancybox.open({'type': 'iframe','padding' : 0,'href' : u });
	}else{
	    $.fancybox.open({'type': 'iframe','padding' : 0,'href' : u, 'width' : w });
	}
}
// fancybox팝업창닫기
function fancyboxClose(){
    $.fancybox.close();
}
// fancybox팝업창열기 사이즈 지정
function fancyboxOpen_w(u,w){
    $.fancybox.open({'type': 'iframe','padding' : 0,'href' : u, 'width' : w });
}

//달력 관련
//$(function() {
//	$( "#view_sdate" ).datepicker( );
//	$( "#view_edate" ).datepicker( );
//});
//end 달력 관련



//체크박스 전체선택
function checkall(frm){
   var i=0;
   if(frm.chklist.length){

   }else{
      if(frm.allCheck.checked){
         frm.chklist.checked=true;
      }else{
         frm.chklist.checked=false;
      }
   }

   if(frm.chklist.length > 1){
      for(i=0; i<frm.chklist.length; i++){
         if(frm.allCheck.checked){
            frm.chklist[i].checked=true;
         }else{
            frm.chklist[i].checked=false;
      }
    }
  }
} //end checkall(frm)


function rawurlencode (str) {
  // From: http://phpjs.org/functions
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // +      input by: travc
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: Michael Grier
  // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
  // +      input by: Ratheous
  // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Joris
  // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
  // %          note 1: This reflects PHP 5.3/6.0+ behavior
  // %        note 2: Please be aware that this function expects to encode into UTF-8 encoded strings, as found on
  // %        note 2: pages served as UTF-8
  // *     example 1: rawurlencode('Kevin van Zonneveld!');
  // *     returns 1: 'Kevin%20van%20Zonneveld%21'
  // *     example 2: rawurlencode('http://kevin.vanzonneveld.net/');
  // *     returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
  // *     example 3: rawurlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
  // *     returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'
  str = (str + '').toString();

  // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
  replace(/\)/g, '%29').replace(/\*/g, '%2A');
}
/**
 * 스트링의 바이트 수를 센다(length를 하면 한글도 길이1로 나오는데 바이트 수는 2가 된다)
 * @param obj   : textfield ,textarea objec
 * @return 바이트 수
 */
function FFGetByteLength( obj ){
	var msg = obj;
	var str = new String(msg);
	var len = str.length;
	var count = 0;

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
	return count;
}
/**
 * 스트링을 바이트 수만큼 자른다. 물론 한글을 깨지지 않게 잘라준다(한글이 짤릴경우 버림을 취한다)
 * maxlength만큼 자른 후 obj의 값을 자른 결과로 setting한다
 * @param obj       : textfield ,textarea objec
 * @param mexlength : 최대길이
 */

function FFCutByteString( obj, maxlength) {
	var str,msg;
	var len=0;
	var temp;
	var count;
	count = 0;

	msg = obj;
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
		if(count > maxlength) {
			str = str.substring(0,k);
			break;
		}
	}
	obj.value = str;
}
// Trim
function Trim(obj1){
	obj1 = obj1.replace(/^(\s+)|(\s+)$/g, "")
	return obj1;
}


//===== 오른쪽 마우스 막는 스크립트시작 ======= //
/*
document.oncontextmenu = function(){return false}
if(document.layers) {
	window.captureEvents(Event.MOUSEDOWN);
	window.onmousedown = function(e){
		if(e.target==document)return false;
	}
}
else {
	document.onmousedown = function(){return false}
}*/
//===== 오른쪽 마우스 막는 스크립트 끝 ======= //

// 문자열 공백제거 함수 ##################################################
// Ex) str = "    테 스   트   ".stripspace(); => str = "테스트";
String.prototype.stripspace = function() {
	return this.replace(/ /g, '');
}
// 숫자입력 확인 ##################################################
function numberOnly(obj, isDec) {
	if (!isDec) isDec = false;
	if (obj.disabled) return false;

	var num = obj.value.stripspace();
	if (num == "") return false;

	if (!checkNum(num, isDec)) {
		//alert ("숫자만 입력해주세요.");
		num = stripCharFromNum(num, isDec);
		obj.blur(); obj.focus();
	}
	num = stripCharFromNum(stripComma(num), isDec);

	var arrNum = num.split(".");
	if (arrNum.length > 1) {
		obj.value = arrNum[0]+"."+arrNum[1];
	}
	else {
		obj.value = arrNum[0];
	}
}

// 숫자 확인 ##################################################
function checkNum(value, isDec) {
	var RegExp;

	if (!isDec) isDec = false;
	RegExp = (isDec) ? /^-?[\d\.]*$/ : /^-?[\d]*$/;

	return RegExp.test(value)? true : false;
}
// 숫자 3자리수마다 콤마(,) 찍기 ##################################################
function formatComma(num, pos) {
	if (!pos) pos = 0;  //소숫점 이하 자리수
	var re = /(-?\d+)(\d{3}[,.])/;

	var strNum = stripComma(num.toString());
	var arrNum = strNum.split(".");

	arrNum[0] += ".";

    while (re.test(arrNum[0])) {
        arrNum[0] = arrNum[0].replace(re, "$1,$2");
    }

	if (arrNum.length > 1) {
		if (arrNum[1].length > pos) {
			arrNum[1] = arrNum[1].substr(0, pos);
		}
		return arrNum.join("");
	}
	else {
		return arrNum[0].split(".")[0];
	}
}

// 콤마(,) 제거 ##################################################
function stripComma(str) {
    var re = /,/g;
    return str.replace(re, "");
}
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

////////////////// 3자리수마다 콤마 찍기 입력폼에서 사용 
function WithCommas(x,vname) {
	$('#'+vname).val(formatComma(x));	
}




function checkSubmit(f,nv) {

	var subject = "";
	var content = "";
	var uname = "";
	$.ajax({
		url: "/INC/ajax.filter.php",
		type: "POST",
		data: {
			"subject": f.title.value,
			"content": f.content.value,
			"uname": f.uname.value
		},
		dataType: "json",
		async: false,
		cache: false,
		success: function(data, textStatus) {
			subject = data.subject;
			content = data.content;
			uname = data.uname;
		}
	});

	if (subject) {
		alert("제목에 금지단어('"+subject+"')가 포함되어있습니다");
		f.title.focus();
		return false;
	}

	if (content) {
		alert("내용에 금지단어('"+content+"')가 포함되어있습니다");
		f.content.focus();
		return false;
	}

	if (uname) {
		alert("이름에 금지단어('"+uname+"')가 포함되어있습니다");
		f.uname.focus();
		return false;
	}

	frmCheck_new(nv);
}