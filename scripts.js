// Search tài liệu
function searchDocuments() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('doc-card');
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('.card-title').innerText.toLowerCase();
        cards[i].style.display = title.includes(input) ? '' : 'none';
    }
}

// Filter lịch học theo ngày
function filterSchedule() {
    let input = document.getElementById('filterDay').value.toLowerCase();
    let rows = document.querySelectorAll('#scheduleTable tbody tr');
    rows.forEach(row => {
        let day = row.cells[0].innerText.toLowerCase();
        row.style.display = day.includes(input) ? '' : 'none';
    });
}
