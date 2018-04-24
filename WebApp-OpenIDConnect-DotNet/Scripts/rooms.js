$(document).ready(function () {
    var jqxhr = $.getJSON("Content/conferenceroom.json", function (r) {
        for (let i = 0; i < r.length; i++) {
            $("#room-container").append(
                "<div class='col-md-4'>\
                        <h2>" + r[i].name + "</h2>\
                            <p>Distance to building 42: <strong>" + r[i].distance_to_42 + " miles</strong></p>\
                            <p><a class='btn btn-default' href='" + r[i].links.google_maps.url + "'>Map &raquo;</a>    <a class='btn btn-default' href='" + r[i].links.yelp.url + "'>Yelp &raquo;</a></p >\
                    </div >")
        }
    })
});
