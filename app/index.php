<?php include 'templates/top.php' ?>
	<div class="container">
		<h1>Test</h1>
		<form action="results.php" type="GET">
			<div class="form-group">
				<label for="rest" id="rest">Rest</label>
				<input class="form-control" type="text" name="rest" />
			</div>
			<div class="form-group">
				<label for="rest" id="location">Location</label>
				<input class="form-control" type="text" name="location" />
			</div>
			<button type="submit">Submit</button>
		</form>
	</div>
<?php include 'templates/bottom.php' ?>
