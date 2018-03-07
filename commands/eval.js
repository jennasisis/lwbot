const Discord = require(`discord.js`);
const config = require(`../config.json`);

module.exports.run = (client, message, args) => {
    function clean(text) {
        if (typeof(text) === `string`)
            return text.replace(/`/g, `\`` + String.fromCharCode(8203)).replace(/@/g, `@` + String.fromCharCode(8203));
        else
            return text;
    }
    if (message.author.id !== `107599228900999168`) {
        message.channel.send(`:x:`);
    } else {
        try {
            const code = args.join(` `);
            let evaled = eval(code);
            if (typeof evaled !== `string`)
                evaled = require(`util`).inspect(evaled);
            message.channel.send(clean(evaled), {code:`xl`});
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
};