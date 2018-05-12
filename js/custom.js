$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7656056300',
        resolution: 'standard_resolution',
        accessToken: '7656056300.a7d8ad8.7da64763da834c5e83d2fb289314b968',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
          

    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});