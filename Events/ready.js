const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
  console.log('I am ready!');
  
  let statuses = [
    "Version v0.0.1 beta",
        "nutaku fansub",
		"Anime <3"
  ];
  
  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "WATCHING"
    });
  }, 5000)
});