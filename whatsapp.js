import ww from "whatsapp-web.js";
const { Client, LocalAuth } = ww;

import qrcode from "qrcode-terminal";

console.log("Client is initializing!");
const client = new Client({ authStrategy: new LocalAuth() });

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("Client is ready!");
});

client.initialize();

export default client;