var yelp = yelp || {};

yelp.getData = {
  initialize: function() {
    var data = data || {},
        $app = $('#app');

   // trigger loading screen
   yelp.getData.setLoadingScreen($app, data);

   yelp.getData.getInfo(data);
  },
  setLoadingScreen: function($app, data) {
    var spinner = '<i class="fa fa-spinner fa-spin"></i>';

    // clear box and add spinner
    $app.find('.box').append(spinner);

    // set class for animation
	$app.find('.box').addClass('loaded');
  },
  getParameterByName: function(name, url) {
    if (!url) {
      url = window.location.href;
    }

    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  getInfo: function(data) {
    var restName = yelp.getData.getParameterByName('rest'); 
    var restLocation = yelp.getData.getParameterByName('location'); 
    var resultAmount = yelp.getData.getParameterByName('result_amount'); 

    $.ajax({
        url: "api.php",
        type: 'POST',
        data: {
          rest: restName,
          location: restLocation,
          result_amount: resultAmount 
        },
        success: function (value) {
          data = JSON.parse(value);
        },
        error: function(errorMessages){
          alert('Had some errors!');
        }
    }).always(function() {
      yelp.getData.presentData(data);
    });
  },
  presentData: function(data) {
    var $template = $($('#result-template').html()),
        $box = $('.box');

    $template.find('[data-key="name"]').append(data.name);

    $template.find('[data-key="location"]').append('<ul class="list-unstyled"></ul>');

    $template.find('[data-key="phone"]').append(data.phone);

    $template.find('[data-key="rating"]').append(data.rating);

    $template.find('[data-key="review-count"]').append(data.review_count);

    $.each(data.photos, function(key, value) {
       var li = '<li>' + '<img class="img-responsive" src="' + value + '">' + '</li>';

	   $template.find('[data-key="photos"]').append(li);
    });

    // create display address
    $.each(data.location.display_address, function(key, value) {
      var li = '<li>' + value + '</li>';

      $template.find('[data-key="location"] ul').append(li);
	});

    $template.find('.location').text(data.location);

	$box.append($template);

    console.log(data);
  }
};

$(document).ready(function() {
	yelp.getData.initialize();
});
