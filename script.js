let permission = Notification.permission;

if(permission === "granted") {
    showNotification();
}
else if(permission === "default"){
    requestNotification();
}

function showNotification() {
let title = "Welcome";
let body = "Welcome to the website!";
const notification = new Notification('Title', {body});

notification.onclick = () => {
    notification.close();
    window.parent.focus();
}

}
function requestNotification() {
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            showNotification();
        }
    });
}


