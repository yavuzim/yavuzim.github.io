function fetchprojects() {
  let dizi = "";
  fetch("https://api.github.com/users/yavuzim/repos")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        if (!nulltostring(element.description).includes("!exclude")) {
          dizi += `<a href="${element.html_url}" target="_blank" class="project">
                <span class="project-name"><h3>
                ${element.name}
                </h3></span>
                <span class="project-language">langague
                ${element.language}
                </span>
                <span class="project-size">size :
                ${element.size}
                </span>
                <span class="project-watchers">watchers :
                ${element.watchers}
                </span>
                ${
                  element.license
                    ? `<span class="project-name">license : ${element.license}</span>`
                    : ""
                }                
                </a>`;
        }
      });
      document.getElementById("projects-field").innerHTML = dizi;
    });
}

const nulltostring = (value) => {
  return value == null ? "" : value.toString();
};

fetchprojects();
