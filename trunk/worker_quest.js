/********** Worker.Quest **********
* Completes quests with a choice of general
*/
// Should also look for quests_quest but that should never be used unless there's a new area
var Quest = new Worker('Quest', 'quests_quest1 quests_quest2 quests_quest3 quests_quest4 quests_quest5 quests_quest6 quests_quest7 quests_demiquests quests_atlantis', {data:true, option:true});
Quest.option = {
	general: 'Under Level 4',
	what: 'Influence',
	unique: true,
	monster:true,
	best:null,
	energy:0
};
Quest.land = ['Land of Fire', 'Land of Earth', 'Land of Mist', 'Land of Water', 'Demon Realm', 'Undead Realm', 'Underworld'];
Quest.area = {quest:'Quests', demiquest:'Demi Quests', atlantis:'Atlantis'};
Quest.current = null;
Quest.display = [
	{
		id:'general',
		label:'General',
		select:['any', 'Under Level 4', 'Influence']
	},{
		id:'what',
		label:'Quest for',
		select:'quest_reward'
	},{
		id:'unique',
		label:'Get Unique Items First',
		checkbox:true
	},{
		id:'monster',
		label:'Fortify Monsters First',
		checkbox:true
	}
];

Quest.parse = function(change) {
	var quest = this.data, area, land = null;
	if (Page.page === 'quests_quest') {
		return false; // This is if we're looking at a page we don't have access to yet...
	} else if (Page.page === 'quests_demiquests') {
		area = 'demiquest';
	} else if (Page.page === 'quests_atlantis') {
		area = 'atlantis';
	} else {
		area = 'quest';
		land = Page.page.regex(/quests_quest([0-9]+)/i) - 1;
	}
	$('div.quests_background,div.quests_background_sub,div.quests_background_special').each(function(i,el){
		var name, level, influence, reward, units, energy, tmp, type = 0;
		if ($(el).hasClass('quests_background_sub')) { // Subquest
			name = $('.quest_sub_title', el).text().trim();
			reward = $('.qd_2_sub', el).text().replace(/[^0-9$]/g, '').regex(/^([0-9]+)\$([0-9]+)\$([0-9]+)$/);
			energy = $('.qd_3_sub', el).text().regex(/([0-9]+)/);
			level = $('.quest_sub_progress', el).text().regex(/LEVEL ([0-9]+)/i);
			influence = $('.quest_sub_progress', el).text().regex(/INFLUENCE: ([0-9]+)%/i);
			type = 2;
		} else {
			name = $('.qd_1 b', el).text().trim();
			reward = $('.qd_2', el).text().replace(/[^0-9$]/g, '').regex(/^([0-9]+)\$([0-9]+)\$([0-9]+)$/);
			energy = $('.quest_req b', el).text().regex(/([0-9]+)/);
			if ($(el).hasClass('quests_background')) { // Main quest
				level = $('.quest_progress', el).text().regex(/LEVEL ([0-9]+)/i);
				influence = $('.quest_progress', el).text().regex(/INFLUENCE: ([0-9]+)%/i);
				type = 1;
			} else { // Special Quest
				type = 3;
			}
		}
		if (!name) {
			return;
		}
		quest[name] = {};
		quest[name].area = area;
		if (typeof land === 'number') {
			quest[name].land = land;
		}
		if (typeof influence === 'number') {
			quest[name].level = (level || 0);
			quest[name].influence = influence;
		}
		quest[name].exp = reward.shift();
		quest[name].reward = (reward[0] + reward[1]) / 2;
		quest[name].energy = energy;
		if (type === 2) { // Main quest has some extra stuff
			return;
		}
		if (type === 3) { // Special quests create unique items
			quest[name].unique = true;
		}
		tmp = $('.qd_1 img', el).last();
		if (tmp.length && tmp.attr('title')) {
			quest[name].item	= tmp.attr('title').trim();
			quest[name].itemimg	= tmp.attr('src').filepart();
		}
		units = {};
		$('.quest_req > div > div > div', el).each(function(i,el){
			var title = $('img', el).attr('title');
			units[title] = $(el).text().regex(/([0-9]+)/);
		});
		if (units.length) {
			quest[name].units = units;
		}
		tmp = $('.quest_act_gen img', el);
		if (tmp.length && tmp.attr('title')) {
			quest[name].general = tmp.attr('title');
		}
	});
	return false;
};

Quest.update = function(type) {
	// First let's update the Quest dropdown list(s)...
	var i, j, best = null, list = [];
	for (i in this.data) {
		if (this.data[i].item && !this.data[i].unique) {
			list.push(this.data[i].item);
		}
	}
	list = ['Nothing', 'Influence', 'Experience', 'Cash'].concat(unique(list).sort());
	$('select.golem_quest_reward').each(function(a,el){
		$(el).empty();
		var i, tmp = $(el).attr('id').slice(PREFIX.length).regex(/([^_]*)_(.*)/i), value = tmp ? WorkerByName(tmp[0]).option[tmp[1]] : null;
		for (i=0; i<list.length; i++) {
			$(el).append('<option value="'+list[i]+'"'+(list[i]===value ? ' selected' : '')+'>'+list[i]+'</value>');
		}
	});
	// Now choose the next quest...
	if (this.option.unique) {
		for (i in this.data) {
			if (this.data[i].unique && !Alchemy.get('ingredients.'+this.data[i].itemimg) && (!best || this.data[i].energy < this.data[best].energy)) {
				best = i;
			}
		}
	}
	if (!best && this.option.what !== 'Nothing') {
		for (i in this.data) {
			if ((this.option.what === 'Influence' && typeof this.data[i].influence !== 'undefined' && this.data[i].influence < 100 && (!best || this.data[i].energy < this.data[best].energy))
			|| (this.option.what === 'Experience' && (!best || (this.data[i].energy / this.data[i].exp) < (this.data[best].energy / this.data[best].exp)))
			|| (this.option.what === 'Cash' && (!best || (this.data[i].energy / this.data[i].reward) < (this.data[best].energy / this.data[best].reward)))
			|| (this.option.what !== 'Influence' && this.option.what !== 'Experience' && this.option.what !== 'Cash' && this.data[i].item === this.option.what && (!best || this.data[i].energy < this.data[best].energy))) {
				best = i;
			}
		}
	}
	if (best !== this.option.best) {
		this.option.best = best;
		if (best) {
			this.option.energy = this.data[best].energy;
			debug('Quest: Wanting to perform - ' + best + ' (energy: ' + this.option.energy + ')');
			Dashboard.status(this, best + ' (energy: ' + this.option.energy + ')');
		} else {
			Dashboard.status(this);
		}
	}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	Monster._load();
	if (this.option.monster) {
		for (i in Monster.data) {
			for (j in Monster.data[i]) {
				if (Monster.data[i][j].state === 'engage' && typeof Monster.data[i][j].defense === 'number' && Monster.data[i][j].defense <= Monster.option.fortify) {
					return false;
				}
			}
		}
	}
	Dashboard.change(this);
};

Quest.work = function(state) {
	if (!this.option.best || this.option.energy > Queue.burn.energy) {
		return false;
	}
	if (!state) {
		return true;
	}
	var i, j, best = this.option.best;
	if (this.data[best].general) {
		if (!Generals.to(this.data[best].general)) 
		{
			return true;
		}
	} else if (!Generals.to(Generals.best(this.option.general))) {
		return true;
	}
	switch(this.data[best].area) {
		case 'quest':
			if (!Page.to('quests_quest' + (this.data[best].land + 1))) {
				return true;
			}
			break;
		case 'demiquest':
			if (!Page.to('quests_demiquests')) {
				return true;
			}
			break;
		case 'atlantis':
			if (!Page.to('quests_atlantis')) {
				return true;
			}
			break;
		default:
			debug('Quest: Can\'t get to quest area!');
			return false;
	}
	debug('Quest: Performing - ' + best + ' (energy: ' + this.data[best].energy + ')');
	if (!Page.click('div.action[title^="' + best + '"] input[type="image"]')) {
		Page.reload(); // Shouldn't happen
	}
	if (this.option.unique && this.data[best].unique) {
		Page.to('keep_alchemy');
//		Page.to('quests_quest' + (this.data[best].land + 2)); Really ought to check for new quests - but also need to not repeat needlessly
	}
	return true;
};

Quest.order = [];
Quest.dashboard = function(sort, rev) {
	this._load();
	var i, o, list = [], output;
	if (typeof sort === 'undefined') {
		Quest.order = [];
		for (i in Quest.data) {
			Quest.order.push(i);
		}
		sort = 1; // Default = sort by name
	}
	function getValue(q){
		switch(sort) {
			case 0:	// general
				return Quest.data[q].general || 'zzz';
			case 1: // name
				return q;
			case 2: // area
				return typeof Quest.data[q].land === 'number' && typeof Quest.land[Quest.data[q].land] !== 'undefined' ? Quest.land[Quest.data[q].land] : Quest.area[Quest.data[q].area];
			case 3: // level
				return (typeof Quest.data[q].level !== 'undefined' ? Quest.data[q].level : -1) * 100 + (Quest.data[q].influence || 0);
			case 4: // energy
				return Quest.data[q].energy;
			case 5: // exp
				return Quest.data[q].exp / Quest.data[q].energy;
			case 6: // reward
				return Quest.data[q].reward / Quest.data[q].energy;
			case 7: // item
				return Quest.data[q].item || 'zzz';
		}
		return 0; // unknown
	}
	Quest.order.sort(function(a,b) {
		var aa = getValue(a), bb = getValue(b);
		if (typeof aa === 'string' || typeof bb === 'string') {
			return (rev ? (bb || '') > (aa || '') : (bb || '') < (aa || ''));
		}
		return (rev ? (aa || 0) - (bb || 0) : (bb || 0) - (aa || 0));
	});
	list.push('<table cellspacing="0" style="width:100%"><thead><th>General</th><th>Name</th><th>Area</th><th>Level</th><th>Energy</th><th>@&nbsp;Exp</th><th>@&nbsp;Reward</th><th>Item</th></tr></thead><tbody>');
	for (o=0; o<Quest.order.length; o++) {
		i = Quest.order[o];
		output = [];
		output.push(Generals.data[Quest.data[i].general] ? '<img style="width:25px;height:25px;" src="' + imagepath + Generals.data[Quest.data[i].general].img+'" alt="'+Quest.data[i].general+'" title="'+Quest.data[i].general+'">' : '');
		output.push(i);
		output.push(typeof Quest.data[i].land === 'number' ? Quest.land[Quest.data[i].land].replace(' ','&nbsp;') : Quest.area[Quest.data[i].area].replace(' ','&nbsp;'));
		output.push(typeof Quest.data[i].level !== 'undefined' ? Quest.data[i].level +'&nbsp;(' + Quest.data[i].influence +'%)' : '');
		output.push(Quest.data[i].energy);
		output.push('<span title="' + Quest.data[i].exp + ' total, ' + (Quest.data[i].exp / Quest.data[i].energy * 12).round(2) + ' per hour">' + (Quest.data[i].exp / Quest.data[i].energy).round(2) + '</span>');
		output.push('<span title="$' + addCommas(Quest.data[i].reward) + ' total, $' + addCommas((Quest.data[i].reward / Quest.data[i].energy * 12).round()) + ' per hour">$' + addCommas((Quest.data[i].reward / Quest.data[i].energy).round()) + '</span>');
		output.push(Quest.data[i].itemimg ? '<img style="width:25px;height:25px;" src="' + imagepath + Quest.data[i].itemimg+'" alt="'+Quest.data[i].item+'" title="'+Quest.data[i].item+'">' : '');
		list.push('<tr style="height:25px;"><td>' + output.join('</td><td>') + '</td></tr>');
	}
	list.push('</tbody></table>');
	$('#golem-dashboard-Quest').html(list.join(''));
	$('#golem-dashboard-Quest thead th').css('cursor', 'pointer').click(function(event){
		Quest.dashboard($(this).prevAll().length, $(this).attr('name')==='sort');
	});
	$('#golem-dashboard-Quest tbody tr td:nth-child(2)').css('text-align', 'left');
	if (typeof sort !== 'undefined') {
		$('#golem-dashboard-Quest thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	}
};

