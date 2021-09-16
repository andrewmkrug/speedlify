module.exports = {
	name: "My Business Sites", // optional, falls back to object key
	description: "My business site",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	// options: {
	// 	frequency: 60 * 11 + 30, // 11h, 30m
	// 	// Use "run" if the sites don’t share assets on the same origin
	// 	//           and we can reset chrome with each run instead of
	// 	//           each site in every run (it’s faster)
	// 	// Use "site" if sites are all on the same origin and share assets.
	// 	freshChrome: "site",
	// },
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.ginghamconsulting.com/",
		"https://openqualityconf.com/",
		//"https://2020.openqualityconf.com/",
	]
};