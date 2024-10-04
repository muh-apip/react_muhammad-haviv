// Counter untuk menghitung jumlah produk
let productCount = 1000;

// Fungsi untuk menambah produk ke tabel
document.getElementById('addProductBtn').addEventListener('click', function () {
    const productData = getProductData();
    
    if (validateProductData(productData)) {
        addProductToTable(productData);
        resetForm();
        productCount++;
    } else {
        alert('Please fill all the fields!');
    }
});

// Fungsi untuk mendapatkan data produk dari input
function getProductData() {
    return {
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        image: document.getElementById('productImage').value,
        freshness: document.querySelector('input[name="productFreshness"]:checked')?.value,
        description: document.getElementById('productDescription').value,
        price: document.getElementById('productPrice').value,
    };
}

// Fungsi untuk validasi data produk
function validateProductData({ name, category, image, freshness, description, price }) {
    return name && category && image && freshness && description && price;
}

// Fungsi untuk menambahkan produk ke tabel
function addProductToTable({ name, category, image, freshness, description, price }) {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    // Masukkan data ke baris baru
    newRow.insertCell(0).textContent = productCount;
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = category;
    newRow.insertCell(3).textContent = image;
    newRow.insertCell(4).textContent = freshness;
    newRow.insertCell(5).textContent = description;
    newRow.insertCell(6).textContent = price;
}

// Fungsi untuk mereset form input
function resetForm() {
    document.getElementById('productName').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productImage').value = '';
    document.querySelector('input[name="productFreshness"]:checked').checked = false;
    document.getElementById('productDescription').value = '';
    document.getElementById('productPrice').value = '';
}

// Fungsi untuk menghapus produk terakhir
document.getElementById('deleteBtn').addEventListener('click', function () {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    if (tableBody.rows.length > 0) {
        tableBody.deleteRow(tableBody.rows.length - 1);
        productCount--;
    } else {
        alert("No data to delete!");
    }
});

// Fungsi untuk mencari produk berdasarkan nama
document.getElementById('searchBtn').addEventListener('click', function () {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let productFound = false;

    // Cari produk di dalam tabel
    for (let row of tableBody.rows) {
        const productName = row.cells[1].textContent.toLowerCase();

        if (productName === searchQuery) {
            alert(`Product Found:
            Name: ${row.cells[1].textContent}
            Category: ${row.cells[2].textContent}
            Image: ${row.cells[3].textContent}
            Freshness: ${row.cells[4].textContent}
            Description: ${row.cells[5].textContent}
            Price: ${row.cells[6].textContent}`);
            productFound = true;
            break;
        }
    }

    if (!productFound) {
        alert("Product not found!");
    }
});
