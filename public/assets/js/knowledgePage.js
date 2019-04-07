$(function() {
    $(".change-status").on("click", function(event) {
        var id = $(this).data("id");
        var newknownstate = {
            known: newknown
        };

        $.ajax("/api/knowledge/" + id, {
            type: "PUT",
            data: newknownstate
        }).then(
            function() {
                console.log("changed status to", newknown);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newTopic = {
            name: $("#topic").val.trim(),
        };

        $.ajax("/api/knowledge", {
            type: "POST",
            data: newTopic
        }).then(
            function() {
                console.log("new topic added");

                location.reload();
            }
        );
    });
})