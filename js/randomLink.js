var articles = [
	{weburl:"/deathworm.html"},
	{weburl:"/thunderbird.html"},
	{weburl:"/aswang.html"},
	{weburl:"/bigfoot.html"}
];
var randomArticle = Math.round(Math.random() * (articles.length));
function randomLink(){
	var randomArticle = Math.round(Math.random() *3)
	// var randomArticle = articles[Math.floor(Math.random()*articles.length)];
	window.location= "https://jkenlee14.github.io/b5dc-csp1-info/"+ articles[randomArticle].weburl;
}
