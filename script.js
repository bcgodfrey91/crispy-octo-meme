$(document).ready(function() {
    $('.random').on('click', function() {
      var color = 'rgb(' + Math.floor(Math.random() * 255) + ','
                 + Math.floor(Math.random() * 255) + ','
                 + Math.floor(Math.random() * 255) + ')';
        $('body').css('background-color', color);
    });
});
