/*!
 * drawBorder - 테두리 그리기 효과 플러그인
 * @param {object} opt
 * @returns {object}
 */
(function($){

    $.fn.drawBorder = function(opt) {
        // if($('html').hasClass('mobile')) {
        //     return this;
        // }

        var overlap = 1 / 8,

            defaults = {
                className: 'drawborder',
                speed: 1.5
            },
            methods = {
            };

        function init() {
            // default options
            var opt = $.extend({}, defaults, opt),

                border = '<span class="' + opt.className + ' #class#"></span>',
                borders = [
                    border.replace('#class#', opt.className + '-top'),
                    border.replace('#class#', opt.className + '-right'),
                    border.replace('#class#', opt.className + '-bottom'),
                    border.replace('#class#', opt.className + '-left')
                ],
                $_borders = $();

            $.each(borders, function(i, el) {
                $_borders = $_borders.add(el);
            });

            // main
            return this.each(function() {
                var $this = $(this),
                    $borders = $_borders.clone(),
                    tl = new TimelineMax({ paused: true });

                $borders.appendTo($this);

                $this.data({
                    'opt': opt,
                    '$borders': $borders,
                    'tl': tl
                });

                tl
                    .timeScale(8 / opt.speed)
                    .to($borders.eq(0), (1 + overlap), { width:  '100%', ease: Power1.easeOut })
                    .to($borders.eq(1), (1 + overlap), { height: '100%', ease: Power1.easeOut }, '-=' + overlap)
                    .to($borders.eq(2), (1 + overlap), { width:  '100%', ease: Power1.easeOut }, '-=' + overlap)
                    .to($borders.eq(3), 1,             { height: '100%', ease: Power1.easeOut }, '-=' + overlap);

                $this.on({
                    'mouseenter.drawborder': function() { tl.play(); },
                    'focusin.drawborder': function() { tl.play(); },
                    'touchstart.drawborder': function() { tl.play(); },
                    'mouseleave.drawborder': function() { tl.reverse(); },
                    'focusout.drawborder': function() { tl.reverse(); },
                    'touchend.drawborder': function() { tl.reverse(); }
                });
            });
        }

        if(!opt || typeof opt === 'object') {
            return init.call(this);
        } else if(typeof opt === 'string') {
            var param = arguments[1];

            return this.each(function() {
                methods[opt].call(this, param);
            });
        }
    }

})(jQuery);