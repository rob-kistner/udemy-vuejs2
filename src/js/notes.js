
var vmNotes = new Vue({
    el: '#notes',
    data: {
        shown: false
    },
    methods: {
        toggleNotes: function() {
            this.shown = !this.shown;
        }
    }
});