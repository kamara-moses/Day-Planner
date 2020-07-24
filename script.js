$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd MMMM Do YYYY, h:mm:ss a'));

    $('.saveBtn').on('click', function () {
        var time = $(this).parent().attr('id');
        var text = $(this).siblings('.input').val();
        
        console.log(time, text);
        localStorage.setItem(time, text);
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






