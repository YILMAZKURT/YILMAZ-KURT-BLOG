document.addEventListener('DOMContentLoaded', function() {
    // Butonun ve yazıların seçilmesi
    const toggleButton = document.getElementById('toggle-posts');
    const postsSection = document.getElementById('posts-section');
    
    // Butona tıklanınca yazıları göster
    toggleButton.addEventListener('click', function() {
        if (postsSection.style.display === 'none') {
            postsSection.style.display = 'block'; // Yazıları göster
            toggleButton.textContent = 'Yazıları Gizle'; // Buton metnini değiştir
        } else {
            postsSection.style.display = 'none'; // Yazıları gizle
            toggleButton.textContent = 'Yazıları Görüntüle'; // Buton metnini değiştir
        }
    });

    // Filtreleme işlemi
    const searchInput = document.getElementById('search');
    const posts = document.querySelectorAll('.post');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        posts.forEach(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                post.style.display = 'block'; // Eşleşirse göster
            } else {
                post.style.display = 'none'; // Eşleşmezse gizle
            }
        });
    });
});
