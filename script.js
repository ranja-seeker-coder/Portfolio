function changeColor() {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a8", "#f4c542", "#222"];

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change background color
    document.body.style.backgroundColor = randomColor;

    // Optional: change text color for readability
    document.body.style.color = "white";
}