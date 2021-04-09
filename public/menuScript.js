// console.log(fakeMealsData.monday.Breakfast)

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user.email)

      $("#greetingMsg").append(`Hi ${user.email}! Here's today's Menu.`)

    //   get data if user signed in  
      db.collection('meals').get().then((snapshot)=>{
        // console.log(snapshot.docs[0].data().daywiseMenu)
    
        let mealData = snapshot.docs[0].data().daywiseMenu
        console.log(getDay()-1)
        console.log(mealData)
    
        $("#breakfast").append(getMeal(mealData[getDay()-1].Breakfast))
        $("#lunch").append(getMeal(mealData[getDay()-1].Lunch))
        $("#dinner").append(getMeal(mealData[getDay()-1].Dinner))
    
        }).catch((error)=>{
            console.log(error);
        })


    }else{
        //redirect to home page
        window.location.href = "index.html";


    }
  });

// getDay 
function getDay(){
    var d = new Date();
    var n = d.getDay()
    return n;
}
// send meal data as parameter 
function getMeal(mealData){
    var str = "<td>";

    mealData.forEach(meal => {
        str+= `${meal}<br/>`
    });
    return str+'</td>'
    
}






// console.log(fakeMealsData[getDay()-1])