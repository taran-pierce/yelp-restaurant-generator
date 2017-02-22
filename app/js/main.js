var yelp = yelp || {};

yelp.getData = {
  initialize: function () {
    console.log('just ran');
  }
};

$(document).ready(function() {
	yelp.getData.initialize();
});
