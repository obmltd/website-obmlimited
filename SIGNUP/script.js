// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  // Passwordless login (magic link)
  const actionCodeSettings = {
    url: window.location.href,
    handleCodeInApp: true
  };

  auth.sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
      document.getElementById("message").textContent = "Login link sent! Check your email.";
    })
    .catch(error => {
      document.getElementById("message").textContent = error.message;
    });
});

// Handle sign-in when user clicks the link
if (auth.isSignInWithEmailLink(window.location.href)) {
  let email = window.localStorage.getItem("emailForSignIn");
  if (!email) {
    email = window.prompt("Please provide your email for confirmation");
  }

  auth.signInWithEmailLink(email, window.location.href)
    .then(result => {
      document.getElementById("message").textContent = "You are now signed in!";
    })
    .catch(error => {
      document.getElementById("message").textContent = error.message;
    });
}
