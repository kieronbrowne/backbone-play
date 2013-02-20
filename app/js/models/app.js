define(
[],

function() {
	var AppModel = Backbone.Model.extend({
		name: 'Not set',
		counter: 0,

		increment: function() {
			this.set('name', this.counter++);
		}
	});

	return AppModel;
}
);
