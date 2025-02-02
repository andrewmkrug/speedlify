module.exports = {
	name: "My Personal Sites", // optional, falls back to object key
	description: "my personal sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	// options: {
	// 	frequency: 60 * 11 + 30, // 11h, 30m
	// 	// Use "run" if the sites don’t share assets on the same origin
	// 	//           and we can reset chrome with each run instead of
	// 	//           each site in every run (it’s faster)
	// 	// Use "site" if sites are all on the same origin and share assets.
	// 	freshChrome: "run",
	// },
	options: {
		frequency: 60 , // (in minutes), 23 hours
		freshChrome: "run"
	},
	urls: [
		"https://www.andrewmkrug.com/",
		"https://recipes.andrewmkrug.com/"
		// "https://resume.andrewmkrug.com/"
	]
};
