var options = [
    {href: "Tutorial1.html", text: "Tutorial 1"},
    {href: "Tutorial2.html", text: "Tutorial 2"},
    {href: "Tutorial3.html", text: "Tutorial 3"},
    {href: "Tutorial4.html", text: "Tutorial 4"},
    {href: "Tutorial5.html", text: "Tutorial 5"},
    {href: "Tutorial6.html", text: "Tutorial 6"},
    {href: "Tutorial7.html", text: "Tutorial 7"},
    {href: "Tutorial8.html", text: "Tutorial 8"},
    {href: "Tutorial9.html", text: "Tutorial 9"},
    {href: "Tutorial_10.html", text: "Tutorial 10"},
    {href: "Tutorial_11.html", text: "Tutorial 11"},
    {href: "Tutorial_12.html", text: "Tutorial 12"},
    {href: "Tutorial_13.html", text: "Tutorial 13"},
    {href: "Tutorial_14.html", text: "Tutorial 14"},
    {href: "Tutorial_15.html", text: "Tutorial 15"},
    {href: "Tutorial_16.html", text: "Tutorial 16"},
    {href: "Tutorial_17.html", text: "Tutorial 17"},
    {href: "Tutorial_18.html", text: "Tutorial 18"},
    {href: "Tutorial_19.html", text: "Tutorial 19"},
    {href: "Tutorial_20.html", text: "Tutorial 20"},
    {href: "Tutorial_21.html", text: "Tutorial 21"},
    {href: "Tutorial_22.html", text: "Tutorial 22"}
];
$(document).ready(function(){
    $.each(options, function (index) {
        $("#myList").append($("<li>", {}).append($("<a>", { href: options[index].href }).text(options[index].text)));
    });
});