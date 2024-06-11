document.addEventListener("DOMContentLoaded", function() {
    const loadMoreButton = document.getElementById("loadMore");
    const hiddenRecipes = document.querySelectorAll(".recipe.hidden");

    loadMoreButton.addEventListener("click", function() {
        hiddenRecipes.forEach((recipe, index) => {
            if (index < 3) {  // Menampilkan 3 resep tambahan
                recipe.classList.remove("hidden");
            }
        });
        // Sembunyikan tombol "Load More" setelah semua resep ditampilkan
        if (document.querySelectorAll(".recipe.hidden").length === 0) {
            loadMoreButton.style.display = "none";
        }
    });
});
