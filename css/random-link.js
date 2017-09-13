// var articles = [
// 	{weburl:"/deathworm.html"},
// 	{weburl:"/thunderbird.html"},
// 	{weburl:"/aswang.html"},
// 	{weburl:"/bigfoot.html"}
// ]

// function randomlink(){
// 	var randomArticle = articles[Math.floor(Math.random()*articles.length)];
// 	window.location= "http://creepycryptids.x10host.com"+ randomArticle;
function randomLink(){
	var articles = [
	{weburl:"/deathworm.html"},
	{weburl:"/thunderbird.html"},
	{weburl:"/aswang.html"},
	{weburl:"/bigfoot.html"}
];
	var selectedLink = Math.round(Math.random() * (Url.length+1));
	window.location = "http://creepycryptids.x10host.com" +selectedLink;
}

// function randomlink(){
//     var myrandom=Math.round(Math.random()*9)
//     var links=new Array()
//     links[0]="http://www.javascriptkit.com"
//     links[1]="http://www.dynamicdrive.com"
//     links[2]="http://www.cssdrive.com"
//     links[3]="http://www.codingforums.com"
//     links[4]="http://www.news.com"
//     links[5]="http://www.gamespot.com"
//     links[6]="http://www.msnbc.com"
//     links[7]="http://www.cnn.com"
//     links[8]="http://news.bbc.co.uk"
//     links[9]="http://www.news.com.au"
 
//     window.location=links[myrandom]
// }