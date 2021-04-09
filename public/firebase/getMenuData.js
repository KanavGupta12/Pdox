db.collection('meals').get().then((snapshot)=>{
    console.log(snapshot.docs[0].data().daywiseMenu)
    }).catch((error)=>{
        console.log(error);
    })

