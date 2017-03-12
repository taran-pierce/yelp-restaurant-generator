<?php include 'templates/top.php' ?>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<form action="#" type="GET">
					<div class="form-group">
						<label for="rest" id="rest">Rest</label>
						<input class="form-control" type="text" name="rest" />
					</div>
					<div class="form-group">
						<label for="rest" id="location">Location</label>
						<input class="form-control" type="text" name="location" />
					</div>
					<button class="btn btn-primary" type="submit">Submit</button>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<div id="main-app">
					<div class="box"></div>
				</div>
			</div>
		</div>
	</div>
	<script id="result-template" type="template">
		<div id="main-result">
			<h4>Name</h4>
			<p data-key="name"></p>
			<h4>Location</h4>
			<p data-key="location"></p>
			<h4>Phone</h4>
			<p data-key="phone"></p>
			<h4>Review Count</h4>
			<p data-key="review-count"></p>
			<h4>Rating</h4>
			<p data-key="rating"></p>
			<h4>Photos</h4>
			<ul class="list-unstyled" data-key="photos"></ul>
		</div>
	</script>
<?php include 'templates/bottom.php' ?>
