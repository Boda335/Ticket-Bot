const _0x9215de=_0x4ec1;function _0x12ad(){const _0x10c01d=['user','forEach','remove-section-select','sections','.json','createMessageComponentCollector','setMinValues','5579BkwkWW','selsec','38046eayyJE','3502555AYMiYF','517279fTmxZT','data','guild','update','stop','addOptions','2448ZDwbKc','Settings\x20file\x20does\x20not\x20exist.\x20Please\x20configure\x20the\x20settings\x20first.','settings.json','customId','setPlaceholder','No\x20sections\x20available\x20to\x20remove.','author','8689692jcCnSv','reply','cwd','sectionName','Select\x20sections\x20to\x20remove','translations','donesecr','collect','path','3858paEgmj','toString','10NsbGui','utf-8','Remove\x20sections\x20from\x20the\x20settings.','existsSync','parse','join','channel','setMaxValues','writeFileSync','2055684pTdnhK','discord.js','setCustomId','readFileSync','settingsNotFound','splice','send','531otNKQW','147QYmzUa'];_0x12ad=function(){return _0x10c01d;};return _0x12ad();}function _0x4ec1(_0x14cff9,_0x1004a9){const _0x12ad1e=_0x12ad();return _0x4ec1=function(_0x4ec1ca,_0x52fe64){_0x4ec1ca=_0x4ec1ca-0x1dd;let _0x3caed2=_0x12ad1e[_0x4ec1ca];return _0x3caed2;},_0x4ec1(_0x14cff9,_0x1004a9);}(function(_0x28c732,_0x466493){const _0x64a532=_0x4ec1,_0xe3ecf5=_0x28c732();while(!![]){try{const _0x224604=-parseInt(_0x64a532(0x204))/0x1+parseInt(_0x64a532(0x202))/0x2*(parseInt(_0x64a532(0x1f8))/0x3)+parseInt(_0x64a532(0x1f0))/0x4+-parseInt(_0x64a532(0x203))/0x5+parseInt(_0x64a532(0x1e5))/0x6*(-parseInt(_0x64a532(0x200))/0x7)+parseInt(_0x64a532(0x20a))/0x8*(-parseInt(_0x64a532(0x1f7))/0x9)+parseInt(_0x64a532(0x1e7))/0xa*(parseInt(_0x64a532(0x211))/0xb);if(_0x224604===_0x466493)break;else _0xe3ecf5['push'](_0xe3ecf5['shift']());}catch(_0x16aafe){_0xe3ecf5['push'](_0xe3ecf5['shift']());}}}(_0x12ad,0x77119));const {ActionRowBuilder,StringSelectMenuBuilder}=require(_0x9215de(0x1f1)),fs=require('fs'),path=require(_0x9215de(0x1e4));module['exports']={'name':'remove-section','description':_0x9215de(0x1e9),async 'execute'(_0x16d10c,_0xf06259){const _0x2bc01f=_0x9215de,_0x1a4e54=_0x16d10c[_0x2bc01f(0x206)]['id'],_0x389922=path[_0x2bc01f(0x1ec)](process[_0x2bc01f(0x1de)](),_0x2bc01f(0x205)),_0x15ad57=path['join'](_0x389922,_0x2bc01f(0x20c));if(!fs[_0x2bc01f(0x1ea)](_0x15ad57)){_0x16d10c[_0x2bc01f(0x1dd)](_0x2bc01f(0x20b));return;}const _0x13fc9a=path[_0x2bc01f(0x1ec)](process[_0x2bc01f(0x1de)](),_0x2bc01f(0x205),_0x2bc01f(0x20c)),_0x5c2718=path[_0x2bc01f(0x1ec)](process[_0x2bc01f(0x1de)](),_0x2bc01f(0x205),_0x2bc01f(0x1e1));if(!fs[_0x2bc01f(0x1ea)](_0x13fc9a)){_0x16d10c[_0x2bc01f(0x1dd)](loadTranslation(_0x2bc01f(0x1f4),'en'));return;}const _0x27cc6a=JSON['parse'](fs['readFileSync'](_0x13fc9a,_0x2bc01f(0x1e8))),_0x2055a8=_0x27cc6a[_0x16d10c['guild']['id']]?.['language']||'en',_0x33cd8e=path[_0x2bc01f(0x1ec)](_0x5c2718,_0x2055a8+_0x2bc01f(0x1fd)),_0x1cb3e0=JSON[_0x2bc01f(0x1eb)](fs[_0x2bc01f(0x1f3)](_0x33cd8e,_0x2bc01f(0x1e8)));if(!_0x27cc6a[_0x1a4e54]){_0x16d10c[_0x2bc01f(0x1dd)](loadTranslation(_0x2bc01f(0x1f4),_0x2055a8));return;}const _0x1f59f3=_0x27cc6a[_0x1a4e54][_0x2bc01f(0x1fc)]||[];if(_0x1f59f3['length']===0x0){_0x16d10c[_0x2bc01f(0x1dd)](_0x2bc01f(0x20f));return;}const _0x62e910=_0x1f59f3['map']((_0x2a4401,_0x5f4867)=>({'label':_0x2a4401[_0x2bc01f(0x1df)],'value':_0x5f4867[_0x2bc01f(0x1e6)]()})),_0x1c5003=new StringSelectMenuBuilder()[_0x2bc01f(0x1f2)](_0x2bc01f(0x1fb))[_0x2bc01f(0x20e)](_0x2bc01f(0x1e0))[_0x2bc01f(0x209)](_0x62e910)[_0x2bc01f(0x1ff)](0x1)[_0x2bc01f(0x1ee)](_0x62e910['length']),_0x42cebf=new ActionRowBuilder()['addComponents'](_0x1c5003);_0x16d10c[_0x2bc01f(0x1dd)]({'content':loadTranslation(_0x2bc01f(0x201),_0x2055a8),'components':[_0x42cebf]});const _0x233b82=_0x79ccfb=>_0x79ccfb[_0x2bc01f(0x20d)]===_0x2bc01f(0x1fb)&&_0x79ccfb[_0x2bc01f(0x1f9)]['id']===_0x16d10c[_0x2bc01f(0x210)]['id'],_0x41ec94=_0x16d10c[_0x2bc01f(0x1ed)][_0x2bc01f(0x1fe)]({'filter':_0x233b82,'time':0x3a98});_0x41ec94['on'](_0x2bc01f(0x1e3),async _0x34604c=>{const _0x4bd91b=_0x2bc01f,_0x39eb37=_0x34604c['values'];_0x39eb37[_0x4bd91b(0x1fa)](_0x1f5a42=>{const _0x50251c=_0x4bd91b,_0x282de7=parseInt(_0x1f5a42);_0x1f59f3[_0x50251c(0x1f5)](_0x282de7,0x1);}),_0x27cc6a[_0x1a4e54]['sections']=_0x1f59f3,fs[_0x4bd91b(0x1ef)](_0x15ad57,JSON['stringify'](_0x27cc6a,null,0x2)),await _0x34604c[_0x4bd91b(0x207)]({'content':loadTranslation(_0x4bd91b(0x1e2),_0x2055a8),'components':[]}),_0x41ec94[_0x4bd91b(0x208)]();}),_0x41ec94['on']('end',_0x22e742=>{const _0x43a8cb=_0x2bc01f;_0x22e742['size']===0x0&&_0x16d10c['channel'][_0x43a8cb(0x1f6)](loadTranslation('endtime',_0x2055a8));});}};function loadTranslation(_0xfdc48f,_0x395c9d){const _0x2755a8=_0x9215de,_0x480de5=path[_0x2755a8(0x1ec)](process[_0x2755a8(0x1de)](),_0x2755a8(0x205),_0x2755a8(0x1e1),_0x395c9d+_0x2755a8(0x1fd)),_0x408150=JSON[_0x2755a8(0x1eb)](fs[_0x2755a8(0x1f3)](_0x480de5,_0x2755a8(0x1e8)));return _0x408150[_0xfdc48f]||_0xfdc48f;}