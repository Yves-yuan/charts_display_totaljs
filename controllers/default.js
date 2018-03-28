exports.install = function() {
	F.route('/', view_index);
	F.route('/map/world', view_world_map);
	// or
	// F.route('/');
};

function view_index() {
	var self = this;
	self.view('index');
}

function view_world_map() {
	var self = this;
	self.view('map/world/scatterGL-gps')
}