//function for movie adder & delete
const addMovie = (event) => {
  event.preventDefault();
  let inputField = document.querySelector("input");

  let movie = document.createElement("li");

  let movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  let list = document.querySelector("ul");
  list.appendChild(movie);

  inputField.value = "";
};

const deleteMovie = (event) => {
//   message.textContent = "Deleted movie off list";
  message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted`

  event.target.parentNode.remove();

  revealMessage()
};

//event listeners for adder
const form = document
  .querySelector("form")
  .addEventListener("submit", addMovie);
const message = document.querySelector("#message");


//cross off movies function 
const crossOffMovie = event => {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        // message.textContent = 'Watched'
        message.textContent = `${event.target.textContent} watched`
    } else {
        // message.textContent = 'Movie added back'
        message.textContent = `${event.target.textContent} Added back`
    }
    revealMessage()
}





const revealMessage = () => {
    message.classList.remove('hide')


    setTimeout(() => {
        message.classList.add('hide')
    }, 2000)

}