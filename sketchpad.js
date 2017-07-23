var CSS_COLOR_NAMES = ['#FF4848',	'#FF7575',	'#FF8A8A',	'#FF9797',	'#FFA8A8',	'#FFBBBB',	'#FFCECE',	'#FF68DD',	'#FF79E1',	'#FF86E3',	'#FF97E8',	'#FFACEC',	'#FFACEC',	'#FFC8F2',	'#FF62B0',	'#FF73B9',	'#FF86C2',	'#FF97CB',	'#FFA8D3',	'#FFBBDD', '#FFC8E3',	'#FE67EB',	'#FE67EB',	'#FE8BF0',	'#FE98F1',	'#FEA9F3',	'#FFBBF7',	'#FFCAF9',	'#E469FE',	'#E77AFE',	'#EA8DFE',	'#ED9EFE',	'#EFA9FE',	'#F2BCFE',	'#F5CAFF',	'#D568FD',	'#D97BFD',	'#DD88FD',	'#E29BFD',	'#E7A9FE',	'#EDBEFE',	'#F0CBFE',	'#9669FE',	'#A27AFE',	'#AD8BFE',	'#B89AFE',	'#C4ABFE',	'#D0BCFE',	'#DDCEFF', "#800080",	"#BF00BF",	"#DB00DB",	"#F900F9",	"#FF4AFF",	"#FF86FF",	"#FFA4FF",	"#872187",	"#BC2EBC",	"#D54FD5",	"#DD75DD",	"#DD75DD",	"#E697E6",	"#EAA6EA",	"#9A03FE",	"#A827FE",	"#B445FE",	"#BD5CFE",	"#C269FE",	"#CD85FE",	"#D698FE",	"#892EE4",	"#9B4EE9",	"#A55FEB",	"#AE70ED",	"#AE70ED",	"#C79BF2",	"#CEA8F4",	"#3923D6",	"#6755E3",	"#8678E9",	"#9588EC",	"#A095EE",	"#B0A7F1",	"#BCB4F3",	"#2966B8",	"#2F74D0",	"#4985D6",	"#6094DB",	"#7BA7E1",	"#8EB4E6",	"#A9C5EB",	"#23819C",	"#2897B7",	"#2FAACE",	"#44B4D5",	"#57BCD9",	"#7BCAE1",	"#8CD1E6", "#5757FF",	"#6A6AFF",	"#7979FF",	"#8C8CFF",	"#9999FF",	"#AAAAFF",	"#BBBBFF",	"#62A9FF",	"#75B4FF",	"#86BCFF",	"#99C7FF",	"#99C7FF",	"#A8CFFF",	"#BBDAFF",	"#62D0FF",	"#75D6FF",	"#8ADCFF",	"#99E0FF",	"#A8E4FF",	"#BBEBFF",	"#CEF0FF",	"#06DCFB",	"#24E0FB",	"#3DE4FC",	"#63E9FC",	"#75ECFD",	"#8CEFFD",	"#ACF3FD",	"#01FCEF",	"#1FFEF3",	"#5FFEF7",	"#74FEF8",	"#92FEF9",	"#A5FEFA",	"#B5FFFC",	"#03EBA6",	"#03F3AB",	"#33FDC0",	"#62FDCE",	"#7DFDD7",	"#8FFEDD",	"#A5FEE3",	"#01F33E",	"#0AFE47",	"#4BFE78",	"#72FE95",	"#8BFEA8",	"#A3FEBA",	"#B5FFC8", "#1FCB4A",	"#27DE55",	"#4AE371",	"#7CEB98",	"#93EEAA",	"#59955C",	"#6CA870",	"#80B584",	"#93BF96",	"#A6CAA9",	"#48FB0D",	"#79FC4E",	"#89FC63",	"#99FD77",	"#AAFD8E",	"#2DC800",	"#32DF00",	"#36F200",	"#52FF20",	"#6FFF44",	"#59DF00",	"#61F200",	"#66FF00",	"#95FF4F",	"#ABFF73",	"#9D9D00",	"#C8C800",	"#DFDF00",	"#FFFFAA",	"#FFFF84",	"#B6BA18",	"#CDD11B",	"#DFE32D",	"#EDEF85",	"#EEF093"]

$(document).ready(function() {
	var idArray = [];

	for (var i=1; i <= 256; i++) {
			idArray.push(i);
		}
	
		for (var j=0; j < idArray.length; j++) {
			$("div.container").append("<div class='grid' id=" + idArray[j] +"></div>");
			$("div.grid").css({'width': 600/16, 'height': 600/16})
	}

		$("div.grid").on('mouseenter', function() {
			var randomColor = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];
			$(this).css('background-color', randomColor);
		});
});

