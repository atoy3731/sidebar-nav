$(function() {
    $(document).on('click', '.open_menu_button_closed', function() {
        $('.open_menu_button_closed').removeClass('open_menu_button_closed').addClass('open_menu_button_opened');
        $('#sidemenu').css({
            'left': '0',
            'top': '0'
        });

        $('header#pageHeader').css('opacity', '0.0');


        $('.fa-bars').removeClass('fa-bars').addClass('fa-times');
        var menu_length = $('.menu_item').length;
        $('.menu_item').each(function(i) {
            var list_item = $(this);
            setTimeout(function() {
                list_item.css('opacity', '1.0');
            }, 100*i);
        });
    });

    $(document).on('click', '.open_menu_button_opened', close_menu);

    $('.top_menu_link').on('click', function() {
        const submenu_id = $(this).attr('id');
        console.log(submenu_id);

        $('.top_menu').css({
            'margin-left': '-250px',
            'margin-right': '250px'
        });

        open_sub_menu(submenu_id);
    });

    function open_sub_menu(submenu_id) {
        $('#' + submenu_id).css('margin-left', '0');
    }

    function close_menu() {
        $('.open_menu_button_opened').removeClass('open_menu_button_opened').addClass('open_menu_button_closed');
        $('.fa-times').removeClass('fa-times').addClass('fa-bars');
        $('#sidemenu').css({
            'left': '-250px',
            'top': '-90vh'
            // 'top': '-390px'
        });

        $('header#pageHeader').css('opacity', '1.0');

        var menu_length = $('.menu_item').length;
        $('.menu_item').each(function(i) {
            var list_item = $(this);
            setTimeout(function() {
                list_item.css('opacity', '0.0');
            }, 50*i);
        });
    };

});