<!--
	function isFieldBlank(theField) 
	{
	 str = theField.value
	 var temp = str.replace(/ /gi,'');	   
	 if (str.length == 0 || temp.length == 0) 
	  return true; 
	 else 
	  return false; 
	}
	
	function isFieldSpace(theField) 
	{   
	 str = theField.value
	 var temp = str.replace(/ /gi,'');
	 if (str.length != temp.length) 
	  return true; 
	 else 
	  return false; 
	}
	
	function numValue(theField)
	{
	   str = escape(theField.value);	   
	   if(str.match(/^\d+$/ig) == null)
	    return true; 
	   else 
	    return false;
	}
	
	function isFieldBlank2(theField) 
	{
	 str = theField
	 var temp = str.replace(/ /gi,'');	   
	 if (str.length == 0 || temp.length == 0) 
	  return true; 
	 else 
	  return false; 
	}
	
	function isFieldSpace2(theField) 
	{   
	 str = theField
	 var temp = str.replace(/ /gi,'');
	 if (str.length != temp.length) 
	  return true; 
	 else 
	  return false; 
	} 
	
	function numValue2(theField)
	{
	   str = escape(theField);	   
	   if(str.match(/^\d+$/ig) == null)
	    return true; 
	   else 
	    return false;
	}
		
	function comma(theField) {		
		$(theField).keydown(function(e) {
			var key = e.charCode || e.keyCode || 0;			 
			return (key == 8 ||key == 9 ||key == 46 ||(key >= 37 && key <= 40) ||(key >= 48 && key <= 57) ||(key >= 96 && key <= 105)||(key >= 112 && key <= 123)); 
		});
		
		$(theField).keyup(
			function() {
				$(theField).val($(theField).val().replace(/\,/g, ''));
				if ($(theField).val()=="") $(theField).val(0);				
				$(theField).val(parseInt($(theField).val(),10));				
				if($(theField).val()=="0") $(theField).val('');
				$(theField).val($(theField).val().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); 				
		}); 					
				
		}		
		       
//-->