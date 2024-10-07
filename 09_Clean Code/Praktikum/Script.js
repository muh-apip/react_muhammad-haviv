let rowCount = 1000;

// Fungsi untuk mendapatkan elemen
const getElement = (selector) => document.querySelector(selector);

// Fungsi untuk menambah produk ke tabel
const addProduct = () => {
    const productName = getElement('#productName').value;
    const productCategory = getElement('#productCategory').value;
    const productImage = getElement('#productImage').value;
    const productFreshness = getElement('input[name="productFreshness"]:checked')?.value;
    const productDescription = getElement('#productDescription').value;
    const productPrice = getElement('#productPrice').value;

    if (productName && productCategory && productImage && productFreshness && productDescription && productPrice) {
        const tableBody = getElement('#dataTable tbody');

        const newRow = tableBody.insertRow();
        const cellValues = [
            rowCount,
            productName,
            productCategory,
            productImage,
            productFreshness,
            productDescription,
            productPrice
        ];

        cellValues.forEach((value, index) => newRow.insertCell(index).innerHTML = value);

        rowCount++;
        resetForm();
    } else {
        alert('Please fill all the fields!');
    }
};

// Fungsi untuk mereset form setelah menambah produk
const resetForm = () => {
    getElement('#productName').value = '';
    getElement('#productCategory').value = '';
    getElement('#productImage').value = '';
    getElement('input[name="productFreshness"]:checked').checked = false;
    getElement('#productDescription').value = '';
    getElement('#productPrice').value = '';
};

// Fungsi untuk menghapus baris terakhir dari tabel
const deleteLastRow = () => {
    const tableBody = getElement('#dataTable tbody');
    if (tableBody.rows.length > 0) {
        tableBody.deleteRow(tableBody.rows.length - 1);
        rowCount--;
    } else {
        alert("No data to delete!");
    }
};

// Fungsi untuk mencari produk berdasarkan nama
const searchProduct = () => {
    const searchValue = getElement('input[placeholder="Search by Product Name"]').value.toLowerCase();
    const tableBody = getElement('#dataTable tbody');
    let found = false;

    Array.from(tableBody.rows).forEach((row) => {
        const productName = row.cells[1].textContent.toLowerCase();
        if (productName === searchValue) {
            alert(`Product Found:\nName: ${row.cells[1].textContent}\nCategory: ${row.cells[2].textContent}\nImage: ${row.cells[3].textContent}\nFreshness: ${row.cells[4].textContent}\nDescription: ${row.cells[5].textContent}\nPrice: ${row.cells[6].textContent}`);
            found = true;
        }
    });

    if (!found) {
        alert("Product not found!");
    }
};

// Event listeners
getElement('#addProductBtn').addEventListener('click', addProduct);
getElement('input[value="Deletion"]').addEventListener('click', deleteLastRow);
getElement('input[value="Search"]').addEventListener('click', searchProduct);
