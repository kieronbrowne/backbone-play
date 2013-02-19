define(
[
'views/app/app',
'config'
],

function(AppView, config) {
	var App = function() {
		this.views.app = new AppView();
		this.views.app.render();
		$('#app').html(this.views.app.el);
	};

	App.prototype = {
		views: {}
	};

	return App;
}
);
