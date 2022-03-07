const Discord = require("discord.js");
const Command = require("./Command.js");
const Event = require("./Event.js");
const config = require("../config/config.main.json");
const intents = new Discord.Intents(32767);
const { Structures } = require("discord.js");
const fs = require("fs");

class Client extends Discord.Client {
    constructor() {
      super({
        intents
      });

      this.commands = new Discord.Collection();
      this.prefix = config.prefix;
    }

    start(token) {
      fs.readdirSync("./Commands")
        .filter(file => file.endsWith(".js"))
        .forEach(file => {
          const command = require(`../Commands/${file}`);
          console.log(`Command ${command.name} loaded`);
          this.commands.set(command.name, command);
        });

      fs.readdirSync("./Events")
        .filter(file => file.endsWith(".js"))
        .forEach(file => {
          const event = require(`../Events/${file}`);
          console.log(`Event ${event.event} loaded`);
          this.on(event.event, event.run.bind(null, this));
        });

      this.login(token);
    }
  }

module.exports = Client;
