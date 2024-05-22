$(document).ready(function () {
    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length - 2; i++) {
            hash = hashes[i].split('=');
            vars.push([hash[i]] = hash[i + 1]);
        }
        return vars;
    }
    var item = getUrlVars();
    $("#tokenId").val(item);
})