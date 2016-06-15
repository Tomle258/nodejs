module.exports = {
  index: function(req, res) {
  	//return res.send('123');
    return res.view('Front_end/index',{title: 'Template reponsive html5 jquery đẹp'});
  }
};