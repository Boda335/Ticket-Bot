function _0x26ac(){const _0x15e4e7=['settings.json','${language.toUpperCase()}','translations','exports','utf-8','data','reply','1668LSnZMC','getString','setlang','mkdirSync','toUpperCase','5823mRQAjL','replace','904148gplKBr','4492070DWmzAu','Set\x20the\x20language\x20for\x20the\x20server.','.json','25613hltQIn','writeFileSync','29420WJghbV','cwd','addChoices','Choose\x20a\x20language','French','language','72496pvGosZ','discord.js','7724pUQHHV','join','addStringOption','Spanish','langupdate','1202514AMtEgF','settingsNotFound','existsSync','stringify','setName','setDescription','readFileSync','parse','582YgTKKK'];_0x26ac=function(){return _0x15e4e7;};return _0x26ac();}const _0x49665f=_0x1f8f;(function(_0x549a99,_0x2e2592){const _0x3f7dd3=_0x1f8f,_0x1b628e=_0x549a99();while(!![]){try{const _0x55ffae=-parseInt(_0x3f7dd3(0x100))/0x1+-parseInt(_0x3f7dd3(0xe9))/0x2+-parseInt(_0x3f7dd3(0xf9))/0x3*(parseInt(_0x3f7dd3(0xe4))/0x4)+parseInt(_0x3f7dd3(0xd7))/0x5+-parseInt(_0x3f7dd3(0xf1))/0x6*(-parseInt(_0x3f7dd3(0xda))/0x7)+-parseInt(_0x3f7dd3(0xe2))/0x8+-parseInt(_0x3f7dd3(0xfe))/0x9*(-parseInt(_0x3f7dd3(0xdc))/0xa);if(_0x55ffae===_0x2e2592)break;else _0x1b628e['push'](_0x1b628e['shift']());}catch(_0x4df379){_0x1b628e['push'](_0x1b628e['shift']());}}}(_0x26ac,0x8ad84));const {SlashCommandBuilder}=require(_0x49665f(0xe3)),fs=require('fs'),path=require('path');module[_0x49665f(0xf5)]={'data':new SlashCommandBuilder()[_0x49665f(0xed)](_0x49665f(0xfb))[_0x49665f(0xee)](_0x49665f(0xd8))[_0x49665f(0xe6)](_0xa8157e=>_0xa8157e[_0x49665f(0xed)]('language')[_0x49665f(0xee)](_0x49665f(0xdf))[_0x49665f(0xde)]({'name':'Arabic','value':'ar'},{'name':_0x49665f(0xe0),'value':'fr'},{'name':'English','value':'en'},{'name':_0x49665f(0xe7),'value':'es'})),async 'execute'(_0x39fac4){const _0x4066e8=_0x49665f,_0x9c32c0=path[_0x4066e8(0xe5)](process[_0x4066e8(0xdd)](),'data',_0x4066e8(0xf2)),_0x2bd768=path[_0x4066e8(0xe5)](process['cwd'](),_0x4066e8(0xf7),_0x4066e8(0xf4));if(!fs[_0x4066e8(0xeb)](_0x9c32c0)){await _0x39fac4[_0x4066e8(0xf8)]({'content':loadTranslation(_0x4066e8(0xea),'en'),'ephemeral':!![]});return;}const _0x3528bc=_0x39fac4['options'][_0x4066e8(0xfa)](_0x4066e8(0xe1))||'ar',_0x16c41f=path['join'](_0x2bd768,_0x3528bc+_0x4066e8(0xd9)),_0x72a007=JSON[_0x4066e8(0xf0)](fs[_0x4066e8(0xef)](_0x16c41f,_0x4066e8(0xf6))),_0x3bfe26=_0x39fac4['guild']['id'],_0x25239c=path[_0x4066e8(0xe5)](process['cwd'](),_0x4066e8(0xf7)),_0x59ff6a=path['join'](_0x25239c,'settings.json');!fs[_0x4066e8(0xeb)](_0x25239c)&&fs[_0x4066e8(0xfc)](_0x25239c);let _0x2e9021={};if(fs[_0x4066e8(0xeb)](_0x59ff6a)){const _0x4218fc=fs['readFileSync'](_0x59ff6a,_0x4066e8(0xf6));_0x2e9021=JSON['parse'](_0x4218fc);}!_0x2e9021[_0x3bfe26]&&(_0x2e9021[_0x3bfe26]={}),_0x2e9021[_0x3bfe26]['language']=_0x3528bc,fs[_0x4066e8(0xdb)](_0x59ff6a,JSON[_0x4066e8(0xec)](_0x2e9021,null,0x2)),await _0x39fac4[_0x4066e8(0xf8)]({'content':loadTranslation(_0x4066e8(0xe8),_0x3528bc)[_0x4066e8(0xff)](_0x4066e8(0xf3),''+_0x3528bc[_0x4066e8(0xfd)]()),'ephemeral':!![]});}};function _0x1f8f(_0x37697b,_0x1b3a95){const _0x26ac87=_0x26ac();return _0x1f8f=function(_0x1f8fd3,_0x3da010){_0x1f8fd3=_0x1f8fd3-0xd7;let _0x73491a=_0x26ac87[_0x1f8fd3];return _0x73491a;},_0x1f8f(_0x37697b,_0x1b3a95);}function loadTranslation(_0xa827b8,_0x4c6255){const _0xf544d9=_0x49665f,_0x202444=path['join'](process['cwd'](),'data',_0xf544d9(0xf4),_0x4c6255+_0xf544d9(0xd9)),_0x1e6397=JSON[_0xf544d9(0xf0)](fs[_0xf544d9(0xef)](_0x202444,_0xf544d9(0xf6)));return _0x1e6397[_0xa827b8]||_0xa827b8;}