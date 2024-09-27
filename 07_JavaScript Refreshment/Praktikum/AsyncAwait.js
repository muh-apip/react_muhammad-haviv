async function fetchData() {
  
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, title: "Belajar JavaScript", author: "Muhammad Haviv" });
    }, 2000);
  });

  
  return data;
}

async function main() {
  console.log("Mengambil data...");

  try {
    const result = await fetchData();
    console.log("Data berhasil didapatkan:", result);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

main();
