/**
 * SIÊU SCRIPT LÀM BÁNH CHO NAM
 * Chức năng: Tự động rải 500 hạt cốm và hoa kem lên các tầng bánh.
 */

const colors = ['#FF5252', '#FFEB3B', '#2196F3', '#4CAF50', '#9C27B0', '#FF9800', '#00BCD4'];

function createSprinkles(layerId, count) {
    const surface = document.getElementById(layerId);
    
    for (let i = 0; i < count; i++) {
        const sprinkle = document.createElement('div');
        sprinkle.className = 'sprinkle';
        
        // Tạo tọa độ ngẫu nhiên bên trong bề mặt tầng bánh
        const top = Math.random() * 60; // Bề mặt dày 70px
        const left = Math.random() * 90; // Độ rộng tùy tầng
        
        // Tạo góc xoay ngẫu nhiên
        const rotation = Math.random() * 360;
        
        // Chọn màu ngẫu nhiên
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Áp dụng style (Tương đương việc viết hàng trăm dòng CSS tọa độ)
        sprinkle.style.top = `${top}px`;
        sprinkle.style.left = `${left}%`;
        sprinkle.style.backgroundColor = color;
        sprinkle.style.transform = `rotate(${rotation}deg)`;
        
        surface.appendChild(sprinkle);
    }
}

function createFrostingFlowers() {
    const wrapper = document.getElementById('frosting-border');
    const totalFlowers = 24; // Viền quanh tầng trên cùng
    
    for (let i = 0; i < totalFlowers; i++) {
        const flower = document.createElement('div');
        flower.style.position = 'absolute';
        flower.style.width = '15px';
        flower.style.height = '15px';
        flower.style.backgroundColor = '#fff9c4';
        flower.style.borderRadius = '50%';
        flower.style.border = '1px solid #ffe082';
        
        // Tính toán vị trí hình Elip để viền theo bánh
        const angle = (i / totalFlowers) * (2 * Math.PI);
        const x = 90 + 85 * Math.cos(angle);
        const y = 35 + 30 * Math.sin(angle);
        
        flower.style.left = `${x}px`;
        flower.style.top = `${y - 10}px`;
        
        wrapper.appendChild(flower);
    }
}

// Thực thi lệnh "Làm bánh"
// Tổng cộng tạo ra hơn 600 thành phần trang trí
createSprinkles('layer1-surface', 250); // 250 hạt cho tầng Socola
createSprinkles('layer2-surface', 150); // 150 hạt cho tầng Dâu
createSprinkles('layer3-surface', 100); // 100 hạt cho tầng Vani
createFrostingFlowers(); // Viền hoa kem

console.log("Chúc mừng! Chiếc bánh 1000 chi tiết của Nam đã sẵn sàng!");
/**
 * HIỆU ỨNG MƯA HẠT CỐM RƠI
 /**
 * ĐIỀU CHỈNH LẠI CƠN MƯA HẠT CỐM (ÍT VÀ MƯỢT HƠN)
 */
function createFallingSprinkles(count) {
    const body = document.body;
    // Xóa bớt các hạt cũ nếu có
    const oldSprinkles = document.querySelectorAll('.falling-sprinkle');
    oldSprinkles.forEach(s => s.remove());

    for (let i = 0; i < count; i++) {
        const drop = document.createElement('div');
        drop.className = 'falling-sprinkle';
        
        const left = Math.random() * 100;
        const scale = 0.6 + Math.random() * 0.4; // Hạt đều nhau hơn
        const duration = 6 + Math.random() * 6;  // Rơi chậm từ 6s đến 12s
        const delay = Math.random() * 10;        // Rải rác thời gian xuất hiện
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        drop.style.left = `${left}vw`;
        drop.style.backgroundColor = color;
        drop.style.animationDuration = `${duration}s`;
        drop.style.animationDelay = `${delay}s`;
        drop.style.transform = `scale(${scale})`;
        
        body.appendChild(drop);
    }
}

// Gọi lại với số lượng ít hơn (tầm 40 hạt)
createFallingSprinkles(40);
// 1. Tự động tắt nến và chuyển trang sau 5 giây
const flame = document.querySelector('.flame');

console.log("Tiệc bắt đầu! Nến sẽ tắt sau 5 giây...");

setTimeout(() => {
    // Tắt nến
    if (flame) {
        flame.classList.add('extinguished');
        
        // Tạo một chút khói cho thật
        const smoke = document.createElement('div');
        smoke.className = 'smoke';
        document.querySelector('.candle').appendChild(smoke);
    }
    
    console.log("Nến đã tắt! Đang chuyển trang...");

    // Đợi thêm 1 giây sau khi tắt nến rồi mới chuyển trang cho mượt
    setTimeout(() => {
        // Thay link dưới đây bằng trang bạn muốn chuyển đến
        window.location.href = "letter.html"; 
    }, 1000);

}, 5000); // 5000 milliseconds = 5 giây


// 2. (Giữ nguyên) Logic rải hạt cốm từ bản trước để bánh vẫn đẹp
const layers = [
    { id: '.layer-1 .shape', count: 40, colors: ['#3e2723', '#795548'] },
    { id: '.layer-2 .shape', count: 30, colors: ['#ffffff', '#ffeb3b', '#f48fb1'] },
    { id: '.layer-3 .shape', count: 20, colors: ['#2196f3', '#4caf50', '#ff9800'] }
];

layers.forEach(config => {
    const parent = document.querySelector(config.id);
    if(parent) {
        for(let i=0; i<config.count; i++) {
            const s = document.createElement('div');
            s.style.position = 'absolute';
            s.style.width = '6px';
            s.style.height = '3px';
            s.style.borderRadius = '2px';
            s.style.backgroundColor = config.colors[Math.floor(Math.random() * config.colors.length)];
            s.style.top = Math.random() * 80 + '%';
            s.style.left = Math.random() * 80 + 10 + '%';
            s.style.transform = `rotate(${Math.random() * 360}deg)`;
            s.style.boxShadow = '1px 1px 1px rgba(0,0,0,0.1)';
            parent.appendChild(s);
        }
    }
});