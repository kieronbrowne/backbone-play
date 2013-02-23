define(
[],

function() {
	var AppModel = Backbone.Model.extend({
	
		initialize: function() {
			this.set({name: 'World!', counter: 0});
		},
		
		increment: function() {
			var c = this.get('counter');
			this.set({'counter': ++c}, {silent: true});
		}
	});

	return AppModel;
}
);
