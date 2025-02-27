// Events Calendar (for events.html)
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('calendar')) {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            events: [
                { title: 'Workshop on IoT', date: '2025-03-05' },
                // Add more events
            ]
        });
        calendar.render();
    }
});