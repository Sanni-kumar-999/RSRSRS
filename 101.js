const studentImages = {
    "santu": "Book1_1.jpg",
    "yug": "Book2_1.jpg",
    "nitin": "Book3_1.jpg",
    "sujit": "Book4_1.jpg",
    "sonu": "Book5_1.jpg"
};

document.getElementById("submitButton").addEventListener("click", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    const nameInput = document.getElementById("nameInput").value.trim();
    const rollInput = document.getElementById("rollInput").value.trim();

    // Check if both fields are filled
    if (nameInput === "" || rollInput === "") {
        alert("Please fill out both the Name and Roll Number fields.");
        return; // Prevent further processing
    }
        
    // Normalize name input: convert to lowercase and get the first word
    const firstWord = nameInput.split(' ')[0].toLowerCase();

    // Check if the name exists in the studentImages
    if (firstWord in studentImages) {
        const imagePath = studentImages[firstWord];

        // Redirect to the result page with the image path
        window.location.href = `202.html?image=${encodeURIComponent(imagePath)}`;
    } else {
        alert("No results found for " + firstWord);
    }
});
