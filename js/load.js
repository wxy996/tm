function loadImage_bg (callback){
	var img = new Image();
	img.onload = function (){
		image_bgArr[image_bg[i].name] = this;
		i ++;
		if (i<image_bg.length) loadImage_bg(callback);
		if (i == image_bg.length) {
			if (typeof callback === 'function') callback();
		}
	}
	img.onerror = function(){
		i ++;
		if (i<image_bg.length) loadImage_bg(callback);
		if (i == image_bg.length) {
			if (typeof callback === 'function') callback();
		}
	}
	img.src = image_bg[i].url;
}

function loadImage_state (callback){
	var img = new Image();
	img.onload = function (){
		image_stateArr[image_state[j].name] = this;
		j ++;
		if (j<image_state.length) loadImage_state(callback);
		if (j == image_state.length) {
			if (typeof callback === 'function') callback();
		}
	}
	img.onerror = function(){
		j ++;
		if (j<image_state.length) loadImage_state(callback);
		if (j == image_state.length) {
			if (typeof callback === 'function') callback();
		}
	}
	img.src = image_state[j].url;
}

function loadImage_Dynamic (callback){
	var img = new Image();
	img.onload = function (){
		image_DynamicArr[image_Dynamic[o].name] = this;
		o ++;
		if (o<image_Dynamic.length) loadImage_Dynamic(callback);
		if (o == image_Dynamic.length) {
			if (typeof callback === 'function') callback();
		}
	}
	img.onerror = function(){
		o ++;
		if (o<image_Dynamic.length) loadImage_Dynamic(callback);
		if (o == image_Dynamic.length) {
			if (typeof callback === 'function') callback();
		}
	}
	img.src = image_Dynamic[o].url;
}

