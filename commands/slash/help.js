const _0x171c0e=_0x22cc;function _0x22cc(_0x20344b,_0x1c23bc){const _0x2f8047=_0x2f80();return _0x22cc=function(_0x22ccd7,_0x535833){_0x22ccd7=_0x22ccd7-0x1b5;let _0x21e6c3=_0x2f8047[_0x22ccd7];return _0x21e6c3;},_0x22cc(_0x20344b,_0x1c23bc);}function _0x2f80(){const _0x78619f=['2dQLtQG','Requested\x20by\x20','setColor','12889ZVQMMx','username','White','18aPuAiE','/rename','Link','setTitle','help','https://discord.com/oauth2/authorize?client_id=','join','exports','settings.json','Help\x20Commands','setCustomId','2687116JqmTUh','3422024yMyIvF','discord.js','1368879PHLOZq','translations','/remove','&permissions=8&scope=bot%20applications.commands','setLabel','setFooter','data','parse','utf-8','/setup','setThumbnail','/help','setStyle','helptitle','61334sFTLWq','4196358UfoCke','displayAvatarURL','/edite-setting','setName','Invite\x20Me','globalName','/add','setAuthor','readFileSync','/remove-section','settingsNotFound','client','/setlang','1744140vJvvQu','path','cwd','user','.json','reply','Primary','setDescription','NexusLink','addComponents','Bot\x20Status','/ping'];_0x2f80=function(){return _0x78619f;};return _0x2f80();}(function(_0x4198a1,_0x35853b){const _0x469d2e=_0x22cc,_0x115805=_0x4198a1();while(!![]){try{const _0x4bdb4e=-parseInt(_0x469d2e(0x1df))/0x1+-parseInt(_0x469d2e(0x1dc))/0x2*(-parseInt(_0x469d2e(0x1f0))/0x3)+parseInt(_0x469d2e(0x1ed))/0x4+-parseInt(_0x469d2e(0x1d0))/0x5+parseInt(_0x469d2e(0x1e2))/0x6*(parseInt(_0x469d2e(0x1c2))/0x7)+-parseInt(_0x469d2e(0x1ee))/0x8+parseInt(_0x469d2e(0x1c3))/0x9;if(_0x4bdb4e===_0x35853b)break;else _0x115805['push'](_0x115805['shift']());}catch(_0x3b76df){_0x115805['push'](_0x115805['shift']());}}}(_0x2f80,0xcaeae));const fs=require('fs'),path=require(_0x171c0e(0x1d1)),{Client,SlashCommandBuilder,EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle}=require(_0x171c0e(0x1ef)),config=require('../../config.json'),support=config['NexusLink'];module[_0x171c0e(0x1e9)]={'data':new SlashCommandBuilder()[_0x171c0e(0x1c6)](_0x171c0e(0x1e6))[_0x171c0e(0x1d7)](_0x171c0e(0x1eb)),async 'execute'(_0x31843d){const _0x15a112=_0x171c0e,_0x133304=path['join'](process[_0x15a112(0x1d2)](),_0x15a112(0x1ba),_0x15a112(0x1ea)),_0x1e1a33=path[_0x15a112(0x1e8)](process['cwd'](),_0x15a112(0x1ba),_0x15a112(0x1b5));if(!fs['existsSync'](_0x133304)){await _0x31843d[_0x15a112(0x1d5)]({'content':loadTranslation(_0x15a112(0x1cd),'en'),'ephemeral':!![]});return;}const _0x36a345=JSON[_0x15a112(0x1bb)](fs['readFileSync'](_0x133304,_0x15a112(0x1bc))),_0x56ee35=_0x31843d['guild']['id'],_0x2af268=_0x36a345[_0x56ee35]?.['language']||'en',_0x1f31a1=path[_0x15a112(0x1e8)](_0x1e1a33,_0x2af268+_0x15a112(0x1d4)),_0x276cde=JSON[_0x15a112(0x1bb)](fs[_0x15a112(0x1cb)](_0x1f31a1,'utf-8')),_0x4fc757=new EmbedBuilder()[_0x15a112(0x1de)](_0x15a112(0x1e1))[_0x15a112(0x1ca)]({'name':_0x31843d[_0x15a112(0x1ce)][_0x15a112(0x1d3)][_0x15a112(0x1e0)],'iconURL':_0x31843d[_0x15a112(0x1ce)][_0x15a112(0x1d3)][_0x15a112(0x1c4)](),'url':config[_0x15a112(0x1d8)]})[_0x15a112(0x1e5)](loadTranslation(_0x15a112(0x1c1),_0x2af268))[_0x15a112(0x1be)](_0x31843d[_0x15a112(0x1ce)][_0x15a112(0x1d3)][_0x15a112(0x1c4)]())['addFields']([{'name':_0x15a112(0x1bf),'value':loadTranslation('/help',_0x2af268),'inline':!![]},{'name':_0x15a112(0x1c5),'value':loadTranslation(_0x15a112(0x1c5),_0x2af268),'inline':!![]},{'name':'/add-section','value':loadTranslation('/add-section',_0x2af268),'inline':!![]},{'name':_0x15a112(0x1bd),'value':loadTranslation('/setup',_0x2af268),'inline':!![]},{'name':_0x15a112(0x1cc),'value':loadTranslation(_0x15a112(0x1cc),_0x2af268),'inline':!![]},{'name':'/add','value':loadTranslation(_0x15a112(0x1c9),_0x2af268),'inline':!![]},{'name':_0x15a112(0x1b6),'value':loadTranslation(_0x15a112(0x1b6),_0x2af268),'inline':!![]},{'name':_0x15a112(0x1e3),'value':loadTranslation(_0x15a112(0x1e3),_0x2af268),'inline':!![]},{'name':_0x15a112(0x1cf),'value':loadTranslation(_0x15a112(0x1cf),_0x2af268),'inline':!![]},{'name':_0x15a112(0x1db),'value':loadTranslation(_0x15a112(0x1db),_0x2af268),'inline':!![]}])[_0x15a112(0x1b9)]({'text':_0x15a112(0x1dd)+(_0x31843d[_0x15a112(0x1d3)][_0x15a112(0x1c8)]||_0x31843d['user'][_0x15a112(0x1e0)]),'iconURL':_0x31843d[_0x15a112(0x1d3)][_0x15a112(0x1c4)]()}),_0x550b19=new ActionRowBuilder()[_0x15a112(0x1d9)](new ButtonBuilder()['setURL'](_0x15a112(0x1e7)+_0x31843d[_0x15a112(0x1ce)][_0x15a112(0x1d3)]['id']+_0x15a112(0x1b7))[_0x15a112(0x1b8)](_0x15a112(0x1c7))[_0x15a112(0x1c0)](ButtonStyle[_0x15a112(0x1e4)]),new ButtonBuilder()['setURL'](''+support)[_0x15a112(0x1b8)]('Support')[_0x15a112(0x1c0)](ButtonStyle[_0x15a112(0x1e4)]),new ButtonBuilder()[_0x15a112(0x1b8)](_0x15a112(0x1da))[_0x15a112(0x1c0)](ButtonStyle[_0x15a112(0x1d6)])[_0x15a112(0x1ec)]('bot_status'));await _0x31843d[_0x15a112(0x1d5)]({'embeds':[_0x4fc757],'components':[_0x550b19],'ephemeral':!![]});}};function loadTranslation(_0x1dc1f2,_0x432954){const _0x2a96c4=_0x171c0e,_0x571898=path['join'](process['cwd'](),_0x2a96c4(0x1ba),_0x2a96c4(0x1b5),_0x432954+'.json'),_0x5adf20=JSON['parse'](fs[_0x2a96c4(0x1cb)](_0x571898,'utf-8'));return _0x5adf20[_0x1dc1f2]||_0x1dc1f2;}