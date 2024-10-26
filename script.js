document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Tính năng tìm kiếm
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function() {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const contents = document.querySelectorAll('.accordion-content');

        contents.forEach(content => {
            const links = content.querySelectorAll('a');
            let found = false;

            links.forEach(link => {
                if (link.textContent.toLowerCase().includes(searchTerm)) {
                    found = true;
                }
            });

            content.style.display = found ? 'block' : 'none';
        });
    });

    // Nút tải lên tài liệu
    const uploadButton = document.getElementById('upload-button');
    const fileInput = document.getElementById('file-input');

    uploadButton.addEventListener('click', function() {
        fileInput.click(); // Mở hộp thoại tải lên
    });

    fileInput.addEventListener('change', function(event) {
        const fileName = event.target.files[0] ? event.target.files[0].name : 'Không có tệp nào được chọn';
        alert(`Tài liệu "${fileName}" đã được chọn để tải lên.`);
        // Thực hiện tải lên tệp ở đây (cần thêm logic phía server)
    });
});
