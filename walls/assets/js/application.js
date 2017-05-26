/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
var shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//when the page is finished loading
$(document).ready(function () {
    //store all the year block in a variable for later use.
    var $yearBlocks = $('.yearBlock');

    //when a user clicks on a .yearBlock
    $yearBlocks.click(function () {
        var hidden = 0,
            $this = $(this);

        //remove active class to year blocks to hide yellow border 
        $yearBlocks.removeClass('active');
        //change footer title to year title
        $('.footer span').html($this.data('title'));
        //hide all contents
        $('.yearContent').hide();

        //animate all year blocks
        $.each(shuffleArray($yearBlocks), function (i, obj) {
            //hide everything except the first  row
            if (!$(obj).is('.stick')) {
                $(obj).animate({ opacity: 0 }, Math.floor(Math.random() * 600) + 300, function () {
                    hidden++;

                    //when all year block is hidden set top year block for selected year active to show yellow border
                    if (hidden === $yearBlocks.length - 6) {
                        //show content for selected year
                        $('.yearContent[data-year="' + $this.data('year') + '"]').show();
                        //add the active class
                        $yearBlocks.filter('.stick[data-year="' + $this.data('year') + '"]').addClass('active');
                    }
                });
            }
        });
    });

    //when home icon is clicked
    $('.homeIcon').click(function(){
        //remove active class to year blocks to hide yellow border 
        $yearBlocks.removeClass('active');
        //change footer title to show 'walls'
        $('.footer span').html('WALLS');
        //hide all contents
        $('.yearContent').hide();

        //animate all year blocks to fade in
        $.each(shuffleArray($yearBlocks), function (i, obj) {
            //hide everything except the first  row
            if (!$(obj).is('.stick')) {
                $(obj).animate({ opacity: 1 }, Math.floor(Math.random() * 1300) + 900);
            }
        });

    });
});


