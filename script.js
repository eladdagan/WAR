function showMessage() {
    document.getElementById('welcome-message').style.color = 'red';
    alert('שלום! תודה שבאתם לאתר שלי.');
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        localStorage.setItem('currentUser', username);
        alert('התחברת בהצלחה!');
        window.location.href = 'welcome.html';
    } else {
        alert('שם משתמש או סיסמה שגויים.');
    }
}

function register() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        localStorage.setItem(newUsername, newPassword);
        alert('נרשמת בהצלחה!');
        window.location.href = 'index.html';
    } else {
        alert('אנא מלא את כל השדות.');
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function editUser() {
    const newUsername = document.getElementById('edit-username').value;
    const newPassword = document.getElementById('edit-password').value;
    const currentUser = localStorage.getItem('currentUser');

    if (newUsername && newPassword) {
        localStorage.removeItem(currentUser);
        localStorage.setItem(newUsername, newPassword);
        localStorage.setItem('currentUser', newUsername);
        alert('פרטי המשתמש עודכנו בהצלחה!');
        document.getElementById('personal-welcome-message').innerText = `ברוך הבא, ${newUsername}!`;
    } else {
        alert('אנא מלא את כל השדות.');
    }
}

function identifyTerrorists() {
    const hasTerrorists = Math.random() < 0.5;
    if (hasTerrorists) {
        const numberOfTerrorists = Math.floor(Math.random() * 10) + 1;
        alert(`זוהו ${numberOfTerrorists} מחבלים!`);
    } else {
        alert('לא זוהו מחבלים.');
    }
}