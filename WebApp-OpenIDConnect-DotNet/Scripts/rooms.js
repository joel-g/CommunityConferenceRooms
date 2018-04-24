$(document).ready(function () {
    var jqxhr = $.getJSON("Content/conferenceroom.json", function (r) {
        console.log(r);
        for (let i = 0; i < r.length; i++) {
            console.log(r[i].name);
            $("#room-container").append(
                "<div class='col-md-4'>\
                        <h2>" + r[i].name + "</h2>\
                            <p>" + "MEALS" + "</p>\
                            <p><a class='btn btn-default' href='" + r[i].links.google_maps.url + "'>Bing &raquo;</a>    <a class='btn btn-default' href='" + r[i].links.yelp.url + "'>Yelp &raquo;</a></p >\
                    </div >")
        }
    })
});
