scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

window.onscroll = () => {scrollFunction()};
topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log('Beam me up Scotty');
}
