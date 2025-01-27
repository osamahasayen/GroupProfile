const toggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

if (localStorage.getItem('theme') === 'dark') {
    bodyElement.classList.add('dark-theme');
    toggleButton.textContent = '☀️ Light Mode';
}

toggleButton.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-theme');

    if (bodyElement.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '🌙 Dark Mode';
    }
});


function copyNumber(number){
    navigator.clipboard.writeText(number).then(function(){
        alert('The phone number has been copied to your clipbord');
    }, function(err){
        alert('Something went wront the phone number was not copied to your clipboard\nCall +971544550250');
    });
}