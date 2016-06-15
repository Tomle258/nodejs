const crypto = require('crypto');
module.exports = {
	admin: function(req, res) {
		if(req.session.authenticated){
			return res.redirect("/dashboard");
		}else{
			return res.view('Back_end/login',{title: 'Admin login'});
		}	    
	},
  	process: function(req, res) {
  		var email    = req.param('email');
  		var password = req.param('password'); 
  		const cipher = crypto.createCipher('aes192', 'a password');
		var encrypted = cipher.update(password, 'utf8', 'hex');
		encrypted += cipher.final('hex');
  		Admin.find({email:email,password:encrypted}).exec(function (err, admin){
		  if (err) {
		    return res.redirect("/admin");
		  }else{
		  	if(admin == ''){
		  		FlashService.error(req, 'Login Failed !');
		  		return res.redirect("/admin");
		  	}else{
		  		req.session.authenticated = true;
		  		req.session.admin = admin;
		  		return res.redirect("/dashboard");
		  	}	
		  }
		});
    },
    sign_in:function(req, res) {
    	return res.view('Back_end/sign_in',{title: 'Admin Sign In'});
	},
	reset_password:function(req, res) {
    	return res.view('Back_end/reset_password',{title: 'Admin Reset Password'});
	},
	sm_reset_password:function(req, res) {
		// var api_key = 'key-d3923bb6eed56f8d25d60449df7357b7';
		// var domain = 'sandbox1d2d95b4dad346dabee786ac47b36606.mailgun.org';
		// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
		 
		// var data = {
		//   from: 'Excited User <postmaster@sandbox1d2d95b4dad346dabee786ac47b36606.mailgun.org>',
		//   to: 'tuanvu060591@gmail.com',
		//   subject: 'Hello',
		//   html: 'Testing some Mailgun awesomness!'
		// };
		 
		// mailgun.messages().send(data, function (error, body) {
		//   console.log(body);
		// });
		
		var email    = req.param('email');		
		Admin.find({email:email}).exec(function (err, admin){
		  if (err) {
		    return res.send(err);
		  }else{
		  	if(admin == ''){
		  		FlashService.error(req, 'Email no exists.');
		  		return res.redirect("/reset_password");
		  	}else{
		  		var password = '123456';
				const cipher = crypto.createCipher('aes192', 'a password');
				var encrypted = cipher.update(password, 'utf8', 'hex');
				encrypted += cipher.final('hex');
				Admin.update({id: admin[0].id},{password:encrypted}).exec(function(err, updatedServers) {
		            if (err) {return res.send(err);}

		            // send email
				    var nodemailer = require("nodemailer");
				    var smtpTransport = nodemailer.createTransport("SMTP",{
					   service: "gmail",
					   auth: {
					       user: "tuanvu060591@gmail.com",
					       pass: "tuanvunhu258"
					   }
					});
					smtpTransport.sendMail({
					   from: "<tuanvu060591@gmail.com>", // sender address
					   to: "<"+email+">", // comma separated list of receivers
					   subject: "Reset Password Admin", // Subject line
					   text: ""+password+"" // plaintext body
					}, function(error, response){
					    if(error){
					       console.log(error);
					    }else{
					       console.log("Message sent: " + response.message);
					    }
					});
					// end send email	
					FlashService.success(req, 'Please check you email.');
					return res.redirect("/reset_password");
		        });    
		  	}	
		  }
		});				
	},
	create_account:function(req, res) {
		var name     = req.param('name');
    	var email    = req.param('email');
  		var password = req.param('password');
  		const cipher = crypto.createCipher('aes192', 'a password');
		var encrypted = cipher.update(password, 'utf8', 'hex');
		encrypted += cipher.final('hex');
  		var arr = req.allParams();
  		arr.password = encrypted;
 		Admin.create(arr).exec(function createCB(err, created){
		  return res.redirect("/admin");
		});
	},
    logout: function(req, res) {
	    req.session.destroy();
	    return res.redirect("/admin");
	},
};