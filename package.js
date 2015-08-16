Package.describe({
	name: "boxxa:openpgp",
	summary: "OpenPGP implementation for JavaScript http://openpgpjs.org",
	author: "Boxxa",
	version: "1.0.0",
	git: "https://github.com/boxxa/meteor-openpgp.git"
});

Npm.depends({'openpgp': '1.2.0'});

Package.on_use(function(api){
	api.versionsFrom('0.9.1');

	api.add_files(['openpgp.js']);

	if(api.export)
		api.export('openpgp');
});
