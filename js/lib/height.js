/* Author: Daniel Tapias Morales */ 
(function($){$.fn.equalizeHeight=function(){var length=this.length;var firstItem=true;var currentPosY=0;var prevPosY=0;var maxHeight=0;var $this=this;var first=1;var count=0;this.each(function(){var curr=$(this);curr.height("auto");if(firstItem){firstItem=false;prevPosY=curr.offset().top}count++;currentPosY=curr.offset().top;if(prevPosY==currentPosY){if(curr.height()>maxHeight)maxHeight=curr.height()}else{EqualizeBefore(first,count-1,maxHeight,curr);maxHeight=0;if(curr.height()>maxHeight)maxHeight=
curr.height()}if(count==length)EqualizeBefore(first,count,maxHeight,curr)});function EqualizeBefore(bgn,end,hgt,cur){for(var j=bgn;j<=end;j++)$this.eq(j-1).height(hgt);prevPosY=cur.offset().top;maxHeight=0;first=end+1}return $this}})(jQuery);

$(window).load(function(){
	if($('.equal_height').length){
    	$('.equal_height').find('.equal_item').equalizeHeight();
      $(window).resize(function(){
      	$('.equal_height').find('.equal_item').equalizeHeight();
      })
    }
})