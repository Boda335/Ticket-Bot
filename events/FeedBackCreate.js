const _0x4df444=_0x2c92;(function(_0x8751ea,_0x178bb5){const _0x5689f4=_0x2c92,_0x468040=_0x8751ea();while(!![]){try{const _0x12fa2d=parseInt(_0x5689f4(0x14e))/0x1*(-parseInt(_0x5689f4(0x13e))/0x2)+parseInt(_0x5689f4(0x14c))/0x3*(parseInt(_0x5689f4(0x124))/0x4)+-parseInt(_0x5689f4(0x12a))/0x5*(parseInt(_0x5689f4(0x11f))/0x6)+-parseInt(_0x5689f4(0x12d))/0x7+parseInt(_0x5689f4(0x130))/0x8*(parseInt(_0x5689f4(0x13b))/0x9)+-parseInt(_0x5689f4(0x122))/0xa+-parseInt(_0x5689f4(0x121))/0xb*(-parseInt(_0x5689f4(0x11b))/0xc);if(_0x12fa2d===_0x178bb5)break;else _0x468040['push'](_0x468040['shift']());}catch(_0xf7a497){_0x468040['push'](_0x468040['shift']());}}}(_0x47ce,0x6964c));function _0x2c92(_0x5392f4,_0x27aeb2){const _0x47ce9a=_0x47ce();return _0x2c92=function(_0x2c92f9,_0x35c6b4){_0x2c92f9=_0x2c92f9-0x10f;let _0x4a34fe=_0x47ce9a[_0x2c92f9];return _0x4a34fe;},_0x2c92(_0x5392f4,_0x27aeb2);}function _0x47ce(){const _0x357024=['setThumbnail','639962UvfuQP','update','Secondary','لا\x20يمكنك\x20تقييم\x20إلا\x20رسالتك\x20الخاصة!','**You\x20Have\x20Rated\x20Us\x20->**','join','setColor','star_1','star_3','\x20[`Hope\x20You\x20Visit\x20Us\x20Again`](','split','startsWith','catch','setLabel','21mCVePe','delete','2QLQlTE','readFileSync','edit','path','end','createMessageComponentCollector','setImage','star_4','feed_star','setCustomId','arrow','arrow2','White','avatarURL','utf-8','message','https://h.top4top.io/p_3217bw8v61.jpg','parse','displayName','../config.json','addComponents','`**','616824ImPRDY','\x20[`Review\x20By\x20→\x20','setFooter','exports','483792exEWZU','feed_1','11tklnOM','672980KXgQkI','emojis','386256wuMXIm','`](','**`Thanks\x20For\x20Sharing\x20feedback`**\x0a`#`','setStyle','customId','setAuthor','5ZlrItL','رابط\x20الدعوة\x20غير\x20متوفر','star_5','315210ANVIMI','inviteLink','\x20[`Thanks\x20for\x20FeedBack`](','5904aEavgV','data','Rate\x20us\x20By\x20Clicking\x20on\x20The\x20Button\x20Below\x20|\x20⭐','author','setDescription','user','**`','repeat','star_2','لم\x20يتم\x20حذف\x20الرسالة:','feedbackChannelId','6552UfcQow','channel'];_0x47ce=function(){return _0x357024;};return _0x47ce();}const {Events,ActionRowBuilder,ButtonBuilder,ButtonStyle,EmbedBuilder}=require('discord.js'),fs=require('fs'),path=require(_0x4df444(0x151)),config=require(_0x4df444(0x118)),FedEmoji_1=config[_0x4df444(0x123)][_0x4df444(0x120)],arrow=config[_0x4df444(0x123)][_0x4df444(0x10f)],arrow2=config[_0x4df444(0x123)][_0x4df444(0x110)];module[_0x4df444(0x11e)]={'name':Events['MessageCreate'],async 'execute'(_0xd8e741,_0x42765c){const _0x21a505=_0x4df444;if(_0xd8e741[_0x21a505(0x133)]['bot'])return;const _0x4d9700=path[_0x21a505(0x143)](process['cwd'](),_0x21a505(0x131)),_0x10e6c0=path[_0x21a505(0x143)](_0x4d9700,'settings.json');let _0x171bd4={};if(fs['existsSync'](_0x10e6c0)){const _0x58f0d5=fs[_0x21a505(0x14f)](_0x10e6c0,_0x21a505(0x113));_0x171bd4=JSON[_0x21a505(0x116)](_0x58f0d5);}const _0x2ec298=_0xd8e741['guild']['id'];if(!_0x171bd4[_0x2ec298]||!_0x171bd4[_0x2ec298][_0x21a505(0x13a)])return;const _0x31990e=_0x171bd4[_0x2ec298][_0x21a505(0x13a)];if(_0xd8e741['channel']['id']===_0x31990e){const _0x29d39c=_0xd8e741['content'],_0x5d6b8d=_0x171bd4[_0x2ec298][_0x21a505(0x12e)]||_0x21a505(0x12b),_0x5b3ffb=new EmbedBuilder()[_0x21a505(0x13d)](_0xd8e741['author'][_0x21a505(0x112)]({'dynamic':!![]}))[_0x21a505(0x129)]({'name':_0xd8e741[_0x21a505(0x133)][_0x21a505(0x117)],'iconURL':_0xd8e741[_0x21a505(0x133)][_0x21a505(0x112)]({'dynamic':!![]})})[_0x21a505(0x144)](_0x21a505(0x111))['setTitle']('**`'+_0x29d39c+_0x21a505(0x11a))[_0x21a505(0x154)]('https://h.top4top.io/p_3217bw8v61.jpg')['setFooter']({'text':_0x21a505(0x132)})[_0x21a505(0x134)]('\x0a\x0a'+arrow+_0x21a505(0x11c)+_0xd8e741[_0x21a505(0x133)][_0x21a505(0x117)]+_0x21a505(0x125)+_0x5d6b8d+')\x20'+FedEmoji_1+'\x0a'+arrow+_0x21a505(0x12f)+_0x5d6b8d+')\x20'+FedEmoji_1+'\x0a'+arrow+'\x20[`Hope\x20You\x20Visit\x20Us\x20Again`]('+_0x5d6b8d+')\x20'+FedEmoji_1),_0x2f0ab3=new ActionRowBuilder()[_0x21a505(0x119)](new ButtonBuilder()[_0x21a505(0x157)](_0x21a505(0x145))[_0x21a505(0x14b)]('1')[_0x21a505(0x127)](ButtonStyle['Secondary']),new ButtonBuilder()[_0x21a505(0x157)](_0x21a505(0x138))['setLabel']('2')['setStyle'](ButtonStyle['Secondary']),new ButtonBuilder()['setCustomId'](_0x21a505(0x146))[_0x21a505(0x14b)]('3')[_0x21a505(0x127)](ButtonStyle[_0x21a505(0x140)]),new ButtonBuilder()[_0x21a505(0x157)](_0x21a505(0x155))[_0x21a505(0x14b)]('4')['setStyle'](ButtonStyle['Secondary']),new ButtonBuilder()[_0x21a505(0x157)](_0x21a505(0x12c))[_0x21a505(0x14b)]('5')['setStyle'](ButtonStyle[_0x21a505(0x140)])),_0x38b09c='<@'+_0xd8e741['author']['id']+'>',_0x41b2e8=await _0xd8e741[_0x21a505(0x13c)]['send']({'content':_0x21a505(0x126)+_0x38b09c,'embeds':[_0x5b3ffb],'components':[_0x2f0ab3]});await _0xd8e741[_0x21a505(0x14d)]()[_0x21a505(0x14a)](_0x22b3bd=>console['error'](_0x21a505(0x139),_0x22b3bd));const _0x3f69a8=_0x24ba2a=>_0x24ba2a['customId'][_0x21a505(0x149)]('star_')&&_0x24ba2a[_0x21a505(0x114)]['id']===_0x41b2e8['id'],_0x3bf221=_0x41b2e8[_0x21a505(0x153)]({'filter':_0x3f69a8,'time':0xea60});_0x3bf221['on']('collect',async _0x2edb27=>{const _0x7df5b2=_0x21a505;if(_0x2edb27[_0x7df5b2(0x135)]['id']!==_0xd8e741[_0x7df5b2(0x133)]['id'])return _0x2edb27['reply']({'content':_0x7df5b2(0x141),'ephemeral':!![]});const _0x37bd7b=_0x2edb27[_0x7df5b2(0x128)][_0x7df5b2(0x148)]('_')[0x1],_0x11c78e=config[_0x7df5b2(0x123)][_0x7df5b2(0x156)][_0x7df5b2(0x137)](_0x37bd7b),_0x4bc1b0=new EmbedBuilder()['setThumbnail'](_0xd8e741[_0x7df5b2(0x133)][_0x7df5b2(0x112)]({'dynamic':!![]}))[_0x7df5b2(0x129)]({'name':_0xd8e741[_0x7df5b2(0x133)][_0x7df5b2(0x117)],'iconURL':_0xd8e741['author'][_0x7df5b2(0x112)]({'dynamic':!![]})})[_0x7df5b2(0x154)](_0x7df5b2(0x115))[_0x7df5b2(0x144)](_0x7df5b2(0x111))['setTitle'](_0x7df5b2(0x136)+_0x29d39c+_0x7df5b2(0x11a))[_0x7df5b2(0x11d)]({'text':'Rate\x20us\x20By\x20Clicking\x20on\x20The\x20Button\x20Below\x20|\x20⭐'})[_0x7df5b2(0x134)]('\x0a'+arrow+_0x7df5b2(0x11c)+_0xd8e741[_0x7df5b2(0x133)][_0x7df5b2(0x117)]+_0x7df5b2(0x125)+_0x5d6b8d+')\x20'+FedEmoji_1+'\x0a'+arrow+_0x7df5b2(0x12f)+_0x5d6b8d+')\x20'+FedEmoji_1+'\x0a'+arrow+_0x7df5b2(0x147)+_0x5d6b8d+')\x20'+FedEmoji_1+'\x0a\x0a\x20**Thank\x20You\x20For\x20Rated**\x0a'+arrow2+_0x11c78e);await _0x2edb27[_0x7df5b2(0x13f)]({'content':'**`Thanks\x20For\x20Sharing\x20feedback`**\x0a`#`'+_0x38b09c,'embeds':[_0x4bc1b0],'components':[]}),await _0x2edb27['followUp']({'content':_0x7df5b2(0x142)+_0x11c78e+'\x0a**Thanks!\x20Hope\x20You\x20Visit\x20Us\x20Again**','ephemeral':!![]});}),_0x3bf221['on'](_0x21a505(0x152),_0x466585=>{const _0x441744=_0x21a505;_0x41b2e8[_0x441744(0x150)]({'components':[]});});}}};