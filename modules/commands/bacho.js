module.exports.config = {
	name: "bacho",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Quốc Anh",
	description: "Đếm ngược đến simh nhật Bác Hồ",
	commandCategory: "countdown",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("May 19, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`🥳Ngày sinh nhật Bác Hồ🥳\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
}
