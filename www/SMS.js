
var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var NTIXpluginSmsNative = {};

NTIXpluginSmsNative.setOptions = function(options, successCallback, failureCallback) {
	  if(typeof options === 'object') {
		  cordova.exec( successCallback, failureCallback, 'SMS', 'setOptions', [options] );
	  } else {
		  if(typeof failureCallback === 'function') {
			  failureCallback('options should be specified.');
		  }
	  }
	};

NTIXpluginSmsNative.startWatch = function(successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMS', 'startWatch', [] );
};

NTIXpluginSmsNative.stopWatch = function(successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMS', 'stopWatch', [] );
};

NTIXpluginSmsNative.enableIntercept = function(on_off, successCallback, failureCallback) {
	on_off = !! on_off;
	cordova.exec( successCallback, failureCallback, 'SMS', 'enableIntercept', [ on_off ] );
};

NTIXpluginSmsNative.sendSMS = function(address, text, successCallback, failureCallback) {
	var numbers;
	if( Object.prototype.toString.call( address ) === '[object Array]' ) {
		numbers = address;
	} else if(typeof address === 'string') {
		numbers = [ address ];
	} else {
		if(typeof failureCallback === 'function') {
			failureCallback("require address, phone number as string, or array of string");
		}
		return;
	}
	
	cordova.exec( successCallback, failureCallback, 'SMS', 'sendSMS', [ numbers, text ] );
};

NTIXpluginSmsNative.listSMS = function(filter, successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMS', 'listSMS', [ filter ] );
};

NTIXpluginSmsNative.deleteSMS = function(filter, successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMS', 'deleteSMS', [ filter ] );
};

NTIXpluginSmsNative.restoreSMS = function(msg, successCallback, failureCallback) {
	var smsList = [];
	if(Array.isArray(msg)) {
		if(msg.length > 0) smsList = msg;
	} else if(typeof msg === 'object') {
		if(msg !== null) smsList = [ msg ];
	}
	cordova.exec( successCallback, failureCallback, 'SMS', 'restoreSMS', [ msg ] );
};


module.exports = NTIXpluginSmsNative;

