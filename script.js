//set the correct date and time
$(document).ready(function () {
    var currentHour = moment().hour();

    setInterval(getDate);

    function getDate() {
        $('#currentDay').text(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    } 1000;
    
//comparing the hour and setting the color according to past, present and future activities
    colorSchedule();

    function colorSchedule() {
        $('.time-block').each(function () {
            var thisTime = parseInt($(this).attr('id'));
            if (thisTime < currentHour) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            }
            else if (thisTime === currentHour) {
                $(this).addClass('present');
                $(this).removeClass('past');
                $(this).removeClass('future');
            }
            else {
                $(this).addClass('future');
                $(this).removeClass('past');
                $(this).removeClass('present');
            } 1000;
        });
    };

//save the users inputs to localStorage under time and text variables
    $('.saveBtn').on('click', function () {
        var time = $(this).parent().attr('id');
        var text = $(this).siblings('.input').val();

        localStorage.setItem(time, text);
    });

//stores the users input to localStorage to be called later
    renderStoredInputs();

    function renderStoredInputs() {
        $('.input').each(function () {
            var inputId = $(this).attr('id');
            $(this).val(localStorage.getItem(inputId));
        });
    };

//calls up the stored user input from the saveBtn function
    $('#9 .input').val(localStorage.getItem('9'));
    $('#10 .input').val(localStorage.getItem('10'));
    $('#11 .input').val(localStorage.getItem('11'));
    $('#12 .input').val(localStorage.getItem('12'));
    $('#13 .input').val(localStorage.getItem('13'));
    $('#14 .input').val(localStorage.getItem('14'));
    $('#15 .input').val(localStorage.getItem('15'));
    $('#16 .input').val(localStorage.getItem('16'));
    $('#17 .input').val(localStorage.getItem('17'));
})