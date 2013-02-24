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
			this.listenTo(this.model, 'change:name', this.updateName);
			this.listenTo(this.model, 'change:counter', this.updateCounter);
		},

		changeName: function() {
			var name = this.$('#name').val();
			this.$('#name').val("").focus();
			this.model.increment();
			this.model.set({name: name});
			return false;
		},
		
		updateName: function() {
			this.$("#h1-name").html(this.model.get('name'));
		},
		
		updateCounter: function() {
			this.$("#counter").html(this.model.get('counter'));
		}
	});

	return AppView;
});
