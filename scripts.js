var page = new Array();
var pageIndex = 0;

//characters
page[0] = "http://sean.jcduffyphoto.com/FinalProj/partymain/partyhome.html"
page[1] = "http://sean.jcduffyphoto.com/FinalProj/partymain/enoch.html"
page[2] = "http://sean.jcduffyphoto.com/FinalProj/partymain/scanlan.html"
page[3] = "http://sean.jcduffyphoto.com/FinalProj/partymain/isenhart.html"
page[4] = "http://sean.jcduffyphoto.com/FinalProj/partymain/dominus.html"
page[5] = "http://sean.jcduffyphoto.com/FinalProj/partymain/estelle.html"
page[6] = "http://sean.jcduffyphoto.com/FinalProj/partymain/delle.html"
page[7] = "http://sean.jcduffyphoto.com/FinalProj/partymain/olgregg.html"

//world
page[8] = "http://sean.jcduffyphoto.com/FinalProj/worldmain/worldhome.html"
page[9] = "http://sean.jcduffyphoto.com/FinalProj/worldmain/history.html"
page[10] = "http://sean.jcduffyphoto.com/FinalProj/worldmain/geography.html"
page[11] = "http://sean.jcduffyphoto.com/FinalProj/worldmain/demographics.html"

function subpage(n) {
	pageIndex = n;
	document.getElementById("mini").src = page[pageIndex];
}