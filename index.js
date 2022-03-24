// var XMLHttpRequest = require('xhr2');
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var data = JSON.parse(xhttp.responseText);
        var container = document.getElementById('container');
        data.forEach(function (row, i) {
            console.log(row.date, i);
            var rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            rowDiv.innerHTML = `<div class="left-section">
            <h5 class="company">${row.company}</h5>
            <h3 class="position">${row.position}</h3>
            <p class="location">${row.location}</p>
            </div>
            <div class="mid-section">
            ${row.tags?.map(function(tag){
                return `<span class="tag"> ${tag} </span>`
            }).join(' ')}
            </div>
            <div class="mid-right-section">
            ${new Date(row.date).toLocaleString()}
            </div>
            <div class = "right-section" >
            <a href = ${row.url}>
            <button class = "apply" > APPLY </button>
            </a>
            </div>
            `;
            container.appendChild(rowDiv);
        })

    }
};
xhttp.open("GET", "https://remoteok.com/api", true);
xhttp.send();

function solution(n, a) {
    let b = [];

    for (let i = 0; i <= n - 1; i++) {

        if (a.length === 1) {
            b[0] = a[0];

        } else if (i == n - 1) { // <- here
            b[i] = a[i - 1] + a[i];
        } else if (i == 0) {
            b[0] = a[0] + a[1];
        } else {
            b[i] = a[i - 1] + a[i] + a[i + 1];
        }
    }
    return b;
}
console.log(solution(1, [-5]));