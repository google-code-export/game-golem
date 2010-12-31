/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources, Settings:true,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, unique, deleteElement, sum, findInArray, findInObject, objectIndex, sortObject, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Settings **********
* Save and Load settings by name - never does anything to CA beyond Page.reload()
*/
var Settings = new Worker('Settings');
Settings._rootpath = false; // Override save path so we don't get limited to per-user

Settings.settings = {
	system:true,
	unsortable:true,
	advanced:true,
	no_disable:true
};

Settings.option = {
	action:'None',
	which:'- default -',
	name:'- default -',
	confirm:false
};

Settings.display = [
	{
		title:'IMPORTANT!',
		label:'This will backup and restore your current options.<br>There is no confirmation dialog!'
	},{
		id:'action',
		label:'Action (<b>Immediate!!</b>)',
		select:['None', 'Load', 'Save', 'Delete']
	},{
		id:'which',
		label:'Which',
		select:'settings'
	},{
		id:'name',
		label:'New Name',
		text:true
	}
];

Settings.oldwhich = null;

Settings.init = function() {
	if (!this.data['- default -']) {
		this.set('- default -');
	}
	Settings.oldwhich = this.option.which;
};

Settings.update = function(event) {
	if (event.type === 'option') {
		var i, list = [];
		if (this.oldwhich !== this.option.which) {
			$('input:golem(settings,name)').val(this.option.which);
			this.option.name = this.option.which;
			this.oldwhich = this.option.which;
		}
		switch (this.option.action) {
			case 'None':
				break;
			case 'Load':
				console.log(warn(), 'Loading "' + this.option.which + '"');
				this.get(this.option.which);
				break;
			case 'Save':
				console.log(warn(), 'Saving "' + this.option.name + '"');
				this.set(this.option.name);
				this.option.which = this.option.name;
				break;
			case 'Delete':
				if (this.option.which !== '- default -') {
					console.log(warn(), 'Deleting "' + this.option.name + '"');
					delete this.data[this.option.which];
				}
				this.option.which = '- default -';
				this.option.name = '- default -';
				break;
			default:
				break;
		}
		$('select:golem(settings,action)').val('None');
		this.option.action = 'None';
		for (i in this.data) {
			list.push(i);
		}
		Config.set('settings', list.sort());
	}
};

Settings.set = function(what, value) {
	var i, x = typeof what === 'string' ? what.split('.') : (typeof what === 'object' ? what : []);
	if (x.length && (x[0] === 'option' || x[0] === 'runtime')) {
		return this._set(what, value);
	}
	this._unflush();
	this.data[what] = {};
	for (i in Workers) {
		if (Workers[i] !== this && Workers[i].option) {
			this.data[what][i] = $.extend(true, {}, Workers[i].option);
		}
	}
};

Settings.get = function(what) {
	var i, x = typeof what === 'string' ? what.split('.') : (typeof what === 'object' ? what : []);
	if (x.length && (x[0] === 'option' || x[0] === 'runtime')) {
		return this._get(what);
	}
	this._unflush();
	if (this.data[what]) {
		for (i in Workers) {
			if (Workers[i] !== this && Workers[i].option && this.data[what][i]) {
				Workers[i].option = $.extend(true, {}, this.data[what][i]);
				Workers[i]._save('option');
			}
		}
		Page.reload();
	}
	return;
};

