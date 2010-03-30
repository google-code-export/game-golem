// ==UserScript==
// @name		Rycochet's Castle Age Golem
// @namespace	golem
// @description	Auto player for castle age game
// @license		GNU Lesser General Public License; http://www.gnu.org/licenses/lgpl.html
// @version		30.3
// @include		http*://apps.*facebook.com/castle_age/*
// @require		http://cloutman.com/jquery-latest.min.js
// @require		http://cloutman.com/jquery-ui-latest.min.js
// ==/UserScript==
// 
// For the source code please check the sourse repository
// - http://code.google.com/p/game-golem/
// 
// For the unshrunk Work In Progress version (which may introduce new bugs)
// - http://game-golem.googlecode.com/svn/trunk/_normal.user.js
// User changeable
var show_debug = true;

// Shouldn't touch
var VERSION = 30.3;
var script_started = Date.now();

// Automatically filled
var userID = 0;
var imagepath = '';

// Decide which facebook app we're in...
var applications = {
	'castle_age':['46755028429', 'Castle Age']
};

if (window.location.hostname === 'apps.facebook.com' || window.location.hostname === 'apps.new.facebook.com') {
	for (var i in applications) {
		if (window.location.pathname.indexOf(i) === 1) {
			var APP = i;
			var APPID = applications[i][0];
			var APPNAME = applications[i][1];
			var PREFIX = 'golem'+APPID+'_';
			break;
		}
	}
}

var log = function(txt) {
	console.log(txt);
};

var debug = function(txt) {
	if (show_debug) {
		console.log(txt);
	}
};

if (typeof unsafeWindow === 'undefined') {
	unsafeWindow = window;
}

/********** main() **********
* Runs when the page has finished loading, but the external data might still be coming in
*/
if (typeof APP !== 'undefined') {
	$(document).ready(function() {
		var i;
		userID = $('head').html().regex(/user:([0-9]+),/i);
		imagepath = $('#app'+APPID+'_globalContainer img:eq(0)').attr('src').pathpart();
		do_css();
		Page.identify();
		for (i=0; i<Workers.length; i++) {
			Workers[i]._load();
		}
		for (i=0; i<Workers.length; i++) {
			Workers[i]._init();
		}
		for (i=0; i<Workers.length; i++) {
			Workers[i]._update();
			Workers[i]._flush();
		}
		Page.parse_all(); // Call once to get the ball rolling...
	});
}

/********** CSS code **********
* Gets pushed into the <head> on loading
*/
function do_css(){
$('head').append("<style type=\"text/css\">\
.red { background: red !important; }\
.golem-config { float: none; margin-right: 0; }\
.golem-config > div { position: static; width: 196px; margin: 0; padding: 0; overflow: hidden; overflow-y: auto; }\
.golem-config #golem_fixed { float:right; margin:-2px; width:16px; height: 16px; background: url('data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%0FPLTE%DE%DE%DE%DD%DD%DDcccUUU%00%00%00%23%06%7B1%00%00%00%05tRNS%FF%FF%FF%FF%00%FB%B6%0ES%00%00%00.IDATx%DAb%60A%03%0Cd%0B03%81%18LH%02%10%80%2C%C0%84%24%00%96d%C2%A7%02%AB%19L%8C%A8%B6P%C3%E9%08%00%10%60%00%00z%03%C7%24%170%91%00%00%00%00IEND%AEB%60%82') no-repeat; }\
.golem-config-fixed { float: right; margin-right: 200px; }\
.golem-config-fixed > div { position: fixed; }\
.golem-config-fixed #golem_fixed { background: url('data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%0FPLTE%DE%DE%DE%DD%DD%DDcccUUU%00%00%00%23%06%7B1%00%00%00%05tRNS%FF%FF%FF%FF%00%FB%B6%0ES%00%00%005IDATx%DAb%60A%03%0C%C4%0901%83%00%13%92%0A%B0%00%0B)%02%8C%CCLLL%CC%0Cx%0CefF%E8%81%B9%83%19%DDa%84%05H%F0%1C%40%80%01%00%FE9%03%C7%D4%8CU%A3%00%00%00%00IEND%AEB%60%82') no-repeat; }\
#golem-dashboard { position: absolute; width: 600px; height: 185px; margin: 0; border-left: 1px solid black; border-right:1px solid black; overflow: hidden; background: white; z-index: 1; }\
#golem-dashboard thead th { cursor: pointer }\
#golem-dashboard tbody tr:nth-child(odd) { background: #eeeeee; }\
#golem-dashboard tbody th { text-align: left; font-weight: normal; }\
#golem-dashboard td, #golem-dashboard th { margin: 2px; text-align: center; padding: 0 8px; }\
#golem-dashboard > div { height: 163px; overflow-y: scroll; border-top: 1px solid #d3d3d3; }\
#golem-dashboard > div > div { padding: 2px; }\
table.golem-graph { height: 100px }\
table.golem-graph tbody th { text-align: right; max-width: 75px; border-right: 1px solid #cccccc; }\
table.golem-graph tbody th div { line-height: 60px; height: 60px; }\
table.golem-graph tbody th div:first-child, table.golem-graph tbody th div:last-child { line-height: 20px; height: 20px; }\
table.golem-graph tbody td { margin: 0; padding: 0 !important; vertical-align: bottom; width: 5px; border-right: 1px solid white; }\
table.golem-graph tbody td:nth-child(12n+1) { border-right: 1px solid #cccccc; }\
table.golem-graph tbody td div { margin: 0; padding: 0; background: #00aa00; width: 5px; border-top: 1px solid blue; }\
table.golem-graph tbody td div:last-child { background: #00ff00; }\
.golem-button, .golem-button-active { border: 1px solid #d3d3d3; background: #e6e6e6 url(http://cloutman.com/css/base/images/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x; display: inline-block; cursor: pointer; margin-left: 1px; margin-right: 1px; font-weight: normal; font-size: 13px; color: #555555; padding: 2px 2px 2px 2px; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; }\
.golem-button:hover, .golem-button-active { border: 1px solid #aaaaaa; background: #dadada url(http://cloutman.com/css/base/images/ui-bg_glass_75_dadada_1x400.png) 50% 50% repeat-x; }\
img.golem-button, img.golem-button-active { margin-bottom: -2px }\
.golem-tab-header { position: relative; top: 1px; border: 1px solid #d3d3d3; display: inline-block; cursor: pointer; margin-left: 1px; margin-right: 1px; background: #e6e6e6 url(http://cloutman.com/css/base/images/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #555555; padding: 2px 2px 1px 2px; -moz-border-radius-topleft: 3px; -webkit-border-top-left-radius: 3px; border-top-left-radius: 3px; -moz-border-radius-topright: 3px; -webkit-border-top-right-radius: 3px; border-top-right-radius: 3px; }\
.golem-tab-header-active { border: 1px solid #aaaaaa; border-bottom: 0 !important; padding: 2px; background: #dadada url(http://cloutman.com/css/base/images/ui-bg_glass_75_dadada_1x400.png) 50% 50% repeat-x; }\
.golem-title { padding: 4px; overflow: hidden; border-bottom: 1px solid #aaaaaa; background: #cccccc url(http://cloutman.com/css/base/images/ui-bg_highlight-soft_75_cccccc_1x100.png) 50% 50% repeat-x; color: #222222; font-weight: bold; }\
.golem-panel > .golem-panel-header, .golem-panel > * > .golem-panel-header { border: 1px solid #d3d3d3; cursor: pointer; margin-top: 1px; background: #e6e6e6 url(http://cloutman.com/css/base/images/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #555555; padding: 2px 2px 2px 2px; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; }\
.golem-panel > .golem-panel-content, .golem-panel > * > .golem-panel-content { border: 1px solid #aaaaaa; border-top: 0 !important; padding: 2px 6px; background: #ffffff url(http://cloutman.com/css/base/images/ui-bg_glass_65_ffffff_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #212121; display: none; -moz-border-radius-bottomleft: 3px; -webkit-border-bottom-left-radius: 3px; border-bottom-left-radius: 3px; -moz-border-radius-bottomright: 3px; -webkit-border-bottom-right-radius: 3px; border-bottom-right-radius: 3px; }\
.golem-panel-show > .golem-panel-header, .golem-panel-show > * > .golem-panel-header { border: 1px solid #aaaaaa; border-bottom: 0 !important; background: #dadada url(http://cloutman.com/css/base/images/ui-bg_glass_75_dadada_1x400.png) 50% 50% repeat-x; -moz-border-radius-bottomleft: 0 !important; -webkit-border-bottom-left-radius: 0 !important; border-bottom-left-radius: 0 !important; -moz-border-radius-bottomright: 0 !important; -webkit-border-bottom-right-radius: 0 !important; border-bottom-right-radius: 0 !important; }\
.golem-panel-show > .golem-panel-content, .golem-panel-show > * > .golem-panel-content { display: block; }\
.golem-panel-sortable .golem-lock { display: none; }\
.golem-panel .golem-panel-header .golem-icon { float: left; width: 16px; height: 16px; background: url('data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%06PLTEUUU%00%00%00%F5%04%9F%A0%00%00%00%02tRNS%FF%00%E5%B70J%00%00%00%22IDATx%DAb%60D%03%0C%D4%13%60%C0%10%60%C0%10%60%C0%10%60%20%A4%82%90-%149%1D%20%C0%00%81%0E%00%F1%DE%25%95%BE%00%00%00%00IEND%AEB%60%82') no-repeat; }\
.golem-panel .golem-panel-header .golem-lock { float: right; width: 16px; height: 16px; background: url('data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%06PLTEUUU%00%00%00%F5%04%9F%A0%00%00%00%02tRNS%FF%00%E5%B70J%00%00%001IDATx%DAb%60D%03%0CD%0B000%A0%0800%C0D%E0%02%8C(%02%0C%0Cp%25%B8%05%18%09%0A%A0j%C1%B4%96%1C%BF%C0%01%40%80%01%00n%11%00%CF%7D%2Bk%9B%00%00%00%00IEND%AEB%60%82') no-repeat;}\
.golem-panel-show .golem-panel-header .golem-icon { float: left; width: 16px; height: 16px; background: url('data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%06PLTEUUU%00%00%00%F5%04%9F%A0%00%00%00%02tRNS%FF%00%E5%B70J%00%00%00%22IDATx%DAb%60D%03%0C4%13%60%80%00%24%15%08%3EL%0B%9C%CF%88N%D3%D0a%C8%00%20%C0%00%7F%DE%00%F1%CCc%A6b%00%00%00%00IEND%AEB%60%82') no-repeat; }\
</style>");
}
// Utility functions

// Prototypes to ease functionality

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, '');
};

String.prototype.filepart = function() {
	var x = this.lastIndexOf('/');
	if (x >= 0) {
		return this.substr(x+1);
	}
	return this;
};

String.prototype.pathpart = function() {
	var x = this.lastIndexOf('/');
	if (x >= 0) {
		return this.substr(0, x+1);
	}
	return this;
};

String.prototype.regex = function(r) {
	var a = this.match(r), i;
	if (a) {
		a.shift();
		for (i=0; i<a.length; i++) {
			if (a[i] && a[i].search(/^[-+]?[0-9]+\.?[0-9]*$/) >= 0) {
				a[i] = parseFloat(a[i]);
			}
		}
		if (a.length===1) {
			return a[0];
		}
	}
	return a;
};

String.prototype.toNumber = function() {
	return parseFloat(this);
};

String.prototype.parseTimer = function() {
	var a = this.split(':'), b = 0, i;
	for (i=0; i<a.length; i++) {
		b = b * 60 + parseInt(a[i],10);
	}
	if (isNaN(b)) {
		b = 9999;
	}
	return b;
};

Number.prototype.round = function(dec) {
	return result = Math.round(this*Math.pow(10,(dec||0))) / Math.pow(10,(dec||0));
}

Math.range = function(min, num, max) {
	return Math.max(min, Math.min(num, max));
}

//Array.prototype.unique = function() { var o = {}, i, l = this.length, r = []; for(i=0; i<l;i++) o[this[i]] = this[i]; for(i in o) r.push(o[i]); return r; };
//Array.prototype.inArray = function(value) {for (var i in this) if (this[i] === value) return true;return false;};

var makeTimer = function(sec) {
	var h = Math.floor(sec / 3600), m = Math.floor(sec / 60) % 60, s = Math.floor(sec % 60);
	return (h ? h+':'+(m>9 ? m : '0'+m) : m) + ':' + (s>9 ? s : '0'+s);
};

var WorkerByName = function(name) { // Get worker object by Worker.name
	for (var i=0; i<Workers.length; i++) {
		if (Workers[i].name === name) {
			return Workers[i];
		}
	}
	return null;
};

var WorkerById = function(id) { // Get worker object by panel id
	for (var i=0; i<Workers.length; i++) {
		if (Workers[i].id === id) {
			return Workers[i];
		}
	}
	return null;
};

var Divisor = function(number) { // Find a "nice" value that goes into number up to 20 times
	var num = number, step = 1;
	if (num < 20) {
		return 1;
	}
	while (num > 100) {
		num /= 10;
		step *= 10;
	}
	num -= num % 5;
	if ((number / step) > 40) {
		step *= 5;
	} else if ((number / step) > 20) {
		step *= 2.5;
	}
	return step;
};

var length = function(obj) { // Find the number of entries in an object (also works on arrays)
	var l = 0, i;
	if (typeof obj === 'object') {
		for(i in obj) {
			l++;
		}
	} else if (typeof obj === 'array') {
		l = obj.length;
	}
	return l;
};

var unique = function (a) { // Return an array with no duplicates
	var o = {}, i, l = a.length, r = [];
	for(i = 0; i < l; i++) {
		o[a[i]] = a[i];
	}
	for(i in o) {
		r.push(o[i]);
	}
	return r;
};

var addCommas = function(s) { // Adds commas into a string, ignore any number formatting
	var a=s.toString(), r=new RegExp('(-?[0-9]+)([0-9]{3})');
	while(r.test(a)) {
		a = a.replace(r, '$1,$2');
	}
	return a;
};

var findInArray = function(list, value) {
	if (typeof list === 'array' || typeof list === 'object') {
		for (var i in list) {
			if (list[i] === value) {
				return true;
			}
		}
	}
	return false;
};

var sortObject = function(object, sortfunc) {
	var list = [];
	for (i in object) {
		list.push(i);
	}
	list.sort(sortfunc);
	return list;
}

var getAttDefList = [];
var getAttDef = function(list, unitfunc, x, count, user) { // Find total att(ack) or def(ense) value from a list of objects (with .att and .def)
	var units = [], attack = 0, defend = 0, x2 = (x==='att'?'def':'att'), i, own;
	if (unitfunc) {
		for (i in list) {
			unitfunc(units, i, list);
		}
	} else {
		units = getAttDefList;
	}
	units.sort(function(a,b) {
		return (list[b][x] + (0.7 * list[b][x2])) - (list[a][x] + (0.7 * list[a][x2]));
	});
	for (i=0; i<units.length; i++) {
		own = typeof list[units[i]].own === 'number' ? list[units[i]].own : 1;
		if (user) {
			if (Math.min(count, own) > 0) {
//				debug('Using: '+Math.min(count, own)+' x '+units[i]+' = '+list[units[i]].toSource());
				if (!list[units[i]].use) {
					list[units[i]].use = {};
				}
				list[units[i]].use[(user+'_'+x)] = Math.min(count, own);
			} else if (list[units[i]].use) {
				delete list[units[i]].use[user+'_'+x];
				if (!length(list[units[i]].use)) {
					delete list[units[i]].use;
				}
			}
		}
		if (count <= 0) {break;}
		own = Math.min(count, own);
		attack += own * list[units[i]].att;
		defend += own * list[units[i]].def;
		count -= own;
	}
	getAttDefList = units;
	return (x==='att'?attack:(0.7*attack)) + (x==='def'?defend:(0.7*defend));
};

var tr = function(list, html, attr) {
	list.push('<tr' + (attr ? ' ' + attr : '') + '>' + html + '</tr>');
}

var th = function(list, html, attr) {
	list.push('<th' + (attr ? ' ' + attr : '') + '>' + html + '</th>');
}

var td = function(list, html, attr) {
	list.push('<td' + (attr ? ' ' + attr : '') + '>' + html + '</td>');
}

if (typeof GM_getValue !== 'undefined') {
	var setItem = function(n,v){GM_setValue(n, v);}
	var getItem = function(n){return GM_getValue(n);}
} else {
	if (typeof localStorage !== 'undefined') {
		var setItem = function(n,v){localStorage.setItem('golem.' + APP + n, v);}
		var getItem = function(n){return localStorage.getItem('golem.' + APP + n);}
	} else if (typeof window.localStorage !== 'undefined') {
		var setItem = function(n,v){window.localStorage.setItem('golem.' + APP + n, v);}
		var getItem = function(n){return window.localStorage.getItem('golem.' + APP + n);}
	} else if (typeof globalStorage !== 'undefined') {
		var setItem = function(n,v){globalStorage[location.hostname].setItem('golem.' + APP + n, v);}
		var getItem = function(n){return globalStorage[location.hostname].getItem('golem.' + APP + n);}
	}
}

/* Worker Prototype
   ----------------
new Worker(name, pages, settings)

*** User data***
.id				- If we have a .display then this is the html #id of the worker
.name			- String, the same as our class name.
.pages			- String, list of pages that we want in the form "town.soldiers keep.stats"
.data			- Object, for public reading, automatically saved
.option			- Object, our options, changed from outide ourselves
.settings		- Object, various values for various sections, default is always false
				unsortable - stops a worker being sorted in the queue, prevents this.work(true)
				keep - without this data is flushed when not used - noly keep if other workers regularly access you
.display		- Create the display object for the settings page.

*** User functions ***
.init()			- After the script has loaded, but before anything else has run. Data has been filled, but nothing has been run.
				This is the bext place to put default actions etc...
				Cannot rely on other workers having their data filled out...
.parse(change)	- This can read data from the current page and cannot perform any actions.
				change = false - Not allowed to change *anything*, cannot read from other Workers.
				change = true - Can now change inline and read from other Workers.
				return true - We need to run again with status=1
				return false - We're finished
.work(state)	- Do anything we need to do when it's our turn - this includes page changes.
				state = false - It's not our turn, don't start anything if we can't finish in this one call
				state = true - It's our turn, do everything - Only true if not interrupted
				return true if we need to keep working (after a delay etc)
				return false when someone else can work
.update(type)	- Called when the data or options have been changed (even on this._load()!). If !settings.data and !settings.option then call on data, otherwise whichever is set.
				type = "data" or "option"
.get(what)		- Calls this._get(what)
				Official way to get any information from another worker
				Overload for "special" data, and pass up to _get if basic data

NOTE: If there is a work() but no display() then work(false) will be called before anything on the queue, but it will never be able to have focus (ie, read only)

*** Private data ***
._loaded		- true once ._init() has run
._working		- Prevent recursive calling of various private functions
._changed		- Timestamp of the last time this.data changed
._watching		- List of other workers that want to have .update() after this.update()

*** Private functions ***
._get(what)		- Returns the data requested, auto-loads if needed, what is 'path.to.data'
._init(keep)	- Calls .init(), loads then saves data (for default values), delete this.data if !nokeep and settings.nodata, then removes itself from use
._load(type)	- Loads data / option from storage, merges with current values, calls .update(type) on change
._save(type)	- Saves data / option to storage, calls .update(type) on change
._flush()		- Calls this._save() then deletes this.data if !this.settings.keep
._update(type)	- Calls this.update(type), loading and flushing .data if needed
._watch(worker)	- Add a watcher to worker - so this.update() gets called whenever worker.update() does
*/
var Workers = [];

function Worker(name,pages,settings) {
	Workers.push(this);

	// User data
	this.id = null;
	this.name = name;
	this.pages = pages;
	this.settings = settings || {};
	this.data = {};
	this.option = {};
	this.display = null;

	// User functions
	this.init = null; //function() {};
	this.parse = null; //function(change) {return false;};
	this.work = null; //function(state) {return false;};
	this.update = null; //function(type){};
	this.get = function(what) {return this._get(what);}; // Overload if needed

	// Private data
	this._loaded = false;
	this._working = {data:false, option:false, update:false};
	this._changed = Date.now();
	this._watching = [];

	// Private functions - only override if you know exactly what you're doing
	this._watch = function(worker) {
		if (worker === this) {
			return;
		}
		for (var i=0; i<worker._watching.length; i++) {
			if (worker._watching[i] === this) {
				return;
			}
		}
		worker._watching.push(this);
	};

	this._update = function(type) {
		if (this._loaded && (this.update || this._watching.length)) {
			var i, flush = false;
			this._working.update = true;
			if (!this.data) {
				flush = true;
				this._load('data');
			}
			if (this.update) {
				this.update(type);
			}
			for (i=0; i<this._watching.length; i++) {
				this._watching[i]._update(this);
			}
			if (flush) {
				this._flush();
			}
			this._working.update = false;
		}
	};

	this._get = function(what) { // 'path.to.data'
		var x = typeof what === 'string' ? what.split('.') : what;
		if (!this._loaded) {
			this._init();
		} else if (!this.data) { // Don't flush as one request often follows another
			this._load('data');
		}
		try {
			switch(x.length) {
				case 1:	return this.data[x[0]];
				case 2: return this.data[x[0]][x[1]];
				case 3: return this.data[x[0]][x[1]][x[2]];
				case 4: return this.data[x[0]][x[1]][x[2]][x[3]];
				case 5: return this.data[x[0]][x[1]][x[2]][x[3]][x[4]];
				case 6: return this.data[x[0]][x[1]][x[2]][x[3]][x[4]][x[5]];
				case 7: return this.data[x[0]][x[1]][x[2]][x[3]][x[4]][x[5]][x[6]];
			}
		} catch(err) {
			return null;
		}
	};

	this._flush = function() {
		this._save();
		if (!this.settings.keep) {
			delete this.data;
		}
	};

	this._init = function() {
		if (this._loaded) {
			return;
		}
		this._loaded = true;
		if (this.init) {
			this.init();
		}
	};

	this._load = function(type) {
		if (type !== 'data' && type !== 'option') {
			this._load('data');
			this._load('option');
			return;
		}
		var old, v = getItem(userID + '.' + type + '.' + this.name) || this[type];
		if (typeof v !== 'string') { // Should never happen as all our info is objects!
			this[type] = v;
			return;
		}
		switch(v.charAt(0)) {
			case '"': // Should never happen as all our info is objects!
				this[type] = v.replace(/^"|"$/g,'');
				return;
			case '(':
			case '[':
				if (!this[type] || typeof this[type] !== 'array' && typeof this[type] !== 'object') {
					this[type] = eval(v);
					return;
				}
//				old = this[type].toSource();
				this[type] = $.extend(true, {}, this[type], eval(v));
//				if (old !== this[type].toSource()) {
//					this._update(type);
//				}
				return;
		}
	};

	this._save = function(type) {
		if (type !== 'data' && type !== 'option') {
			return this._save('data') + this._save('option');
		}
		if (typeof this[type] === 'undefined' || !this[type] || this._working[type]) {
			return false;
		}
		var i, n = userID + '.' + type + '.' + this.name, v;
		switch(typeof this[type]) {
			case 'string': // Should never happen as all our info is objects!
				v = '"' + this[type] + '"';
				break;
			case 'array':
			case 'object':
				v = this[type].toSource();
				break;
			default: // Should never happen as all our info is objects!
				v = this[type];
				break;
		}
		if (getItem(n) === 'undefined' || getItem(n) !== v) {
			this._working[type] = true;
			this._changed = Date.now();
			this._update(type);
			setItem(n, v);
			this._working[type] = false;
			return true;
		}
		return false;
	};
}

/********** Worker.Config **********
* Has everything to do with the config
* Named with a double dash to ensure it comes early as other workers rely on it's onload() function!
*/
var Config = new Worker('Config');
Config.data = null;
Config.option = {
	display:'block',
	fixed:true,
	advanced:false
};
Config.init = function() {
	$('head').append('<link rel="stylesheet" href="http://cloutman.com/css/base/jquery-ui.css" type="text/css" />');
	var $btn, $golem_config, $newPanel, i;
	$('div.UIStandardFrame_Content').after('<div class="golem-config' + (Config.option.fixed?' golem-config-fixed':'') + '"><div class="ui-widget-content"><div class="golem-title">Castle Age Golem v' + VERSION + '<img id="golem_fixed"></div><div id="golem_buttons" style="margin:4px;"><img class="golem-button' + (Config.option.display==='block'?'-active':'') + '" id="golem_options" src="data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%0FPLTE%E2%E2%E2%8A%8A%8A%AC%AC%AC%FF%FF%FFUUU%1C%CB%CE%D3%00%00%00%04tRNS%FF%FF%FF%00%40*%A9%F4%00%00%00%3DIDATx%DA%A4%8FA%0E%00%40%04%03%A9%FE%FF%CDK%D2%B0%BBW%BD%CD%94%08%8B%2F%B6%10N%BE%A2%18%97%00%09pDr%A5%85%B8W%8A%911%09%A8%EC%2B%8CaM%60%F5%CB%11%60%00%9C%F0%03%07%F6%BC%1D%2C%00%00%00%00IEND%AEB%60%82"></div><div style="display:'+Config.option.display+';"><div id="golem_config" style="margin:0 4px;overflow:hidden;overflow-y:auto;"></div><div style="text-align:right;"><label>Advanced <input type="checkbox" id="golem-config-advanced"' + (Config.option.advanced ? ' checked' : '') + '></label></div></div></div></div>');
	$('#golem_options').click(function(){
		$(this).toggleClass('golem-button golem-button-active');
		Config.option.display = Config.option.display==='block' ? 'none' : 'block';
		$('#golem_config').parent().toggle('blind'); //Config.option.fixed?null:
		Config._save('option');
	});
	$('#golem_fixed').click(function(){
		Config.option.fixed ^= true;
		$(this).closest('.golem-config').toggleClass('golem-config-fixed');
		Config._save('option');
	});
	$golem_config = $('#golem_config');
	for (i in Workers) {
		$golem_config.append(Config.makePanel(Workers[i]));
	}
	$golem_config.sortable({axis:"y"}); //, items:'div', handle:'h3' - broken inside GM
	$('.golem-config .golem-panel > h3').click(function(event){
		if ($(this).parent().hasClass('golem-panel-show')) {
			$(this).next().hide('blind',function(){
				$(this).parent().toggleClass('golem-panel-show');
				Config.option.active = [];
				$('.golem-panel-show').each(function(i,el){Config.option.active.push($(this).attr('id'));});
				Config._save('option');
			});
		} else {
			$(this).parent().toggleClass('golem-panel-show');
			$(this).next().show('blind');
			Config.option.active = [];
			$('.golem-panel-show').each(function(i,el){Config.option.active.push($(this).attr('id'));});
			Config._save('option');
		}
	});
	$golem_config.children('.golem-panel-sortable')
		.draggable({ connectToSortable:'#golem_config', axis:'y', distance:5, scroll:false, handle:'h3', helper:'clone', opacity:0.75, zIndex:100,
refreshPositions:true, stop:function(){Config.updateOptions();} })
		.droppable({ tolerance:'pointer', over:function(e,ui) {
			if (Config.getPlace($(this).attr('id')) < Config.getPlace($(ui.draggable).attr('id'))) {
				$(this).before(ui.draggable);
			} else {
				$(this).after(ui.draggable);
			}
		} });
	for (i in Workers) { // Update all select elements
		if (Workers[i].select) {
			Workers[i].select();
		}
	}
	$('input.golem_addselect').live('click', function(){
		$('select.golem_multiple', $(this).parent()).append('<option>'+$('.golem_select', $(this).parent()).val()+'</option>');
		Config.updateOptions();
	});
	$('input.golem_delselect').live('click', function(){
		$('select.golem_multiple option[selected=true]', $(this).parent()).each(function(i,el){$(el).remove();})
		Config.updateOptions();
	});
	$('input,textarea,select', $golem_config).change( function(){
		Config.updateOptions();
	});
	$('#golem-config-advanced').click(function(){
		Config.updateOptions();
		$('.golem-advanced').css('display', Config.option.advanced ? 'block' : 'none');}
	);
};
Config.makePanel = function(worker) {
	var i, o, x, id, step, show, $head, $panel, display = worker.display, panel = [], txt = [], list = [], options = {
		before: '',
		after: '',
		suffix: '',
		className: '',
		between: 'to',
		size: 7,
		min: 0,
		max: 100
	};
	if (!display) {
		return false;
	}
	worker.id = 'golem_panel_'+worker.name.toLowerCase().replace(/[^0-9a-z]/,'_');
	show = findInArray(Config.option.active, worker.id);
	$head = $('<div id="'+worker.id+'" class="golem-panel'+(worker.settings.unsortable?'':' golem-panel-sortable')+(show?' golem-panel-show':'')+'" name="'+worker.name+'"><h3 class="golem-panel-header "><img class="golem-icon">'+worker.name+'<img class="golem-lock"></h3></div>');
	switch (typeof display) {
		case 'array':
		case 'object':
			for (i in display) {
				txt = [];
				list = [];
				o = $.extend(true, {}, options, display[i]);
				o.real_id = PREFIX + worker.name + '_' + o.id;
				o.value = worker.option[o.id] || null;
				o.alt = (o.alt ? ' alt="'+o.alt+'"' : '');
				if (o.label) {
					txt.push('<span style="float:left;margin-top:2px;">'+o.label.replace(' ','&nbsp;')+'</span>');
					if (o.text || o.checkbox || o.select || o.multiple) {
						txt.push('<span style="float:right;">');
					}
				}
				if (o.before) {
					txt.push(o.before+' ');
				}
				// our different types of input elements
				if (o.info) { // only useful for externally changed
					if (o.id) {
						txt.push('<span style="float:right" id="' + o.real_id + '">' + (o.value || o.info) + '</span>');
					} else {
						txt.push(o.info);
					}
				} else if (o.text) {
					txt.push('<input type="text" id="' + o.real_id + '" size="' + o.size + '" value="' + (o.value || '') + '">');
				} else if (o.checkbox) {
					txt.push('<input type="checkbox" id="' + o.real_id + '"' + (o.value ? ' checked' : '') + '>');
				} else if (o.select) {
					switch (typeof o.select) {
						case 'string':
							o.className = ' class="golem_'+o.select+'"';
							break;
						case 'number':
							step = Divisor(o.select);
							for (x=0; x<=o.select; x+=step) {
								list.push('<option' + (o.value==x ? ' selected' : '') + '>' + x + '</option>');
							}
							break;
						case 'array':
						case 'object':
							for (x in o.select) {
								list.push('<option value="' + o.select[x] + '"' + (o.value==o.select[x] ? ' selected' : '') + '>' + o.select[x] + (o.suffix ? ' '+o.suffix : '') + '</option>');
							}
							break;
					}
					txt.push('<select id="' + o.real_id + '"' + o.className + o.alt + '>' + list.join('') + '</select>');
				} else if (o.multiple) {
					if (typeof o.value === 'array' || typeof o.value === 'object') {
						for (i in o.value) {
							list.push('<option value="'+o.value[i]+'">'+o.value[i]+'</option>');
						}
					}
					txt.push('<select style="width:100%" class="golem_multiple" multiple id="' + o.real_id + '">' + list.join('') + '</select><br>');
					if (typeof o.multiple === 'string') {
						txt.push('<input class="golem_select" type="text" size="' + o.size + '">');
					} else {
						list = [];
						switch (typeof o.multiple) {
							case 'number':
								step = Divisor(o.select);
								for (x=0; x<=o.multiple; x+=step) {
									list.push('<option>' + x + '</option>');
								}
								break;
							case 'array':
								for (x=0; x<o.multiple.length; x++) {
									list.push('<option value="' + o.multiple[x] + '">' + o.multiple[x] + (o.suffix ? ' '+o.suffix : '') + '</option>');
								}
								break;
							case 'object':
								for (x in o.multiple) {
									list.push('<option value="' + x + '">' + o.multiple[x] + (o.suffix ? ' '+o.suffix : '') + '</option>');
								}
								break;
						}
						txt.push('<select class="golem_select">'+list.join('')+'</select>');
					}
					txt.push('<input type="button" class="golem_addselect" value="Add" /><input type="button" class="golem_delselect" value="Del" />');
				}
				if (o.after) {
					txt.push(' '+o.after);
				}
				if (o.label && (o.text || o.checkbox || o.select || o.multiple)) {
					txt.push('</span>');
				}
				panel.push('<div style="clear:both;' + (o.advanced ? (Config.option.advanced ? '"' : 'display:none;"') + ' class="golem-advanced"' : '"') + (o.help ? ' title="' + o.help + '"' : '') + '>' + txt.join('') + '</div>');
			}
			$head.append('<div class="golem-panel-content" style="font-size:smaller;">' + panel.join('') + '<div style="clear:both"></div></div>');
			return $head;
//		case 'function':
//			$panel = display();
//			if ($panel) {
//				$head.append($panel);
//				return $head;
//			}
//			return null;
		default:
			return null;
	}
};
Config.updateOptions = function() {
//	debug('Options changed');
	// Get order of panels first
	var found = {}, i;
	Queue.option.queue = [];
	$('#golem_config > div').each(function(i,el){
		var name = WorkerById($(el).attr('id')).name;
		if (!found[name]) {
			Queue.option.queue.push(name);
		}
		found[name] = true;
	});
	// Now can we see the advanced stuff
	this.option.advanced = $('#golem-config-advanced').attr('checked');
	// Now save the contents of all elements with the right id style
	$('#golem_config :input').each(function(i,el){
		if ($(el).attr('id')) {
			var val, tmp = $(el).attr('id').slice(PREFIX.length).regex(/([^_]*)_(.*)/i);
			if (!tmp) {
				return;
			}
			if ($(el).attr('type') === 'checkbox') {
				WorkerByName(tmp[0]).option[tmp[1]] = $(el).attr('checked');
			} else if ($(el).attr('multiple')) {
				val = [];
				$('option', el).each(function(i,el){ val.push($(el).text()); });
				WorkerByName(tmp[0]).option[tmp[1]] = val;
			} else {
				val = $(el).attr('value') || ($(el).val() || null);
				if (val && val.search(/[^0-9.]/) === -1) {
					val = parseFloat(val);
				}
				WorkerByName(tmp[0]).option[tmp[1]] = val;
			}
		}
	});
	for (i=0; i<Workers.length; i++) {
		Workers[i]._save('option');
	}
};
Config.getPlace = function(id) {
	var place = -1;
	$('#golem_config > div').each(function(i,el){
		if ($(el).attr('id') === id && place === -1) {
			place = i;
		}
	});
	return place;
};

/********** Worker.Dashboard **********
* Displays statistics and other useful info
*/
var Dashboard = new Worker('Dashboard', '*', {keep:true});
Dashboard.option = {
	display:'block',
	active:null
};

Dashboard.init = function() {
	var id, $btn, tabs = [], divs = [], active = this.option.active;
	for (i=0; i<Workers.length; i++) {
		if (Workers[i].dashboard) {
			id = 'golem-dashboard-'+Workers[i].name;
			if (!active) {
				this.option.active = active = id;
			}
			tabs.push('<h3 name="'+id+'" class="golem-tab-header' + (active===id ? ' golem-tab-header-active' : '') + '">' + (Workers[i] === this ? '&nbsp;*&nbsp;' : Workers[i].name) + '</h3>');
			divs.push('<div id="'+id+'"'+(active===id ? '' : ' style="display:none;"')+'></div>');
			this._watch(Workers[i]);
		}
	}
	$('<div id="golem-dashboard" style="top:' + $('#app'+APPID+'_main_bn').offset().top+'px;display:' + this.option.display+';">' + tabs.join('') + '<div>' + divs.join('') + '</div></div>').prependTo('.UIStandardFrame_Content');
	$('.golem-tab-header').click(function(){
		if ($(this).hasClass('golem-tab-header-active')) {
			return;
		}
		if (Dashboard.option.active) {
			$('h3[name="'+Dashboard.option.active+'"]').removeClass('golem-tab-header-active');
			$('#'+Dashboard.option.active).hide();
		}
		Dashboard.option.active = $(this).attr('name');
		$(this).addClass('golem-tab-header-active');
		Dashboard.update();
		$('#'+Dashboard.option.active).show();
		Dashboard._save('option');
	});
	$('#golem-dashboard .golem-panel > h3').live('click', function(event){
		if ($(this).parent().hasClass('golem-panel-show')) {
			$(this).next().hide('blind',function(){$(this).parent().toggleClass('golem-panel-show');});
		} else {
			$(this).parent().toggleClass('golem-panel-show');
			$(this).next().show('blind');
		}
	});
	$('#golem-dashboard thead th').live('click', function(event){
		var worker = WorkerByName(Dashboard.option.active.substr(16));
		if (!worker.data) {
			worker._load();
		}
		worker.dashboard($(this).prevAll().length, $(this).attr('name')==='sort');
	});

	$('#golem_buttons').append('<img class="golem-button' + (Dashboard.option.display==='block'?'-active':'') + '" id="golem_toggle_dash" src="data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%1EPLTE%BA%BA%BA%EF%EF%EF%E5%E5%E5%D4%D4%D4%D9%D9%D9%E3%E3%E3%F8%F8%F8%40%40%40%FF%FF%FF%00%00%00%83%AA%DF%CF%00%00%00%0AtRNS%FF%FF%FF%FF%FF%FF%FF%FF%FF%00%B2%CC%2C%CF%00%00%00EIDATx%DA%9C%8FA%0A%00%20%08%04%B5%CC%AD%FF%7F%B8%0D%CC%20%E8%D20%A7AX%94q!%7FA%10H%04%F4%00%19*j%07Np%9E%3B%C9%A0%0C%BA%DC%A1%91B3%98%85%AF%D9%E1%5C%A1%FE%F9%CB%14%60%00D%1D%07%E7%0AN(%89%00%00%00%00IEND%AEB%60%82">');
	$('#golem_toggle_dash').click(function(){
		$(this).toggleClass('golem-button golem-button-active');
		Dashboard.option.display = Dashboard.option.display==='block' ? 'none' : 'block';
		if (Dashboard.option.display === 'block' && !$('#'+Dashboard.option.active).children().length) {
			WorkerByName(Dashboard.option.active.substr(16)).dashboard();
		}
		$('#golem-dashboard').toggle('drop');
		Dashboard._save('option');
	});
	window.setInterval(function(){
		$('.golem-timer').each(function(i,el){
			$(el).text(makeTimer($(el).text().parseTimer() - 1));
		});
	},1000);
};

Dashboard.parse = function(change) {
	$('#golem-dashboard').css('top', $('#app'+APPID+'_main_bn').offset().top+'px');
};

Dashboard.update = function(type) {
	if (!this._loaded || (type && typeof type !== 'object')) {
		return;
	}
	worker = type || WorkerByName(Dashboard.option.active.substr(16));
	var id = 'golem-dashboard-'+worker.name, flush = false;
	if (this.option.active === id && this.option.display === 'block') {
		if (!worker.data) {
			flush = true;
			worker._load('data');
		}
		worker.dashboard();
		if (flush) {
			worker._flush();
		}
	} else {
		$('#'+id).empty();
	}
};

Dashboard.dashboard = function() {
	var i, list = [];
	for (i=0; i<Workers.length; i++) {
		if (this.data[Workers[i].name]) {
			list.push('<div style="clear:both" id="golem-status-' + Workers[i].name + '"><b>' + Workers[i].name + ':</b> ' + this.data[Workers[i].name] + '</div>');
		}
	}
	$('#golem-dashboard-Dashboard').html(list.join(''));
};

Dashboard.status = function(worker, html) {
	if (html) {
		this.data[worker.name] = html;
	} else {
		delete this.data[worker.name];
	}
	this._save();
};

/********** Worker.Page() **********
* All navigation including reloading
*/
var Page = new Worker('Page', null, {unsortable:true, keep:true});
Page.option = {
	timeout: 15,
	retry: 5
};
Page.page = '';
Page.last = null; // Need to have an "auto retry" after a period
Page.lastclick = null;
Page.when = null;
Page.retry = 0;
Page.checking = true;
Page.node_trigger = null;
Page.display = [
	{
		id:'timeout',
		label:'Retry after',
		select:[10, 15, 30, 60],
		after:'seconds'
	}
];

Page.init = function() {
	// Only perform the check on the two id's referenced in get_cached_ajax()
	// Give a short delay due to multiple children being added at once, 0.1 sec should be more than enough
	$('body').bind('DOMNodeInserted', function(event){
		if (!Page.node_trigger && ($(event.target).attr('id') === 'app'+APPID+'_app_body_container' || $(event.target).attr('id') === 'app'+APPID+'_globalContainer')) {
			Page.node_trigger = window.setTimeout(function(){Page.node_trigger=null;Page.parse_all();},100);
		}
	});
};

Page.parse_all = function() {
	Page.identify();
	var i, list = [];
	for (i=0; i<Workers.length; i++) {
//		debug(Workers[i].name + '.parse(false);');
		if (Workers[i].pages && (Workers[i].pages==='*' || (Page.page && Workers[i].pages.indexOf(Page.page)>=0)) && Workers[i].parse) {
			Workers[i]._load();
			if (Workers[i].parse(false)) {
				list.push(Workers[i]);
			} else {
				Workers[i]._flush();
			}
		}
	}
	for (i in list) {
//		debug(Workers[i].name + '.parse(true);');
		list[i].parse(true);
		list[i]._flush();
	}
}


Page.work = function(state) {
	if (!this.checking) {
		return false;
	}
	var i, l, list, found = null;
	for (i=0; i<Workers.length && !found; i++) {
		if (!Workers[i].pages || Workers[i].pages==='*') {
			continue;
		}
		list = Workers[i].pages.split(' ');
		for (l=0; l<list.length; l++) {
			if (this.pageNames[list[l]] && !this.data[list[l]] && list[l].indexOf('_active') === -1) {
				found = list[l];
				break;
			}
		}
	}
	if (!state) {
		if (found) {
			return true;
		}
		this.checking = false;
		return false;
	}
	if (found && !this.to(found)) {
		this.data[found] = Date.now(); // Even if it's broken, we need to think we've been there!
		return true;
	}
	return false;
};

Page.pageNames = {
	index:					{url:'index.php', image:null},
	quests_quest:			{url:'quests.php', image:'tab_quest_on.gif'}, // If we ever get this then it means a new land...
	quests_quest1:			{url:'quests.php?land=1', image:'land_fire_sel.gif'},
	quests_quest2:			{url:'quests.php?land=2', image:'land_earth_sel.gif'},
	quests_quest3:			{url:'quests.php?land=3', image:'land_mist_sel.gif'},
	quests_quest4:			{url:'quests.php?land=4', image:'land_water_sel.gif'},
	quests_quest5:			{url:'quests.php?land=5', image:'land_demon_realm_sel.gif'},
	quests_quest6:			{url:'quests.php?land=6', image:'land_undead_realm_sel.gif'},
	quests_quest7:			{url:'quests.php?land=7', image:'tab_underworld_big.gif'},
	quests_demiquests:		{url:'symbolquests.php', image:'demi_quest_on.gif'},
	quests_atlantis:		{url:'monster_quests.php', image:'tab_atlantis_on.gif'},
	battle_battle:			{url:'battle.php', image:'battle_on.gif'},
	battle_training:		{url:'battle_train.php', image:'training_grounds_on_new.gif'},
	battle_rank:			{url:'battlerank.php', image:'tab_battle_rank_on.gif'},
	battle_raid:			{url:'raid.php', image:'tab_raid_on.gif'},
	battle_arena:			{url:'arena.php', image:'tab_arena_on.gif'},
	heroes_heroes:			{url:'mercenary.php', image:'tab_heroes_on.gif'},
	heroes_generals:		{url:'generals.php', image:'tab_generals_on.gif'},
	town_soldiers:			{url:'soldiers.php', image:'tab_soldiers_on.gif'},
	town_blacksmith:		{url:'item.php', image:'tab_black_smith_on.gif'},
	town_magic:				{url:'magic.php', image:'tab_magic_on.gif'},
	town_land:				{url:'land.php', image:'tab_land_on.gif'},
	oracle_oracle:			{url:'oracle.php', image:'oracle_on.gif'},
	oracle_demipower:		{url:'symbols.php', image:'demi_on.gif'},
	oracle_treasurealpha:	{url:'treasure_chest.php', image:'tab_treasure_alpha_on.gif'},
	oracle_treasurevanguard:{url:'treasure_chest.php?treasure_set=alpha', image:'tab_treasure_vanguard_on.gif'},
	keep_stats:				{url:'keep.php?user='+userID, image:'tab_stats_on.gif'},
	keep_eliteguard:		{url:'party.php?user='+userID, image:'tab_elite_guard_on.gif'},
	keep_achievements:		{url:'achievements.php', image:'tab_achievements_on.gif'},
	keep_alchemy:			{url:'alchemy.php', image:'tab_alchemy_on.gif'},
	keep_monster:			{url:'battle_monster.php', image:'tab_monster_on.jpg'},
	keep_monster_active:	{url:'battle_monster.php', image:'dragon_view_more.gif'},
	army_invite:			{url:'army.php', image:'invite_on.gif'},
	army_gifts:				{url:'gift.php', image:null},
	army_viewarmy:			{url:'army_member.php', image:'view_army_on.gif'},
	army_sentinvites:		{url:'army_reqs.php', image:'sent_invites_on.gif'}
};

Page.identify = function() {
	this.page = '';
	if (!$('#app'+APPID+'_globalContainer').length) {
		this.reload();
		return null;
	}
	$('#app'+APPID+'_app_body img').each(function(i,el){
		var p, filename = $(el).attr('src').filepart();
		for (p in Page.pageNames) {
			if (filename === Page.pageNames[p].image) {
				Page.page = p; return;
			}
		}
	});
	if ($('#app'+APPID+'_indexNewFeaturesBox').length) {
		this.page = 'index';
	} else if ($('div[style*="giftpage_title.jpg"]').length) {
		this.page = 'army_gifts';
	}
	if (this.page !== '') {
		this.data[this.page] = Date.now();
	}
//	debug('this.identify("'+Page.page+'")');
	return this.page;
};

Page.loading = false;
Page.to = function(page, args) {
	if (page === this.page && typeof args === 'undefined') {
		return true;
	}
	if (!args) {
		args = '';
	}
	if (page && this.pageNames[page] && this.pageNames[page].url) {
		this.clear();
		this.last = this.pageNames[page].url;
		this.when = Date.now();
		if (args.indexOf('?') === 0 && this.last.indexOf('?') > 0) {
			this.last = this.last.substr(0, this.last.indexOf('?')) + args;
		} else {
			this.last = this.last + args;
		}
		debug('Navigating to '+this.last+' ('+this.pageNames[page].url+')');
		this.ajaxload();
	}
	return false;
};

Page.ajaxload = function() {
	$.ajax({
		cache:false,
		dataType:'text',
		timeout:this.option.timeout * 1000,
		url:'http://apps.facebook.com/castle_age/'+this.last,
		error:function() {
			debug('Page not loaded correctly, reloading.');
			Page.ajaxload();
		},
		success:function(data){
			if (data.lastIndexOf('</html>') !== -1 && data.lastIndexOf('single_popup') !== -1) { // Last things in source if loaded correctly...
				Page.loading = false;
				data = data.substring(data.indexOf('<div id="app'+APPID+'_globalContainer"'), data.indexOf('<div class="UIStandardFrame_SidebarAds"'));
				$('#app'+APPID+'_AjaxLoadIcon').css('display', 'none');
				$('#app'+APPID+'_globalContainer').empty().append(data);
			} else {
				debug('Page not loaded correctly, reloading.');
				Page.ajaxload();
			}
		}
	});
	this.loading = true;
	setTimeout(function() { if (Page.loading) {$('#app'+APPID+'_AjaxLoadIcon').css('display', 'block');} }, 1500);
};

Page.reload = function() {
	window.location.href = 'http://apps.facebook.com/castle_age/index.php?bm=1';
};

Page.click = function(el) {
	if (!$(el).length) {
		debug('Page.click: Unable to find element - '+el);
		return false;
	}
	var e = document.createEvent("MouseEvents");
	e.initEvent("click", true, true);
	$(el).get(0).wrappedJSObject.dispatchEvent(e);
	this.clear();
	this.lastclick = el;
	this.when = Date.now();
	return true;
};

Page.clear = function() {
	this.last = this.lastclick = this.when = null;
	this.retry = 0;
};

/********** Worker.Queue() **********
* Keeps track of the worker queue
*/
var Queue = new Worker('Queue', '*', {unsortable:true, option:true, keep:true});
Queue.data = {
	current: null
};
Queue.option = {
	delay: 5,
	clickdelay: 5,
	queue: ["Page", "Queue", "Income", "Quest", "Monster", "Arena", "Battle", "Heal", "Land", "Town", "Bank", "Alchemy", "Blessing", "Gift", "Upgrade", "Elite", "Idle"],
	start_stamina: 0,
	stamina: 0,
	start_energy: 0,
	energy: 0
};
Queue.display = [
	{
		label:'Drag the unlocked panels into the order you wish them run.'
	},{
		id:'delay',
		label:'Delay Between Events',
		text:true,
		after:'secs',
		size:3
	},{
		id:'clickdelay',
		label:'Delay After Mouse Click',
		text:true,
		after:'secs',
		size:3,
		help:'This should be a multiple of Event Delay'
	},{
		id:'start_stamina',
		before:'Save',
		select:'stamina',
		after:'Stamina Before Using'
	},{
		id:'stamina',
		before:'Always Keep',
		select:'stamina',
		after:'Stamina'
	},{
		id:'start_energy',
		before:'Save',
		select:'energy',
		after:'Energy Before Using'
	},{
		id:'energy',
		before:'Always Keep',
		select:'energy',
		after:'Energy'
	}
];
Queue.runfirst = [];
Queue.lastclick = Date.now();	// Last mouse click - don't interrupt the player
Queue.lastrun = Date.now();		// Last time we ran
Queue.burn = {stamina:false, energy:false};
Queue.timer = null;
Queue.lasttimer = 0;

Queue.init = function() {
	var i, worker, found = {}, play = 'data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%0FPLTE%A7%A7%A7%C8%C8%C8YYY%40%40%40%00%00%00%9F0%E7%C0%00%00%00%05tRNS%FF%FF%FF%FF%00%FB%B6%0ES%00%00%00%2BIDATx%DAb%60A%03%0CT%13%60fbD%13%60%86%0B%C1%05%60BH%02%CC%CC%0CxU%A0%99%81n%0BeN%07%080%00%03%EF%03%C6%E9%D4%E3)%00%00%00%00IEND%AEB%60%82', pause = 'data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%06PLTE%40%40%40%00%00%00i%D8%B3%D7%00%00%00%02tRNS%FF%00%E5%B70J%00%00%00%1AIDATx%DAb%60D%03%0CT%13%60%60%80%60%3A%0BP%E6t%80%00%03%00%7B%1E%00%E5E%89X%9D%00%00%00%00IEND%AEB%60%82';
	for (i=0; i<this.option.queue.length; i++) { // First find what we've already got
		worker = WorkerByName(this.option.queue[i]);
		if (worker) {
			found[worker.name] = true;
		}
	}
	for (i in Workers) { // Second add any new workers that have a display (ie, sortable)
		if (found[Workers[i].name] || !Workers[i].work || !Workers[i].display) {
			continue;
		}
		log('Adding '+Workers[i].name+' to Queue');
		if (Workers[i].settings.unsortable) {
			this.option.queue.unshift(Workers[i].name);
		} else {
			this.option.queue.push(Workers[i].name);
		}
	}
	for (i=0; i<this.option.queue.length; i++) {	// Third put them in saved order
		worker = WorkerByName(this.option.queue[i]);
		if (worker && worker.id) {
			if (this.data.current && worker.name === this.data.current) {
				debug('Queue: Trigger '+worker.name+' (continue after load)');
				$('#'+worker.id+' > h3').css('font-weight', 'bold');
			}
			$('#golem_config').append($('#'+worker.id));
		}
	}
	$(document).click(function(){Queue.lastclick=Date.now();});

	$btn = $('<img class="golem-button' + (this.option.pause?' red':'') + '" id="golem_pause" src="' + (this.option.pause?play:pause) + '">').click(function() {
		Queue.option.pause ^= true;
		debug('State: '+((Queue.option.pause)?"paused":"running"));
		$(this).toggleClass('red').attr('src', (Queue.option.pause?play:pause));
		Page.clear();
		Config.updateOptions();
	});
	$('#golem_buttons').prepend($btn); // Make sure it comes first
	// Running the queue every second, options within it give more delay
};

Queue.update = function(type) {
	if (this.option.delay !== this.lasttimer) {
		window.clearInterval(this.timer);
		this.timer = window.setInterval(function(){Queue.run();}, this.option.delay * 1000);
		this.lasttimer = this.option.delay;
	}
};

Queue.run = function() {
	var i, worker, found = false, now = Date.now(), result;
	if (this.option.pause || now - this.lastrun < this.option.delay * 1000) {
		return;
	}
	this.lastrun = now;
	if (Page.loading) {
		return; // We want to wait xx seconds after the page has loaded
	}
//	debug('Start Queue');
	this.burn.stamina = this.burn.energy = 0;
	if (this.option.burn_stamina || Player.get('stamina') >= this.option.start_stamina) {
		this.burn.stamina = Math.max(0, Player.get('stamina') - this.option.stamina);
		this.option.burn_stamina = this.burn.stamina > 0;
	}
	if (this.option.burn_energy || Player.get('energy') >= this.option.start_energy) {
		this.burn.energy = Math.max(0, Player.get('energy') - this.option.energy);
		this.option.burn_energy = this.burn.energy > 0;
	}
	for (i=0; i<Workers.length; i++) { // Run any workers that don't have a display, can never get focus!!
		if (Workers[i].work && !Workers[i].display) {
//			debug(Workers[i].name + '.work(false);');
			Workers[i]._load();
			Workers[i].work(false);
			Workers[i]._flush();
		}
	}
	for (i=0; i<this.option.queue.length; i++) {
		worker = WorkerByName(this.option.queue[i]);
		if (!worker || !worker.work || !worker.display) {
			continue;
		}
//		debug(worker.name + '.work(' + (this.data.current === worker.name) + ');');
		if (this.data.current === worker.name) {
			worker._load();
			result = worker.work(true);
			worker._save(); // Save for everyone, only flush if not active
		} else {
			result = worker.work(false);
		}
		if (!result && this.data.current === worker.name) {
			this.data.current = null;
			if (worker.id) {
				$('#'+worker.id+' > h3').css('font-weight', 'normal');
			}
			debug('Queue: End '+worker.name);
		}
		if (!result || found) { // We will work(false) everything, but only one gets work(true) at a time
			worker._flush();
			continue;
		}
		found = true;
		if (this.data.current === worker.name) {
			continue;
		}
		if (this.data.current) {
			debug('Queue: Interrupt '+this.data.current);
			if (WorkerByName(this.data.current).id) {
				$('#'+WorkerByName(this.data.current).id+' > h3').css('font-weight', 'normal');
			}
		}
		this.data.current = worker.name;
		if (worker.id) {
			$('#'+worker.id+' > h3').css('font-weight', 'bold');
		}
		debug('Queue: Trigger '+worker.name);
	}
//	debug('End Queue');
	this._save();
};
/********** Worker.Update **********
* Checks if there's an update to the script, and lets the user update if there is.
*/
var Update = new Worker('Update');
Update.data = null;
Update.option = null;
Update.found = false;
Update.init = function() {
	var $btn = $('<img class="golem-button" name="Script Update" id="golem_update" src="data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%18PLTE%C7%C7%C7UUU%7B%7B%7B%BF%BF%BF%A6%A6%A6%FF%FF%FF%40%40%40%FF%FF%FFk5%D0%FB%00%00%00%08tRNS%FF%FF%FF%FF%FF%FF%FF%00%DE%83%BDY%00%00%00UIDATx%DAt%8F%5B%12%800%08%03%23%8Fx%FF%1B%5B%C0%96%EA%E8~%95%9D%C0%A48_%E0S%A8p%20%3A%85%F1%C6Jh%3C%DD%FD%205E%E4%3D%18%5B)*%9E%82-%24W6Q%F3Cp%09%E1%A2%8E%A2%13%E8b)lVGU%C7%FF%E7v.%01%06%005%D6%06%07%F9%3B(%D0%00%00%00%00IEND%AEB%60%82">').click(function(){Update.now(true);});
	$('#golem_buttons').append($btn);
};
Update.now = function(force) {
	if (Update.found) {
		window.location.href = 'http://userscripts.org/scripts/source/67412.user.js';
		return;
	}
	var lastUpdateCheck = Settings.GetValue("lastUpdateCheck", 0);
	if (force || Date.now() - lastUpdateCheck > 21600000) {
		// 6+ hours since last check (60x60x6x1000ms)
		Settings.SetValue("lastUpdateCheck", Date.now().toString());
		GM_xmlhttpRequest({
			method: "GET",
			url: 'http://userscripts.org/scripts/show/67412',
			onload: function(evt) {
				if (evt.readyState === 4 && evt.status === 200) {
					var tmp = $(evt.responseText), remoteVersion = $('#summary', tmp).text().regex(/Version:[^0-9.]+([0-9.]+)/i);
					if (force) {
						$('#golem_request').remove();
					}
					if (remoteVersion>VERSION) {
						Update.found = true;
						$('#golem_update').attr('src', 'data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%03%00%00%00(-%0FS%00%00%00%18PLTE%C8%C8%C8%C1%C1%C1%BA%BA%BA%F1%F1%F1ggg%FF%FF%FF%40%40%40%FF%FF%FF%7D%5C%EC%14%00%00%00%08tRNS%FF%FF%FF%FF%FF%FF%FF%00%DE%83%BDY%00%00%00OIDATx%DA%8C%8FA%0A%C0%20%0C%04W%8D%EB%FF%7F%AC1%5BQi%A1s%0A%C3%24%10%B4%0B%7C%89%9COa%A4%ED%22q%906a%2CE%09%14%D4%AA%04%BA0%8AH%5C%80%02%12%3E%FB%0A%19b%06%BE2%13D%F0%F0.~%3E%B7%E8%02%0C%00Z%03%06Q9dE%25%00%00%00%00IEND%AEB%60%82').toggleClass('golem-button golem-button-active');
						if (force) {
							$('#golem_config').after('<div id="golem_request" title="Castle Age Golem"><p>There is a new version of Castle Age Golem available.</p><p>Current&nbsp;version:&nbsp;'+VERSION+', New&nbsp;version:&nbsp;'+remoteVersion+'</p></div>');
							$('#golem_request').dialog({ modal:true, buttons:{"Install":function(){$(this).dialog("close");window.location.href='http://userscripts.org/scripts/source/67412.user.js';}, "Skip":function(){$(this).dialog("close");}} });
						}
						log('New version available: '+remoteVersion);
					} else if (force) {
						$('#golem_config').after('<div id="golem_request" title="Castle Age Golem"><p>There are no new versions available.</p></div>');
						$('#golem_request').dialog({ modal:true, buttons:{"Ok":function(){$(this).dialog("close");}} });
					}
				}
			}
		});
	}
};

/********** Worker.Alchemy **********
* Get all ingredients and recipes
*/
var Alchemy = new Worker('Alchemy', 'keep_alchemy');
Alchemy.data = {
	ingredients:{},
	recipe:{}
};
Alchemy.option = {
	perform:true,
	hearts:false,
	found:true
};
Alchemy.display = [
	{
		id:'perform',
		label:'Automatically Perform',
		checkbox:true
	},{
		id:'hearts',
		label:'Use Battle Hearts',
		checkbox:true
	}
];

Alchemy.parse = function(change) {
	var ingredients = Alchemy.data.ingredients = {}, recipe = Alchemy.data.recipe = {};
	$('div.ingredientUnit').each(function(i,el){
		var name = $('img', el).attr('src').filepart();
		ingredients[name] = $(el).text().regex(/x([0-9]+)/);
	});
	$('div.alchemyQuestBack,div.alchemyRecipeBack,div.alchemyRecipeBackMonster').each(function(i,el){
		var me = {}, title = $('div.recipeTitle', el).text().trim().replace('RECIPES: ','');
		if (title.indexOf(' (')>0) {title = title.substr(0, title.indexOf(' ('));}
		if ($(el).hasClass('alchemyQuestBack')) {me.type = 'Quest';}
		else if ($(el).hasClass('alchemyRecipeBack')) {me.type = 'Recipe';}
		else if ($(el).hasClass('alchemyRecipeBackMonster')) {me.type = 'Summons';}
		else {me.type = 'wtf';}
		me.ingredients = {};
		$('div.recipeImgContainer', el).parent().each(function(i,el){
			var name = $('img', el).attr('src').filepart();
			me.ingredients[name] = ($(el).text().regex(/x([0-9]+)/) || 1);
		});
		recipe[title] = me;
	});
};

Alchemy.update = function() {
	var found = null, recipe = this.data.recipe, r, i;
	for (r in recipe) {
		if (recipe[r].type === 'Recipe') {
			found = r;
			for (i in recipe[r].ingredients) {
				if ((!Alchemy.option.hearts && i === 'raid_hearts.gif') || recipe[r].ingredients[i] > (Alchemy.data.ingredients[i] || 0)) {
					found = null;
					break;
				}
			}
			if (found) {break;}
		}
	}
	this.option.found = found;
};

Alchemy.work = function(state) {
	if (!Alchemy.option.perform || !Alchemy.option.found) {
		return false;
	}
	if (!state || !Page.to('keep_alchemy')) {
		return true;
	}
	debug('Alchemy: Perform - '+Alchemy.option.found);
	$('div.alchemyRecipeBack').each(function(i,el){
		if($('div.recipeTitle', el).text().indexOf(Alchemy.option.found) >= 0) {
			Page.click($('input[type="image"]', el));
			return true;
		}
	});
	return true;
};

/********** Worker.Arena() **********
* Build your arena army
* Auto-attack Arena targets
*/
var Arena = new Worker('Arena', 'battle_arena');
Arena.data = {
	user:{}
};

Arena.option = {
	enabled:false,
	general:true,
	losses:5,
	cache:50,
	type:'Invade',
	army:1.1
};

Arena.rank = {
	Brawler:1,
	Swordsman:2,
	Warrior:3,
	Gladiator:4,
	Hero:5,
	Legend:6
};

Arena.knar = {
	1:'Brawler',
	2:'Swordsman',
	3:'Warrior',
	4:'Gladiator',
	5:'Hero',
	6:'Legend'
};

Arena.display = [
	{
		label:'NOTE: Make sure this is disabled if you are not fighting and drag into order relative to the Monster panel!'
	},{
		id:'enabled',
		label:'Arena Enabled',
		checkbox:true
	},{
		id:'general',
		label:'Use Best General',
		checkbox:true
	},{
		id:'type',
		label:'Battle Type',
		select:['Invade', 'Duel']
	},{
		id:'bp',
		label:'Higher Relative Rank<br>(Clears Cache)',
		select:['Always', 'Never', 'Don\'t Care']
	},{
		advanced:true,
		id:'losses',
		label:'Attack Until',
		select:[1,2,3,4,5,6,7,8,9,10],
		after:'Losses'
	},{
		advanced:true,
		id:'cache',
		label:'Limit Cache Length',
		select:[50,100,150,200,250]
	},{
		id:'army',
		label:'Target Army Ratio<br>(Only needed for Invade)',
		select:['Any', 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
		help:'Smaller number for smaller target army. Reduce this number if you\'re losing in Invade'
	}
];

Arena.parse = function(change) {
	var data = this.data.user;
	if (this.option.attacking) {
		uid = this.option.attacking;
		this.option.attacking = null;
		if ($('div.results').text().match(/You cannot battle someone in your army/i)) {
			delete data[uid];
		} else if ($('div.results').text().match(/Your opponent is dead or too weak/i)) {
			data[uid].hide = (data[uid].hide || 0) + 1;
			data[uid].dead = Date.now();
		} else if ($('img[src*="battle_victory"]').length) {
			data[uid].win = (data[uid].win || 0) + 1;
		} else if ($('img[src*="battle_defeat"]').length) {
			data[uid].loss = (data[uid].loss || 0) + 1;
		} else {
			this.option.attacking = uid; // Don't remove target as we've not hit them...
		}
	}
	this.data.rank = $('#app'+APPID+'_arena_body img[src*="arena_rank"]').attr('src').regex(/arena_rank([0-9]+).gif/i);
	$('#app'+APPID+'_arena_body table tr:odd').each(function(i,el){
		var uid = $('img[uid!==""]', el).attr('uid'), info = $('td.bluelink', el).text().trim().regex(/Level ([0-9]+) (.*)/i), rank;
		if (!uid || !info) {
			return;
		}
		rank = Arena.rank[info[1]];
		if ((Arena.option.bp === 'Always' && Arena.data.rank > rank) || (!Arena.option.bp === 'Never' && Arena.data.rank < rank)) {
			return;
		}
		data[uid] = data[uid] || {};
		data[uid].name = $('a', el).text().trim();
		data[uid].level = info[0];
		data[uid].rank = rank;
		data[uid].army = $('td.bluelink', el).next().text().regex(/([0-9]+)/);
	});
	return false;
};

Arena.update = function(type) {
	var i, list = [], data = this.data.user, army = Player.get('army');
	// First make check our target list doesn't need reducing
	for (i in data) { // Forget low or high rank - no points or too many points
		if ((this.option.bp === 'Always' && this.data.rank > data[i].rank) || (!this.option.bp === 'Never' && this.data.rank < data[i].rank)) {
			delete data[i];
		}
	}
	if (length(data) > this.option.cache) { // Need to prune our attack cache
//		debug('Arena: Pruning target cache');
		for (i in data) {
			list.push(i);
		}
		list.sort(function(a,b) {
			var weight = 0;
				 if (((data[a].win || 0) - (data[a].loss || 0)) < ((data[b].win || 0) - (data[b].loss || 0))) { weight += 10; }
			else if (((data[a].win || 0) - (data[a].loss || 0)) > ((data[b].win || 0) - (data[b].loss || 0))) { weight -= 10; }
			if (Arena.option.bp === 'Always') { weight += (data[b].rank - data[a].rank); }
			if (Arena.option.bp === 'Never') { weight += (data[a].rank - data[b].rank); }
			weight += Math.range(-1, (data[b].hide || 0) - (data[a].hide || 0), 1);
			weight += Math.range(-10, ((data[a].army - data[b].army) / 10), 10);
			weight += Math.range(-10, ((data[a].level - data[b].level) / 10), 10);
			return weight;
		});
		while (list.length > this.option.cache) {
			delete data[list.pop()];
		}
	}
	// Second choose our next target
	if (!this.option.attacking || !data[this.option.attacking] || (this.option.army !== 'Any' && (data[this.option.attacking].army / army) > this.option.army)) {
		list = [];
		for (i in data) {
			if ((data[i].dead && data[i].dead + 1800000 >= Date.now()) // If they're dead ignore them for 3m * 10hp = 30 mins
			|| (data[i].loss || 0) - (data[i].win || 0) >= this.option.losses // Don't attack someone who wins more often
			|| (this.option.army !== 'Any' && (data[i].army / army) > this.option.army)) {
				continue;
			}
			list.push(i);
		}
		if (list.length) {
			i = this.option.attacking = list[Math.floor(Math.random() * list.length)];
			Dashboard.status(this, 'Next Target: ' + data[i].name + ' (Level ' + data[i].level + ' ' + this.knar[data[i].rank] + '), ' + list.length + ' / ' + length(data) + ' targets');
		} else {
			this.option.attacking = null;
			Dashboard.status(this);
		}
	}
}

Arena.work = function(state) {
	if (!this.option.enabled || Player.get('health') <= 10 || Queue.burn.stamina < 5) {
		return false;
	}
	if (!state || this.option.general && !Generals.to(Generals.best(this.option.type)) || !Page.to('battle_arena')) {
		return true;
	}
	var uid = this.option.attacking;
	debug('Arena: Wanting to attack '+this.data.user[uid].name+' ('+uid+')');
	$form = $('form input[alt="'+this.option.type+'"]').first().parents('form');
	if (!$form.length) {
		log('Arena: Unable to find attack buttons, forcing reload');
		Page.to('index');
	} else {
		$('input[name="target_id"]', $form).attr('value', uid);
		Page.click($('input[type="image"]', $form));
	}
	return true;
};

Arena.order = [];
Arena.dashboard = function(sort, rev) {
	var i, o, list = [], output = [], sorttype = ['rank', 'name', 'level', 'army', 'win', 'loss', 'hide'], data = this.data.user, army = Player.get('army');
	if (typeof sort === 'undefined') {
		this.order = [];
		for (i in data) {
			this.order.push(i);
		}
		sort = 1; // Default = sort by name
	}
	if (typeof sorttype[sort] === 'string') {
		this.order.sort(function(a,b) {
			var aa = (data[a][sorttype[sort]] || 0), bb = (data[b][sorttype[sort]] || 0);
			if (typeof aa === 'string' || typeof bb === 'string') {
				return (rev ? bb > aa : bb < aa);
			}
			return (rev ? aa - bb : bb - aa);
		});
	}

	list.push('<div style="text-align:center;"><strong>Rank:</strong> ' + this.knar[this.data.rank] + ' (' + this.data.rank + '), <strong>Targets:</strong> ' + length(data) + ' / ' + this.option.cache + '</div><hr>');
	th(output, 'Rank');
	th(output, 'Name');
	th(output, 'Level');
	th(output, 'Army');
	th(output, 'Wins');
	th(output, 'Losses');
	th(output, 'Hides');
	list.push('<table cellspacing="0" style="width:100%"><thead><tr>' + output.join('') + '</tr></thead><tbody>');
	for (o=0; o<this.order.length; o++) {
		data = this.data.user[this.order[o]];
		output = [];
		td(output, '<img style="width:22px;height:22px;" src="' + imagepath + 'arena_rank' + data.rank+'.gif">', 'title="' + this.knar[data.rank] + ' (Rank ' + data.rank + ')"');
		th(output, data.name, 'title="'+i+'"');
		td(output, data.level);
		td(output, (this.option.army !== 'Any' && (data.army / army) > this.option.army) ? '<i>'+data.army+'</i>' : data.army);
		td(output, data.win || '');
		td(output, data.loss || '');
		td(output, data.hide || '');
		tr(list, output.join(''));
	}
	list.push('</tbody></table>');
	$('#golem-dashboard-Arena').html(list.join(''));
	if (typeof sort !== 'undefined') {
		$('#golem-dashboard-Arena thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	}
};

/********** Worker.Bank **********
* Auto-banking
*/
var Bank = new Worker('Bank', null);
Bank.data = null;
Bank.option = {
	general: true,
	above: 10000,
	hand: 0,
	keep: 10000
};
Bank.display = [
	{
		id:'general',
		label:'Use Best General',
		checkbox:true
	},{
		id:'above',
		label:'Bank Above',
		text:true
	},{
		id:'hand',
		label:'Keep in Cash',
		text:true
	},{
		id:'keep',
		label:'Keep in Bank',
		text:true
	}
];

Bank.work = function(state) {
	if (Player.get('cash') < this.option.above) {
		return false;
	}
	if (!state) {
		return true;
	}
	if (!Bank.stash(Player.get('cash') - Math.min(this.option.above, this.option.hand))) {
		return true;
	}
	return false;
};

Bank.stash = function(amount) {
	if (!amount || !Player.get('cash') || Math.min(Player.get('cash'),amount) <= 10) {
		return true;
	}
	if (Bank.option.general && !Generals.to('Aeris')) {
		return false;
	}
	if (!Page.to('keep_stats')) {
		return false;
	}
	$('input[name="stash_gold"]').val(Math.min(Player.get('cash'), amount));
	Page.click('input[value="Stash"]');
	return true;
};

Bank.retrieve = function(amount) {
	amount -= Player.get('cash');
	if (amount <= 0) {
		return true;
	}
	if ((Player.get('bank') - this.option.keep) < amount) {
		return true; // Got to deal with being poor...
	}
	if (!Page.to('keep_stats')) {
		return false;
	}
	$('input[name="get_gold"]').val(amount.toString());
	Page.click('input[value="Retrieve"]');
	return true;
};

Bank.worth = function(amount) { // Anything withdrawing should check this first!
	var worth = Player.get('cash') + Math.max(0,Player.get('bank') - Bank.option.keep);
	if (typeof amount === 'number') {
		return (amount <= worth);
	}
	return worth;
};

/********** Worker.Battle **********
* Battling other players (NOT raid)
*/
var Battle = new Worker('Battle', 'battle_rank battle_battle');
Battle.data = {
	user: {},
	rank: {},
	points: {}
};
Battle.option = {
	general: true,
	points: true,
	monster: true,
	arena:true,
	losses: 5,
	type: 'Invade',
	bp: 'Always'
};

Battle.symbol = {
	1:"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%16%00%00%00%16%08%03%00%00%00%F3j%9C%09%00%00%00%18PLTE%17%90%B3%1AIn%99%AD%B0%3F%5Erj%7F%8A4%40J%22*1%FF%FF%FFm%0F%82%CD%00%00%00%08tRNS%FF%FF%FF%FF%FF%FF%FF%00%DE%83%BDY%00%00%00%ABIDATx%DAl%91%0B%0E%04!%08CAh%E7%FE7%DE%02%BA3%FBib%A2O%A8%02vm%91%00xN%B6%A1%10%EB%86O%0C%22r%AD%0Cmn%0C%8A%8Drxa%60-%B3p%AF%8C%05%0C%06%15d%E6-%5D%90%8D%E5%90~%B0x%A20e%117%0E%D9P%18%A1%60w%F3%B0%1D%1E%18%1C%85m'D%B9%08%E7%C6%FE%0F%B7%CF%13%C77%1Eo%F4%93%05%AA%24%3D%D9%3F%E1%DB%25%8E%07%BB%CA%D8%9C%8E%FE6%A6J%B9%1F%FB%DAa%8A%BFNW3%B5%9ANc%D5%FEn%9El%F7%20%F6tt%8C%12%F01%B4%CE%F8%9D%E5%B7%5E%02%0C%00n%97%07%B1AU%81%B7%00%00%00%00IEND%AEB%60%82",
	2:"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%16%00%00%00%16%08%03%00%00%00%F3j%9C%09%00%00%00%18PLTE%E0%0D%0CZ%5B%5Bv%13%0F%2F%1A%16%7Byx%8941DB%3F%FF%FF%FFOmpc%00%00%00%08tRNS%FF%FF%FF%FF%FF%FF%FF%00%DE%83%BDY%00%00%00%B4IDATx%DAT%D1%5B%12%C5%20%08%03P%08%C2%DD%FF%8Eo%12%EB%D8%F2%D1%C7%C1%01%C5%F8%3DQ%05T%9D%BFxP%C6%07%EA%CDF%07p%998%B9%14%C3%C4aj%AE%9CI%A5%B6%875zFL%0F%C8%CD%19vrG%AC%CD%5C%BC%C6nM%D57'%EB%CA%AD%EC%C2%E5b%B5%93%5B%E9%97%99%40D%CC%97sw%DB%FByqwF%83u%FA%F2%C8%A3%93u%A0%FD%8C%B8%BA%96NAn%90%17%C1%C7%E1'%D7%F2%85%01%D4%DC%A7d%16%EDM2%1A%C3%C5%1E%15%7DX%C7%23%19%EB%1El%F5h%B2lV%5B%CF%ED%A0w%89~%AE'%CE%ED%01%F7%CA%5E%FC%8D%BF%00%03%00%AA%CE%08%23%FB4h%C4%00%00%00%00IEND%AEB%60%82",
	3:"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%16%00%00%00%16%08%03%00%00%00%F3j%9C%09%00%00%00%18PLTE%B1%98g%DE%BCyqpq%8CnF%12%11%0EME7y8%0B%FF%FF%FF6%A1%E73%00%00%00%08tRNS%FF%FF%FF%FF%FF%FF%FF%00%DE%83%BDY%00%00%00%B7IDATx%DA%5C%91Y%16C!%0CB%C9%40%BA%FF%1D%17%7Cz%9Em%BE%F4%8A%19%08%3E%3BX%40%F1%DC%B0%A1%99_xcT%EF(%BC8%D8%CC%9A%A9%D4!%0E%0E%8Bf%863%FE%16%0F%06%5BR%22%02%1C%A0%89%07w%E6T%AC%A8A%F6%C2%251_%9CPG%C2%A1r7N%CB%E1%1CtN%E7%06%86%7F%B85%8B%1A%22%2F%AC%3E%D4%B2_.%9C%C6%EA%B3%E2%C6%BB%24%CA%25uY%98%D5H%0D%EE%922%40b%19%09%CFNs%99%C8Y%E2XS%D2%F3*%0F7%B5%B9%B6%AA%16_%0E%9A%D61V%DCu-%E5%A2g%3BnO%C1%B3%1E%9C%EDiax%94%3F%F87%BE%02%0C%00%98%F2%07%E0%CE%8C%E4%B1%00%00%00%00IEND%AEB%60%82",
	4:"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%16%00%00%00%16%08%03%00%00%00%F3j%9C%09%00%00%00%18PLTE%90%CA%3CSTRq%9B5On*%10%13%0Dx%7Ct6B'%FF%FF%FFx%0A%94%CE%00%00%00%08tRNS%FF%FF%FF%FF%FF%FF%FF%00%DE%83%BDY%00%00%00%B2IDATx%DAT%D1A%16%C4%20%08%03P%20%92%B9%FF%8D'%80%B5%96%85%AF~%95*%D8o%07%09%90%CF%CC6%96%F5%CA%CD%E0%DAA%BC%0CM%B3C%CBxX%9A%E9%15Z%18%B7QW%E2%DB%9B%3D%E0%CD%99%11%18V%3AM%02%CD%FA%08.%8A%B5%D95%B1%A0%A7%E9Ci%D0%9Cb3%034D%F8%CB(%EE%F8%F0%F1%FA%C5ae9%BB%FD%B0%A7%CF%F9%1Au%9FfR%DB%A3%A19%179%CFa%B1%8E%EB*%91%BE_%B9*M%A9S%B7%97%AE)%15%B5%3F%BAX%A9%0Aw%C9m%9A%A0%CA%AA%20%5Eu%E5%D5%1DL%23%D4%9Eu7%AD%DBvZv%F17%FE%02%0C%00%D3%0A%07%E1%0961%CF%00%00%00%00IEND%AEB%60%82",
	5:"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%16%00%00%00%16%08%03%00%00%00%F3j%9C%09%00%00%00%18PLTE%F2%F2%EF!!%20%A5%A5%A3vvv%5BZZ%3D%3D%3B%00%00%00%FF%FF%FF.%C4%F9%B3%00%00%00%08tRNS%FF%FF%FF%FF%FF%FF%FF%00%DE%83%BDY%00%00%00%BEIDATx%DA%5C%91Q%92%C30%08C%11B%DE%FB%DFx%25%C7n3%E5%23%E3%3Cd%01%A6%FEN%00%12p%FF%EA%40%A3%05%A7%F0%C6%C2%0A%CCW_%AC%B5%C4%1D9%5D%EC39%09'%B0y%A5%D8%E2H%5D%D53%DDH%E1%E05%A6%9A2'%9Bkcw%40%E9%C5e%5Ev%B6g%E4%B1)%DA%DF%EEQ%D3%A0%25Vw%EC%B9%D5)%C8%5Cob%9C%1E%E2%E2%D8%16%F1%94%F8%E0-%AF%B9%F8x%CB%F2%FE%C8g%1Eo%A03w%CA%86%13%DB%C4%1D%CA%7C%B7%E8w%E4d%FAL%E9%CE%9B%F3%F0%D0g%F8%F0%AD%CFSyD%DC%875%87%3B%B0%D1%5D%C4%D9N%5C%13%3A%EB%A9%F7.%F5%BB%CB%DF%F8%17%60%00%EF%2F%081%0F%2BNZ%00%00%00%00IEND%AEB%60%82"
};
Battle.demi = {
	1:'Ambrosia',
	2:'Malekus',
	3:'Corvintheus',
	4:'Aurora',
	5:'Azeron'
};

Battle.display = [
	{
		id:'general',
		label:'Use Best General',
		checkbox:true
	},{
		id:'type',
		label:'Battle Type',
		select:['Invade', 'Duel']
	},{
		id:'losses',
		label:'Attack Until',
		select:[1,2,3,4,5,6,7,8,9,10],
		after:'Losses'
	},{
		id:'points',
		label:'Always Get Demi-Points',
		checkbox:true
	},{
		advanced:true,
		id:'arena',
		label:'Fight in Arena First',
		checkbox:true,
		help:'Only if the Arena is enabled!'
	},{
		advanced:true,
		id:'monster',
		label:'Fight Monsters First',
		checkbox:true
	},{
		id:'bp',
		label:'Get Battle Points<br>(Clears Cache)',
		select:['Always', 'Never', 'Don\'t Care']
	},{
		advanced:true,
		id:'cache',
		label:'Limit Cache Length',
		select:[100,200,300,400,500]
	},{
		id:'army',
		label:'Target Army Ratio<br>(Only needed for Invade)',
		select:['Any', 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
		help:'Smaller number for smaller target army. Reduce this number if you\'re losing in Invade'
	}
];

Battle.parse = function(change) {
	var data, uid;
	if (Page.page === 'battle_rank') {
		data = {0:{name:'Squire',points:0}};
		$('tr[height="23"]').each(function(i,el){
			var info = $(el).text().regex(/Rank ([0-9]+) - (.*)\s*([0-9]+)/i);
			data[info[0]] = {name:info[1], points:info[2]};
		});
		if (length(data) > length(this.data.rank)) {
			this.data.rank = data;
		}
	} else if (Page.page === 'battle_battle') {
		data = this.data.user;
		if (this.option.attacking) {
			uid = this.option.attacking;
			this.option.attacking = null;
			if ($('div.results').text().match(/You cannot battle someone in your army/i)) {
				delete data[uid];
			} else if ($('div.results').text().match(/Your opponent is dead or too weak/i)) {
				data[uid].hide = (data[uid].hide || 0) + 1;
				data[uid].dead = Date.now();
			} else if ($('img[src*="battle_victory"]').length) {
				data[uid].win = (data[uid].win || 0) + 1;
			} else if ($('img[src*="battle_defeat"]').length) {
				data[uid].loss = (data[uid].loss || 0) + 1;
			} else {
				this.option.attacking = uid; // Don't remove target as we've not hit them...
			}
		}
		this.data.points = $('#app'+APPID+'_app_body table.layout table table').prev().text().replace(/[^0-9\/]/g ,'').regex(/([0-9]+)\/10([0-9]+)\/10([0-9]+)\/10([0-9]+)\/10([0-9]+)\/10/);
		$('#app'+APPID+'_app_body table.layout table table tr:even').each(function(i,el){
			var uid = $('img[uid!==""]', el).attr('uid'), info = $('td.bluelink', el).text().trim().regex(/Level ([0-9]+) (.*)/i), rank;
			if (!uid || !info) {
				return;
			}
			rank = Battle.rank(info[1]);
			if ((Battle.option.bp === 'Always' && Player.get('rank') - rank > 5) || (!Battle.option.bp === 'Never' && Player.get('rank') - rank <= 5)) {
				return;
			}
			if (!data[uid]) {
				data[uid] = {};
			}
			data[uid].name = $('a', el).text().trim();
			data[uid].level = info[0];
			data[uid].rank = rank;
			data[uid].army = $('td.bluelink', el).next().text().regex(/([0-9]+)/);
			data[uid].align = $('img[src*="graphics/symbol_"]', el).attr('src').regex(/symbol_([0-9])/i);
		});
	}
	return false;
};

Battle.update = function(type) {
	var i, data = this.data.user, list = [], points = [], army = Player.get('army');
	// First make check our target list doesn't need reducing
	for (i in data) { // Forget low or high rank - no points or too many points
		if ((this.option.bp === 'Always' && Player.get('rank') - data[i].rank > 5) || (!this.option.bp === 'Never' && Player.get('rank') - data[i].rank <= 5)) {
			delete data[i];
		}
	}
	if (length(this.data.user) > this.option.cache) { // Need to prune our attack cache
//		debug('Battle: Pruning target cache');
		for (i in data) {
			list.push(i);
		}
		list.sort(function(a,b) {
			var weight = 0;
				 if (((data[a].win || 0) - (data[a].loss || 0)) < ((data[b].win || 0) - (data[b].loss || 0))) { weight += 10; }
			else if (((data[a].win || 0) - (data[a].loss || 0)) > ((data[b].win || 0) - (data[b].loss || 0))) { weight -= 10; }
			if (Battle.option.bp === 'Always') { weight += (data[b].rank - data[a].rank) / 2; }
			if (Battle.option.bp === 'Never') { weight += (data[a].rank - data[b].rank) / 2; }
			weight += Math.range(-1, (data[b].hide || 0) - (data[a].hide || 0), 1);
			weight += Math.range(-10, ((data[a].army - data[b].army) / 10), 10);
			weight += Math.range(-10, ((data[a].level - data[b].level) / 10), 10);
			return weight;
		});
		while (list.length > Battle.option.cache) {
			delete data[list.pop()];
		}
	}
	// Second choose our next target
	if (!this.option.attacking || !data[this.option.attacking] || (this.option.army !== 'Any' && (data[this.option.attacking].army / army) > this.option.army)) {
		if (this.option.points) {
			for (i=0; i<this.data.points.length; i++) {
				if (this.data.points[i] < 10) {
					points[i+1] = true;
				}
			}
		}
		list = [];
		for (i in data) {
			if ((data[i].dead && data[i].dead + 1800000 >= Date.now()) // If they're dead ignore them for 3m * 10hp = 30 mins
			|| (data[i].loss || 0) - (data[i].win || 0) >= this.option.losses // Don't attack someone who wins more often
			|| (this.option.army !== 'Any' && (data[i].army / army) > this.option.army)
			|| (this.option.points && points.length && typeof points[data[i].align] === 'undefined')) {
				continue;
			}
			list.push(i);
		}
		debug('Battle: Finding target - '+list);
		if (list.length) {
			i = this.option.attacking = list[Math.floor(Math.random() * list.length)];
			Dashboard.status(this, 'Next Target: ' + data[i].name + ' (Level ' + data[i].level + ' ' + this.data.rank[data[i].rank].name + '), ' + list.length + ' / ' + length(data) + ' targets');
		} else {
			this.option.attacking = null;
			Dashboard.status(this);
		}
	}
}

Battle.work = function(state) {
	if (Player.get('health') <= 10 || Queue.burn.stamina < 1 || !this.option.attacking || (this.option.monster && Monster.count) || (this.option.arena && Arena.option.enabled)) {
		return false;
	}
	if (!state) {
		return true;
	}
	if (this.option.general && !Generals.to(Generals.best(this.option.type)) || !Page.to('battle_battle')) {
		return true;
	}
	var uid = this.option.attacking, $form = $('form input[alt="'+this.option.type+'"]').first().parents('form');
	debug('Battle: Wanting to attack ' + this.data.user[uid].name + ' (' + uid + ')');
	if (!$form.length) {
		log('Battle: Unable to find attack buttons, forcing reload');
		Page.to('index');
	} else {
		$('input[name="target_id"]', $form).attr('value', uid);
		Page.click($('input[type="image"]', $form));
	}
	return true;
};

Battle.rank = function(name) {
	for (var i in Battle.data.rank) {
		if (Battle.data.rank[i].name === name) {
			return parseInt(i, 10);
		}
	}
	return 0;
};

Battle.order = [];
Battle.dashboard = function(sort, rev) {
	var i, o, points = [0, 0, 0, 0, 0, 0], list = [], output = [], sorttype = ['align', 'name', 'level', 'rank', 'army', 'win', 'loss', 'hide'], data = this.data.user, army = Player.get('army');
	for (i in data) {
		points[data[i].align]++;
	}
	if (typeof sort === 'undefined') {
		this.order = [];
		for (i in data) {
			this.order.push(i);
		}
		sort = 1; // Default = sort by name
	}
	if (typeof sorttype[sort] === 'string') {
		this.order.sort(function(a,b) {
			var aa = (data[a][sorttype[sort]] || 0), bb = (data[b][sorttype[sort]] || 0);
			if (typeof aa === 'string' || typeof bb === 'string') {
				return (rev ? bb > aa : bb < aa);
			}
			return (rev ? aa - bb : bb - aa);
		});
	}
	list.push('<div style="text-align:center;"><strong>Rank:</strong> ' + this.data.rank[Player.get('rank')].name + ' (' + Player.get('rank') + '), <strong>Targets:</strong> ' + length(data) + ' / ' + this.option.cache + ', <strong>By Alignment:</strong>');
	for (i=1; i<6; i++ ) {
		list.push(' <img src="' + this.symbol[i] +'" alt="'+this.demi[i]+'" title="'+this.demi[i]+'"> ' + points[i]);
	}
	list.push('</div><hr>');
	th(output, 'Align');
	th(output, 'Name');
	th(output, 'Level');
	th(output, 'Rank');
	th(output, 'Army');
	th(output, 'Wins');
	th(output, 'Losses');
	th(output, 'Hides');
	list.push('<table cellspacing="0" style="width:100%"><thead><tr>' + output.join('') + '</tr></thead><tbody>');
	for (o=0; o<this.order.length; o++) {
		data = this.data.user[this.order[o]];
		output = [];
		td(output, '<img src="' + this.symbol[data.align] + '" alt="' + this.demi[data.align] + '">', 'title="' + this.demi[data.align] + '"');
		th(output, data.name, 'title="'+i+'"');
		td(output, data.level);
		td(output, this.data.rank[data.rank] ? this.data.rank[data.rank].name : '');
		td(output, (this.option.army !== 'Any' && (data.army / army) > this.option.army) ? '<i>'+data.army+'</i>' : data.army);
		td(output, data.win || '');
		td(output, data.loss || '');
		td(output, data.hide || '');
		tr(list, output.join(''));
	}
	list.push('</tbody></table>');
	$('#golem-dashboard-Battle').html(list.join(''));
	$('#golem-dashboard-Battle tbody tr td:nth-child(2)').css('text-align', 'left');
	if (typeof sort !== 'undefined') {
		$('#golem-dashboard-Battle thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	}
};

/********** Worker.Blessing **********
* Automatically receive blessings
*/
var Blessing = new Worker('Blessing', 'oracle_demipower');
Blessing.data = null;
Blessing.option = {
	which: 'Stamina',
	when:null
};
Blessing.which = ['None', 'Energy', 'Attack', 'Defense', 'Health', 'Stamina'];
Blessing.display = [{
	id:'which',
	label:'Which',
	select:Blessing.which
}];

Blessing.parse = function(change) {
	var result = $('div.results'), time;
	if (result.length) {
		time = result.text().regex(/Please come back in: ([0-9]+) hours and ([0-9]+) minutes/i);
		if (time && time.length) {
			this.option.when = Date.now() + (((time[0] * 60) + time[1] + 1) * 60000);
		} else if (result.text().match(/You have paid tribute to/i)) {
			this.option.when = Date.now() + 86460000; // 24 hours and 1 minute
		}
	}
	return false;
};

Blessing.work = function(state) {
	if (!this.option.which || this.option.which === 'None' || Date.now() <= this.option.when) {
		return false;
	}
	if (!state || !Page.to('oracle_demipower')) {
		return true;
	}
	Page.click('#app'+APPID+'_symbols_form_'+this.which.indexOf(this.option.which)+' input.imgButton');
	return true;
};

/********** Worker.Elite() **********
* Build your elite army
*/
var Elite = new Worker('Elite', 'keep_eliteguard army_viewarmy battle_arena');
Elite.data = {};
Elite.option = {
	fill:true,
	arena:false,
	every:24,
	prefer:[],
	waitfill:0,
	waitarena:0,
	nextfill:null,
	nextarena:null,
	armyperpage:25, // Read only, but if they change it and I don't notice...
	armylastpage:1,
	armyextra:0
};
Elite.display = [
	{
		id:'fill',
		label:'Fill Elite Guard',
		checkbox:true
	},{
		id:'arena',
		label:'Fill Arena Guard',
		checkbox:true
	},{
		id:'every',
		label:'Every',
		select:[1, 2, 3, 6, 12, 24],
		after:'hours'
	},{
		advanced:true,
		label:'Add UserIDs to prefer them over random army members. These <b>must</b> be in your army to be checked.'
	},{
		advanced:true,
		id:'prefer',
		multiple:'userid'
	}
];

Elite.init = function() { // Convert old elite guard list
	for(i in this.data) {
		if (typeof this.data[i] === 'number') {
			this.data[i] = {elite:this.data[i]};
		}
	}
};

Elite.parse = function(change) {
	$('span.result_body').each(function(i,el){
		if (Elite.option.nextarena) {
			if ($(el).text().match(/has not joined in the Arena!/i)) {
				Elite.data[Elite.option.nextarena].arena = -1;
			} else if ($(el).text().match(/Arena Guard, and they have joined/i)) {
				Elite.data[Elite.option.nextarena].arena = Date.now() + 86400000; // 24 hours
			} else if ($(el).text().match(/'s Arena Guard is FULL/i)) {
				Elite.data[Elite.option.nextarena].arena = Date.now() + 3600000; // 1 hour
			} else if ($(el).text().match(/YOUR Arena Guard is FULL/i)) {
				Elite.option.waitarena = Date.now();
				debug('Arena guard full, wait '+Elite.option.every+' hours');
			}
		}
		if ($(el).text().match(/Elite Guard, and they have joined/i)) {
			Elite.data[$('img', el).attr('uid')].elite = Date.now() + 86400000; // 24 hours
		} else if ($(el).text().match(/'s Elite Guard is FULL!/i)) {
			Elite.data[$('img', el).attr('uid')].elite = Date.now() + 3600000; // 1 hour
		} else if ($(el).text().match(/YOUR Elite Guard is FULL!/i)) {
			Elite.option.waitfill = Date.now();
			debug('Elite guard full, wait '+Elite.option.every+' hours');
		}
	});
	if (Page.page === 'army_viewarmy') {
		var count = 0;
		$('img[linked="true"][size="square"]').each(function(i,el){
			var uid = $(el).attr('uid'), who = $(el).parent().parent().next();
			count++;
			Elite.data[uid] = Elite.data[uid] || {};
			Elite.data[uid].name = $('a', who).text();
			Elite.data[uid].level = $(who).text().regex(/([0-9]+) Commander/i);
		});
		if (count < 25) {
			this.option.armyextra = Player.get('armymax') - length(this.data) - 1;
		}
	}
	return false;
};

Elite.update = function() {
	this.option.nextfill = this.option.nextarena = 0;
	for(j=0; j<this.option.prefer.length; j++) {
		i = this.option.prefer[j];
		if (!/[^0-9]/g.test(i) && this.data[i]) {
			if (!this.option.nextfill && (typeof this.data[i].elite !== 'number' || this.data[i].elite < Date.now())) {
				this.option.nextfill = i;
			}
			if (!this.option.nextarena && (typeof this.data[i].arena !== 'number' || (this.data[i].arena !== -1 && this.data[i].arena < Date.now()))) {
				this.option.nextarena = i;
			}
		}
	}
	for(i in this.data) {
		if (!this.option.nextfill && (typeof this.data[i].elite !== 'number' || this.data[i].elite < Date.now())) {
			this.option.nextfill = i;
		}
		if (!this.option.nextarena && (typeof this.data[i].arena !== 'number' || (this.data[i].arena !== -1 && this.data[i].arena < Date.now()))) {
			this.option.nextarena = i;
		}
	}
};

Elite.work = function(state) {
	var i, j, found = null;
	if (Math.ceil((Player.get('armymax') - this.option.armyextra - 1) / this.option.armyperpage) > this.option.armylastpage) {
		if (state) {
			debug('Elite: Filling army list');
			this.option.armylastpage = Math.max(this.option.armylastpage + 1, Math.ceil((length(this.data) + 1) / this.option.armyperpage));
			Page.to('army_viewarmy', '?page=' + this.option.armylastpage);
		}
		return true;
	}
	if ((!this.option.fill || (this.option.waitfill + (this.option.every * 3600000)) > Date.now()) && (!this.option.arena || (this.option.waitarena + (this.option.every * 3600000)) > Date.now())) {
		return false;
	}
	if (!state) {
		return true;
	}
	if (!this.option.nextfill && !this.option.nextarena && !length(this.data) && !Page.to('army_viewarmy')) {
		return true;
	}
	if ((this.option.waitfill + (this.option.every * 3600000)) <= Date.now()) {
		debug('Elite: Add Elite Guard member '+this.option.nextfill);
		if (!Page.to('keep_eliteguard', '?twt=jneg&jneg=true&user=' + this.option.nextfill)) {
			return true;
		}
	}
	if ((this.option.waitarena + (this.option.every * 3600000)) <= Date.now()) {
		debug('Elite: Add Arena Guard member '+this.option.nextarena);
		if (!Page.to('battle_arena', '?user=' + this.option.nextarena + '&lka=' + this.option.nextarena + '&agtw=1&ref=nf')) {
			return true;
		}
	}
	return false;
};

/********** Worker.Generals **********
* Updates the list of Generals
* Finds best General for other classes
* *** Need to take into account army size and real stats for attack and defense
*/
var Generals = new Worker('Generals', 'heroes_generals', {keep:true});

Generals.parse = function(change) {
	var data = this.data, $elements, i, attack, defend, army, gen_att, gen_def, iatt = 0, idef = 0, datt = 0, ddef = 0, change = false, listpush = function(list,i){list.push(i);};
	$elements = $('#app'+APPID+'_generalContainerBox2 > div > div.generalSmallContainer2')
	if ($elements.length < length(data)) {
		Page.to('heroes_generals', ''); // Force reload
		return false;
	}
	$elements.each(function(i,el){
		var $child = $(el).children(), name = $child.eq(0).text().trim(), level	= $child.eq(3).text().regex(/Level ([0-9]+)/i);
		if (name) {
			if (!data[name] || data[name].level !== level) {
				data[name] = data[name] || {};
				data[name].img		= $child.eq(1).find('input.imgButton').attr('src').filepart();
				data[name].att		= $child.eq(2).children().eq(0).text().regex(/([0-9]+)/);
				data[name].def		= $child.eq(2).children().eq(1).text().regex(/([0-9]+)/);
				data[name].level	= level; // Might only be 4 so far, however...
				data[name].skills	= $($child.eq(4).html().replace(/\<br\>|\s+|\n/g,' ')).text().trim();
				change = true;
			}
		}
	});
	if (change && length(Town.data.invade)) {
		for (i in data) {
			attack = Player.get('attack') + (data[i].skills.regex(/([-+]?[0-9]+) Player Attack/i) || 0) + (data[i].skills.regex(/Increase Player Attack by ([0-9]+)/i) || 0);
			defend = Player.get('defense') + (data[i].skills.regex(/([-+]?[0-9]+) Player Defense/i) || 0) + (data[i].skills.regex(/Increase Player Defense by ([0-9]+)/i) || 0);
			army = (data[i].skills.regex(/Increases? Army Limit to ([0-9]+)/i) || 501);
			gen_att = getAttDef(data, listpush, 'att', Math.floor(army / 5));
			gen_def = getAttDef(data, listpush, 'def', Math.floor(army / 5));
			data[i].invade = {
				att: Math.floor(Town.data.invade.attack + data[i].att + (data[i].def * 0.7) + ((attack + (defend * 0.7)) * army) + gen_att),
				def: Math.floor(Town.data.invade.defend + data[i].def + (data[i].att * 0.7) + ((defend + (data[i].skills.regex(/([-+]?[0-9]+) Defense when attacked/i) || 0) + (attack * 0.7)) * army) + gen_def)
			};
			data[i].duel = {
				att: Math.floor(Town.data.duel.attack + data[i].att + (data[i].def * 0.7) + attack + (defend * 0.7)),
				def: Math.floor(Town.data.duel.defend + data[i].def + (data[i].att * 0.7) + defend + (data[i].skills.regex(/([-+]?[0-9]+) Defense when attacked/i) || 0) + (attack * 0.7))
			};
		}
	}
	return false;
};

Generals.update = function(type) {
	$('select.golem_generals').each(function(a,el){
		$(el).empty();
		var i, tmp = $(el).attr('id').slice(PREFIX.length).regex(/([^_]*)_(.*)/i), value = tmp ? WorkerByName(tmp[0]).option[tmp[1]] : null, list = Generals.list();
		for (i in list) {
			$(el).append('<option value="'+list[i]+'"'+(list[i]===value ? ' selected' : '')+'>'+list[i]+'</value>');
		}
	});
};

Generals.to = function(name) {
	if (!name || Player.get('general') === name || name === 'any') {
		return true;
	}
	if (!Generals.data[name]) {
		log('General "'+name+'" requested but not found!');
		return true; // Not found, so fake it
	}
	if (!Page.to('heroes_generals')) {
		return false;
	}
	debug('Changing to General '+name);
	Page.click('input[src$="'+Generals.data[name].img+'"]');
	return false;
};

Generals.best = function(type) {
	if (!Generals.data) {
		return 'any';
	}
	var rx = '', best = null, bestval = 0, i, value;
	switch(type.toLowerCase()) {
		case 'cost':		rx = /Decrease Soldier Cost by ([0-9]+)/i; break;
		case 'stamina':		rx = /Increase Max Stamina by ([0-9]+)|\+([0-9]+) Max Stamina/i; break;
		case 'energy':		rx = /Increase Max Energy by ([0-9]+)|\+([0-9]+) Max Energy/i; break;
		case 'income':		rx = /Increase Income by ([0-9]+)/i; break;
		case 'item':		rx = /Chance +([0-9]+)% Drops for Quest/i; break;
		case 'influence':	rx = /Bonus Influence ([0-9]+)/i; break;
		case 'attack':		rx = /([-+]?[0-9]+) Player Attack/i; break;
		case 'defense':		rx = /([-+]?[0-9]+) Player Defense/i; break;
		case 'invade':
			for (i in Generals.data) {
				if (!best || (Generals.data[i].invade && Generals.data[i].invade.att > Generals.data[best].invade.att) || (Generals.data[i].invade && Generals.data[i].invade.att === Generals.data[best].invade.att && best !== Player.get('general'))) {
					best = i;
				}
			}
			return (best || 'any');
		case 'duel':
			for (i in Generals.data) {
				if (!best || (Generals.data[i].duel && Generals.data[i].duel.att > Generals.data[best].duel.att) || (Generals.data[i].duel && Generals.data[i].duel.att === Generals.data[best].duel.att && best !== Player.get('general'))) {
					best = i;
				}
			}
			return (best || 'any');
		case 'defend':
			for (i in Generals.data) {
				if (!best || (Generals.data[i].duel && Generals.data[i].duel.def > Generals.data[best].duel.def) || (Generals.data[i].duel && Generals.data[i].duel.def === Generals.data[best].duel.def && best !== Player.get('general'))) {
					best = i;
				}
			}
			return (best || 'any');
		case 'under level 4':
			if (Generals.data[Player.get('general')] && Generals.data[Player.get('general')].level < 4) {
				return Player.get('general');
			}
			return Generals.random(false);
		default:
			return 'any';
	}
	for (i in Generals.data) {
		value = Generals.data[i].skills.regex(rx);
		if (value) {
			if (!best || value>bestval) {
				best = i;
				bestval = value;
			}
		}
	}
	if (best) {
		debug('Best general found: '+best);
	}
	return best;
};

Generals.random = function(level4) { // Note - true means *include* level 4
	var i, list = [];
	for (i in Generals.data) {
		if (level4) {
			list.push(i);
		} else if (Generals.data[i].level < 4) {
			list.push(i);
		}
	}
	if (list.length) {
		return list[Math.floor(Math.random()*list.length)];
	} else {
		return 'any';
	}
};

Generals.list = function(opts) {
	var i, value, list = [];
	if (!opts) {
		for (i in Generals.data) {
			list.push(i);
		}
		list.sort();
	} else if (opts.find) {
		for (i in Generals.data) {
			if (Generals.data[i].skills.indexOf(opts.find) >= 0) {
				list.push(i);
			}
		}
	} else if (opts.regex) {
		for (i in Generals.data) {
			value = Generals.data[i].skills.regex(opts.regex);
			if (value) {
				list.push([i, value]);
			}
		}
		list.sort(function(a,b) {
			return b[1] - a[1];
		});
//		for (var i in list) list[i] - list[i][0];
	}
	list.unshift('any');
	return list;
};

Generals.order = [];
Generals.dashboard = function(sort, rev) {
	var i, o, output = [], list = [], iatt = 0, idef = 0, datt = 0, ddef = 0;

	if (typeof sort === 'undefined') {
		Generals.order = [];
		for (i in Generals.data) {
			Generals.order.push(i);
		}
		sort = 1; // Default = sort by name
	}
	if (typeof sort !== 'undefined') {
		Generals.order.sort(function(a,b) {
			var aa, bb, type, x;
			if (sort == 1) {
				aa = a;
				bb = b;
			} else if (sort == 2) {
				aa = (Generals.data[a].level || 0);
				bb = (Generals.data[b].level || 0);
			} else {
				type = (sort<5 ? 'invade' : 'duel');
				x = (sort%2 ? 'att' : 'def');
				aa = (Generals.data[a][type][x] || 0);
				bb = (Generals.data[b][type][x] || 0);
			}
			if (typeof aa === 'string' || typeof bb === 'string') {
				return (rev ? bb > aa : bb < aa);
			}
			return (rev ? aa - bb : bb - aa);
		});
	}
	for (i in Generals.data) {
		iatt = Math.max(iatt, Generals.data[i].invade ? Generals.data[i].invade.att : 1);
		idef = Math.max(idef, Generals.data[i].invade ? Generals.data[i].invade.def : 1);
		datt = Math.max(datt, Generals.data[i].duel ? Generals.data[i].duel.att : 1);
		ddef = Math.max(ddef, Generals.data[i].duel ? Generals.data[i].duel.def : 1);
	}
	list.push('<table cellspacing="0" style="width:100%"><thead><tr><th></th><th>General</th><th>Level</th><th>Invade<br>Attack</th><th>Invade<br>Defend</th><th>Duel<br>Attack</th><th>Duel<br>Defend</th></tr></thead><tbody>');
	for (o=0; o<Generals.order.length; o++) {
		i = Generals.order[o];
		output = [];
		output.push('<img src="' + imagepath + Generals.data[i].img+'" style="width:25px;height:25px;" title="' + Generals.data[i].skills + '">');
		output.push(i);
		output.push(Generals.data[i].level);
		output.push(Generals.data[i].invade ? (iatt == Generals.data[i].invade.att ? '<strong>' : '') + addCommas(Generals.data[i].invade.att) + (iatt == Generals.data[i].invade.att ? '</strong>' : '') : '?')
		output.push(Generals.data[i].invade ? (idef == Generals.data[i].invade.def ? '<strong>' : '') + addCommas(Generals.data[i].invade.def) + (idef == Generals.data[i].invade.def ? '</strong>' : '') : '?');
		output.push(Generals.data[i].duel ? (datt == Generals.data[i].duel.att ? '<strong>' : '') + addCommas(Generals.data[i].duel.att) + (datt == Generals.data[i].duel.att ? '</strong>' : '') : '?');
		output.push(Generals.data[i].duel ? (ddef == Generals.data[i].duel.def ? '<strong>' : '') + addCommas(Generals.data[i].duel.def) + (ddef == Generals.data[i].duel.def ? '</strong>' : '') : '?');
		list.push('<tr><td>' + output.join('</td><td>') + '</td></tr>');
	}
	list.push('</tbody></table>');
	$('#golem-dashboard-Generals').html(list.join(''));
	$('#golem-dashboard-Generals thead th').css('cursor', 'pointer').click(function(event){
		Generals.dashboard($(this).prevAll().length, $(this).attr('name')==='sort');
	});
	$('#golem-dashboard-Generals tbody tr td:nth-child(2)').css('text-align', 'left');
	if (typeof sort !== 'undefined') {
		$('#golem-dashboard-Generals thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	}
}

/********** Worker.Gift() **********
* Auto accept gifts and return if needed
* *** Needs to talk to Alchemy to work out what's being made
*/
var Gift = new Worker('Gift', 'index army_invite army_gifts', {keep:true});
Gift.data = {
	uid: [],
	todo: {},
	gifts: {}
};
Gift.option = {
	type:'None',
	work:false
};
Gift.display = [
	{
		label:'Work in progress...'
	},{
		id:'type',
		label:'Return Gifts',
		select:['None', 'Random', 'Same as Received']
	}
];
Gift.lookup = {
	'eq_gift_mystic_mystery.jpg':	'Mystic Armor',
	'eq_drakehelm_mystery.jpg':		'Drake Helm',
	'gift_angel_mystery2.jpg':		'Battle Of Dark Legion',
	'alchemy_serpent_mystery.jpg':	'Serpentine Shield',
	'alchemy_horn_mystery.jpg':		'Poseidons Horn',
	'gift_sea_egg_mystery.jpg':		'Sea Serpent',
	'gift_egg_mystery.jpg':			'Dragon',
	'gift_druid_mystery.jpg':		'Whisper Bow',
	'gift_armor_mystery.jpg':		'Golden Hand',
	'mystery_frost_weapon.jpg':		'Frost Tear Dagger',
	'eq_mace_mystery.jpg':			'Morning Star'
};

Gift.parse = function(change) {
	if (change) {
		return false;
	}
	var uid, gifts;
	if (Page.page === 'index') {
		// If we have a gift waiting it doesn't matter from whom as it gets parsed on the right page...
		if (!this.data.uid.length && $('span.result_body').text().indexOf('has sent you a gift') >= 0) {
			this.data.uid.push(1);
		}
	} else if (Page.page === 'army_invite') {
		// Accepted gift first
		debug('Gift: Checking for accepted');
		if (this.data.lastgift) {
			if ($('div.result').text().indexOf('accepted the gift') >= 0) {
				uid = this.data.lastgift;
				if (!this.data.todo[uid].gifts) {
					this.data.todo[uid].gifts = [];
				}
				this.data.todo[uid].gifts.push($('div.result img').attr('src').filepart());
				this.data.lastgift = null;
			}
		}
		// Check for gifts
		debug('Gift: Checking for new gift to accept');
		uid = this.data.uid = [];
		if ($('div.messages').text().indexOf('gift') >= 0) {
			debug('Gift: Found gift div');
			$('div.messages img').each(function(i,el) {
				uid.push($(el).attr('uid'));
				debug('Gift: Adding gift from '+$(el).attr('uid'));
			});
		}
	} else if (Page.page === 'army_gifts') {
		gifts = this.data.gifts = {};
//		debug('Gifts found: '+$('#app'+APPID+'_giftContainer div[id^="app'+APPID+'_gift"]').length);
		$('#app'+APPID+'_giftContainer div[id^="app'+APPID+'_gift"]').each(function(i,el){
//			debug('Gift adding: '+$(el).text()+' = '+$('img', el).attr('src'));
			var id = $('img', el).attr('src').filepart(), name = $(el).text().trim().replace('!','');
			if (!gifts[id]) {
				gifts[id] = {};
			}
			gifts[id].name = name;
			if (this.lookup[name]) {
				gifts[id].create = this.lookup[name];
			}
		});
	}
	return false;
};

Gift.work = function(state) {
	if (!state) {
		if (!this.data.uid.length) {
			return false;
		}
		return true;
	}
	if (this.data.uid.length) { // Receive before giving
		if (!Page.to('army_invite')) {
			return true;
		}
		var uid = this.data.uid.shift();
		if (!this.data.todo[uid]) {
			this.data.todo[uid] = {};
		}
		this.data.todo[uid].time = Date.now();
		this.data.lastgift = uid;
		debug('Gift: Accepting gift from '+uid);
		if (!Page.to('army_invite', '?act=acpt&rqtp=gift&uid=' + uid) || this.data.uid.length > 0) {
			return true;
		}
	}
	Page.to('keep_alchemy');
	return false;
};

/********** Worker.Heal **********
* Auto-Heal above a stamina level
* *** Needs to check if we have enough money (cash and bank)
*/
var Heal = new Worker('Heal');
Heal.data = null;
Heal.option = {
	stamina: 0,
	health: 0
};
Heal.display = [
	{
		id:'stamina',
		label:'Heal Above',
		after:'stamina',
		select:'stamina'
	},{
		id:'health',
		label:'...And Below',
		after:'health',
		select:'health'
	}
];
Heal.work = function(state) {
	if (Player.get('health') >= Player.get('maxhealth') || Player.get('stamina') < Heal.option.stamina || Player.get('health') >= Heal.option.health) {
		return false;
	}
	if (!state) {
		return true;
	}
	if (!Page.to('keep_stats')) {
		return true;
	}
	debug('Heal: Healing...');
	if ($('input[value="Heal Wounds"]').length) {
		Page.click('input[value="Heal Wounds"]');
	} else {
		log('Danger Danger Will Robinson... Unable to heal!');
	}
	return false;
};

/********** Worker.Idle **********
* Set the idle general
* Keep focus for disabling other workers
*/
var Idle = new Worker('Idle');
Idle.data = null;
Idle.option = {
	general: 'any',
	index: 'Daily',
	alchemy: 'Daily',
	quests: 'Never',
	town: 'Never',
	battle: 'Daily'
};
Idle.when = ['Never', 'Hourly', '2 Hours', '6 Hours', '12 Hours', 'Daily', 'Weekly'];
Idle.display = [
	{
		label:'<strong>NOTE:</strong> Any workers below this will <strong>not</strong> run!<br>Use this for disabling workers you do not use.'
	},{
		id:'general',
		label:'Idle General',
		select:'generals'
	},{
		label:'Check Pages:'
	},{
		id:'index',
		label:'Home Page',
		select:Idle.when
	},{
		id:'alchemy',
		label:'Alchemy',
		select:Idle.when
	},{
		id:'quests',
		label:'Quests',
		select:Idle.when
	},{
		id:'town',
		label:'Town',
		select:Idle.when
	},{
		id:'battle',
		label:'Battle',
		select:Idle.when
	}
];

Idle.work = function(state) {
	if (!state) {
		return true;
	}
	var i, p, time, pages = {
		index:['index'],
		alchemy:['keep_alchemy'],
		quests:['quests_quest1', 'quests_quest2', 'quests_quest3', 'quests_quest4', 'quests_quest5', 'quests_quest6', 'quests_demiquests', 'quests_atlantis'],
		town:['town_soldiers', 'town_blacksmith', 'town_magic', 'town_land'],
		battle:['battle_battle']
	}, when = { 'Never':0, 'Hourly':3600000, '2 Hours':7200000, '6 Hours':21600000, '12 Hours':43200000, 'Daily':86400000, 'Weekly':604800000 };
	if (!Generals.to(this.option.general)) {
		return true;
	}
	for (i in pages) {
		if (!when[this.option[i]]) {
			continue;
		}
		time = Date.now() - when[this.option[i]];
		for (p=0; p<pages[i].length; p++) {
			if (!Page.data[pages[i][p]] || Page.data[pages[i][p]] < time) {
				if (!Page.to(pages[i][p])) {
					return true;
				}
			}
		}
	}
	return true;
};

/********** Worker.Income **********
* Auto-general for Income, also optional bank
* User selectable safety margin - at default 5 sec trigger it can take up to 14 seconds (+ netlag) to change
*/
var Income = new Worker('Income');
Income.data = null;
Income.option = {
	general: true,
	bank: true,
	margin: 30
};
Income.display = [
	{
		id:'general',
		label:'Use Best General',
		checkbox:true
	},{
		id:'bank',
		label:'Automatically Bank',
		checkbox:true
	},{
		advanced:true,
		id:'margin',
		label:'Safety Margin',
		select:[15,30,45,60],
		suffix:'seconds'
	}
];

Income.work = function(state) {
	if (!Income.option.margin) {
		return false;
	}
//	debug('Income: '+when+', Margin: '+Income.option.margin);
	if (Player.get('cash_timer') > this.option.margin) {
		if (state && this.option.bank) {
			return Bank.work(true);
		}
		return false;
	}
	if (!state) {
		return true;
	}
	if (this.option.general && !Generals.to(Generals.best('income'))) {
		return true;
	}
	debug('Income: Waiting for Income... (' + Player.get('cash_timer') + ' seconds)');
	return true;
};

/********** Worker.Land **********
* Auto-buys property
*/
var Land = new Worker('Land', 'town_land');
Land.option = {
	buy:true,
	wait:48,
	best:null,
	bestbuy:0,
	bestcost:0
};
Land.display = [
	{
		id:'buy',
		label:'Auto-Buy Land',
		checkbox:true
	},{
		id:'wait',
		label:'Maximum Wait Time',
		select:[0, 24, 36, 48],
		suffix:'hours'
	}
];

Land.parse = function(change) {
	$('tr.land_buy_row,tr.land_buy_row_unique').each(function(i,el){
		var name = $('img', el).attr('alt'), tmp;
		Land.data[name] = {};
		Land.data[name].income = $('.land_buy_info .gold', el).text().replace(/[^0-9]/g,'').regex(/([0-9]+)/);
		Land.data[name].max = $('.land_buy_info', el).text().regex(/Max Allowed For your level: ([0-9]+)/i);
		Land.data[name].cost = $('.land_buy_costs .gold', el).text().replace(/[^0-9]/g,'').regex(/([0-9]+)/);
		tmp = $('option', $('.land_buy_costs .gold', el).parent().next()).last().attr('value');
		if (tmp) {
			Land.data[name].buy = tmp;
		}
		Land.data[name].own = $('.land_buy_costs span', el).text().replace(/[^0-9]/g,'').regex(/([0-9]+)/);
	});
	return false;
};

Land.update = function() {
	var i, worth = Bank.worth(), best, buy = 0;
	for (var i in this.data) {
		if (this.data[i].buy) {
			if (!best || ((this.data[best].cost / Player.get('income')) + (this.data[i].cost / Player.get('income') + this.data[best].income)) > ((this.data[i].cost / Player.get('income')) + (this.data[best].cost / (Player.get('income') + this.data[i].income)))) {
				best = i;
			}
		}
	}
	if (best) {
		if ((this.data[best].cost * 10) <= worth || (this.data[best].own >= 10 && this.data[best].cost * 10 / Player.get('income') < this.option.wait && this.data[best].max - this.data[best].own >= 10)) {
			buy = 10;
		} else if ((this.data[best].cost * 5) <= worth || (this.data[best].own >= 10 && this.data[best].cost * 5 / Player.get('income') < this.option.wait && this.data[best].max - this.data[best].own >= 5)) {
			buy = 5;
		} else if (this.data[best].cost <= worth){
			buy = 1;
		}
		this.option.bestbuy = buy;
		this.option.bestcost = buy * this.data[best].cost;
		Dashboard.status(this, buy + 'x ' + best + ' for $' + addCommas(buy * this.data[best].cost));
	} else {
		Dashboard.status(this);
	}
	this.option.best = best;
}

Land.work = function(state) {
	if (!this.option.buy || !this.option.best || !this.option.bestbuy || !Bank.worth(this.option.bestcost)) {
		return false;
	}
	if (!state || !Bank.retrieve(this.option.bestcost) || !Page.to('town_land')) {
		return true;
	}
//	var el = $('tr.land_buy_row:contains("'+this.option.best+'"),tr.land_buy_row_unique:contains("'+this.option.best+'")');
	$('tr.land_buy_row,tr.land_buy_row_unique').each(function(i,el){
		if ($('img', el).attr('alt') === Land.option.best) {
			debug('Land: Buying ' + Land.option.bestbuy + ' x ' + Land.option.best + ' for $' + addCommas(Land.option.bestbuy));
			$('select', $('.land_buy_costs .gold', el).parent().next()).val(Land.option.bestbuy);
			Page.click($('.land_buy_costs input[name="Buy"]', el));
			$('#'+PREFIX+'Land_current').text('None');
		}
	});
	return true;
};

/********** Worker.Monster **********
* Automates Monster
*/
var Monster = new Worker('Monster', 'keep_monster keep_monster_active battle_raid', {keep:true});
Monster.option = {
	fortify: 50,
	dispel: 50,
	choice: 'All',
	raid: 'Invade x5'
};

Monster.display = [
	{
		label:'Work in progress...'
	},{
		id:'fortify',
		label:'Fortify Below',
		select:[10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
		after:'%'
	},{
		id:'dispel',
		label:'Dispel Above',
		select:[10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
		after:'%'
	},{
		label:'"All" is currently Random...'
	},{
		id:'choice',
		label:'Attack',
		select:['All', 'Strongest', 'Weakest', 'Shortest']
	},{
		id:'raid',
		label:'Raid',
		select:['Invade', 'Invade x5', 'Duel', 'Duel x5']
	},{
		id:'assist',
		label:'Use Assist Links in Dashboard',
		checkbox:true
	}
];

Monster.types = {
	// Special (level 5) - not under Monster tab
	kull: {
		name:'Kull, the Orc Captain',
		timer:259200 // 72 hours
	},
	// Raid
/*
	raid_easy: {
		name:'The Deathrune Siege',
		list:'deathrune_list1.jpg',
		image:'raid_1_large.jpg',// ???
		image:'raid_2_large.jpg',// ???
		
		timer:216000, // 60 hours
		timer:302400, // 84 hours
		raid:true
	},
*/
	raid: {
		name:'The Deathrune Siege',
		list:'deathrune_list2.jpg',
		// raid_b1_large.jpg
		image:'raid_map_1.jpg',
		image2:'raid_map_2.jpg',
		dead:'raid_1_large_victory.jpg',
		timer:319920, // 88 hours, 52 minutes
		timer2:519960, // 144 hours, 26 minutes
		raid:true
	},
	// Epic Boss
	colossus: {
		name:'Colossus of Terra',
		list:'stone_giant_list.jpg',
		image:'stone_giant.jpg',
		dead:'stone_giant_dead.jpg',
		timer:259200, // 72 hours
		mpool:1
	},
	gildamesh: {
		name:'Gildamesh, the Orc King',
		list:'orc_boss_list.jpg',
		image:'orc_boss.jpg',
		dead:'orc_boss_dead.jpg',
		timer:259200, // 72 hours
		mpool:1
	},
	keira: {
		name:'Keira, the Dread Knight',
		list:'boss_keira_list.jpg',
		image:'boss_keira.jpg',
		dead:'boss_keira_dead.jpg',
		timer:172800, // 48 hours
		mpool:1
	},
	lotus: {
		name:'Lotus Ravenmoore',
		list:'boss_lotus_list.jpg',
		image:'boss_lotus.jpg',
		dead:'boss_lotus_big_dead.jpg',
		timer:172800, // 48 hours
		mpool:1
	},
	mephistopheles: {
		name:'Mephistopheles',
		list:'boss_mephistopheles_list.jpg',
		image:'boss_mephistopheles_large.jpg',
		dead:'boss_mephistopheles_dead.jpg',
		timer:172800, // 48 hours
		mpool:1
	},
	skaar: {
		name:'Skaar Deathrune',
		list:'death_list.jpg',
		image:'death_large.jpg',
		dead:'death_dead.jpg',
		timer:345000, // 95 hours, 50 minutes
		mpool:1
	},
	sylvanus: {
		name:'Sylvanas the Sorceress Queen',
		list:'boss_sylvanus_list.jpg',
		image:'boss_sylvanus_large.jpg',
		dead:'boss_sylvanus_dead.jpg',
		timer:172800, // 48 hours
		mpool:1
	},
	// Epic Team
	dragon_emerald: { // DEAD image ???
		name:'Emerald Dragon',
		list:'dragon_list_green.jpg',
		image:'dragon_monster_green.jpg',
		timer:259200, // 72 hours
		mpool:2
	},
	dragon_frost: { // DEAD image ???
		name:'Frost Dragon',
		list:'dragon_list_blue.jpg',
		image:'dragon_monster_blue.jpg',
		timer:259200, // 72 hours
		mpool:2
	},
	dragon_gold: { // DEAD image ???
		name:'Gold Dragon',
		list:'dragon_list_gold.jpg',
		image:'dragon_monster_gold.jpg',
		timer:259200, // 72 hours
		mpool:2
	},
	dragon_red: { // DEAD image ???
		name:'Ancient Red Dragon',
		list:'dragon_list_red.jpg',
		image:'dragon_monster_red.jpg',
		timer:259200, // 72 hours
		mpool:2
	},
	serpent_amethyst: { // DEAD image ???
		name:'Amethyst Sea Serpent',
		list:'seamonster_list_purple.jpg',
		image:'seamonster_purple.jpg',
		timer:259200, // 72 hours
		mpool:2
	},
	serpent_ancient: { // DEAD image ???
		name:'Ancient Sea Serpent',
		list:'seamonster_list_red.jpg',
		image:'seamonster_red.jpg',
		timer:259200, // 72 hours
		mpool:2
	},
	serpent_emerald: { // DEAD image ???
		name:'Emerald Sea Serpent',
		list:'seamonster_list_green.jpg',
		image:'seamonster_green.jpg',
		timer:259200, // 72 hours
		mpool:2
	},
	serpent_sapphire: { // DEAD image ???
		name:'Sapphire Sea Serpent',
		list:'seamonster_list_blue.jpg',
		image:'seamonster_blue.jpg',
		timer:259200, // 72 hours
		mpool:2
	},
	// Epic World
	cronus: {
		name:'Cronus, The World Hydra',
		list:'hydra_head.jpg',
		image:'hydra_large.jpg',
		dead:'hydra_dead.jpg',
		timer:604800, // 168 hours
		mpool:3
	},
	legion: {
		name:'Battle of the Dark Legion',
		list:'castle_siege_list.jpg',
		image:'castle_siege_large.jpg',
		dead:'castle_siege_dead.jpg',
		timer:604800, // 168 hours
		mpool:3
	},
	genesis: {
		name:'Genesis, The Earth Elemental',
		list:'earth_element_list.jpg',
		image:'earth_element_large.jpg',
		dead:'earth_element_dead.jpg',
		timer:604800, // 168 hours
		mpool:3
	},
	ragnarok: {
		name:'Ragnarok, The Ice Elemental',
		list:'water_list.jpg',
		image:'water_large.jpg',
		dead:'water_dead.jpg',
		timer:604800, // 168 hours
		mpool:3
	}
};

Monster.dispel = ['input[src=$"button_dispel.gif"]'];
Monster.fortify = ['input[src$="attack_monster_button3.jpg"]', 'input[src$="seamonster_fortify.gif"]'];
Monster.attack = ['input[src$="attack_monster_button2.jpg"]', 'input[src$="seamonster_power.gif"]', 'input[src$="attack_monster_button.jpg"]', 'input[src$="event_attack2.gif"]', 'input[src$="event_attack1.gif"]'];
Monster.count = 0;
Monster.uid = null;

Monster.init = function() {
	var i, j;
	for (i in Monster.data) {
		for (j in Monster.data[i]) {
			if (Monster.data[i][j].state === 'engage') {
				Monster.count++;
			}
		}
	}
}

Monster.parse = function(change) {
	var i, j, uid, type, tmp, $health, $defense, $dispel, dead = false, monster, timer;
	if (Page.page === 'keep_monster_active') { // In a monster
		Monster.uid = uid = $('img[linked="true"][size="square"]').attr('uid');
		for (i in Monster.types) {
			if (Monster.types[i].dead && $('img[src$="'+Monster.types[i].dead+'"]').length) {
				type = i;
				timer = Monster.types[i].timer;
				dead = true;
			} else if (Monster.types[i].image && $('img[src$="'+Monster.types[i].image+'"]').length) {
				type = i;
				timer = Monster.types[i].timer;
			} else if (Monster.types[i].image2 && $('img[src$="'+Monster.types[i].image2+'"]').length) {
				type = i;
				timer = Monster.types[i].timer2 || Monster.types[i].timer;
			}
		}
		if (!uid || !type) {
			debug('Monster: Unknown monster (probably dead)');
			return false;
		}
		Monster.data[uid] = Monster.data[uid] || {};
		Monster.data[uid][type] = Monster.data[uid][type] || {};
		monster = Monster.data[uid][type];
		if ($('input[src*="collect_reward_button.jpg"]').length) {
			monster.state = 'reward';
			return false;
		}
		if (dead && monster.state === 'assist') {
			monster.state = null;
		} else if (dead && monster.state === 'engage') {
			monster.state = 'reward';
		} else {
			if (!monster.state && $('span.result_body').text().match(/for your help in summoning|You have already assisted on this objective|You don't have enough stamina assist in summoning/i)) {
				if ($('span.result_body').text().match(/for your help in summoning/i)) {
					monster.assist = Date.now();
				}
				monster.state = 'assist';
			}
			if (!monster.name) {
				tmp = $('img[linked="true"][size="square"]').parent().parent().next().text().trim().replace(/[\s\n\r]{2,}/g, ' ');
				monster.name = tmp.substr(0, tmp.length - Monster.types[type].name.length - 3);
			}
			$health = $('img[src$="monster_health_background.jpg"]').parent();
			monster.health = $health.length ? ($health.width() / $health.parent().width() * 100) : 0;
			$defense = $('img[src$="seamonster_ship_health.jpg"]').parent();
			if ($defense.length) {
				monster.defense = ($defense.width() / ($defense.next().length ? $defense.width() + $defense.next().width() : $defense.parent().width()) * 100);
			}
			$dispel = $('img[src$="bar_dispel.gif"]').parent();
			if ($dispel.length) {
				monster.dispel = ($dispel.width() / ($dispel.next().length ? $dispel.width() + $dispel.next().width() : $dispel.parent().width()) * 100);
			}
			monster.timer = $('#app'+APPID+'_monsterTicker').text().parseTimer();
			monster.finish = Date.now() + (monster.timer * 1000);
			monster.damage_total = 0;
			monster.damage = {};
			$('td.dragonContainer table table a[href^="http://apps.facebook.com/castle_age/keep.php?user="]').each(function(i,el){
				var user = $(el).attr('href').regex(/user=([0-9]+)/i), tmp = $(el).parent().next().text().replace(/[^0-9\/]/g,''), dmg = tmp.regex(/([0-9]+)/), fort = tmp.regex(/\/([0-9]+)/);
				monster.damage[user]  = (fort ? [dmg, fort] : [dmg]);
				monster.damage_total += dmg;
			});
			monster.dps = monster.damage_total / (timer - monster.timer);
			if (Monster.types[type].raid) {
				monster.total = monster.damage_total + $('img[src$="monster_health_background.jpg"]').parent().parent().next().text().regex(/([0-9]+)/);
			} else {
				monster.total = Math.floor(monster.damage_total / (100 - monster.health) * 100);
			}
			monster.eta = Date.now() + (Math.floor((monster.total - monster.damage_total) / monster.dps) * 1000);
		}
	} else if (Page.page === 'keep_monster' || Page.page === 'battle_raid') { // Check monster / raid list
		if (!$('#app'+APPID+'_app_body div.imgButton').length) {
			return false;
		}
		if (Page.page === 'battle_raid') {
			raid = true;
		}
		for (uid in Monster.data) {
			for (type in Monster.data[uid]) {
				if (((Page.page === 'battle_raid' && Monster.types[type].raid) || (Page.page === 'keep_monster' && !Monster.types[type].raid)) && (Monster.data[uid][type].state === 'complete' || (Monster.data[uid][type].state === 'assist' && Monster.data[uid][type].finish < Date.now()))) {
					Monster.data[uid][type].state = null;
				}
			}
		}
		$('#app'+APPID+'_app_body div.imgButton').each(function(i,el){
			var i, uid = $('a', el).attr('href').regex(/user=([0-9]+)/i), tmp = $(el).parent().parent().children().eq(1).html().regex(/graphics\/([^.]*\....)/i), type = 'unknown';
			for (i in Monster.types) {
				if (tmp === Monster.types[i].list || tmp === Monster.types[i].lis2) {
					type = i;
					break;
				}
			}
			if (!uid || type === 'unknown') {
				return;
			}
			Monster.data[uid] = Monster.data[uid] || {};
			Monster.data[uid][type] = Monster.data[uid][type] || {};
			if (uid === userID) {
				Monster.data[uid][type].name = 'You';
			} else {
				tmp = $(el).parent().parent().children().eq(2).text().trim();
				Monster.data[uid][type].name = tmp.substr(0, tmp.length - Monster.types[type].name.length - 3);
			}
			switch($('img', el).attr('src').regex(/dragon_list_btn_([0-9])/)) {
				case 2: Monster.data[uid][type].state = 'reward'; break;
				case 3: Monster.data[uid][type].state = 'engage'; break;
				case 4:
//					if (Monster.types[type].raid && Monster.data[uid][type].health) {
//						Monster.data[uid][type].state = 'engage'; // Fix for page cache issues in 2-part raids
//					} else {
						Monster.data[uid][type].state = 'complete';
//					}
					break;
				default: Monster.data[uid][type].state = 'unknown'; break; // Should probably delete, but keep it on the list...
			}
		});
	}
	Monster.count = 0;
	for (i in Monster.data) {
		for (j in Monster.data[i]) {
			if (!Monster.data[i][j].state) {
				delete Monster.data[i][j];
			} else if (Monster.data[i][j].state === 'engage') {
				Monster.count++;
			}
		}
		if (!length(Monster.data[i])) {
			delete Monster.data[i];
		}
	}
	return false;
};

Monster.work = function(state) {
	var i, j, list = [], uid = Monster.option.uid, type = Monster.option.type, btn = null, best = null
	if (!state || (uid && type && Monster.data[uid][type].state !== 'engage' && Monster.data[uid][type].state !== 'assist')) {
		Monster.option.uid = uid = null;
		Monster.option.type = type = null;
	}
	if (!length(Monster.data) || Player.get('health') <= 10) {
		return false;
	}
	for (i in Monster.data) {
		for (j in Monster.data[i]) {
			if (!Monster.data[i][j].health && Monster.data[i][j].state === 'engage') {
				if (state) {
					Page.to(Monster.types[j].raid ? 'battle_raid' : 'keep_monster', '?user=' + i + (Monster.types[j].mpool ? '&mpool='+Monster.types[j].mpool : ''));
				}
				return true;
			}
		}
	}
	if (!uid || !type || !Monster.data[uid] || !Monster.data[uid][type]) {
		for (uid in Monster.data) {
			for (type in Monster.data[uid]) {
				if (Monster.data[uid][type].state === 'engage' && Monster.data[uid][type].finish > Date.now()) {
					if (Monster.option.choice === 'All') {
						list.push([uid, type]);
					} else if (!best
					|| (Monster.option.choice === 'Strongest' && Monster.data[uid][type].health > Monster.data[best[0]][best[1]].health)
					|| (Monster.option.choice === 'Weakest' && Monster.data[uid][type].health < Monster.data[best[0]][best[1]].health)
					|| (Monster.option.choice === 'Shortest' &&  Monster.data[uid][type].timer < Monster.data[best[0]][best[1]].timer)) {
						best = [uid, type];
					}
				}
			}
		}
		if (Monster.option.choice === 'All' && list.length) {
			best = list[Math.floor(Math.random()*list.length)];
		}
		if (!best) {
			return false;
		}
		uid  = Monster.option.uid  = best[0];
		type = Monster.option.type = best[1];
	}
	if (Queue.burn.stamina < 5 && (Queue.burn.energy < 10 || ((typeof Monster.data[uid][type].defense === 'undefined' || Monster.data[uid][type].defense > Monster.option.fortify) && (typeof Monster.data[uid][type].dispel === 'undefined' || Monster.data[uid][type].dispel < Monster.option.dispel)))) {
		return false;
	}
	if (!state) {
		return true;
	}
	if (Monster.types[type].raid) {
		if (!Generals.to(Generals.best(Monster.option.raid.indexOf('Invade') ? 'invade' : 'duel'))) {
			return true;
		}
		debug('Raid: '+Monster.option.raid+' '+uid);
		switch(Monster.option.raid) {
			case 'Invade':
				btn = $('input[src$="raid_attack_button.gif"]:first');
				break;
			case 'Invade x5':
				btn = $('input[src$="raid_attack_button3.gif"]:first');
				break;
			case 'Duel':
				btn = $('input[src$="raid_attack_button2.gif"]:first');
				break;
			case 'Duel x5':
				btn = $('input[src$="raid_attack_button4.gif"]:first');
				break;
		}
	} else if (Monster.data[uid][type].defense && Monster.data[uid][type].defense <= Monster.option.fortify && Queue.burn.energy >= 10) {
		if (!Generals.to(Generals.best('defend'))) {
			return true;
		}
		debug('Monster: Fortify '+uid);
		for (i=0; i<Monster.fortify.length; i++) {
			if ($(Monster.fortify[i]).length) {
				btn = $(Monster.fortify[i]);
				break;
			}
		}
	} else if (Monster.data[uid][type].dispel && Monster.data[uid][type].dispel >= Monster.option.dispel && Queue.burn.energy >= 10) {
		if (!Generals.to(Generals.best('defend'))) {
			return true;
		}
		debug('Monster: Dispel '+uid);
		for (i=0; i<Monster.dispel.length; i++) {
			if ($(Monster.dispel[i]).length) {
				btn = $(Monster.dispel[i]);
				break;
			}
		}
	} else {
		if (!Generals.to(Generals.best('duel'))) {
			return true;
		}
		debug('Monster: Attack '+uid);
		for (i=0; i<Monster.attack.length; i++) {
			if ($(Monster.attack[i]).length) {
				btn = $(Monster.attack[i]);
				break;
			}
		}
	}
	if ((!btn || !btn.length || uid !== Monster.uid) && !Page.to(Monster.types[type].raid ? 'battle_raid' : 'keep_monster', '?user=' + uid + (Monster.types[type].mpool ? '&mpool='+Monster.types[type].mpool : ''))) {
		return true; // Reload if we can't find the button or we're on the wrong page
	}
	Page.click(btn);
	return true;
};

Monster.order = null;
Monster.dashboard = function(sort, rev) {
	var i, j, o, monster, url, list = [], output = [], sorttype = [null, 'name', 'health', 'defense', 'dispel', null, 'timer', 'eta'], state = {engage:0, assist:1, reward:2, complete:3};
	if (typeof sort === 'undefined') {
		sort = 1; // Default = sort by name
		Monster.order = [];
		for (i in Monster.data) {
			for (j in Monster.data[i]) {
				Monster.order.push([i, j]);
			}
		}
	}
	Monster.order.sort(function(a,b) {
		var aa, bb;
		if (state[Monster.data[a[0]][a[1]].state] > state[Monster.data[b[0]][b[1]].state]) {
			return 1;
		}
		if (state[Monster.data[a[0]][a[1]].state] < state[Monster.data[b[0]][b[1]].state]) {
			return -1;
		}
		if (typeof sorttype[sort] === 'string') {
			aa = Monster.data[a[0]][a[1]][sorttype[sort]];
			bb = Monster.data[b[0]][b[1]][sorttype[sort]];
		} else if (sort == 4) { // damage
			aa = Monster.data[a[0]][a[1]].damage ? Monster.data[a[0]][a[1]].damage[userID] : 0;
			bb = Monster.data[b[0]][b[1]].damage ? Monster.data[b[0]][b[1]].damage[userID] : 0;
		}
		if (typeof aa === 'string' || typeof bb === 'string') {
			return (rev ? (bb || '') > (aa || '') : (bb || '') < (aa || ''));
		}
		return (rev ? (aa || 0) - (bb || 0) : (bb || 0) - (aa || 0));
	});

	list.push('<table cellspacing="0" style="width:100%"><thead><tr><th></th><th>User</th><th title="(estimated)">Health</th><th>Fortify</th><th>Shield</th><th>Damage</th><th>Time Left</th><th title="(estimated)">Kill In</th></tr></thead><tbody>');
	for (o=0; o<Monster.order.length; o++) {
		i = Monster.order[o][0];
		j = Monster.order[o][1];
		if (!Monster.types[j]) {
			continue;
		}
		output = [];
		monster = Monster.data[i][j];
		// http://apps.facebook.com/castle_age/battle_monster.php?user=00000&mpool=3
		// http://apps.facebook.com/castle_age/battle_monster.php?twt2=earth_1&user=00000&action=doObjective&mpool=3&lka=00000&ref=nf
		// http://apps.facebook.com/castle_age/raid.php?user=00000
		// http://apps.facebook.com/castle_age/raid.php?twt2=deathrune_adv&user=00000&action=doObjective&lka=00000&ref=nf
		if (Monster.option.assist && (monster.state === 'engage' || monster.state === 'assist')) {
			url = '?user=' + i + '&action=doObjective' + (Monster.types[j].mpool ? '&mpool=' + Monster.types[j].mpool : '') + '&lka=' + i + '&ref=nf';
		} else {
			url = '?user=' + i + (Monster.types[j].mpool ? '&mpool=' + Monster.types[j].mpool : '');
		}
		output.push('<a href="http://apps.facebook.com/castle_age/' + (Monster.types[j].raid ? 'raid.php' : 'battle_monster.php') + url + '"><strong  style="position:absolute;margin:6px;color:#1fc23a;text-shadow:black 1px 1px 2px;">' + monster.state + '</strong><img src="' + imagepath + Monster.types[j].list + '" style="width:90px;height:25px" alt="' + j + '" title="' + (Monster.types[j].name ? Monster.types[j].name : j) + '"></a>');
		output.push(Monster.data[i][j].name);
		if ((monster.state === 'engage' || monster.state === 'assist') && monster.total) {
			output.push(monster.health===100 ? '?' : addCommas(monster.total - monster.damage_total) + ' (' + Math.floor(monster.health) + '%)');
			output.push(typeof monster.defense === 'number' ? Math.floor(monster.defense)+'%' : '');
			output.push(typeof monster.dispel === 'number' ? Math.floor(monster.dispel)+'%' : '');
			output.push(monster.state === 'engage' ? addCommas(monster.damage[userID][0] || 0) + ' (' + ((monster.damage[userID][0] || 0) / monster.total * 100).round(1) + '%)' : '');
			output.push(monster.timer ? '<span class="golem-timer">' + makeTimer((monster.finish - Date.now()) / 1000) + '</span>' : '?');
			output.push(monster.health===100 ? '?' : '<span class="golem-timer">'+makeTimer((monster.eta - Date.now()) / 1000)+'</span>');
		} else {
			output.push('', '', '', '', '', '');
		}
		list.push('<tr><td>' + output.join('</td><td>') + '</td></tr>');
	}
	list.push('</tbody></table>');
	$('#golem-dashboard-Monster').html(list.join(''));
	$('#golem-dashboard-Monster tbody td a').click(function(event){
		var url = $(this).attr('href');
		Page.to((url.indexOf('raid') > 0 ? 'battle_raid' : 'keep_monster'), url.substr(url.indexOf('?')));
		return false;
	});
	$('#golem-dashboard-Monster tbody tr td:nth-child(2)').css('text-align', 'left');
	if (typeof sort !== 'undefined') {
		$('#golem-dashboard-Monster thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	}
};

/********** Worker.News **********
* Aggregate the news feed
*/
var News = new Worker('News', 'index');
News.data = null;
News.option = null;

News.parse = function(change) {
	if (change) {
		var xp = 0, bp = 0, win = 0, lose = 0, deaths = 0, cash = 0, i, j, list = [], user = {}, order;
		$('#app'+APPID+'_battleUpdateBox .alertsContainer .alert_content').each(function(i,el) {
			var txt = $(el).text(), uid = $('a:eq(0)', el).attr('href').regex(/user=([0-9]+)/i);
			user[uid] = user[uid] || {name:$('a:eq(0)', el).text(), win:0, lose:0}
			if (txt.regex(/Victory!/i)) {
				win++;
				user[uid].lose++;
				xp += txt.regex(/([0-9]+) experience/i);
				bp += txt.regex(/([0-9]+) Battle Points!/i);
				cash += txt.replace(',', '').regex(/\$([0-9]+)/i);
			} else {
				lose++;
				user[uid].win++;
				xp -= txt.regex(/([0-9]+) experience/i);
				bp -= txt.regex(/([0-9]+) Battle Points!/i);
				cash -= txt.replace(',', '').regex(/\$([0-9]+)/i);
				if (txt.regex(/You were killed/i)) {
					deaths++;
				}
			}
		});
		if (win || lose) {
			list.push('You were challenged <strong>' + (win + lose) + '</strong> times, winning <strong>' + win + '</strong> and losing <strong>' + lose + '</strong>.');
			list.push('You ' + (xp >= 0 ? 'gained <span class="positive">' : 'lost <span class="negative">') + addCommas(Math.abs(xp)) + '</span> experience points.');
			list.push('You ' + (cash >= 0 ? 'gained <span class="positive">' : 'lost <span class="negative">') + '<b class="gold">$' + addCommas(Math.abs(cash)) + '</b></span>.');
			list.push('You ' + (bp >= 0 ? 'gained <span class="positive">' : 'lost <span class="negative">') + addCommas(Math.abs(bp)) + '</span> Battle Points.');
			list.push('');
			order = sortObject(user, function(a,b){return (user[b].win + (user[b].lose / 100)) - (user[a].win + (user[a].lose / 100));});
			for (j=0; j<order.length; j++) {
				i = order[j];
				list.push('<strong title="' + i + '">' + user[i].name + '</strong> ' + (user[i].win ? 'beat you <span class="negative">' + user[i].win + '</span> time' + (user[i].win>1?'s':'') : '') + (user[i].lose ? (user[i].win ? ' and ' : '') + 'was beaten <span class="positive">' + user[i].lose + '</span> time' + (user[i].lose>1?'s':'') : '') + '.');
			}
			if (deaths) {
				list.push('You died ' + (deaths>1 ? deaths+' times' : 'once') + '!');
			}
			$('#app'+APPID+'_battleUpdateBox  .alertsContainer').prepend('<div style="padding: 0pt 0pt 10px;"><div class="alert_title">Summary:</div><div class="alert_content">' + list.join('<br>') + '</div></div>');
		}
	}
	return true;
};

/********** Worker.Player **********
* Gets all current stats we can see
*/
var Player = new Worker('Player', '*', {keep:true});
Player.data = {
	history:{},
	average:0
};
Player.option = null;
Player.panel = null;

Player.init = function() {
	// Get the gold timer from within the page - should really remove the "official" one, and write a decent one, but we're about playing and not fixing...
	// gold_increase_ticker(1418, 6317, 3600, 174738470, 'gold', true);
	// function gold_increase_ticker(ticks_left, stat_current, tick_time, increase_value, first_call)
	var when = new Date(script_started + ($('*').html().regex(/gold_increase_ticker\(([0-9]+),/) * 1000));
	Player.data.cash_time = when.getSeconds() + (when.getMinutes() * 60);
};

Player.parse = function(change) {
	var data = this.data, keep, stats, hour = Math.floor(Date.now() / 3600000), tmp;
	data.cash		= parseInt($('strong#app'+APPID+'_gold_current_value').text().replace(/[^0-9]/g, ''), 10);
	tmp = $('#app'+APPID+'_energy_current_value').parent().text().regex(/([0-9]+)\s*\/\s*([0-9]+)/);
	data.energy		= tmp[0] || 0;
	data.maxenergy	= tmp[1] || 0;
	tmp = $('#app'+APPID+'_health_current_value').parent().text().regex(/([0-9]+)\s*\/\s*([0-9]+)/);
	data.health		= tmp[0] || 0;
	data.maxhealth	= tmp[1] || 0;
	tmp = $('#app'+APPID+'_stamina_current_value').parent().text().regex(/([0-9]+)\s*\/\s*([0-9]+)/);
	data.stamina	= tmp[0] || 0;
	data.maxstamina	= tmp[1] || 0;
	tmp = $('#app'+APPID+'_st_2_5').text().regex(/([0-9]+)\s*\/\s*([0-9]+)/);
	data.exp		= tmp[0] || 0;
	data.maxexp		= tmp[1] || 0;
	data.level		= $('#app'+APPID+'_st_5').text().regex(/Level: ([0-9]+)!/i);
	data.armymax	= $('a[href*=army.php]', '#app'+APPID+'_main_bntp').text().regex(/([0-9]+)/);
	data.army		= Math.min(data.armymax, 501); // XXX Need to check what max army is!
	data.upgrade	= ($('a[href*=keep.php]', '#app'+APPID+'_main_bntp').text().regex(/([0-9]+)/) || 0);
	data.general	= $('div.general_name_div3').first().text().trim();
	data.imagepath	= $('#app'+APPID+'_globalContainer img:eq(0)').attr('src').pathpart();
	if (Page.page==='keep_stats') {
		keep = $('div.keep_attribute_section').first(); // Only when it's our own keep and not someone elses
		if (keep.length) {
			data.myname = $('div.keep_stat_title > span', keep).text().regex(/"(.*)"/);
			data.rank = $('td.statsTMainback img[src*=rank_medals]').attr('src').filepart().regex(/([0-9]+)/);
			stats = $('div.attribute_stat_container', keep);
			data.attack = $(stats).eq(2).text().regex(/([0-9]+)/);
			data.defense = $(stats).eq(3).text().regex(/([0-9]+)/);
			data.bank = parseInt($('td.statsTMainback b.money').text().replace(/[^0-9]/g,''), 10);
			stats = $('td.statsTMainback tr tr').text().replace(/[^0-9$]/g,'').regex(/([0-9]+)\$([0-9]+)\$([0-9]+)/);
			data.maxincome = stats[0];
			data.upkeep = stats[1];
			data.income = stats[2];
		}
	}
	if (Page.page==='town_land') {
		stats = $('.mContTMainback div:last-child');
		data.income = stats.eq(stats.length - 4).text().replace(/[^0-9]/g,'').regex(/([0-9]+)/);
	}
	if (typeof data.history[hour] === 'number') {
		data.history[hour] = {income:data.history[hour]};
	} else {
		data.history[hour] = data.history[hour] || {};
	}
	data.history[hour].bank = data.bank;
	data.history[hour].exp = data.exp;
	$('span.result_body').each(function(i,el){
		var txt = $(el).text().replace(/,|\s+|\n/g, '');
		data.history[hour].income = (data.history[hour].income || 0)
			+ (txt.regex(/Gain.*\$([0-9]+).*Cost/i) || 0)
			+ (txt.regex(/stealsGold:\+\$([0-9]+)/i) || 0)
			+ (txt.regex(/Youreceived\$([0-9]+)/i) || 0)
			+ (txt.regex(/Yougained\$([0-9]+)/i) || 0);
		if (txt.regex(/incomepaymentof\$([0-9]+)gold/i)) {
			data.history[hour].land = (txt.regex(/incomepaymentof\$([0-9]+)gold/i) || 0) + (txt.regex(/backinthemine:Extra([0-9]+)Gold/i) || 0);
		}
	});
	hour -= 168; // 24x7
	data.average = 0;
	for (var i in data.history) {
		if (i < hour) {
			delete data.history[i];
		} else {
			data.average += (data.history[i].income || 0);
		}
	}
	data.average = Math.floor(data.average / length(data.average));
	return false;
};

Player.update = function(type) {
	var step = Divisor(Player.data.maxstamina)
	$('select.golem_stamina').each(function(a,el){
		$(el).empty();
		var i, tmp = $(el).attr('id').slice(PREFIX.length).regex(/([^_]*)_(.*)/i), value = tmp ? WorkerByName(tmp[0]).option[tmp[1]] : null;
		for (i=0; i<=Player.data.maxstamina; i+=step) {
			$(el).append('<option value="' + i + '"' + (value==i ? ' selected' : '') + '>' + i + '</option>');
		}
	});
	step = Divisor(Player.data.maxenergy)
	$('select.golem_energy').each(function(a,el){
		$(el).empty();
		var i, tmp = $(el).attr('id').slice(PREFIX.length).regex(/([^_]*)_(.*)/i), value = tmp ? WorkerByName(tmp[0]).option[tmp[1]] : null;
		for (i=0; i<=Player.data.maxenergy; i+=step) {
			$(el).append('<option value="' + i + '"' + (value==i ? ' selected' : '') + '>' + i + '</option>');
		}
	});
	step = Divisor(Player.data.maxhealth)
	$('select.golem_health').each(function(a,el){
		$(el).empty();
		var i, tmp = $(el).attr('id').slice(PREFIX.length).regex(/([^_]*)_(.*)/i), value = tmp ? WorkerByName(tmp[0]).option[tmp[1]] : null;
		for (i=0; i<=Player.data.maxhealth; i+=step) {
			$(el).append('<option value="' + i + '"' + (value==i ? ' selected' : '') + '>' + i + '</option>');
		}
	});
};

Player.get = function(what) {
	switch(what) {
		case 'cash':			return parseInt($('strong#app'+APPID+'_gold_current_value').text().replace(/[^0-9]/g, ''), 10);
		case 'cash_timer':		var when = new Date();
								return (3600 + Player.data.cash_time - (when.getSeconds() + (when.getMinutes() * 60))) % 3600;
		case 'energy':			return $('#app'+APPID+'_energy_current_value').parent().text().regex(/([0-9]+)\s*\/\s*[0-9]+/);
		case 'energy_timer':	return $('#app'+APPID+'_energy_time_value').text().parseTimer();
		case 'health':			return $('#app'+APPID+'_health_current_value').parent().text().regex(/([0-9]+)\s*\/\s*[0-9]+/);
		case 'health_timer':	return $('#app'+APPID+'_health_time_value').text().parseTimer();
		case 'stamina':			return $('#app'+APPID+'_stamina_current_value').parent().text().regex(/([0-9]+)\s*\/\s*[0-9]+/);
		case 'stamina_timer':	return $('#app'+APPID+'_stamina_time_value').text().parseTimer();
		default:				return this._get(what);
	}
};

Player.dashboard = function() {
	var i, max = 0, list = [], output = [];
	list.push('<table cellspacing="0" cellpadding="0" class="golem-graph"><thead><tr><th></th><th colspan="73"><span style="float:left;">&lArr; Older</span>72 Hour History<span style="float:right;">Newer &rArr;</span></th></tr></thead><tbody>');
	list.push(Player.makeGraph(['income', 'land'], 'Income', true));
	list.push(Player.makeGraph('bank', 'Bank', true));
	list.push(Player.makeGraph('exp', 'Experience', false));
	list.push('</tbody></table>');
	$('#golem-dashboard-Player').html(list.join(''));
}

Player.makeGraph = function(type, title, iscash, min) {
	var i, j, max = 0, max_s, min_s, list = [], output = [], value = {}, hour = Math.floor(Date.now() / 3600000);
	list.push('<tr>');
	for (i=hour-72; i<=hour; i++) {
		if (typeof type === 'string') {
			value[i] = 0;
			if (typeof Player.data.history[i] !== 'undefined' && typeof Player.data.history[i][type] !== 'undefined') {
				min = Math.min((typeof min === 'number' ? min : Number.POSITIVE_INFINITY), Player.data.history[i][type]);
				max = Math.max(max, Player.data.history[i][type]);
				value[i] = Player.data.history[i][type];
			}
		} else if (typeof type === 'object') {
			value[i] = [0, 0];
			if (typeof Player.data.history[i] !== 'undefined') {
				if (typeof Player.data.history[i][type[0]] !== 'undefined') {
					min = Math.min((typeof min === 'number' ? min : Number.POSITIVE_INFINITY), Player.data.history[i][type[0]]);
					max = Math.max(max, Player.data.history[i][type[0]]);
					value[i][0] = Player.data.history[i][type[0]];
				}
				if (typeof Player.data.history[i][type[1]] !== 'undefined') {
					min = Math.min((typeof min === 'number' ? min : Number.POSITIVE_INFINITY), Player.data.history[i][type[1]]);
					max = Math.max(max, Player.data.history[i][type[1]]);
					value[i][1] = Player.data.history[i][type[1]];
				}
			}
		}
	}
	if (max >= 1000000000) {
		max = Math.ceil(max / 1000000000) * 1000000000;
		max_s = addCommas(max / 1000000000)+'b';
		min = Math.floor(min / 1000000000) * 1000000000;
		min_s = addCommas(min / 1000000000)+'b';
	} else if (max >= 1000000) {
		max = Math.ceil(max / 1000000) * 1000000;
		max_s = (max / 1000000)+'m';
		min = Math.floor(min / 1000000) * 1000000;
		min_s = (min / 1000000)+'m';
	} else if (max >= 1000) {
		max = Math.ceil(max / 1000) * 1000;
		max_s = (max / 1000)+'k';
		min = Math.floor(min / 1000) * 1000;
		min_s = (min / 1000)+'k';
	} else {
		max_s = max || 0;
		min_s = min || 0;
	}
//	if (min >= 1000000000) {min = min.round(-9);min_s = addCommas(min / 1000000000)+'b';}
//	else if (min >= 1000000) {min = min.round(-6);min_s = (min / 1000000)+'m';}
//	else if (min >= 1000) {min = min.round(-3);min_s = (min / 1000)+'k';}
//	else {min_s = min || 0;}
	list.push('<th><div>' + (iscash ? '$' : '') + max_s + '</div><div>' + title + '</div><div>' + (iscash ? '$' : '') + min_s + '</div></th>')
	for (i=hour-72; i<=hour; i++) {
		if (typeof type === 'string' && value[i]) {
			list.push('<td title="' + (hour - i) + ' hour' + ((hour - i)==1 ? '' : 's') +' ago, ' + (iscash ? '$' : '') + addCommas(value[i]) + '"><div style="height:'+Math.ceil((value[i] - min) / (max - min) * 100)+'px;"></div></td>');
		} else if (typeof type === 'object' && (value[i][0] || value[i][1])) {
			list.push('<td title="' + (hour - i) + ' hour' + ((hour - i)==1 ? '' : 's') +' ago, ' + (iscash ? '$' : '') + addCommas(value[i][1]) + ' + ' + (iscash ? '$' : '') + addCommas(value[i][0]) + ' = ' + (iscash ? '$' : '') + addCommas(value[i][0] + value[i][1]) + '"><div style="height:'+Math.max(Math.ceil((value[i][0] - min) / (max - min) * 100) - 1, 0)+'px;"></div><div style="height:'+Math.max(Math.ceil((value[i][1] - min) / (max - min) * 100) - 1, 0)+'px;"></div></td>');
		} else {
			list.push('<td style="border-bottom:1px solid blue;" title="' + (hour - i) + ' hour' + ((hour - i)==1 ? '' : 's') +' ago"></td>');
		}
	}
	list.push('</tr>');
	return list.join('');
}

/********** Worker.Quest **********
* Completes quests with a choice of general
*/
// Should also look for quests_quest but that should never be used unless there's a new area
var Quest = new Worker('Quest', 'quests_quest1 quests_quest2 quests_quest3 quests_quest4 quests_quest5 quests_quest6 quests_quest7 quests_demiquests quests_atlantis', {data:true, option:true});
Quest.option = {
	general:true,
	what:'Influence',
	unique:true,
	monster:true,
	best:null,
	bank:true,
	energy:0
};
Quest.land = ['Land of Fire', 'Land of Earth', 'Land of Mist', 'Land of Water', 'Demon Realm', 'Undead Realm', 'Underworld'];
Quest.area = {quest:'Quests', demiquest:'Demi Quests', atlantis:'Atlantis'};
Quest.current = null;
Quest.display = [
	{
		id:'general',
		label:'Use Best General',
		checkbox:true
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
	},{
		id:'bank',
		label:'Automatically Bank',
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
	if (this.option.unique && Alchemy._changed > this.lastunique) {
		for (i in this.data) {
			if (this.data[i].unique && !Alchemy.get(['ingredients', this.data[i].itemimg]) && (!best || this.data[i].energy < this.data[best].energy)) {
				best = i;
			}
		}
		this.lastunique = Date.now();
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
	if (this.option.monster) {
		for (i in Monster.data) {
			for (j in Monster.data[i]) {
				if (Monster.data[i][j].state === 'engage' && typeof Monster.data[i][j].defense === 'number' && Monster.data[i][j].defense <= Monster.option.fortify) {
					return false;
				}
			}
		}
	}
};

Quest.work = function(state) {
	if (!this.option.best || this.option.energy > Queue.burn.energy) {
		if (state && this.option.bank) {
			return Bank.work(true);
		}
		return false;
	}
	if (!state) {
		return true;
	}
	var i, j, general = null, best = this.option.best;
	if (this.option.general) {
		if (this.data[best].general) {
			if (!Generals.to(this.data[best].general)) 
			{
				return true;
			}
		} else {
			switch(this.option.what) {
				case 'Influence':
				case 'Experience':
					general = Generals.best('under level 4');
					if (general === 'any' && this.data[best].influence < 100) {
						general = Generals.best('influence');
					}
					break;
				case 'Cash':
					general = Generals.best('income');
					break;
				default:
					general = Generals.best('item');
					break;
			}
			if (!Generals.to(general)) {
				return true;
			}
		}
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
	var i, o, list = [], output = [];
	if (typeof sort === 'undefined') {
		this.order = [];
		for (i in this.data) {
			this.order.push(i);
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
	this.order.sort(function(a,b) {
		var aa = getValue(a), bb = getValue(b);
		if (typeof aa === 'string' || typeof bb === 'string') {
			return (rev ? (bb || '') > (aa || '') : (bb || '') < (aa || ''));
		}
		return (rev ? (aa || 0) - (bb || 0) : (bb || 0) - (aa || 0));
	});

	th(output, 'General');
	th(output, 'Name');
	th(output, 'Area');
	th(output, 'Level');
	th(output, 'Energy');
	th(output, '@&nbsp;Exp');
	th(output, '@&nbsp;Reward');
	th(output, 'Item');
	list.push('<table cellspacing="0" style="width:100%"><thead><tr>' + output.join('') + '</tr></thead><tbody>');
	for (o=0; o<this.order.length; o++) {
		i = this.order[o];
		output = [];
		td(output, Generals.data[this.data[i].general] ? '<img style="width:25px;height:25px;" src="' + imagepath + Generals.data[this.data[i].general].img+'" alt="'+this.data[i].general+'" title="'+this.data[i].general+'">' : '');
		th(output, i);
		td(output, typeof this.data[i].land === 'number' ? this.land[this.data[i].land].replace(' ','&nbsp;') : this.area[this.data[i].area].replace(' ','&nbsp;'));
		td(output, typeof this.data[i].level !== 'undefined' ? this.data[i].level +'&nbsp;(' + this.data[i].influence +'%)' : '');
		td(output, this.data[i].energy);
		td(output, (this.data[i].exp / this.data[i].energy).round(2), 'title="' + this.data[i].exp + ' total, ' + (this.data[i].exp / this.data[i].energy * 12).round(2) + ' per hour"');
		td(output, '$' + addCommas((this.data[i].reward / this.data[i].energy).round()), 'title="$' + addCommas(this.data[i].reward) + ' total, $' + addCommas((this.data[i].reward / this.data[i].energy * 12).round()) + ' per hour"');
		td(output, this.data[i].itemimg ? '<img style="width:25px;height:25px;" src="' + imagepath + this.data[i].itemimg+'" alt="'+this.data[i].item+'" title="'+this.data[i].item+'">' : '');
		tr(list, output.join(''), 'style="height:25px;"');
	}
	list.push('</tbody></table>');

	$('#golem-dashboard-Quest').html(list.join(''));
	$('#golem-dashboard-Quest tbody tr td:nth-child(2)').css('text-align', 'left');
	if (typeof sort !== 'undefined') {
		$('#golem-dashboard-Quest thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	}
};

/********** Worker.Town **********
* Sorts and auto-buys all town units (not property)
*/
var Town = new Worker('Town', 'town_soldiers town_blacksmith town_magic', {keep:true});
Town.data = {
	soldiers: {},
	blacksmith: {},
	magic: {}
};

Town.display = [
	{
		label:'Work in progress...'
	},{
		id:'general',
		label:'Buy Number:',
		select:['None', 'Maximum', 'Match Army']
	},{
		id:'units',
		label:'Buy Type:',
		select:['All', 'Best Offense', 'Best Defense', 'Best of Both']
	}
];

Town.blacksmith = { // Shield must come after armor (currently)
	Weapon:	/avenger|axe|blade|bow|cudgel|dagger|halberd|mace|morningstar|rod|saber|spear|staff|stave|sword|talon|trident|wand|Daedalus|Dragonbane|Dreadnought Greatsword|Excalibur|Incarnation|Ironhart's Might|Judgement|Justice|Lightbringer|Oathkeeper|Onslaught/i,
	Shield:	/buckler|shield|tome|Defender|Dragon Scale|Frost Dagger|Frost Tear Dagger|Harmony|Sword of Redemption|The Dreadnought/i,
	Helmet:	/cowl|crown|helm|horns|mask|veil/i,
	Gloves:	/gauntlet|glove|hand|bracer|Slayer's Embrace/i,
	Armor:	/armor|chainmail|cloak|pauldrons|plate|robe|Blood Vestment|Faerie Wings|Ogre Raiments/i,
	Amulet:	/amulet|bauble|charm|eye|heart|jewel|lantern|memento|orb|shard|soul|talisman|trinket|Paladin's Oath|Poseidons Horn/i
};

Town.parse = function(change) {
	if (!change) {
		var unit = {};
		$('.eq_buy_row,.eq_buy_row2').each(function(a,el){
			var i, costs = $('div.eq_buy_costs', el), stats = $('div.eq_buy_stats', el), name = $('div.eq_buy_txt strong:first-child', el).text().trim(),
				cost = $('strong:first-child', costs).text().replace(/[^0-9]/g, '');
			unit[name] = {};
			if (cost) {
				unit[name].cost = parseInt(cost, 10);
				unit[name].buy = [];
				$('select[name="amount"]:first option', costs).each(function(i,el){
					unit[name].buy.push(parseInt($(el).val(), 10));
				});
			}
			unit[name].img = $('div.eq_buy_image img', el).attr('src').filepart();
			unit[name].own = $('span:first-child', costs).text().regex(/Owned: ([0-9]+)/i);
			unit[name].att = $('div:first-child', stats).text().regex(/([0-9]+)/);
			unit[name].def = $('div:last-child', stats).text().regex(/([0-9]+)/);
			if (Page.page==='town_blacksmith') {
				for (i in Town.blacksmith) {
					if (name.match(Town.blacksmith[i])) {
						unit[name].type = i;
					}
				}
			}
		});
		Town.data[Page.page.substr(5)] = unit;
	} else {
		if (Page.page==='town_blacksmith') {
			$('.eq_buy_row,.eq_buy_row2').each(function(i,el){
				var $el = $('div.eq_buy_txt strong:first-child', el), name = $el.text().trim();
				if (Town.data.blacksmith[name].type) {
					$el.parent().append('<br>'+Town.data.blacksmith[name].type);
				}
			});
		}
	}
	return true;
};

Town.update = function(type) {
	var ia = 0, id = 0, da = 0, dd = 0, pa = Player.get('army'),
		listpush = function(list,i){list.push(i);},
		listpushweapon = function(list,i,units){if (units[i].type === 'Weapon'){list.push(i);}},
		listpushnotweapon = function(list,i,units){if (units[i].type !== 'Weapon'){list.push(i);}},
		listpushshield = function(list,i,units){if (units[i].type === 'Shield'){list.push(i);}},
		listpushhelmet = function(list,i,units){if (units[i].type === 'Helmet'){list.push(i);}},
		listpushgloves = function(list,i,units){if (units[i].type === 'Gloves'){list.push(i);}},
		listpusharmor = function(list,i,units){if (units[i].type === 'Armor'){list.push(i);}},
		listpushamulet = function(list,i,units){if (units[i].type === 'Amulet'){list.push(i);}};
	ia += getAttDef(Town.data.soldiers, listpush, 'att', pa, 'invade');
	id += getAttDef(Town.data.soldiers, null, 'def', pa, 'invade');
	ia += getAttDef(Town.data.blacksmith, listpushnotweapon, 'att', pa, 'invade');
	id += getAttDef(Town.data.blacksmith, null, 'def', pa, 'invade');
	ia += getAttDef(Town.data.blacksmith, listpushweapon, 'att', pa, 'invade');
	id += getAttDef(Town.data.blacksmith, null, 'def', pa, 'invade');
	da += getAttDef(Town.data.blacksmith, null, 'att', 1, 'duel');
	dd += getAttDef(Town.data.blacksmith, null, 'def', 1, 'duel');
	ia += getAttDef(Town.data.magic, listpush, 'att', pa, 'invade');
	id += getAttDef(Town.data.magic, null, 'def', pa, 'invade');
	da += getAttDef(Town.data.magic, null, 'att', 1, 'duel');
	dd += getAttDef(Town.data.magic, null, 'def', 1, 'duel');
	da += getAttDef(Town.data.blacksmith, listpushshield, 'att', 1, 'duel');
	dd += getAttDef(Town.data.blacksmith, null, 'def', 1, 'duel');
	da += getAttDef(Town.data.blacksmith, listpushhelmet, 'att', 1, 'duel');
	dd += getAttDef(Town.data.blacksmith, null, 'def', 1, 'duel');
	da += getAttDef(Town.data.blacksmith, listpushgloves, 'att', 1, 'duel');
	dd += getAttDef(Town.data.blacksmith, null, 'def', 1, 'duel');
	da += getAttDef(Town.data.blacksmith, listpusharmor, 'att', 1, 'duel');
	dd += getAttDef(Town.data.blacksmith, null, 'def', 1, 'duel');
	da += getAttDef(Town.data.blacksmith, listpushamulet, 'att', 1, 'duel');
	dd += getAttDef(Town.data.blacksmith, null, 'def', 1, 'duel');
	Town.data.invade = { attack:ia, defend:id };
	Town.data.duel = { attack:da, defend:dd };
}

Town.work = function(state) {
	if (!Town.option.number) {
		return false;
	}
	var i, j, max = Math.min(Town.option.number==='Maximum' ? 501 : Player.get('army'), 501), best = null, count = 0, gold = Bank.worth(), units = Town.data.soldiers;
	for (i in units) {
		count = 0;
		if (!units[i].cost || units[i].own >= max || (best && Town.option.units === 'Best Offense' && units[i].att <= best.att) || (best && Town.option.units === 'Best Defense' && units[i].def <= best.def) || (best && Town.option.units === 'Best of Both' && (units[i].att <= best.att || units[i].def <= best.def))) {
			continue;
		}
		for (j in units[i].buy) {
			if ((max - units[i].own) >= units[i].buy[j]) {
				count = units[i].buy[j]; // && (units[i].buy[j] * units[i].cost) < gold
			}
		}
		debug('Thinking about buying: '+count+' of '+i+' at $'+(count * units[i].cost));
		if (count) {
			best = i;
			break;
		}
	}
	if (!best) {
		return false;
	}
	if (!state) {
		debug('Want to buy '+count+' x '+best+' at $'+(count * units[best].cost));
		return true;
	}
//	if (!Bank.retrieve(best.cost * count)) return true;
//	if (Bank.worth() < best.cost) return false; // We're poor!
//	if (!Page.to('town_soldiers')) return true;
	return false;
};

var makeTownDash = function(list, unitfunc, x, type, name, count) { // Find total att(ack) or def(ense) value from a list of objects (with .att and .def)
	var units = [], output = [], x2 = (x==='att'?'def':'att'), i, order = {Weapon:1, Shield:2, Helmet:3, Armor:4, Amulet:5, Gloves:6, Magic:7};
	if (name) {
		output.push('<div class="golem-panel"><h3 class="golem-panel-header">'+name+'</h3><div class="golem-panel-content">');
	}
	for (i in list) {
		unitfunc(units, i, list);
	}
	if (list[units[0]]) {
		if (type === 'duel' && list[units[0]].type) {
			units.sort(function(a,b) {
				return order[list[a].type] - order[list[b].type];
			});
		} else if (list[units[0]] && list[units[0]].skills && list[units[0]][type]) {
			units.sort(function(a,b) {
				return (list[b][type][x] || 0) - (list[a][type][x] || 0);
			});
		} else {
			units.sort(function(a,b) {
				return (list[b][x] + (0.7 * list[b][x2])) - (list[a][x] + (0.7 * list[a][x2]));
			});
		}
	}
	for (i=0; i<(count ? count : units.length); i++) {
		if ((list[units[0]] && list[units[0]].skills) || (list[units[i]].use && list[units[i]].use[type+'_'+x])) {
			output.push('<div style="height:25px;margin:1px;"><img src="' + imagepath + list[units[i]].img + '" style="width:25px;height:25px;float:left;margin-right:4px;">' + (list[units[i]].use ? list[units[i]].use[type+'_'+x]+' x ' : '') + units[i] + ' (' + list[units[i]].att + ' / ' + list[units[i]].def + ')' + (list[units[i]].cost?'<br>$'+addCommas(list[units[i]].cost):'') + '</div>');
		}
	}
	if (name) {
		output.push('</div></div>');
	}
	return output.join('');
};

Town.dashboard = function() {
	var left, right, duel = {}, best,
		listpush = function(list,i){list.push(i);},
		usepush = function(list,i,units){if (units[i].use){list.push(i);}},
		usepushweapon = function(list,i,units){if (units[i].use && units[i].type === 'Weapon'){list.push(i);}},
		usepushnotweapon = function(list,i,units){if (units[i].use && units[i].type !== 'Weapon'){list.push(i);}};
	best = Generals.best('duel');
	left = '<div style="float:left;width:50%;"><div class="golem-panel"><h3 class="golem-panel-header">Invade - Attack</h3><div class="golem-panel-content" style="padding:8px;">'
			+	makeTownDash(Generals.data, listpush, 'att', 'invade', 'Heroes')
			+	makeTownDash(Town.data.soldiers, usepush, 'att', 'invade', 'Soldiers')
			+	makeTownDash(Town.data.blacksmith, usepushweapon, 'att', 'invade', 'Weapons')
			+	makeTownDash(Town.data.blacksmith, usepushnotweapon, 'att', 'invade', 'Equipment')
			+	makeTownDash(Town.data.magic, usepush, 'att', 'invade', 'Magic')
			+	'</div></div><div class="golem-panel"><h3 class="golem-panel-header">Duel - Attack</h3><div class="golem-panel-content" style="padding:8px;">'
			+	(best !== 'any' ? '<div style="height:25px;margin:1px;"><img src="' + imagepath + Generals.data[best].img + '" style="width:25px;height:25px;float:left;margin-right:4px;">' + best + ' (' + Generals.data[best].att + ' / ' + Generals.data[best].def + ')</div>' : '')
			+	makeTownDash(Town.data.blacksmith, usepush, 'att', 'duel')
			+	makeTownDash(Town.data.magic, usepush, 'att', 'duel')
			+'</div></div></div>';
	best = Generals.best('defend');
	right = '<div style="float:right;width:50%;"><div class="golem-panel"><h3 class="golem-panel-header">Invade - Defend</h3><div class="golem-panel-content" style="padding:8px;">'
			+	makeTownDash(Generals.data, listpush, 'def', 'invade', 'Heroes')
			+	makeTownDash(Town.data.soldiers, usepush, 'def', 'invade', 'Soldiers')
			+	makeTownDash(Town.data.blacksmith, usepushweapon, 'def', 'invade', 'Weapons')
			+	makeTownDash(Town.data.blacksmith, usepushnotweapon, 'def', 'invade', 'Equipment')
			+	makeTownDash(Town.data.magic, usepush, 'def', 'invade', 'Magic')
			+	'</div></div><div class="golem-panel"><h3 class="golem-panel-header">Duel - Defend</h3><div class="golem-panel-content" style="padding:8px;">'
			+	(best !== 'any' ? '<div style="height:25px;margin:1px;"><img src="' + imagepath + Generals.data[best].img + '" style="width:25px;height:25px;float:left;margin-right:4px;">' + best + ' (' + Generals.data[best].att + ' / ' + Generals.data[best].def + ')</div>' : '')
			+	makeTownDash(Town.data.blacksmith, usepush, 'def', 'duel')
			+	makeTownDash(Town.data.magic, usepush, 'def', 'duel')
			+'</div></div></div>';

	$('#golem-dashboard-Town').html(left+right);
}

/********** Worker.Upgrade **********
* Spends upgrade points
*/
var Upgrade = new Worker('Upgrade', 'keep_stats');
Upgrade.data = null;
Upgrade.option = {
	order:[],
	working:false,
	run:0
};
Upgrade.display = [
	{
		label:'Points will be allocated in this order, add multiple entries if wanted (ie, 3x Attack and 1x Defense would put &frac34; on Attack and &frac14; on Defense)'
	},{
		id:'order',
		multiple:['Energy', 'Stamina', 'Attack', 'Defense', 'Health']
	}
];

Upgrade.init = function() {
	this.option.working = this.data.working;
	this.option.run = this.data.run;
};

Upgrade.parse = function(change) {
	var result = $('div.results');
	if (this.option.working && result.length && result.text().match(/You just upgraded your/i)) {
		this.option.working = false;
		this.option.run++;
	}
	return false;
};

Upgrade.work = function(state) {
	var points = Player.get('upgrade'), btn;
	if (this.option.run >= this.option.order.length) {
		this.option.run = 0;
	}
	if (!this.option.order.length || !points || (this.option.order[this.option.run]==='Stamina' && points<2)) {
		return false;
	}
	if (!state || !Page.to('keep_stats')) {
		return true;
	}
	switch (this.option.order[this.option.run]) {
		case 'Energy':	btn = 'a[href$="?upgrade=energy_max"]';	break;
		case 'Stamina':	btn = 'a[href$="?upgrade=stamina_max"]';break;
		case 'Attack':	btn = 'a[href$="?upgrade=attack"]';		break;
		case 'Defense':	btn = 'a[href$="?upgrade=defense"]';	break;
		case 'Health':	btn = 'a[href$="?upgrade=health_max"]';	break;
		default: this.option.run++; return true; // Should never happen
	}
	if (Page.click(btn)) {
		this.option.working = true;
		return true;
	}
	Page.reload(); // Only get here if we can't click!
	return true;
};
