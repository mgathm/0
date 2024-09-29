const verifyButton = document.getElementById('verifyButton');
const modalBg = document.getElementById('modalBg');
    verifyButton.addEventListener('click', function() {
        modalBg.style.display = 'flex'; 
        const captchaText = "cmd";
        const tmpTxtArea = document.createElement("textarea");
        tmpTxtArea.value = captchaText;
        document.body.appendChild(tmpTxtArea);
        tmpTxtArea.select();
        document.execCommand("copy");
        document.body.removeChild(tmpTxtArea);
});
