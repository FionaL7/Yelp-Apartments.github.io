const User = require('../models/user');

module.exports.registerForm = (req, res) =>{
    res.render('users/register')
}

module.exports.registerUser = async(req, res) =>{
    try{
     const {username, email, password} = req.body;
     const user = await new User({username, email});
     const registeredUser = await User.register(user, password);
     // so the user doesn't have to login after registering
     req.login(registeredUser, err =>{
         if(err) return next(err);
         req.flash('success', 'Welcome to Yelp Homes!');
         res.redirect('/apartments');
     })
    
    } catch(e){
        req.flash('error', e.message);
        res.redirect('/register')
    }
     }

module.exports.loginForm = (req, res) =>{
    res.render('users/login')
}

module.exports.loginUser =  (req, res) =>{
    req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/apartments';
    delete req.session.returnTo
    res.redirect(redirectUrl)
  }

module.exports.logout =  (req, res) =>{
    req.logOut();
    req.flash('success', 'Goodbye');
    res.redirect('/apartments')
}