/**
 * Created by Maryna on 7/7/2016.
 */

    function showMenu(jQuery){
        $('.icon').on('click',function(){
            $(this).toggleClass('closed');
            $('.ctlg').animate({width:'toggle'}, 500);
        })
    }

    function firstSlider(jQuery){

        var slideWrp=$('.slidewrp');
        var slideItem=$('.slidewrp li');
        var is_Animated=false;
        var slideWide=slideItem.outerWidth();
        var scroll=slideWrp.position().left-slideWide;
        var category=$('.navigate a');

        category.eq(0).addClass('mi-selected');
        $('li.item').first().addClass('mi-current');

        category.on('click', function() {
            event.preventDefault();

            var num = $(this).index();
            var sel=$('.mi-selected').index();
            var cur=$('.mi-current').index();
            var a=num-1;

            if (num > sel) {

                if(num==sel+1){

                    $('.navigate').find('.mi-selected').removeClass('mi-selected');
                    $(this).addClass('mi-selected');



                    if (!slideWrp.is(':animated')) {
                        slideWrp.animate({left: scroll}, 500, function () {

                            $('li.item').first().appendTo(slideWrp);
                            $('li.item').first().addClass('mi-current');
                            $('li.item').last().removeClass('mi-current');
                            slideWrp.css({'left': 0});

                        });
                    }

                }

                if(num==sel+2){

                    $('.navigate').find('.mi-selected').removeClass('mi-selected');
                    $(this).addClass('mi-selected');

                    if (!slideWrp.is(':animated')) {
                        slideWrp.animate({left: scroll}, 500, function () {

                            $('.mi-current').appendTo(slideWrp).removeClass('mi-current');
                            $('li.item').first().appendTo(slideWrp);
                            $('li.item').first().addClass('mi-current');
                            slideWrp.css({'left': 0});

                        });
                    }
                }

                if(num==sel+3){

                    $('.navigate').find('.mi-selected').removeClass('mi-selected');
                    $(this).addClass('mi-selected');

                    $('.mi-current').removeClass('mi-current');
                    $('li.item').eq(num).addClass('mi-current');

                    if (!slideWrp.is(':animated')) {

                        slideWrp.css({'left': scroll});
                        $('.mi-current').prependTo(slideWrp);
                        slideWrp.animate({left: 0}, 500);
                    }

                }

            }

            if (num < sel) {

                if (num == sel - 1) {
                    $('.navigate').find('.mi-selected').removeClass('mi-selected');
                    $(this).addClass('mi-selected');

                    if (!slideWrp.is(':animated')) {

                        slideWrp.css({'left': scroll});
                        $('.mi-current').removeClass('mi-current');
                        $('li.item').last().prependTo(slideWrp).addClass('mi-current');
                        slideWrp.animate({left: 0}, 500);
                    }

                }

                if (num == sel - 2) {
                    $('.navigate').find('.mi-selected').removeClass('mi-selected');
                    $(this).addClass('mi-selected');

                    if (!slideWrp.is(':animated')) {

                        slideWrp.css({'left': scroll});
                        $('.mi-current').removeClass('mi-current');
                        $('li.item').last().prependTo(slideWrp);
                        $('li.item').last().prependTo(slideWrp).addClass('mi-current');
                        slideWrp.animate({left: 0}, 500);
                    }
                }

                if(num==sel-3){
                    $('.navigate').find('.mi-selected').removeClass('mi-selected');
                    $(this).addClass('mi-selected');

                    $('.mi-current').removeClass('mi-current');


                    if (!slideWrp.is(':animated')) {
                        slideWrp.animate({left: scroll}, 500, function () {

                            $('li.item').first().appendTo(slideWrp);
                            $('li.item').eq(num).addClass('mi-current');
                            slideWrp.css({'left': 0});

                        });
                    }

                }
            }
        });
    }

    function htmlSlider(jQuery){
        var slideWrap=$('.slide-wrap');
        var nextLink=$('.next-slide');
        var prevLink=$('.prev-slide');
        var is_Animated=false;
        var slideWidth=$('.slide-item').outerWidth();
        var scrollSlider=slideWrap.position().left-slideWidth;
        var slideIMG=$('.slide-item img');

        nextLink.on('click',function(){
            if(!slideWrap.is(':animated')){
                slideWrap.animate({left:scrollSlider}, 500, function(){
                    slideWrap
                       .find('.slide-item:first')
                       .appendTo(slideWrap)
                       .parent()
                       .css({'left':0});

                    $('.slide-item:eq(1) img').addClass('imgBig');
                    $('.slide-item:eq(0) img').removeClass('imgBig');


                });
            }
        });

        prevLink.on('click',function(){
            if(!slideWrap.is(':animated')){
                slideWrap
                    .css({'left':scrollSlider})
                    .find('.slide-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({left:0},500);

                    $('.slide-item:eq(1) img').addClass('imgBig');
                    $('.slide-item:eq(2) img').removeClass('imgBig');
            }
        });
    }


function showContacts(jQuery){
        $('a.transition').on('click',function(){
            var toLoad=$(this).attr('href');
            $('.allcontent').fadeOut(300,loadContent);
            function loadContent(){
                $('.allcontent').load(toLoad,'',showNewContent())
            }
            function showNewContent(){
                $('.allcontent').addClass('animated').fadeIn(300)
            }
            return false;
        });

}

function initMap(){
    var var_location = new google.maps.LatLng(50.421482, 30.479537);
    var var_mapoptions={
        center:var_location,
        zoom:10
    };
    var image="Images1/marker.png";
    var var_marker= new google.maps.Marker({
        position:var_location,
        map:var_map,
        title:'Flyter',
        icon:image
    });
    var var_map= new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var_marker.setMap(var_map);
    google.maps.event.addDomListener(window, 'load', initMap);
}

function hideContacts(jQuery){
    $('a.cls').on('click',function(){
        var Load=$(this).attr('href');
        $('.allcontent').fadeOut(300);
        function loadCnt(){
            $('.allcontent').load(Load,'',showNewCnt())
        }
        function showNewCnt(){
            $('.allcontent').addClass('animated').fadeIn(300)
        }
        return false;
    });
}