$(document).on("pageshow", "#suffering", function() {
	$("#sufferingform").validate({
		errorPlacement: function(error, element) {
				error.insertAfter(element);
		}
	});

});
$(document).on("pageshow", "#quality", function() {
	$("#qualityform").validate({
		errorPlacement: function(error, element) {
				error.insertAfter(element);
		}
	});

});