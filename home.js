function startQuiz(category) {
    localStorage.setItem('quizCategory', category);
    window.location.href = 'quiz.html';
}

function logout() {
    // Perform any logout actions here (e.g., clearing session data)
    alert("You have logged out.");
    window.location.href = 'index.html';  // Redirect to login page or home page
}
