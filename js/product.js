document.getElementById('button').addEventListener('click', function(e) {
    e.preventDefault(); // Menghentikan perilaku default dari tautan
    var targetElement = document.getElementById('kids'); // Mendapatkan elemen dengan ID "kids"
    targetElement.scrollIntoView({ behavior: 'smooth', duration: 1000}); // Menggulir ke elemen target dengan efek smooth
});