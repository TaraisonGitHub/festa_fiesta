
/ ===============================================================================
// LOAD DATA
// Linking our routes to our data sources.
// ===============================================================================




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    const client_id = '1144869418943929';
    const client_secret = 'c48b01d62147cba4d2d8b2f924eb0dab';

    const authorization_base_url = 'https://www.facebook.com/dialog/oauth';
    const token_url = 'https://www.facebook.com/dialog/oauth';
    const redirect_url = 'https://festafiesta.herokuapp.com';

  // API GET Requests
  // ---------------------------------------------------------------------------

    //User is redirected to facebook if he/she is not yet logged in
    app.get("/", function(req, res) {
        if(!req.session.oauth_access_token) {
		          res.redirect("/facebook_login");
	     }
    });

    



};
