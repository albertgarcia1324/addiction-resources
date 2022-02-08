// MODALS

$(function () {
    $('#helpModal').modal(options);
})

$(function () {
    $('#urgentModal').modal(options);
})


$(".immediate-help").hover (
    function() {
        const $this = $(this);
        $this.data('defaultText', $this.text());
        $this.text("Well-Mobile 410-222-7095 and Crisis 410-768-5522");
        $this.css('color', 'red');
    },
    function() {
        const $this = $(this);
        $this.text($this.data('defaultText'));
        $this.css('color', 'black');
    }
);
