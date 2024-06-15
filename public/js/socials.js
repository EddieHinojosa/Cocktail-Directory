//tweet function
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" ,"Tweet Window", "width=600, height=300");
}

//instagram function
function instagram() {
    window.open("https://www.instagram.com/", "Instagram Window", "width=600, height=300");
}

//on click of tweet button
document.getElementById('twitter',).addEventListener('click', () => {
    tweet();
});


//on click of instagram button
document.getElementById('instagram',).addEventListener('click', () => {
    instagram();
});