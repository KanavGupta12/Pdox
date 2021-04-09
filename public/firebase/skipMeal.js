$("#submitButton").click(()=>{
    let name= $("#nameField").val();
    let rollNumber = $("#rollNumber").val();
    let hostel = $("#hostelName").val();
    let date = $("#date").val();
    let whichMeal = $("#meal").val();
    console.log("button CLicked")
    console.log(name, rollNumber, hostel, date)


        window.location.href = "thanks.html";

})