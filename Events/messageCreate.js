const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", async (client, message) => {
  if (message.author.bot) return;
  if(message.channel.id != 708963238364315708) return;

  let messages = await message.channel.messages.fetch({ limit: 2 })
  messages = messages.map(x  => x)

  if(messages[0].author.id == messages[1].author.id) return messages[0].delete()

  if(parseInt(messages[0].content) - 1 == parseInt(messages[1].content)) return 
  messages[0].delete()
});