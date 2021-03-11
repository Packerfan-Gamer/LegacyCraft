G.AddData({
name:'LegacyCraft',
author:'Packerfan-Gamer',
desc:'A new mod for Legacy.',
engineVersion:1,
manifest:'modManifest.js',
requires:['Default dataset*'],
sheets:{'imageSheet':'https://i.imgur.com/PS4jxIK.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{

	//Some items directly imported from LegacyCOOLMod
	//Berries and Plant Lore II:
	new G.Res({
		name:'berries',
		desc:'[berries] taste sweet, but spoil quickly.',
		icon:[1,1,'imageSheet'],
		turnToByContext:{'eat':{'health':0.05,'happiness':0.3},'decay':{'spoiled food':0.8}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});
	new G.Res({
		name:'juice',
		desc:'[juice] is a sweet drink made from [berries].',
		icon:[0,1,'imageSheet'],
		turnToByContext:{'eat':{'health':0.08,'happiness':0.2},'decay':{'spoiled food':0.2}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});
	
	new G.Tech({
		name:'plant lore II',
		desc:'@[gatherer]s can now find distinguish edible berries, and collect them.',
		icon:[2,1,'imageSheet'],
		cost:{'insight':10},
		req:{'plant lore':true},
	});
	
	//plant lore II Makes Gatherers pick berries
	G.getDict('grass').res['gather']['berries']=3;
	G.getDict('gatherer').effects.push({type:'gather',context:'gather',what:{'berries': 1},amount:1,max:1,req:{'plant lore II':true}});
	

	
	//Finally, we add a trait that amplifies the benefits of consuming hot sauce; it will take on average 20 years to appear once the conditions (knowing the "Hot sauce preparing" tech) is fulfilled.
	/*new G.Trait({
		name:'hot sauce madness',
		desc:'@your people appreciate [hot sauce] twice as much and will be twice as happy from consuming it.',
		icon:[1,1,'spicySheet'],
		chance:20,
		req:{'hot sauce preparing':true},
		effects:[
			{type:'function',func:function(){G.getDict('hot sauce').turnToByContext['eat']['happiness']=0.2;}},//this is a custom function executed when we gain the trait
		],
	});*/
	
	//There are many other ways of adding and changing content; refer to /data.js, the default dataset, if you want to see how everything is done in the base game. Good luck!
}
});
