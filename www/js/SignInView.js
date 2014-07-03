/**
 * 
 */

 var SignInView = function (adapter, template){
	 
	 this.initialize = function(){
		 this.el = $('<div />');
		 this.el.on('click', '.signInBtn',this.signInUser);
	 };
	 
	 
	 this.render = function() {
		this.el.html(template);
		return this;
		
	 };
	 
	 this.signInUser = function() {
       // adapter.findByName($('.search-key').val()).done(function (employees) {
		//	$('.employee-list').html(listItemTemplate(employees));
		//});
		 alert("User Signed In");
     };
	 
	 this.initialize();
 
	 

 };
 
 