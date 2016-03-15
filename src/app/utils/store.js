; (function (win) {


	/**
	html5 localStorage

	// Store 'marcus' at 'username'
	store.set('username', 'marcus')

	// Get 'username'
	store.get('username')

	// Remove 'username'
	store.remove('username')


	// Store an object literal - store.js uses JSON.stringify under the hood
	store.set('user', { name: 'marcus', likes: 'javascript' })

	// Get the stored object - store.js uses JSON.parse under the hood
	var user = store.get('user')
	alert(user.name + ' likes ' + user.likes)

	// Get all stored values
	store.getAll().user.name == 'marcus'

	// Loop over all stored values
	store.forEach(function(key, val) {
	console.log(key, '==', val)
	*/

	'use strict';

	var store = {},
		localStorageName = 'localStorage',
		storage;

	function isLocalStorageNameSupported() {
	    try {
	        return (localStorageName in win && win[localStorageName])
	    } catch (err) {
	        return false
	    }
	}

	if (isLocalStorageNameSupported()) {

		storage = win[localStorageName];
		store.serialize = function (value) {
			return JSON.stringify(value)
		};

		store.deserialize = function (value) {
			if (typeof value != 'string') { return undefined }
			try { return JSON.parse(value) }
			catch (e) { return value || undefined }
		};

		store.set = function (key, val) {  //存储localstorage
			if (val === undefined) {
				return store.remove(key)
			}
			storage.setItem(key, store.serialize(val));
			return val
		};
		store.get = function (key) { //获取localstorage
			return store.deserialize(storage.getItem(key))
		};
		store.remove = function (key) { //移除localstorage
			storage.removeItem(key)
		};
		//        store.clear = function () { //删除全部localstorage
		//            storage.clear()
		//        };
		store.getAll = function () { //获取全部的localstorage
			var ret = {};
			store.forEach(function (key, val) {
				ret[key] = val
			});
			return ret
		};
		store.forEach = function (callback) { //循环
			for (var i = 0; i < storage.length; i++) {
				var key = storage.key(i);
			    callback(key, store.get(key))
			}
		}
	}


	//    if (typeof module != 'undefined' && module.exports && this.module !== module) { module.exports = store }
	//    else if (typeof define === 'function' && define.amd) { define(store) }
	// win.localStore = store
	module.exports = store 
})(Function('return this')());