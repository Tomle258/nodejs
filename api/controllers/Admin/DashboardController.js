//var passport = require('passport');
module.exports = {
	dashboard: function(req, res) {
	    return res.view('Back_end/dashboard',{title: 'Dashboard'});
	},
};