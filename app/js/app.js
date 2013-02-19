define(
[
'views/app/app',
'models/app',
'config'
],

function(AppView, AppModel, config) {
	var App = function() {
		this.models.appModel = new AppModel();
		this.models.appModel.set('name', 'Werrald!');

		this.views.app = new AppView({model: this.models.appModel});
		this.views.app.render();
		$('#app').html(this.views.app.el);
	};

	App.prototype = {
		views: {},
		models: {}
	};

	return App;
}
);
