define(['text!templates/app/app.html'],
function(appTemplate) {
	var AppView = Backbone.View.extend({
		className: "main",

		template: _.template(appTemplate),

		render: function() {
			this.$el.html(this.template({name: 'World!'}));
			return this;
		}
	});

	return AppView;
});
