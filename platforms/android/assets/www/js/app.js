// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
	var homeTpl = Handlebars.compile($("#home-tpl").html());
	var employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
	var employeeTpl = Handlebars.compile($("#employee-tpl").html());
	var signInTpl = Handlebars.compile($("#signIn-tpl").html());
    var adapter = new LocalStorageAdapter();
    var detailsUrl = /^#employees\/(\d{1,})/;
    var slider = new PageSlider($('body'));
    
	adapter.initialize().done(function(){
		route();
	});
    
    /* --------------------------------- Event Registration -------------------------------- */
   
	document.addEventListener('deviceready', function(){
		if(navigator.notification){
			window.alert = function(message){
			    navigator.notification.alert(
                message,    // message
                null,       // callback
                "Employees", // title
                'OK'        // buttonName
				);
			};
			FastClick.attach(document.body);
		}
	}, false);

	$(window).on('hashchange',route);
    /* ---------------------------------- Local Functions ---------------------------------- */
   /* function findByName() {
        adapter.findByName($('.search-key').val()).done(function (employees) {
			$('.employee-list').html(employeeLiTpl(employees));
		});
    }
	
	function renderHomeView() {
		alert("rendering View");
		$('body').html(homeTpl());
		$('.search-key').on('keyup', findByName);	
	}*/
	
	function route(){
		
		slider.slidePage(new SignInView(adapter,signInTpl).render().el);
		return;
		var hash = window.location.hash;
		if(!hash){
			slider.slidePage(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
			return;
		}
		var match = hash.match(detailsUrl);
		if(match){
			adapter.findById(Number(match[1])).done(function(employee){
				slider.slidePage(new EmployeeView(adapter, employeeTpl, employee).render().el);
			});
		}
	}

}());