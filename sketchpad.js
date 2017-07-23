$(document).ready(function() {

	$("div.container").append("<table class='table'></table>");

	function createGrid(num) {
		$("td").remove();
		$("tr").remove();
		for (var i=1; i <= num; i++) {
			$("table").append("<tr></tr>");
		}
		for (var j=1; j <= num; j++) {
			$("tr").append("<td></td>");
		}
	}

	createGrid(16);

	function colors() {
		$("td").on('mouseenter', function() {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			$(this).css('background-color', 'rgb(' + r + ',' + g + ',' + b +')');
		});
	};

	colors();

	function black() {
		$("td").on('mouseenter', function() {
			$(this).css('background-color', 'black');
		});
	};

	$("button.clear").on('click', function() {
		$("td").css('background-color', 'white');
		});

	$("button.resize").on('click', function() {
		var gridSize = parseInt(prompt("Please enter what grid size you would like (default value is 16).", 16));
		if (gridSize === parseInt(gridSize, 10)) {
			createGrid(gridSize);	
			colors();
		} else {
			alert("That is not an acceptable value!");
		}	
	});

	$("input.color-button").on('click', function() {
		$("td").css('background-color', 'white');
		colors();
	});

	$("input.black-button").on('click', function() {
		$("td").css('background-color', 'white');
		black();
	});

});