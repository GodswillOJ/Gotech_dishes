document.addEventListener("DOMContentLoaded", function() {
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");

    // Set the duration for the first text
    var text1Duration = 3000; // in milliseconds

    // Set the duration for the transition between texts
    var transitionDuration = 1000; // in milliseconds

    // Show the second text after the first text duration
    setTimeout(function() {
        text1.classList.add("hidden");
        text2.classList.remove("hidden");
    }, text1Duration);

    // Optionally, you can reset the texts after a certain interval
    var resetInterval = text1Duration + transitionDuration + 2000; // 2000 milliseconds (2 seconds)

    setInterval(function() {
        text1.classList.remove("hidden");
        text2.classList.add("hidden");
        setTimeout(function() {
            text1.classList.add("hidden");
            text2.classList.remove("hidden");
        }, text1Duration);
    }, resetInterval);
});
