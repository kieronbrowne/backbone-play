define(
[
'text!templates/app/app.html'
],
function(appTemplate) {
	var AppView = Backbone.View.extend({
		className: "main",

		template: _.template(appTemplate),
	
		events: {
			"click #changeName":	"changeName"
		},

		render: function() {
			this.$el.html(this.template({name: this.model.get('name')}));
			return this;
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},

		changeName: function() {
			this.model.increment();
		}
	});

	return AppView;
});
