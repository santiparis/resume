(function (global) {

	let dc = {};

	let homeHtml = 'snippets/home.html';
	let experienceHtml = 'snippets/experience.html';
	let studiesHtml = 'snippets/studies.html';
	let awardsHtml = 'snippets/awards.html';
	let programmingHtml = 'snippets/programming.html';

	var insertHtml = function (selector, html) {
  	var targetElem = document.querySelector(selector);
  	targetElem.innerHTML = html;
	};

	var showLoading = function (selector) {
  	var html = "<div class='text-center'>";
  	html += "<img src='images/loading.gif'></div>";
  	insertHtml(selector, html);
	};

	let switchHomeToActive = function () {
		let classes = document.querySelector("#toc-experience").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-experience").className = classes;

  	classes = document.querySelector("#toc-studies").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-studies").className = classes;

  	classes = document.querySelector("#toc-awards").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-awards").className = classes;

  	classes = document.querySelector("#toc-programming").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-programming").className = classes;

  	classes = document.querySelector("#toc-home").className;
  	if (classes.indexOf("toc-active") == -1) {
    	classes += " toc-active";
    	document.querySelector("#toc-home").className = classes;
  	}
	};
	
	let switchExperienceToActive = function () {
		let classes = document.querySelector("#toc-home").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-home").className = classes;

  	classes = document.querySelector("#toc-studies").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-studies").className = classes;

  	classes = document.querySelector("#toc-awards").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-awards").className = classes;

  	classes = document.querySelector("#toc-programming").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-programming").className = classes;

  	classes = document.querySelector("#toc-experience").className;
  	if (classes.indexOf("toc-active") == -1) {
    	classes += " toc-active";
    	document.querySelector("#toc-experience").className = classes;
  	}
	};

	let switchStudiesToActive = function () {
		let classes = document.querySelector("#toc-home").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-home").className = classes;

  	classes = document.querySelector("#toc-experience").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-experience").className = classes;

  	classes = document.querySelector("#toc-awards").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-awards").className = classes;

  	classes = document.querySelector("#toc-programming").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-programming").className = classes;

  	classes = document.querySelector("#toc-studies").className;
  	if (classes.indexOf("toc-active") == -1) {
    	classes += " toc-active";
    	document.querySelector("#toc-studies").className = classes;
  	}
	};

	let switchAwardsToActive = function () {
		let classes = document.querySelector("#toc-home").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-home").className = classes;

  	classes = document.querySelector("#toc-experience").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-experience").className = classes;

  	classes = document.querySelector("#toc-studies").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-studies").className = classes;

  	classes = document.querySelector("#toc-programming").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-programming").className = classes;

  	classes = document.querySelector("#toc-awards").className;
  	if (classes.indexOf("toc-active") == -1) {
    	classes += " toc-active";
    	document.querySelector("#toc-awards").className = classes;
  	}
	};

	let switchProgrammingToActive = function () {
		let classes = document.querySelector("#toc-home").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-home").className = classes;

  	classes = document.querySelector("#toc-experience").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-experience").className = classes;

  	classes = document.querySelector("#toc-studies").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-studies").className = classes;

  	classes = document.querySelector("#toc-awards").className;
  	classes = classes.replace(new RegExp("toc-active", "g"), "");
  	document.querySelector("#toc-awards").className = classes;

  	classes = document.querySelector("#toc-programming").className;
  	if (classes.indexOf("toc-active") == -1) {
    	classes += " toc-active";
    	document.querySelector("#toc-programming").className = classes;
  	}
	};

	document.addEventListener('DOMContentLoaded', function (event) {
		
		showLoading('#contents');
		$ajaxUtils.sendGetRequest(
			experienceHtml,
			function (experienceHtml) {
				insertHtml('#contents', experienceHtml);
			},
			false);
	});

	dc.showHomeHTML = function() {
		showLoading('#contents');
		$ajaxUtils.sendGetRequest(
			homeHtml,
			function (homeHtml) {
				insertHtml('#contents', homeHtml);
			},
			false);

		switchHomeToActive();
	};

	dc.showExperienceHTML = function () {
		showLoading('#contents');
		$ajaxUtils.sendGetRequest(
			experienceHtml,
			function (experienceHtml) {
				insertHtml('#contents', experienceHtml);
			},
			false);

		switchExperienceToActive();
	};

	dc.showStudiesHTML = function () {
		showLoading('#contents');
		$ajaxUtils.sendGetRequest(
			studiesHtml,
			function (studiesHtml) {
				insertHtml('#contents', studiesHtml);
			},
			false);

		switchStudiesToActive();
	};


	dc.showAwardsHTML = function () {
		showLoading('#contents');
		$ajaxUtils.sendGetRequest(
			awardsHtml,
			function (awardsHtml) {
				insertHtml('#contents', awardsHtml);
			},
			false);

		switchAwardsToActive();
	};

	dc.showProgrammingHTML = function () {
		showLoading('#contents');
		$ajaxUtils.sendGetRequest(
			programmingHtml,
			function (programmingHtml) {
				insertHtml('#contents', programmingHtml);
			},
			false);

		switchProgrammingToActive();
	};

	global.$dc = dc;

})(window);