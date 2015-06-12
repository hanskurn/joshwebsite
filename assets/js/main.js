jQuery(document).ready(function($) {

    /*====== Equalize card height ======= */

    $('.card-col').each(function(){
        var rowHeight = $(this).parent().height();
        $(this).css("height", rowHeight);
    });

    $('.section-heading').click(function(){
        $(this).next().slideToggle('slow');
    });

    /*====== Popup video player ========= */

    $('.play-video').click(function(){
        var videoPosition = calculateVideoPosition();
        console.log(videoPosition);
        $('#video-background').css({
            "display":"block"
        });

        $('#video').css({
           "width": videoPosition.left *2,
            "height": videoPosition.top *2,
            "opacity":1,
            "filter": "alpha(opacity=100)"
        });
        $('#video-container').css({
            "display":"block",
            "left": videoPosition.left,
            "top": videoPosition.top
        });

    });


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    


});

function calculateVideoPosition(){
    var x, y, videoPosition;
    x = $(window).width();
    y = $(window).height();
    videoPosition = {left: x/4, top: y/4};
    return videoPosition;
}

