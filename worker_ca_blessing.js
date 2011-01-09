/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, unique, deleteElement, sum, findInArray, findInObject, objectIndex, sortObject, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Blessing **********
* Automatically receive blessings
*/
var Blessing = new Worker('Blessing');
Blessing.data = Blessing.temp = null;

Blessing.defaults['castle_age'] = {
	pages:'oracle_demipower'
};

Blessing.option = {
	which:'Stamina'
};

Blessing.runtime = {
	when:0
};

Blessing.which = ['None', 'Energy', 'Attack', 'Defense', 'Health', 'Stamina'];
Blessing.display = [
    {
		id:'which',
		label:'Which',
		select:Blessing.which
    }
];

Blessing.setup = function() {
	if ('display' in this.option) {
		this.option._hide_status = !this.option.display;
		delete this.option.display;
	}
};

Blessing.init = function() {
	if (this.runtime.when) {
		this._remind((this.runtime.when - Date.now()) / 1000, 'blessing');
	}
};

Blessing.parse = function(change) {
	var result = $('div.results'), time;
	if (result.length) {
		time = result.text().regex(/Please come back in: ([0-9]+) hours and ([0-9]+) minutes/i);
		if (time && time.length) {
			this.runtime.when = Date.now() + (((time[0] * 60) + time[1] + 1) * 60000);
		} else if (result.text().match(/You have paid tribute to/i)) {
			this.runtime.when = Date.now() + 86460000; // 24 hours and 1 minute
		}
		if (this.runtime.when) {
			this._remind((this.runtime.when - Date.now()) / 1000, 'blessing');
		}
	}
	return false;
};

Blessing.update = function(event){
    var d, demi;
     if (this.option.which && this.option.which !== 'None'){
         d = new Date(this.runtime.when);
         switch(this.option.which){
             case 'Energy':
                 demi = '<img class="golem-image" src="'+getImage('symbol_1')+'"> Ambrosia (' + this.option.which + ')';
                 break;
             case 'Attack':
                 demi = '<img class="golem-image" src="'+getImage('symbol_2')+'"> Malekus (' + this.option.which + ')';
                 break;
             case 'Defense':
                 demi = '<img class="golem-image" src="'+getImage('symbol_3')+'"> Corvintheus (' + this.option.which + ')';
                 break;
             case 'Health':
                 demi = '<img class="golem-image" src="'+getImage('symbol_4')+'"> Aurora (' + this.option.which + ')';
                 break;
             case 'Stamina':
                 demi = '<img class="golem-image" src="'+getImage('symbol_5')+'"> Azeron (' + this.option.which + ')';
                 break;
             default:
                 demi = 'Unknown';
                 break;
         }
         Dashboard.status(this, '<span title="Next Blessing">' + 'Next Blessing performed on ' + d.format('l g:i a') + ' to ' + demi + ' </span>');
		 this.set(['option','_sleep'], Date.now() < this.runtime.when);
     } else {
         Dashboard.status(this);
 		 this.set(['option','_sleep'], true);
    }
};

Blessing.work = function(state) {
	if (!state || !Page.to('oracle_demipower')) {
		return QUEUE_CONTINUE;
	}
	Page.click('#app'+APPID+'_symbols_form_'+this.which.indexOf(this.option.which)+' input.imgButton');
	return QUEUE_RELEASE;
};
