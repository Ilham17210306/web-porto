// buat variabel untuk menanmpung data blog didalm array kosong
// data array
let blogs = []; 

// funtion untuk membuat uatu fungsi/perintah untuk aplikasi
function addBlog(event){
    event.preventDefault(); // mencegah halaman refresh
    let title = document.getElementById("input-blog-title").value;
    let content = document.getElementById("input-blog-content").value;
    let image = document.getElementById("input-blog-image");
 
    image = URL.createObjectURL(image.files[0]);  // untuk ngambil data gambar

    // data objek
    const blog = {
        title: title,
        content: content,
        image: image,
        author: "nonono",
        postAt: new Date(),
    };

    blogs.push(blog);
    console.log(blog);

    renderBlog();
}

// untuk merender content blog ke blog list
function renderBlog() {
    let contentContainer = document.getElementById("contens");
    
    contentContainer.innerHTML +=""; //untuk inject/menyisipkan elemen html
    
    // looping setiap data di array(blogs)dan tampilkan ke dalm bentuk html
    for(let i = 0; i <blogs.length; i++){
        contentContainer.innerHTML += `
        <div id="contens" class="blog-list">
            <div class="blog-list-item">
            <div class="blog-image">
        <img src="${blogs[i].image}"alt="blog-image"/>
    </div>
    <div class="blog-content">
        <h1>${blogs[i].title}</h1>
        <span class="detail-blog-content">20 Nov 00:00 |  ${blogs[i].author}"</span>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptate.
        </p>
    </div></div>
</div>`
    }
    
}