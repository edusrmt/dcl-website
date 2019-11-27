$(document).ready(function() {
    $(".membro").click(expand);
})

function expand(e) {
    var member = $(e.currentTarget);

    if(!member.hasClass("collapsed")) {
        member.addClass("collapsed");
    } else {
        $(".membro").addClass("collapsed");
        member.removeClass("collapsed");
    }
}