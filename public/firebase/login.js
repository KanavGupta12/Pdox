function signInWithEmailPassword(email,password) {
    // var email = "test@example.com";
    // var password = "hunter2";
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in 
        // ...
        console.log("successful !")
        window.location.href = "menu.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Username/Password wrong")
        alert("Username/Password wrong")
      });
    // [END auth_signin_password]
  }
  
  $("#loginButton").click(()=>{
      var email=$("#emailForLogin").val();
      var password = $("#passwordForLogin").val();

    console.log("working"+email+" "+password)

    signInWithEmailPassword(email, password)
  })
