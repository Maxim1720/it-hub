const apiUrl = "json-solution.php";
const selectElement = document.querySelector(".container>.container-inner>form>select");
const answerElement = document.querySelector(".answer");

selectElement.addEventListener("change", (e) => {
    setAnswer(e.target.value);
});


function setAnswer(day){
    answerElement.textContent = "...";
    fetch(
      apiUrl +
        "?" +
        new URLSearchParams({
          day: day,
        })
    )
      .then((reps) => reps.json())
      .then((json) => {
        answerElement.textContent = json.answer;
      });
}
