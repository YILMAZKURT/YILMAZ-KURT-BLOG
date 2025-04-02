// Blog yazısı eklemek için formu al
document.getElementById("new-post-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engelle

    // Başlık ve içerik alanlarını al
    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;

    // Yeni bir yazı oluştur
    const newPost = document.createElement("div");
    newPost.classList.add("blog-post");

    // Başlık ekle
    const postTitle = document.createElement("h3");
    postTitle.textContent = title;
    newPost.appendChild(postTitle);

    // İçerik ekle
    const postContent = document.createElement("p");
    postContent.textContent = content;
    newPost.appendChild(postContent);

    // Yazının tarihini ekle
    const postDate = document.createElement("small");
    postDate.textContent = "Yazılma Tarihi: " + new Date().toLocaleDateString();
    newPost.appendChild(postDate);

    // Yeni yazıyı blog yazıları bölümüne ekle
    document.getElementById("blog-posts").prepend(newPost);

    // Formu temizle
    document.getElementById("new-post-form").reset();
});
