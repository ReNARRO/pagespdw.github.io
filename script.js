// Fungsi untuk mendapatkan kalimat salam berdasarkan waktu
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
    return 'Good Morning';
    } else if (hour < 18) {
    return 'Good Afternoon';
    } else {
    return 'Good Evening';
    }
}
// Fungsi untuk mendapatkan format angka 2 digit
function formatTwoDigit(num) {
    return num < 10 ? `0${num}` : num;
}

// Fungsi untuk mendapatkan tanggal dalam format "DD/MM/YYYY"
function getCurrentDate() {
    const date = new Date();
    const day = formatTwoDigit(date.getDate());
    const month = formatTwoDigit(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Fungsi untuk mendapatkan jam dalam format "HH:MM:SS"
function getCurrentTime() {
    const date = new Date();
    const hours = formatTwoDigit(date.getHours());
    const minutes = formatTwoDigit(date.getMinutes());
    const seconds = formatTwoDigit(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
}

// Mengupdate kalimat salam, tanggal, dan jam setiap detik
function updateTime() {
    const greetingText = document.getElementById('greeting-text');
    const currentDate = document.getElementById('current-date');
    const currentTime = document.getElementById('current-time');

    greetingText.textContent = getGreeting();
    currentDate.textContent = getCurrentDate();
    currentTime.textContent = getCurrentTime();
}

// Mengupdate waktu saat halaman dimuat
updateTime();

// Mengupdate waktu setiap detik
setInterval(updateTime, 1000);
