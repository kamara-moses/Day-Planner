$('#hour9').val(localStorage.getItem('9'));
$('#hour10').val(localStorage.getItem('10'));
$('#hour11').val(localStorage.getItem('11'));
$('#hour12').val(localStorage.getItem('12'));
$('#hour13').val(localStorage.getItem('13'));
$('#hour14').val(localStorage.getItem('14'));
$('#hour15').val(localStorage.getItem('15'));
$('#hour16').val(localStorage.getItem('16'));
$('#hour17').val(localStorage.getItem('17'))

$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd MMMM Do YYYY, h:mm:ss a'));

    $('.saveBtn').on('click', function () {
        var text = $(this).siblings('.input').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, text);
        localStorage.getItem('id');
    })
    function timeTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over time blocks
        $('.time-block').each(function () {
            var thisHour = parseInt($(this).attr('id').split('hour')[1]);

            //check if we've moved past this time
            if (thisHour < currentHour) {
                $(this).addClass('past');
            }
            else if (thisHour === currentHour) {
                $(this).addClass('present');
            }
            else {
                $(this).addClass('future');
            }
        })
    }
    timeTracker();
})






