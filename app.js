function generateBot() {
  let type = document.getElementById("botType").value;
  let code = "";

  if (type === "welcome") {
    code = `
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.on('guildMemberAdd', member => {
  member.guild.systemChannel.send('👋 Welcome ' + member.user.username);
});

client.login("YOUR_BOT_TOKEN");
    `;
  }

  if (type === "commands") {
    code = `
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!');
  }
});

client.login("YOUR_BOT_TOKEN");
    `;
  }

  if (type === "tickets") {
    code = `
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.on('messageCreate', msg => {
  if (msg.content === '!ticket') {
    msg.reply('🎫 Ticket created!');
  }
});

client.login("YOUR_BOT_TOKEN");
    `;
  }

  document.getElementById("output").innerText = code;
}
