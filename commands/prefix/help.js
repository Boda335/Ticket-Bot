const _0x190b04=_0x5ee8;(function(_0x145e71,_0x9d8db){const _0x159ab2=_0x5ee8,_0xe05a11=_0x145e71();while(!![]){try{const _0x2091e9=parseInt(_0x159ab2(0x121))/0x1*(parseInt(_0x159ab2(0x116))/0x2)+-parseInt(_0x159ab2(0x112))/0x3+parseInt(_0x159ab2(0xfb))/0x4*(parseInt(_0x159ab2(0x118))/0x5)+parseInt(_0x159ab2(0xf9))/0x6*(parseInt(_0x159ab2(0x106))/0x7)+parseInt(_0x159ab2(0x123))/0x8+-parseInt(_0x159ab2(0xf3))/0x9+parseInt(_0x159ab2(0xff))/0xa*(-parseInt(_0x159ab2(0x126))/0xb);if(_0x2091e9===_0x9d8db)break;else _0xe05a11['push'](_0xe05a11['shift']());}catch(_0x407577){_0xe05a11['push'](_0xe05a11['shift']());}}}(_0x2036,0xd2775));function _0x5ee8(_0x448131,_0x44e97d){const _0x20369c=_0x2036();return _0x5ee8=function(_0x5ee8e5,_0x56694b){_0x5ee8e5=_0x5ee8e5-0xef;let _0x206f17=_0x20369c[_0x5ee8e5];return _0x206f17;},_0x5ee8(_0x448131,_0x44e97d);}const fs=require('fs'),path=require('path'),{Client,EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle}=require(_0x190b04(0x11a)),config=require(_0x190b04(0x10d)),support=config[_0x190b04(0xf6)],prefix=config[_0x190b04(0x117)];module[_0x190b04(0xf8)]={'name':_0x190b04(0x11e),'description':'Help\x20Commands',async 'execute'(_0x1b2d06){const _0x2328c0=_0x190b04,_0x2d63bd=path[_0x2328c0(0x107)](process[_0x2328c0(0x12a)](),_0x2328c0(0xfe),_0x2328c0(0x10e)),_0x2beacc=path['join'](process[_0x2328c0(0x12a)](),_0x2328c0(0xfe),'translations');if(!fs[_0x2328c0(0xf4)](_0x2d63bd)){await _0x1b2d06[_0x2328c0(0xfc)]({'content':loadTranslation(_0x2328c0(0x12c),'en'),'ephemeral':!![]});return;}const _0x318a72=JSON[_0x2328c0(0x120)](fs[_0x2328c0(0x100)](_0x2d63bd,'utf-8')),_0x44d936=_0x1b2d06[_0x2328c0(0xf1)]['id'],_0x21ee6c=_0x318a72[_0x44d936]?.[_0x2328c0(0x114)]||'en',_0x295c05=path['join'](_0x2beacc,_0x21ee6c+_0x2328c0(0x102)),_0x5be543=JSON['parse'](fs[_0x2328c0(0x100)](_0x295c05,_0x2328c0(0x11b))),_0x28dc33=new EmbedBuilder()['setColor'](_0x2328c0(0x10c))[_0x2328c0(0x104)]({'name':_0x1b2d06[_0x2328c0(0x11f)][_0x2328c0(0x113)]['username'],'iconURL':_0x1b2d06['client']['user'][_0x2328c0(0xf0)](),'url':config[_0x2328c0(0xf6)]})[_0x2328c0(0x101)](loadTranslation(_0x2328c0(0xfa),_0x21ee6c))[_0x2328c0(0x12e)](_0x1b2d06[_0x2328c0(0x11f)][_0x2328c0(0x113)][_0x2328c0(0xf0)]())[_0x2328c0(0xf2)]([{'name':'`'+prefix+_0x2328c0(0x109),'value':loadTranslation(_0x2328c0(0x12d),_0x21ee6c),'inline':!![]},{'name':'`'+prefix+'`\x20setup','value':loadTranslation('/setup',_0x21ee6c),'inline':!![]},{'name':'`'+prefix+_0x2328c0(0x12f),'value':loadTranslation(_0x2328c0(0x127),_0x21ee6c),'inline':!![]},{'name':'`'+prefix+_0x2328c0(0x124),'value':loadTranslation('/add',_0x21ee6c),'inline':!![]},{'name':'`'+prefix+_0x2328c0(0xfd),'value':loadTranslation(_0x2328c0(0x105),_0x21ee6c),'inline':!![]},{'name':'`'+prefix+_0x2328c0(0x10a),'value':loadTranslation(_0x2328c0(0x10b),_0x21ee6c),'inline':!![]},{'name':'`'+prefix+_0x2328c0(0x12b),'value':loadTranslation(_0x2328c0(0x111),_0x21ee6c),'inline':!![]},{'name':'`'+prefix+_0x2328c0(0xef),'value':loadTranslation(_0x2328c0(0x122),_0x21ee6c),'inline':!![]}])[_0x2328c0(0xf5)]({'text':'Requested\x20by\x20'+_0x1b2d06[_0x2328c0(0xf7)][_0x2328c0(0x128)],'iconURL':_0x1b2d06[_0x2328c0(0xf7)][_0x2328c0(0xf0)]()}),_0x210a61=new ActionRowBuilder()[_0x2328c0(0x115)](new ButtonBuilder()['setURL'](_0x2328c0(0x129)+_0x1b2d06[_0x2328c0(0x11f)][_0x2328c0(0x113)]['id']+_0x2328c0(0x125))[_0x2328c0(0x103)]('Invite\x20Me')['setStyle'](ButtonStyle[_0x2328c0(0x11d)]),new ButtonBuilder()['setURL'](''+support)[_0x2328c0(0x103)]('Support')[_0x2328c0(0x11c)](ButtonStyle['Link']),new ButtonBuilder()[_0x2328c0(0x103)](_0x2328c0(0x119))[_0x2328c0(0x11c)](ButtonStyle[_0x2328c0(0x110)])[_0x2328c0(0x108)]('bot_status'));await _0x1b2d06[_0x2328c0(0xfc)]({'embeds':[_0x28dc33],'components':[_0x210a61]});}};function loadTranslation(_0x444c71,_0x5ae9af){const _0x4f1c8f=_0x190b04,_0x409904=path[_0x4f1c8f(0x107)](process[_0x4f1c8f(0x12a)](),_0x4f1c8f(0xfe),_0x4f1c8f(0x10f),_0x5ae9af+_0x4f1c8f(0x102)),_0x1becd2=JSON[_0x4f1c8f(0x120)](fs['readFileSync'](_0x409904,_0x4f1c8f(0x11b)));return _0x1becd2[_0x444c71]||_0x444c71;}function _0x2036(){const _0x16941c=['cwd','`\x20setlang','settingsNotFound','/help','setThumbnail','`\x20remove-section','`\x20ping','displayAvatarURL','guild','addFields','5322015luUvbB','existsSync','setFooter','NexusLink','author','exports','143904HvSAUE','helptitle','4CZOVmh','reply','`\x20remove','data','2261480nZIhlq','readFileSync','setTitle','.json','setLabel','setAuthor','/remove','497goDWiZ','join','setCustomId','`\x20help','`\x20rename','/rename','White','../../config.json','settings.json','translations','Primary','/setlang','2453880hfcnsU','user','language','addComponents','2891854jpavUD','prefix','5845975lZNsSI','Bot\x20Status','discord.js','utf-8','setStyle','Link','help','client','parse','1ydbnuF','/ping','12573968GsGFbR','`\x20add','&permissions=8&scope=bot%20applications.commands','176qKuqPM','/remove-section','username','https://discord.com/oauth2/authorize?client_id='];_0x2036=function(){return _0x16941c;};return _0x2036();}