const apiUrl = "../json_solution.php";
const form = document.querySelector("form");
const result = document.querySelector(".result");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const yearInput = form.querySelector("input[type='number']");

    fetch(apiUrl + "?"+ new URLSearchParams({
        "year": yearInput.value
    }), {
        headers: {
            "Accept": "application/json"
        }
    }).then(resp => resp.json())
        .then(json => {
            result.classList.remove("result-hidden");
            result.innerHTML = json.answer;
        });
})