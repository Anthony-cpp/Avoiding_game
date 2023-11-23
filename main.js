//??
var p_x = 10 ,p_y = 70;
	var i,score = 0,c,flag = 1,v = 0.5,t;
	var a,b,x=180;

	var ex = new Array(5);
	var ey = new Array(5);


	var pb_x = new Array(5);
	var pb_y = new Array(5);
	var pb_c = new Array(5);

	var vel = 0;
	var flag_s=0;


	ex = [200, 220, 240, 260, 280];
	ey = [g_r(0,100), g_r(20,60), g_r(70,130), g_r(70,140), 130];


	pb_x = [0,0,0,0,0];
	pb_y = [0,0,0,0,0];
	pb_c = [0,0,0,0,0];

	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	/*canvas.setAttribute( "width" , 640 );
	canvas.setAttribute( "height" , 480 );*/


	ctx.fillStyle = 'green';
	ctx.fillRect(p_x, p_y, 30, 10);

	let c_w = document.getElementById('canvas');
	const displayOriginal_c = c_w.style.display;
	c_w.style.display = 'none';

var mode_type = 5;

window.onload = function(){

	let f_m = document.getElementById('finish_mes');
	const displayOriginal_f_m = f_m.style.display;
	f_m.style.display = 'none';

	let f_m2 = document.getElementById('finish_mes_2');
	const displayOriginal_f_m_2 = f_m2.style.display;
	f_m2.style.display = 'none';

	let f_c = document.getElementById('finish_score');
	const displayOriginal_f_c = f_c.style.display;
	f_c.style.display = 'none';

	let cf_m = document.getElementById('cfinish_mes');
	const displayOriginal_cf_m = cf_m.style.display;
	cf_m.style.display = 'none';

	let cf_m2 = document.getElementById('cfinish_mes_2');
	const displayOriginal_cf_m_2 = cf_m2.style.display;
	cf_m2.style.display = 'none';

	let cf_c = document.getElementById('cfinish_score');
	const displayOriginal_cf_c = cf_c.style.display;
	cf_c.style.display = 'none';


	c_w.style.display = 'none';


}


var sta = 0,sta_n = 0;
var all_score = 0;

function game(){

	/*	var b5 = document.getElementById('b5');
		const displayOriginal_5 = b5.style.display;*/

	ce(ex[0],ey[0]);
	ce(ex[1],ey[1]);
	ce(ex[2],ey[2]);
	ce(ex[3],ey[3]);

	if(mode_type == 5){
		document.getElementById("sc").textContent = "モードを選択して下さい。";
	}
	else{

	if(flag == 1234){

		//document.getElementById("sc").textContent = "Finish!!" + score;
		ctx.clearRect(0, 0, 1000, 1000);
		ctx.fillStyle = "rgb(100,100,100)";
		ctx.fillRect(0,0,1000,1000);

		//b5.style.display = "block";

	let cf_m = document.getElementById('cfinish_mes');
	const displayOriginal_cf_m = cf_m.style.display;
	cf_m.style.display = 'block';

	let cf_m2 = document.getElementById('cfinish_mes_2');
	const displayOriginal_cf_m_2 = cf_m2.style.display;
	cf_m2.style.display = 'block';

	let cf_c = document.getElementById('cfinish_score');
	const displayOriginal_cf_c = cf_c.style.display;
	cf_c.style.display = 'block';

	c_w.style.display = 'none';

	}
	else if(flag == 0){

		//document.getElementById("sc").textContent = "Finish!!" + score;
		ctx.clearRect(0, 0, 1000, 1000);
		ctx.fillStyle = "rgb(100,100,100)";
		ctx.fillRect(0,0,1000,1000);

		//b5.style.display = "block";

	if(mode_type == 1){

		switch(sta_n){

		case 2:
		document.getElementById("finish_score").textContent ="パスワードは"+1;
		break;

		case 3:
		document.getElementById("finish_score").textContent = "パスワードは"+2;
		break;

		case 4:
		document.getElementById("finish_score").textContent = "パスワードは"+3;
		break;

		case 5:
		document.getElementById("finish_score").textContent = "パスワードは"+4;
		break;

		case 6:
		document.getElementById("finish_score").textContent = "パスワードは"+5;
		break;

		case 7:
		document.getElementById("finish_score").textContent = "パスワードは"+6;
		break;

		case 8:
		document.getElementById("finish_score").textContent = "パスワードは"+7;
		break;

		}
	}

	if(mode_type == 2){

		switch(sta_n){

		case 2:
		document.getElementById("finish_score").textContent ="パスワードは"+12;
		break;

		case 3:
		document.getElementById("finish_score").textContent = "パスワードは"+23;
		break;

		case 4:
		document.getElementById("finish_score").textContent = "パスワードは"+34;
		break;

		case 5:
		document.getElementById("finish_score").textContent = "パスワードは"+45;
		break;

		case 6:
		document.getElementById("finish_score").textContent = "パスワードは"+56;
		break;

		case 7:
		document.getElementById("finish_score").textContent = "パスワードは"+67;
		break;

		case 8:
		document.getElementById("finish_score").textContent = "パスワードは"+78;
		break;

		}
	}

	if(mode_type == 3){

		switch(sta_n){

		case 2:
		document.getElementById("finish_score").textContent ="パスワードは"+1433;
		break;

		case 3:
		document.getElementById("finish_score").textContent = "パスワードは"+1758;
		break;

		case 4:
		document.getElementById("finish_score").textContent = "パスワードは"+2285;
		break;

		case 5:
		document.getElementById("finish_score").textContent = "パスワードは"+3087;
		break;

		case 6:
		document.getElementById("finish_score").textContent = "パスワードは"+7383;
		break;

		case 7:
		document.getElementById("finish_score").textContent = "パスワードは"+8351;
		break;

		case 8:
		document.getElementById("finish_score").textContent = "パスワードは"+604;
		break;

		}
	}

	if(mode_type == 4 || mode_type == 6){

		if(all_score > 3200) document.getElementById("finish_score").textContent ="あなたのスコアは、Sランクです。Congratulations!!";
		else if(all_score > 1600) document.getElementById("finish_score").textContent ="あなたのスコアは、Aランクです。1週おめでとう!!";
		else if(all_score > 800) document.getElementById("finish_score").textContent ="あなたのスコアは、Bランクです。半分おめでとう!!";
		else if(all_score > 400) document.getElementById("finish_score").textContent ="あなたのスコアは、Cランクです。";
		else if(all_score > 2500) document.getElementById("finish_score").textContent ="あなたのスコアは、Dランクです。";
		else  document.getElementById("finish_score").textContent ="あなたのスコアは、Eランクです。";

	}



	let f_m = document.getElementById('finish_mes');
	const displayOriginal_f_m = f_m.style.display;
	f_m.style.display = 'block';

	let f_m2 = document.getElementById('finish_mes_2');
	const displayOriginal_f_m_2 = f_m2.style.display;
	f_m2.style.display = 'block';

	let f_c = document.getElementById('finish_score');
	const displayOriginal_f_c = f_c.style.display;
	f_c.style.display = 'block';



		c_w.style.display = 'none';
	}
	else{

	if(mode_type <= 3 && mode_type >= 1 ){
	if(sta == 0 && sta_n != 1){
		l_1();
		sta_n = 1;
	}

	if(sta_n == 1 && score > 200 ){
		l_2();
		sta = 1;
		sta_n = 2;
	}

	if(sta_n == 2 && score > 200 ){
		l_3();
		sta = 2;
		sta_n = 3;
	}

	if(sta_n == 3 && score > 200 ){
		l_4();
		sta = 3;
		sta_n = 4;
	}

	if(sta_n == 4 && score > 200 ){
		l_5();
		sta = 4;
		sta_n = 5;
	}

	if(sta_n == 5 && score > 200 ){
		l_6();
		sta = 5;
		sta_n = 6;
	}

	if(sta_n == 6 && score > 200 ){
		l_7();
		sta = 6;
		sta_n = 7;
	}

	if(sta_n == 7 && score > 200 ){
		l_8();
		sta = 7;
		sta_n = 8;
	}
	if(sta_n == 8 && score > 200) flag =1234;

	}else if(mode_type == 4){//エンドレス

	if(sta == 0 && sta_n != 1){
		l_1();
		sta_n = 1;
	}

	if(sta_n == 1 && score > 200 ){
		l_2();
		sta = 1;
		sta_n = 2;
	}

	if(sta_n == 2 && score > 200 ){
		l_3();
		sta = 2;
		sta_n = 3;
	}

	if(sta_n == 3 && score > 200 ){
		l_4();
		sta = 3;
		sta_n = 4;
	}

	if(sta_n == 4 && score > 200 ){
		l_5();
		sta = 4;
		sta_n = 5;
	}

	if(sta_n == 5 && score > 200 ){
		l_6();
		sta = 5;
		sta_n = 6;
	}

	if(sta_n == 6 && score > 200 ){
		l_7();
		sta = 6;
		sta_n = 7;
	}

	if(sta_n == 7 && score > 200 ){
		l_8();
		sta = 7;
		sta_n = 8;
	}
	if(sta_n == 8 && score > 200){
		l_1();
		sta_n = 1;
	}

	}else{//ランダム

		if(sta == 0){
		next_random_stage();
	}
		if(score > 200){
		sta = 0;
	}

	}
	}		
	}

}

function next_random_stage(){
	var tmp = g_r(1,8);

	switch(tmp){

		case 1:
		l_1();
		sta = 1;
		break;

		case 2:
		l_2();
		sta = 2;
		break;

		case 3:
		l_3();
		sta = 3;
		break;

		case 4:
		l_4();
		sta = 4;
		break;

		case 5:
		l_5();
		sta = 5;
		break;

		case 6:
		l_6();
		sta = 6;
		break;

		case 7:
		l_7();
		sta = 7;
		break;

		case 8:
		l_8();
		sta = 8;
		break;

	}
}

function hide_b_and_open_s(){

	var b1 = document.getElementById('b1');
	const displayOriginal = b1.style.display;
	b1.style.display = 'none';

	var b2 = document.getElementById('b2');
	const displayOriginal_2 = b2.style.display;
	b2.style.display = 'none';

	var b3 = document.getElementById('b3');
	const displayOriginal_3 = b3.style.display;
	b3.style.display = 'none';

	var b4 = document.getElementById('b4');
	const displayOriginal_4 = b4.style.display;
	b4.style.display = 'none';

	var b6 = document.getElementById('b6');
	const displayOriginal_6 = b6.style.display;
	b6.style.display = 'none';

	var et1 = document.getElementById('endless_t1');
	const displayOriginal_et1 = et1.style.display;
	et1.style.display = 'none';

	var et2 = document.getElementById('endless_t2');
	const displayOriginal_et2 = et2.style.display;
	et2.style.display = 'none';

	let no1 = document.getElementById('no');
	const displayOriginal_no1 = no1.style.display;
	no1.style.display = 'none';

	let pas = document.getElementById('pas');
	const displayOriginal_pas = pas.style.display;
	pas.style.display = 'none';


/*	var b5 = document.getElementById('b5');
	const displayOriginal_5 = b5.style.display;
	b5.style.display = "none";*/

	c_w.style.display = displayOriginal_c;
}


function make_b_and_hide_s(){

	c_w.style.display ="none";

	var b1 = document.getElementById('b1');
	const displayOriginal = b1.style.display;
	b1.style.display = "block";

	var b2 = document.getElementById('b2');
	const displayOriginal_2 = b2.style.display;
	b2.style.display = "block";

	var b3 = document.getElementById('b3');
	const displayOriginal_3 = b3.style.display;
	b3.style.display = "block";

	var b4 = document.getElementById('b4');
	const displayOriginal_4 = b4.style.display;
	b4.style.display = "block";

}

function m1(){
	mode_type = 1;
	hide_b_and_open_s();
}

function m2(){
	mode_type = 2;
	hide_b_and_open_s();
}

function m3(){
	mode_type = 3;
	hide_b_and_open_s();
}

function m4(){
	mode_type = 4;
	hide_b_and_open_s();
}

function m6(){
	mode_type = 6;
	hide_b_and_open_s();
}

/*function m5(){
	mode_type = 5;
	make_b_and_hide_s();
}*/

//?G??c?@?A?e??`?a
function draw(){

	ctx.clearRect(0, 0, 1000, 1000);


	//?c?@
	ctx.fillRect(p_x, p_y, 30, 10);
	ctx.fillStyle = "rgb(0,20,200)";

	//?G
	ctx.fillRect(ex[0], ey[0], 30, 10);
	ctx.fillRect(ex[1], ey[1], 30, 10);
	ctx.fillRect(ex[2], ey[2], 30, 10);
	ctx.fillRect(ex[3], ey[3], 30, 10);
//	ctx.fillRect(ex[4], ey[4], 30, 10);
	if( flag == 2 ){
		ctx.fillStyle = "rgb(100,20,0)";
		ctx.fillRect(x,0,100,400);
	}
	if( flag == 4 ){
		ctx.fillStyle = "rgb(100,20,0)";
	 	ctx.fillRect(x,0,100,400);
	}

	ctx.fillStyle = "rgb(255,0,0)";


	ctx.fillStyle = "rgb(0,255,255)";

	if(pb_c[0] == 1) ctx.fillRect(pb_x[0], pb_y[0], 10, 5);
	if(pb_c[1] == 1) ctx.fillRect(pb_x[1], pb_y[1], 10, 5);
	if(pb_c[2] == 1) ctx.fillRect(pb_x[2], pb_y[2], 10, 5);
	if(pb_c[3] == 1) ctx.fillRect(pb_x[3], pb_y[3], 10, 5);
	if(pb_c[4] == 1) ctx.fillRect(pb_x[4], pb_y[4], 10, 5);

	ctx.fillStyle = "rgb(50,200,10)";

}


addEventListener( "keydown", keydownfunc );

//?????ﾂｶ?・｢
function g_r( min, max ) {

    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
}

//?G??????B??c??竕ｫ?e
function ce( c, d ){

	var e,f,flag_s = 0;

	e = c;
	f = d;
	if(e >= p_x && p_x + 30 >= e && f >= p_y && f <= p_y + 10) flag_s = 1;

	e = c + 30;
	f = d;
	if(e >= p_x && p_x + 30 >= e && f >= p_y && f <= p_y + 10) flag_s = 1;

	e = c;
	f = d + 10;
	if(e >= p_x && p_x + 30 >= e && f >= p_y && f <= p_y + 10) flag_s = 1;

	e = c + 30;
	f = d + 10;
	if(e >= p_x && p_x + 30 >= e && f >= p_y && f <= p_y + 10) flag_s = 1;

	if( flag_s == 1 ) flag = 0;
	
}

//?L?[?{?[?h????
function keydownfunc( event ) {

	var key_code = event.keyCode;

 if( flag != 0 && flag != 9){
 		
	if( key_code === 38 && p_y >= 10 ){

	vel =  -1.5;

	}
	if( key_code === 40 && p_y <= 130){

	p_y +=  4;

	}

	draw();
 }

	if(flag == 9){

	if( key_code === 38 && p_y >= 10 ){

	vel = - 2.5;

	}
	if( key_code === 40 && p_y <= 130){

	p_y += 5;

	}

	draw();
	}

}


//?G??竕ｫ???u??X?V
function enemy(){


    if( flag != 0  && flag != 8 && flag != 1234){

	for(i = 0;i < 5;i++){
	
	      if(i % 5 == 0){
		ex[0] -=  (1 + v);
		}

	else if(i % 5 == 1){
	ex[1] -= (0.5 + v);
	}

	else if(i % 5 == 2){
		ex[2] -= (1.1 + v);
	}

	else if(i % 5 == 3)   ex[3] -= (g_r(1,2) + v);


	}
	
	vel += 0.05;
	p_y += vel;

	if( p_y > 130){

	p_y = 0;

	if(mode_type == 1) score += 30;
	if(mode_type == 2 || mode_type == 4 || mode_type == 6 ) score += 20;
	if(mode_type == 3) score += 10;

	if(mode_type == 1) all_score += 30;
	if(mode_type == 2 || mode_type == 4 || mode_type == 6) all_score += 20;
	if(mode_type == 3) all_score += 10;


	}

	else if ( p_y < 0){

	p_y = 130;

	if(mode_type == 1) score += 30;
	if(mode_type == 2 || mode_type == 4 || mode_type == 6) score += 20;
	if(mode_type == 3) score += 10;

	if(mode_type == 1) all_score += 30;
	if(mode_type == 2 || mode_type == 4 || mode_type == 6) all_score += 20;
	if(mode_type == 3) all_score += 10;


	}


	draw();

	if(mode_type <= 3 ) document.getElementById("sc").textContent = score + " " + "Stage" + flag;
	else if(mode_type != 5) document.getElementById("sc").textContent = all_score + " " + "Stage" + flag;

	}

	if(flag == 8){

	vel += 0.05;
	p_y += vel;

	if( p_y > 130){

	p_y = 0;

	if(mode_type == 1) score += 30;
	if(mode_type == 2 || mode_type == 4 || mode_type == 6) score += 20;
	if(mode_type == 3) score += 10;

	if(mode_type == 1) all_score += 30;
	if(mode_type == 2 || mode_type == 4 || mode_type == 6) all_score += 20;
	if(mode_type == 3) all_score += 10;

	}

	else if ( p_y < 0){

	p_y = 130;

	if(mode_type == 1) score += 30;
	if(mode_type == 2 || mode_type == 4 || mode_type == 6) score += 20;
	if(mode_type == 3) score += 10;

	if(mode_type == 1) all_score += 30;
	if(mode_type == 2 || mode_type == 4 || mode_type == 6) all_score += 20;
	if(mode_type == 3) all_score += 10;

	}

	draw();
	if(mode_type <= 3 ) document.getElementById("sc").textContent = score + " " + "Stage" + flag;
	else if(mode_type != 5) document.getElementById("sc").textContent = all_score + " " + "Stage" + flag;

	}
}



//???x????ﾏ俄沖??a?e?G???X?????
function check(){

	var v_s;
	
	if(flag == 2){
	x -= 0.05;
	if(x < 40) x = 150;
	}

	if(flag == 4){
	 x += 0.05;
	if(x > 150) x = 90;
	}
	
	if(flag == 6){
	 if(p_x < 50 ) p_x += 0.125;
	}

	if( flag == 7){

	if( flag_s == 0 ){
	  p_x += 0.07;
	  if(p_x > 50) flag_s = 1;
	}
	else{
	  p_x -= 0.07;
	  if(p_x < 10) flag_s = 0;
	}
	}

	if(flag == 8){
		p_x += 0.5;
	  if(p_x > 250){
	    ex[0] = g_r( 150, 200);
	    ex[1] = g_r( 120, 200);
     	    ex[2] = g_r( 130, 200);
	    ex[3] = g_r( 140, 200);
	    ey[0] = g_r( 0, 100);
	    ey[1] = g_r( 100, 200);
	    ey[2] = g_r( 50, 150);
	    ey[3] = g_r( 0, 200);
		p_x = 10;
	  } 
	}


	for(i = 0; i < 4; i++) {

	if(flag == 5){
	
	ex[0] = 40;
	ex[1] = 40;
	ex[2] = 150;
	ex[3] = 150;
	ey[0] = 40;
	ey[1] = 100;
	ey[2] = 0;
	ey[3] = 0;


	}


	if(ex[i] < 0){

	ex[i] = 200;

	if(mode_type == 1) score += 20;
	if(mode_type == 2 || mode_type == 4 || mode_type == 6) score += 10;
	if(mode_type == 3) score += 5;

	if(mode_type == 1) all_score += 20;
	if(mode_type == 2 || mode_type == 4 || mode_type == 6) all_score += 10;
	if(mode_type == 3) all_score += 5;



	switch(flag){

	case 1:

	if(i == 0) {
	ey[0] = g_r( 0, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 70, 80 );
	ex[1] = 195;
	}

	else if(i == 2){
	ey[2] = g_r( 0, 90 );
	ex[2] = 190;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 190;
	}

	break;

	case 2:
	v = 0;

	if(i == 0) {
	ey[0] = g_r( 0, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 70, 80 );
	ex[1] = 195;
	}

	else if(i == 2){
	ey[2] = g_r( 0, 90 );
	ex[2] = 190;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 190;
	}

	break;

	case 3:

	if(i == 0) {
	ey[0] = g_r( 0, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 10, 150 );
	ex[1] = 180;
	}

	else if(i == 2){
	ey[2] = g_r( 0, 90 );
	ex[2] = 200;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 150;
	}

	break;

	case 4:
	if(i == 0) {
	ey[0] = g_r( 30, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 0, 120 );
	ex[1] = 170;
	}

	else if(i == 2){
	ey[2] = g_r( 70, 100 );
	ex[2] = 160;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 180;
	}

	break;

	case 6:
	if(i == 0) {
	ey[0] = g_r( 0, 70 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 0, 120 );
	ex[1] = 170;
	}

	else if(i == 2){
	ey[2] = g_r( 70, 100 );
	ex[2] = 160;
	}

	else{
	ey[3] = g_r( 45, 140 );
	ex[3] = 180;
	}

	break;

	case 7:
	if(i == 0) {
	ey[0] = g_r( 0, 70 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 0, 120 );
	ex[1] = 170;
	}

	else if(i == 2){
	ey[2] = g_r( 70, 100 );
	ex[2] = 160;
	}

	else{
	ey[3] = g_r( 45, 140 );
	ex[3] = 180;
	}

	break;

	case 9:

	if(i == 0) {
	ey[0] = g_r( 0, 70 );
	ex[0] = 200;
	}

	else if(i == 1){
	ey[1] = g_r( 0, 120 );
	ex[1] = 210;
	}

	else if(i == 2){
	ey[2] = g_r( 70, 100 );
	ex[2] = 190;
	}

	else{
	ey[3] = g_r( 45, 140 );
	ex[3] = 200;
	}

	break;

	}
	

	} 

	}

}

//?G? ﾂｶ?3?1?髀・?
function make_e(i){

	if(flag != 0) score += 5;

	switch(flag){

	case 1:

	if(i == 0) {
	ey[0] = g_r( 0, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 70, 80 );
	ex[1] = 195;
	}

	else if(i == 2){
	ey[2] = g_r( 0, 90 );
	ex[2] = 190;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 190;
	}

	break;

	case 2:
	v = 0;

	if(i == 0) {
	ey[0] = g_r( 0, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 70, 80 );
	ex[1] = 195;
	}

	else if(i == 2){
	ey[2] = g_r( 0, 90 );
	ex[2] = 190;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 190;
	}

	break;

	case 3:

	if(i == 0) {
	ey[0] = g_r( 0, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 10, 150 );
	ex[1] = 180;
	}

	else if(i == 2){
	ey[2] = g_r( 0, 90 );
	ex[2] = 200;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 150;
	}

	break;

	case 4:
	if(i == 0) {
	ey[0] = g_r( 30, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 0, 120 );
	ex[1] = 170;
	}

	else if(i == 2){
	ey[2] = g_r( 70, 100 );
	ex[2] = 160;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 180;
	}

	break;

	case 6:
	if(i == 0) {
	ey[0] = g_r( 0, 70 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 0, 120 );
	ex[1] = 170;
	}

	else if(i == 2){
	ey[2] = g_r( 70, 100 );
	ex[2] = 160;
	}

	else{
	ey[3] = g_r( 45, 140 );
	ex[3] = 180;
	}

	break;

	case 7:
	if(i == 0) {
	ey[0] = g_r( 0, 70 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 0, 120 );
	ex[1] = 170;
	}

	else if(i == 2){
	ey[2] = g_r( 70, 100 );
	ex[2] = 160;
	}

	else{
	ey[3] = g_r( 45, 140 );
	ex[3] = 180;
	}

	break;

	case 9:

	if(i == 0) {
	ey[0] = g_r( 0, 70 );
	ex[0] = 200;
	}

	else if(i == 1){
	ey[1] = g_r( 0, 120 );
	ex[1] = 210;
	}

	else if(i == 2){
	ey[2] = g_r( 70, 100 );
	ex[2] = 190;
	}

	else{
	ey[3] = g_r( 45, 140 );
	ex[3] = 200;
	}

	break;

	}
}

//Lv5?ALv8??_??????
function count_5(){

	 if(flag == 5){
		if(mode_type == 1) score += 20;
		if(mode_type % 2 == 0) score += 10;
		if(mode_type == 3) score += 5;

		if(mode_type == 1) all_score += 20;
		if(mode_type % 2 == 0) all_score += 10;
		if(mode_type == 3) all_score += 5;
		}

	 if(flag == 8){
		if(mode_type == 1) score += 20;
		if(mode_type % 2 == 0) score += 10;
		if(mode_type == 3) score += 5;

		if(mode_type == 1) all_score += 20;
		if(mode_type % 2 == 0) all_score += 10;
		if(mode_type == 3) all_score += 5;
		}
	}

//?X?e?[?W?Z???N?g??u?K?繝ｻ?e??竕ｪ?????
function l_1(){
	p_x = 10;
	p_y = 70;
	ex[0] = 200;
	ex[1] = 220;
	ex[2] = 240;
	ex[3] = 260;
	ey[0] = g_r(0,100);
	ey[1] = g_r(20,60);
	ey[2] = g_r(70,130);
	ey[3] = g_r(70,140);
	vel = 0;
	score = 0;
	flag = 1;
	v = 0;
}

function l_2(){
	p_x = 10;
	p_y = 70;
	ex[0] = 200;
	ex[1] = 220;
	ex[2] = 240;
	ex[3] = 260;
	ey[0] = g_r(0,100);
	ey[1] = g_r(20,60);
	ey[2] = g_r(70,130);
	ey[3] = g_r(70,140);
	vel = 0;
	score = 0;
	flag = 2;
	v = 0;
}

function l_3(){
	p_x = 10;
	p_y = 70;
	ex[0] = 200;
	ex[1] = 220;
	ex[2] = 240;
	ex[3] = 260;
	ey[0] = g_r(0,100);
	ey[1] = g_r(20,60);
	ey[2] = g_r(70,130);
	ey[3] = g_r(70,140);
	vel = 0;
	score = 0;
	flag = 3;
	v = 1.5;
}
function l_4(){
	p_x = 10;
	p_y = 70;
	ex[0] = 200;
	ex[1] = 220;
	ex[2] = 240;
	ex[3] = 260;
	ey[0] = g_r(0,100);
	ey[1] = g_r(20,60);
	ey[2] = g_r(70,130);
	ey[3] = g_r(70,140);
	vel = 0;
	score = 0;
	flag = 4;
	v = 0.75;
}

function l_5(){
	p_x = 10;
	p_y = 70;
	ex[0] = 200;
	ex[1] = 220;
	ex[2] = 240;
	ex[3] = 260;
	ey[0] = g_r(0,100);
	ey[1] = g_r(20,60);
	ey[2] = g_r(70,130);
	ey[3] = g_r(70,140);
	vel = 0;
	score = 0;
	flag = 5;
	v = 1;
}

function l_6(){
	p_x = 10;
	p_y = 70;
	ex[0] = 200;
	ex[1] = 220;
	ex[2] = 240;
	ex[3] = 260;
	ey[0] = g_r(0,100);
	ey[1] = g_r(20,60);
	ey[2] = g_r(70,130);
	ey[3] = g_r(70,140);
	vel = 0;
	score = 0;
	flag = 6;
	v = 0.75;
}

function l_7(){
	p_x = 10;
	p_y = 70;
	ex[0] = 200;
	ex[1] = 220;
	ex[2] = 240;
	ex[3] = 260;
	ey[0] = g_r(0,100);
	ey[1] = g_r(20,60);
	ey[2] = g_r(70,130);
	ey[3] = g_r(70,140);
	vel = 0;
	score = 0;
	flag =  7;
	v = 0.75;
}

function l_8(){
	p_x = 10;
	p_y = 70;
	ex[0] = 200;
	ex[1] = 220;
	ex[2] = 240;
	ex[3] = 260;
	ey[0] = g_r(0,100);
	ey[1] = g_r(20,60);
	ey[2] = g_r(70,130);
	ey[3] = g_r(70,140);
	vel = 0;
	score = 0;
	flag = 8;
	v = 0.25;
}

function l_9(){
	p_x = 10;
	p_y = 70;
	ex[0] = 200;
	ex[1] = 220;
	ex[2] = 240;
	ex[3] = 260;
	ey[0] = g_r(0,100);
	ey[1] = g_r(20,60);
	ey[2] = g_r(70,130);
	ey[3] = g_r(70,140);
	vel = 0;
	score = 0;
	flag = 9;
	v = 1.75;
}

function check_pass(){
	const text = document.getElementById("password");
	const t = text.value;

	switch(t){

	case "1":
		mode_type =1;
		hide_b_and_open_s();
		l_2();
		sta = 1;
		sta_n = 2;
	break;
		
	case "2":
		mode_type =1;
		hide_b_and_open_s();
		l_3();
		sta = 2;
		sta_n = 3;
	break;

	case "3":
		mode_type =1;
		hide_b_and_open_s();
		l_4();
		sta = 3;
		sta_n = 4;
	break;

	case "4":
		mode_type =1;
		hide_b_and_open_s();
		l_5();
		sta = 4;
		sta_n = 5;
	break;

	case "5":
		mode_type =1;
		hide_b_and_open_s();
		l_6();
		sta = 5;
		sta_n = 6;
	break;

	case "6":
		mode_type =1;
		hide_b_and_open_s();
		l_7();
		sta = 6;
		sta_n = 7;
	break;

	case "7":
		mode_type =1;
		hide_b_and_open_s();
		l_8();
		sta = 7;
		sta_n = 8;
	break;

	case "12":
		mode_type =2;
		hide_b_and_open_s();
		l_2();
		sta = 1;
		sta_n = 2;
	break;
		
	case "23":
		mode_type =2;
		hide_b_and_open_s();
		l_3();
		sta = 2;
		sta_n = 3;
	break;

	case "34":
		mode_type =2;
		hide_b_and_open_s();
		l_4();
		sta = 3;
		sta_n = 4;
	break;

	case "45":
		mode_type =2;
		hide_b_and_open_s();
		l_5();
		sta = 4;
		sta_n = 5;
	break;

	case "56":
		mode_type =2;
		hide_b_and_open_s();
		l_6();
		sta = 5;
		sta_n = 6;
	break;

	case "67":
		mode_type =2;
		hide_b_and_open_s();
		l_7();
		sta = 6;
		sta_n = 7;
	break;

	case "78":
		mode_type =2;
		hide_b_and_open_s();
		l_8();
		sta = 7;
		sta_n = 8;
	break;

	case "1433":
		mode_type =3;
		hide_b_and_open_s();
		l_2();
		sta = 1;
		sta_n = 2;
	break;
		
	case "1758":
		mode_type =3;
		hide_b_and_open_s();
		l_3();
		sta = 2;
		sta_n = 3;
	break;

	case "2285":
		mode_type =3;
		hide_b_and_open_s();
		l_4();
		sta = 3;
		sta_n = 4;
	break;

	case "3087":
		mode_type =3;
		hide_b_and_open_s();
		l_5();
		sta = 4;
		sta_n = 5;
	break;

	case "7383":
		mode_type =3;
		hide_b_and_open_s();
		l_6();
		sta = 5;
		sta_n = 6;
	break;

	case "8351":
		mode_type =3;
		hide_b_and_open_s();
		l_7();
		sta = 6;
		sta_n = 7;
	break;

	case "604":
		mode_type =3;
		hide_b_and_open_s();
		l_8();
		sta = 7;
		sta_n = 8;
	break;
	}
}

setInterval(count_5,1000);
setInterval(enemy, 20);
setInterval(check,1);
setInterval(game,1);
