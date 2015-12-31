var url = document.URL;
var cut_url = url.slice(4, 8);
console.log("Hello");
var IDE = {
    1: "https://code.hackerearth.com",
    2: "http://ideone.com/",
    3: "https://www.codechef.com/ide",
    4: "http://www.tutorialspoint.com/codingground.htm",
    5: "https://jsfiddle.net/"
};
chrome.tabs.query({
    active: true,
}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    //console.log(tab.url);
    //alert(tab.url);
    return tab;
});
//document.onload= open();