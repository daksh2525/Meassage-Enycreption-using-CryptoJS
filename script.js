const SECRET_KEY = "Daksh@Secret#987";

    function encryptAndSave() {
      const input = document.getElementById("userAnswer").value.trim();
      if (!input) {
        alert("Please enter your answer.");
        return;
      }

      const encrypted = CryptoJS.AES.encrypt(input, SECRET_KEY).toString();
      localStorage.setItem("encryptedUserAnswer", encrypted);

      const resultBox = document.getElementById("result");
      resultBox.style.display = "block";
      resultBox.innerHTML = `<strong>Encrypted:</strong><br>${encrypted}<br><br><em>Saved securely!</em>`;
    }