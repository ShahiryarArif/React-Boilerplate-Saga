importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');
firebase.initializeApp({
	messagingSenderId: "510999633078"
});
const messaging = firebase.messaging();
