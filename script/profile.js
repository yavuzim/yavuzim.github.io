function fetchprofileimg() {
    let profilphoho = "";
    fetch("https://api.github.com/users/yavuzim")
        .then(res => res.json())
        .then(data => {
            profilphoho += `<img src="${data.avatar_url}" alt="">`
            document.getElementById("profile-img").innerHTML = profilphoho;  
        })
}
fetchprofileimg();