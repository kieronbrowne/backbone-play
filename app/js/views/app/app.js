define(
[
'text!templates/app/app.html'
],
function(appTemplate) {
	var AppView = Backbone.View.extend({
		className: "main",

		template: _.template(appTemplate),
	
		events: {
			"submit form":	"changeName"
		},

		render: function() {
			this.$el.html(this.template(this.model.attributes));
			return this;
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},

		changeName: function() {
			var name = $('#name').val();
			this.model.increment();
			this.model.set({name: name});
		}
	});

	return AppView;
});
