function fetchphotos() {
    let template = ""
    fetch("https://api.unsplash.com/users/yavuzim/photos?client_id=QPwn6dddEmZllOFESijqiqBox6mMlRWJ_mzIIkWkhRg")
        .then(res => res.json())
        .then(data => {
            data.forEach(image => {
                template += ` <div class="flex-item">
            <div class="item-inner">
                <img src="${image.urls.small}" alt="" class="image">
            </div>
         </div>`
            });
            document.querySelector("#gallery").innerHTML = template;
        })
}
fetchphotos();