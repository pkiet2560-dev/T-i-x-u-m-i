// Khởi tạo dữ liệu từ LocalStorage
let gameState = JSON.parse(localStorage.getItem('taiXiuState')) || {
    credits: 1000,
    bg: '',
    volume: 50
};

// Cập nhật hiển thị ban đầu
function init() {
    document.getElementById('balance-display').innerText = `Credits: ${gameState.credits}`;
    document.body.style.backgroundImage = `url('${gameState.bg}')`;
}

// Hàm lưu dữ liệu tự động
function saveGame() {
    localStorage.setItem('taiXiuState', JSON.stringify(gameState));
    document.getElementById('balance-display').innerText = `Credits: ${gameState.credits}`;
}

// Hệ thống nhập Code
function claimCode() {
    const code = document.getElementById('gift-code').value;
    if (code === "WELCOME2026") { // Ví dụ mã code
        gameState.credits += 5000;
        alert("Bạn đã nhận được 5000 credits!");
        saveGame();
    } else {
        alert("Mã không hợp lệ.");
    }
}

// Tùy chỉnh hình ảnh và âm thanh
function updateAssets() {
    gameState.bg = document.getElementById('bg-url').value;
    gameState.volume = document.getElementById('vol-control').value;
    document.body.style.backgroundImage = `url('${gameState.bg}')`;
    saveGame();
}

// Logic lắc xúc xắc cơ bản
function shakeDice() {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const d3 = Math.floor(Math.random() * 6) + 1;
    const total = d1 + d2 + d3;
    
    document.getElementById('dice-result').innerText = `${d1} - ${d2} - ${d3}`;
    return total;
}

function toggleMenu() {
    const menu = document.getElementById('settings-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

init();
