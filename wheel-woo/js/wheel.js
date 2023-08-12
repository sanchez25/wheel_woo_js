window.onload = function () {

    var button = document.querySelector('.btn');
    button.onclick = function () {
        if ( $('.wheel-btn').hasClass('first-spin') ) {
            spin_1();
        }
        if ( $('.wheel-btn').hasClass('second-spin') ) {
            spin_2();
        }
    };

    function spin_1 () {
        $('.wheel-btn').attr('disabled','disabled');
        document.querySelector('.wheel-img').classList.add('wheel-img-animated-1');
        setTimeout(function () {
            localStorage.currentSpin = '9561_spin_1';
            document.querySelector('.wheel-img').classList.remove('wheel-img-animated-1');
            $('.wheel-modal').css('display','flex');
            $('#modal-1').css('display','flex');
            $('.btn').addClass('second-spin').removeClass('first-spin');
        }, 4000);
    }

    function spin_2 () {
        $('.wheel-btn').attr('disabled','disabled');
        document.querySelector('.wheel-img').classList.add('wheel-img-animated-2');
        setTimeout(function () {
            localStorage.currentSpin = '9561_spin_2';
            $('.wheel-modal').css('display','flex');
            $('#modal-2').css('display','flex');
            $('.btn').removeClass('second-spin');
        }, 4000);
    }

    $('#popup-btn').click(function () {
        $('.wheel-modal').css('display','none');
        $('#modal-1').css('display','none');
        $('.btn').addClass('second-spin').removeClass('first-spin').removeAttr('disabled');
        $('.wheel-img').css('transform','rotate(1060deg)').removeClass('wheel-img-animated');
    });

    switch(localStorage.currentSpin) {
        case '9561_spin_1':
            $('.wheel-modal').css('display','flex');
            $('#modal-1').css('display','flex');
            $('.btn').addClass('second-spin').removeClass('first-spin');
            break;

        case '9561_spin_2':
            $('.wheel-modal').css('display','flex');
            $('#modal-1').css('display','none');
            $('#modal-2').css('display','flex');
            $('.btn').removeClass('second-spin').removeClass('first-spin');
            break;
    }

};

