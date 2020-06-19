// Einstellung in Firebase 
// {
//   "rules" : {
//     ".read": false, 
//     ".write": false,
//     "users": {
//       "$user_id": {
//         ".read": "$user_id === auth.uid", 
//         ".write": "$user_id === auth.uid",
//         "expenses": {
//           "$expense_id":{
//             ".validate": "newData.hasChildren(['description', 'note', 'amount' ])",
//             "description": { 
//               ".validate": "newData.isString() && newData.val().length >0"
//             },
//             "note": {
//             ".validate": "newData.isString()"
//             },

//             "amount": {
//               ".validate": "newData.isNumber()"
//             }
//           }
//         }, 
//         "$other": {
//           ".validate": false
//         }

//       }
//     }
//    }
// }


import * as firebase from 'firebase';


const config ={
  apiKey: "AIzaSyBAGQyFb_IIFaL2OVZMmb9lXxgoN-fEt0s",
  authDomain: "expensify-6b493.firebaseapp.com",
  databaseURL: "https://expensify-6b493.firebaseio.com",
  projectId: "expensify-6b493",
  storageBucket: "expensify-6b493.appspot.com",
  messagingSenderId: "786146322775",
  appId: "1:786146322775:web:b7d1cc7d4594be5adfb612"
};
firebase.initializeApp(config);

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };





// Data -Push
  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: '',
  //   amount: 109500,
  //   createdAt: 976123498763
  // });

  // database.ref('expenses').push({
  //   description: 'Phone Bill',
  //   note: '',
  //   amount: 114,
  //   createdAt: 976123498763
  // });

  // database.ref('expenses').push({
  //   description: 'Food',
  //   note: '',
  //   amount: 188,
  //   createdAt: 976123498763
  // });


//SHOW DATA

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

    // database.ref().on('value', (snapshot) => {
    //     const val = snapshot.val();
    //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
    //   }) 

      // database.ref().on('value', (snapshot) => {
      //   console.log(snapshot.val())
      // })

      // setTimeout (()=> { 

      // }, 3500)

      // // database.ref()
      // database.ref('location/city')
      //   .once('value')
      //   .then((snapshot) => {
      //     const val = snapshot.val();
      //     console.log(val);
      //   })
      //   .catch((e) => {
      //     console.log('Error fetching data', e);
      //   });
  

// Write Data 
  // database.ref().set({
  //   name: 'Hacke Peter', 
  //   age:27,
  //   location: {
  //     city: 'berlin'
  //   }
  // }).then(() => {
  //   console.log('Data is saved!');
  // }).catch((e) => {
  //   console.log('This failed.', e);
  // });

  // // database.ref('age').set(33)
  // // database.ref('location/city').set('Alm')

  // console.log('Änderungen an der Datenbank sind erfolgt')



// remove
  //  database.ref('age').set(null)
// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });


// UPDATE
  // database.ref().update({
  //   // stressLevel: 9,
  //   'location/city': 'Munich',
  //   age:null
  // });
 



// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };

// firebase.initializeApp(config);

// const database = firebase.database();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });






// // database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });

// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // }) 

// // Setup data sub -> Andrew is a Software Developer at Amazon.

// // Change the data and make sure it reprints

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Andrew Mead',
// //   age: 26,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Philadelphia',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved!');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });
