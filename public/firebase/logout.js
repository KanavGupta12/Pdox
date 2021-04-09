    //logout function
    $("#logoutButton").click(()=>{
        auth.signOut().then(()=>{
            console.log("User Signed Out");
            window.location.href = "index.html";

        })
    })

