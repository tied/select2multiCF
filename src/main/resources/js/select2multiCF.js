(function ($) {
    alert('js running 2 ');
    AJS.toInit(function () {
        alert('js running 3');
        function init(context) {
            $(context).find('.select-2multi-cf').auiSelect2({
                allowClear: true,
                minimumResultsForSearch: -1
            });
        }

        init(document);
        JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context, reason) {
            if (reason == JIRA.CONTENT_ADDED_REASON.inlineEditStarted || reason == JIRA.CONTENT_ADDED_REASON.dialogReady)
                init(context);
        });
    });
})(AJS.$);
