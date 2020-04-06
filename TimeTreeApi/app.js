var app = new Vue({
    el: '#app',
    filters: {
        moment: function (date) {
            return moment(date).format('YYYY/MM/DD HH:mm');
        }
    },
    data: {
        items:[],
        // APIのURI　カレンダーIDは置き換えること ex. 'calendars/abcDefgHiJk1'
        uri:"https://timetreeapis.com/calendars/abcDefgHiJk1/upcoming_events",
        // TimeTreeのパーソナルアクセストークンは置き換えること ex. 'Bearer Y4cqp_L43-A39O25Pqe6I9KT-ABg5jibe9ABCO8oHfwJabcd'
        ttPsnlAcToken:'Bearer Y4cqp_L43-A39O25Pqe6I9KT-ABg5jibe9ABCO8oHfwJabcd',
    },
    mounted: function () {
        axios.get(this.uri, 
            { headers: {'Authorization': this.ttPsnlAcToken } }).then(response => (this.items = response.data.data))
    }
})