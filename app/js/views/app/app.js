define(
[
'text!templates/app/app.html'
],
function(appTemplate) {
	var AppView = Backbone.View.extend({
		className: "main",

		template: _.template(appTemplate),

		render: function() {
			this.$el.html(this.template({name: this.model.get('name')}));
			return this;
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		}
	});

	return AppView;
});
