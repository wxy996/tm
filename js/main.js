//绘制背景
function init(){
	ctx.clearRect(0,0,1280,1280);
	cancelAnimationFrame(timer);
	var num = -1;
	for(var i in image_bgArr){
		num ++;
		ctx.drawImage(image_bgArr[i],0,1280*num + posY);
	}
	//画图形
	drawFn();
	requestAnimationFrame(init);
}
//绘制静态图
function drawState(img,x,y,scale){
	ctx.drawImage(img,x,y+posY,img.width*scale,img.height*scale);
}
var index = 0;
//绘制动态图形
function drawDynamic(img,x,y,scale,speed){
	img.count++;
	img.speed = speed;
	w = img.width/4; 
	h = img.height;
	img.pos = [
		{x : 0, y : 0},
		{x :w, y : 0},
		{x : w*2, y : 0},
		{x : w*3, y : 0}
	]; 
	if (img.count % img.speed ==0) img.num ++;
	img.num %=  img.pos.length;
	ctx.drawImage(img,img.pos[img.num].x,img.pos[img.num].y,w,h,x,y+posY,w*scale,h*scale);
}
//红绿灯
function drawTrafficLight(img,x,y,scale,speed){
	img.count++;
	img.speed = speed;
	w = img.width/3; 
	h = img.height;
	img.pos = [
		{x : 0, y : 0},
		{x : w, y : 0},
		{x : w*2, y : 0}
	]; 
	if (img.count % img.speed ==0) img.num ++;
	img.num %=  img.pos.length;
	ctx.drawImage(img,img.pos[img.num].x,img.pos[img.num].y,w,h,x,y+posY,w*scale,h*scale);
}
//喷泉
function drawFountain(img,x,y,scale,speed){
	img.count++;
	w = img.width/2; 
	h = img.height/2;
	img.pos = [
		{x : 0, y : 0},
		{x : w, y : 0},
		{x : 0, y : h},
		{x : w, y : h}
	]; 
	if (img.count % speed ==0) img.num ++;
	img.num %=  img.pos.length;
	ctx.drawImage(img,img.pos[img.num].x,img.pos[img.num].y,w,h,x,y+posY,w*scale,h*scale);
}
function drawOffice(img,x,y,scale,speed){
	img.count++;
	w = img.width/3; 
	h = img.height/2;
	img.pos = [
		{x : 0, y : 0},
		{x : w, y : 0},
		{x : w*2, y : 0},
		{x : 0, y : h},
		{x : w, y : h},
		{x : w*2, y : h}
	]; 
	if (img.count % speed ==0) img.num ++;
	img.num %=  img.pos.length;
	ctx.drawImage(img,img.pos[img.num].x,img.pos[img.num].y,w,h,x,y+posY,w*scale,h*scale);
}
wrap.addEventListener("mousewheel",scrollFn);
wrap.addEventListener("DOMMouseScroll",scrollFn);
//滚动改变尺寸
function scrollFn(e){
		if( e.wheelDelta ){
			posY += e.wheelDelta;
		}else{
			posY -= e.detail*10;
		}
		if( posY > 0 ) posY = 0;
		if( posY < -maxH ) posY = -maxH;
		wrap.style.backgroundPosition = "0 " + posY + 'px';
		if( e.preentDefault ) e.preventDefault();
		return false;
	}
function update(){
	canvas.height = window.innerHeight;
	maxH = 5750 - window.innerHeight;
	cH = window.innerHeight - lastH;
	lastH = window.innerHeight;
	posY = posY + cH;
	if(posY > 0 )posY = 0;
	onLoad.style.width=window.innerWidth+"px";
	onLoad.style.height=window.innerHeight+"px";
};