var page = new Array();
var pageIndex = 0;

//characters
page[0] = "partymain/partyhome.html"
page[1] = "partymain/enoch.html"
page[2] = "partymain/scanlan.html"
page[3] = "partymain/isenhart.html"
page[4] = "partymain/dominus.html"
page[5] = "partymain/estelle.html"
page[6] = "partymain/delle.html"
page[7] = "partymain/olgregg.html"

//world
page[8] = "worldmain/worldhome.html"
page[9] = "worldmain/history.html"
page[10] = "worldmain/geography.html"
page[11] = "worldmain/demographics.html"

function subpage(n) {
	pageIndex = n;
	document.getElementById("mini").src = page[pageIndex];
}