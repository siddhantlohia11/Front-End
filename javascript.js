var main = document.body
var mydiv = document.createElement("div")
mydiv.setAttribute("style", "width:100%;height:auto;")
mydiv.setAttribute("class", "container")

var header_div = document.createElement("div")
header_div.setAttribute("class", "container")
header_div.setAttribute("style", "text-align:center;")

var header = document.createElement("h1")
header.setAttribute("style", "color:black;font-family:times-new-roman;margin-top:20px;font-size:50px;")
header.innerText = "THE PERTINENT TIMES";
header_div.appendChild(header)

var nav_bar = document.createElement("nav")
nav_bar.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light")
nav_bar.setAttribute("style", "border-top:1px solid black;border-bottom:1px solid black;")

var navbar_button = document.createElement("button")
navbar_button.setAttribute("class", "navbar-toggler")
navbar_button.setAttribute("type", "button")
navbar_button.setAttribute("data-toggle", "collapse")
navbar_button.setAttribute("data-target", "#navbar")
navbar_button.setAttribute("aria-controls", "navbar")
nav_bar.appendChild(navbar_button)

var navbar_button_span1 = document.createElement("span")
navbar_button_span1.setAttribute("class", "navbar-toggler-icon")
navbar_button.appendChild(navbar_button_span1)

var nav_bar_div = document.createElement("div")
nav_bar_div.setAttribute("class", "collapse navbar-collapse justify-content-center")
nav_bar_div.setAttribute("id", "navbar")

var nav_ul = document.createElement("ul")
nav_ul.setAttribute("class", "navbar-nav")

var li1 = document.createElement("li")
li1.setAttribute("class", "nav-item")
var a1 = document.createElement("a")
a1.setAttribute("class", "nav-link btn")
a1.setAttribute("style", "color:black;")
a1.innerText = "HOME"
a1.setAttribute("id", "home")
a1.addEventListener("click", function() {
    processData("home")
})
li1.appendChild(a1)
nav_ul.appendChild(li1)

var li2 = document.createElement("li")
li2.setAttribute("class", "nav-item")
var a2 = document.createElement("a")
a2.setAttribute("class", "nav-link btn")
a2.setAttribute("style", "color:black;")
a2.innerText = "WORLD"
a2.setAttribute("id", "world")
a2.addEventListener("click", function() {
    processData("world")
})
li2.appendChild(a2)
nav_ul.appendChild(li2)

var li3 = document.createElement("li")
li3.setAttribute("class", "nav-item")
var a3 = document.createElement("a")
a3.setAttribute("class", "nav-link btn")
a3.setAttribute("style", "color:black;")
a3.innerText = "POLITICS"
a3.setAttribute("id", "politics")
a3.addEventListener("click", function() {
    processData("politics")
})
li3.appendChild(a3)
nav_ul.appendChild(li3)

var li4 = document.createElement("li")
li4.setAttribute("class", "nav-item")
var a4 = document.createElement("a")
a4.setAttribute("class", "nav-link btn")
a4.setAttribute("style", "color:black;")
a4.innerText = "MAGAZINE"
a4.setAttribute("id", "politics")
a4.addEventListener("click", function() {
    processData("magazine")
})
li4.appendChild(a4)
nav_ul.appendChild(li4)

var li5 = document.createElement("li")
li5.setAttribute("class", "nav-item")
var a5 = document.createElement("a")
a5.setAttribute("class", "nav-link btn")
a5.setAttribute("style", "color:black;")
a5.innerText = "TECHNOLOGY"
a5.setAttribute("id", "technology")
a5.addEventListener("click", function() {
    processData("technology")
})
li5.appendChild(a5)
nav_ul.appendChild(li5)

var li6 = document.createElement("li")
li6.setAttribute("class", "nav-item")
var a6 = document.createElement("a")
a6.setAttribute("class", "nav-link btn")
a6.setAttribute("style", "color:black;")
a6.innerText = "SCIENCE"
a6.setAttribute("id", "science")
a6.addEventListener("click", function() {
    processData("science")
})
li6.appendChild(a6)
nav_ul.appendChild(li6)

var li7 = document.createElement("li")
li7.setAttribute("class", "nav-item")
var a7 = document.createElement("a")
a7.setAttribute("class", "nav-link btn")
a7.setAttribute("style", "color:black;")
a7.innerText = "HEALTH"
a7.setAttribute("id", "health")
a7.addEventListener("click", function() {
    processData("health")
})
li7.appendChild(a7)
nav_ul.appendChild(li7)

var li8 = document.createElement("li")
li8.setAttribute("class", "nav-item")
var a8 = document.createElement("a")
a8.setAttribute("class", "nav-link btn")
a8.setAttribute("style", "color:black;")
a8.innerText = "SPORTS"
a8.setAttribute("id", "sports")
a8.addEventListener("click", function() {
    processData("sports")
})
li8.appendChild(a8)
nav_ul.appendChild(li8)

var li9 = document.createElement("li")
li9.setAttribute("class", "nav-item")
var a9 = document.createElement("a")
a9.setAttribute("class", "nav-link btn")
a9.setAttribute("style", "color:black;")
a9.innerText = "ARTS"
a9.setAttribute("id", "arts")
a9.addEventListener("click", function() {
    processData("arts")
})
li9.appendChild(a9)
nav_ul.appendChild(li9)

var li10 = document.createElement("li")
li10.setAttribute("class", "nav-item")
var a10 = document.createElement("a")
a10.setAttribute("class", "nav-link btn")
a10.setAttribute("style", "color:black;")
a10.innerText = "FASHION"
a10.setAttribute("id", "fashion")
a10.addEventListener("click", function() {
    processData("fashion")
})
li10.appendChild(a10)
nav_ul.appendChild(li10)

var li11 = document.createElement("li")
li11.setAttribute("class", "nav-item")
var a11 = document.createElement("a")
a11.setAttribute("class", "nav-link btn")
a11.setAttribute("style", "color:black;")
a11.innerText = "FOOD"
a11.setAttribute("id", "food")
a11.addEventListener("click", function() {
    processData("food")
})
li11.appendChild(a11)
nav_ul.appendChild(li11)

var li12 = document.createElement("li")
li12.setAttribute("class", "nav-item")
var a12 = document.createElement("a")
a12.setAttribute("class", "nav-link btn")
a12.setAttribute("style", "color:black;")
a12.innerText = "TRAVEL"
a12.setAttribute("id", "travel")
a12.addEventListener("click", function() {
    processData("travel")
})
li12.appendChild(a12)
// nav_ul.appendChild(li12)

nav_bar_div.appendChild(nav_ul)

var main_div = document.createElement("div")
main_div.setAttribute("class", "container")

nav_bar.appendChild(nav_bar_div)
mydiv.appendChild(header_div)
mydiv.appendChild(nav_bar)
main.appendChild(mydiv)
main.appendChild(main_div)

var api_key = "58PLob60x40xC803A4URZP7eQulEqSSO"

async function getData(url) {
    var data = await fetch(url)
    var arr = await data.json()
    return arr
}

async function processData(section) {
    main_div.innerHTML = ""
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + section + "&api-key=58PLob60x40xC803A4URZP7eQulEqSSO";
    var arr = await getData(url)
    // console.log(arr);
    var data = arr.response.docs;
    console.log(data);
    for (i of data) {
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        container.setAttribute("style", "margin-top:30px;width:100%;")

        var row = document.createElement("div");
        row.setAttribute("class", "row");

        var card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width:100%;")

        var left = document.createElement("div");
        left.setAttribute("class", "col-md-8");

        var sec_card = document.createElement("div");
        sec_card.setAttribute("class", "sectioncard");
        sec_card.innerHTML = section.toUpperCase();

        var titlecard = document.createElement("div");
        titlecard.setAttribute("class", "titlecard");
        titlecard.innerHTML = i.headline.main

        var datecard = document.createElement("div");
        datecard.setAttribute("class", "datecard");
        datecard.innerHTML = i.pub_date;

        var abstractcard = document.createElement("div");
        abstractcard.setAttribute("class", "abstractcard");
        abstractcard.innerHTML = i["abstract"];

        var continuereading = document.createElement("a");
        continuereading.setAttribute("class", "continuereading");
        continuereading.setAttribute("href", i.web_url)
        continuereading.innerHTML = "Continue reading";

        //append all the elements in the left
        left.append(sec_card, titlecard, datecard, abstractcard, continuereading);

        var right = document.createElement("div");
        right.setAttribute("class", "col-md-4");
        right.setAttribute("style", "text-align:right");

        var thumb_image = document.createElement("img");
        thumb_image.setAttribute("class", "img-thumbnail");
        thumb_image.setAttribute("src", "https://static01.nyt.com/" + i.multimedia[0].url);
        thumb_image.setAttribute("style", "width:300px;height:150px;")

        //append the image in the right
        right.append(thumb_image);

        var innerrow = document.createElement("div");
        innerrow.setAttribute("class", "row card-body");

        innerrow.append(left, right)
        card.append(innerrow);
        row.append(card);
        container.append(row);

        main_div.append(container);
    }

}


document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("home").click()
})