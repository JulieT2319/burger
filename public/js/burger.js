$(function() {
	//remove burger
	$(".delete-burger").on("click", function(event) {
		let id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(function() {
			console.log("removed burger ", id);
			location.reload();
		});
	});

	//add burger
	$(".create-burger").on("submit", function(event) {
		event.preventDefault();

		let newBurger = {
			burger_name: $("#burger")
				.val()
				.trim()
		};
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function() {
			console.log("added new burger");
			location.reload();
		});
	});

	//eat burger
	$(".devour-burger").on("click", function(event) {
		let id = $(this).data("id");

		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: id
		}).then(function() {
			// Reload the page to get the updated list
			location.reload();
		});
	});
});
