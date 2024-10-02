let rowCount = 1000;

// Fungsi untuk menambah produk
document.getElementById('addProductBtn').addEventListener('click', function () {
    const productName = document.getElementById('productName').value;
    const productCategory = document.getElementById('productCategory').value;
    const productImage = document.getElementById('productImage').value;
    const productFreshness = document.querySelector('input[name="productFreshness"]:checked')?.value; 
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;

    if (productName && productCategory && productImage && productFreshness && productDescription && productPrice) {
        const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

        const newRow = table.insertRow();

        newRow.insertCell(0).innerHTML = rowCount; 
        newRow.insertCell(1).innerHTML = productName; 
        newRow.insertCell(2).innerHTML = productCategory; 
        newRow.insertCell(3).innerHTML = productImage;
        newRow.insertCell(4).innerHTML = productFreshness; 
        newRow.insertCell(5).innerHTML = productDescription; 
        newRow.insertCell(6).innerHTML = productPrice; 

        rowCount++;

        document.getElementById('productName').value = '';
        document.getElementById('productCategory').value = '';
        document.getElementById('productImage').value = '';
        document.querySelector('input[name="productFreshness"]:checked').checked = false; 
        document.getElementById('productDescription').value = '';
        document.getElementById('productPrice').value = '';
    } else {
        alert('Please fill all the fields!');
    }
});

// Fungsi untuk menghapus baris terakhir pada tabel
document.querySelector('input[value="Deletion"]').addEventListener('click', function () {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    if (table.rows.length > 0) {
        table.deleteRow(table.rows.length - 1); 
        rowCount--; 
    } else {
        alert("No data to delete!");
    }
});

// Fungsi untuk mencari produk berdasarkan Product Name
document.querySelector('input[value="Search"]').addEventListener('click', function () {
    const searchValue = document.querySelector('input[placeholder="Search by Product Name"]').value.toLowerCase();
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let found = false;

    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        const productName = row.cells[1].textContent.toLowerCase(); 

        if (productName === searchValue) {
            alert(`Product Found:\nName: ${row.cells[1].textContent}\nCategory: ${row.cells[2].textContent}\nImage: ${row.cells[3].textContent}\nFreshness: ${row.cells[4].textContent}\nDescription: ${row.cells[5].textContent}\nPrice: ${row.cells[6].textContent}`);
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Product not found!");
    }
});
