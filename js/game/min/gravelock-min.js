$(function(){function e(){n.totalUnits=n.units.length;for(var e=0;e<n.totalUnits;e++)$("#units").append(0==e?t(e,!1):t(e,!0));setInterval(a,n.gameTick),r()}function t(e,t){var t=t?"hidden":"",a=n.units[e],r=a.desc?a.desc:"",i='<div class="col-4 '+t+'" id="level-'+e+'"><div class="col-12 game-unit"><h4>'+a.name+' <small class="value-'+e+'"></small></h4><p>'+r+'</p><div class="col-6"><h1 id="count-'+e+'" style="padding: 50px;">0</h1></div><div class="col-6 align-center"><img src="/img/gravelock/'+(e+1)+'.png" height="100px" alt="" /><h3><span id="ap-'+e+'">'+a.ap+'</span> - <span id="cd-'+e+'">'+a.cd+'</span> - <span id="hp-'+e+'">'+a.hp+'</span></h3></div><div class="form-element align-center"><button id="summon-'+e+'" data-level="'+e+'" class="btn">Summon '+a.shortName+' <span class="price">('+o(a.price,"","")+'g)</span></button><div class="col-12"><button id="xTimes-5-'+e+'" data-level="'+e+'" data-times="5" class="btn">x5 <span class="price">('+o(s(a.price,5),"","")+'g)</span></button><button id="xTimes-25-'+e+'" data-level="'+e+'" data-times="25" class="btn">x25 <span class="price">('+o(s(a.price,25),"","")+'g)</span></button><button id="xTimes-100-'+e+'" data-level="'+e+'" data-times="100" class="btn">x100 <span class="price">('+o(s(a.price,100),"","")+'g)</span></button></div><div class="align-center col-12" id="raw-'+e+'">Raw DPS</div></div></div></div>';return i}function a(){for(var e=0,t=0,a=n.gameTick/n.gameSpeed,o=0;o<n.totalUnits;o++)e+=n.units[o].ap/a/(n.units[o].cd/a)*n.units[o].count,t+=n.units[o].ap/n.units[o].cd*n.units[o].count;n.player.gold+=e/(n.player.idolHealth/a)*n.player.idolKillReward,n.player.goldSec=Math.round(t/n.player.idolHealth*n.player.idolKillReward),r()}function r(){var e=Math.round(n.player.gold),t=n.player.goldSec;$("#gold").text(o(e,"","g")+" "+o(t,"(","g/s)"));for(var a=0,r=0;r<n.totalUnits;r++){var i=n.units[r];$("#count-"+r).text(o(i.count,"","x"));var l=i.ap/i.cd*i.count;a+=l,$(".value-"+r).text(o(l,""," DPS")),$("#raw-"+r).text(i.ap/i.cd+" Raw DPS"),$("#ap-"+r).text(i.ap),$("#cd-"+r).text(i.cd),$("#hp-"+r).text(i.hp),$("#summon-"+r).find(".price").text(o(Math.round(i.price),"(","g)")),$("#xTimes-5-"+r).find(".price").text(o(Math.round(s(i.price,5)),"(","g)")),$("#xTimes-25-"+r).find(".price").text(o(Math.round(s(i.price,25)),"(","g)")),$("#xTimes-100-"+r).find(".price").text(o(Math.round(s(i.price,100)),"(","g)")),n.player.gold>=s(i.price,5)?$("#xTimes-5-"+r).show():$("#xTimes-5-"+r).hide(),n.player.gold>=s(i.price,25)?$("#xTimes-25-"+r).show():$("#xTimes-25-"+r).hide(),n.player.gold>=s(i.price,100)?$("#xTimes-100-"+r).show():$("#xTimes-100-"+r).hide(),n.player.gold>=i.price?($("#summon-"+r).addClass("success"),$("#summon-"+r).removeClass("danger")):($("#summon-"+r).removeClass("success"),$("#summon-"+r).addClass("danger")),n.player.gold>=s(i.price,5)?($("#xTimes-5-"+r).addClass("success"),$("#xTimes-5-"+r).removeClass("danger")):($("#xTimes-5-"+r).removeClass("success"),$("#xTimes-5-"+r).addClass("danger")),n.player.gold>=s(i.price,25)?($("#xTimes-25-"+r).addClass("success"),$("#xTimes-25-"+r).removeClass("danger")):($("#xTimes-25-"+r).removeClass("success"),$("#xTimes-25-"+r).addClass("danger")),n.player.gold>=s(i.price,100)?($("#xTimes-100-"+r).addClass("success"),$("#xTimes-100-"+r).removeClass("danger")):($("#xTimes-100-"+r).removeClass("success"),$("#xTimes-100-"+r).addClass("danger")),i.count>0&&$("#level-"+(r+1))&&$("#level-"+(r+1)).show()}$("#total_dps").text(o(a,""," DPS"))}function o(e,t,a){return e>Math.pow(10,43)?t+Math.round(e/Math.pow(10,42))+"Tr "+a:e>Math.pow(10,40)?t+Math.round(e/Math.pow(10,39))+"Du "+a:e>Math.pow(10,37)?t+Math.round(e/Math.pow(10,36))+"Un "+a:e>Math.pow(10,34)?t+Math.round(e/Math.pow(10,33))+"De "+a:e>Math.pow(10,31)?t+Math.round(e/Math.pow(10,30))+"No "+a:e>Math.pow(10,28)?t+Math.round(e/Math.pow(10,27))+"Oc "+a:e>Math.pow(10,25)?t+Math.round(e/Math.pow(10,24))+"Sp "+a:e>Math.pow(10,22)?t+Math.round(e/Math.pow(10,21))+"Sx "+a:e>Math.pow(10,19)?t+Math.round(e/Math.pow(10,18))+"Qi "+a:e>Math.pow(10,16)?t+Math.round(e/Math.pow(10,15))+"Qa "+a:e>Math.pow(10,13)?t+Math.round(e/Math.pow(10,12))+"t "+a:e>Math.pow(10,10)?t+Math.round(e/Math.pow(10,9))+"b "+a:e>Math.pow(10,7)?t+Math.round(e/Math.pow(10,6))+"m "+a:e>Math.pow(10,4)?t+Math.round(e/Math.pow(10,3))+"k "+a:t+e+a}function i(){n.priceMultiplyer=0;for(var e=0;e<n.totalUnits;e++)n.units[e].price=0}function s(e,t){lastp=e;for(var a=0;t>a;a++)e+=lastp*n.priceMultiplyer,lastP=e;return Math.round(e)}var n={gameTick:100,gameSpeed:1e3,priceMultiplyer:1.15,totalUnits:0,player:{level:0,gold:3,idol:0,goldSec:0,idolHealth:10,idolKillReward:20},units:[{name:"Gravelock Raider",shortName:"Raider",elderBoost:!0,tier1:0,tier2:1e3,tier3:3e3,price:3,ap:1,cd:2,hp:2,count:0,round:0},{name:"Gravelock Guard",shortName:"Guard",elderBoost:!0,tier1:1e3,tier2:3e3,tier3:9e3,price:18,ap:2,cd:2,hp:3,count:0,round:0},{name:"Gravelock Outcast",shortName:"Outcast",elderBoost:!0,tier1:3e3,tier2:9e3,tier3:27e3,price:108,ap:3,cd:2,hp:3,count:0,round:0},{name:"Lockling Brood",shortName:"Locklings",elderBoost:!0,tier1:6e3,tier2:18e3,tier3:54e3,price:648,ap:4,cd:1,hp:4,count:0,round:0},{name:"Gravelock Freak",shortName:"Freak",elderBoost:!0,tier1:6e3,tier2:18e3,tier3:54e3,price:3888,ap:3,cd:2,hp:6,count:0,round:0},{name:"Gravelock Elder",shortName:"Elder",tier1:6e3,tier2:18e3,tier3:54e3,price:23328,ap:3,cd:2,hp:5,count:0,round:0,desc:"Gives +1/0/1 to all gravelocks",effect:function(e){for(var t=0;t<n.totalUnits;t++){var a=n.units[t];a.elderBoost&&(a.ap+=e,a.hp+=e)}}},{name:"Uhu Longnose",shortName:"Uhu",elderBoost:!0,tier1:6e3,tier2:18e3,tier3:54e3,price:139968,ap:2,cd:2,hp:4,count:0,round:0},{name:"Snargl",shortName:"Snargl",tier1:6e3,tier2:18e3,tier3:54e3,price:839808,ap:4,cd:2,hp:5,count:0,round:0}]};e(),$("#debug").click(function(){i()}),$("[id*=summon-]").click(function(){var e=n.units[$(this).attr("data-level")];n.player.gold>=e.price&&(e.count++,n.player.gold-=e.price,e.price*=n.priceMultiplyer,e.effect&&"function"==typeof e.effect&&e.effect(1),$(this).find(".price").text(o(Math.round(e.price),"(","g)")),r())}),$("[id*=xTimes-]").click(function(){console.log(1);var e=n.units[$(this).attr("data-level")],t=$(this).attr("data-times"),a=s(e.price,t,"","");console.log(a+","+e.price),n.player.gold>=a&&(console.log(t),e.count+=parseInt(t),n.player.gold-=a,e.price*=Math.pow(n.priceMultiplyer,t),console.log(3),e.effect&&"function"==typeof e.effect&&e.effect(t),$(this).find(".price").text(o(s(e.price,t,"",""),"(","g)")),r())})});