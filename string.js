"use strict";
//Merging two strings

function mergeStrings(word1, word2) {
  let merged="";
  let length1 = word1.length;
  let length2 = word2.length;
  let maxLength = Math.max(length1, length2);

  for(let i=0; i<maxLength; i++) {
   if(i < length1){
     merged += word1[i];
   }
   if(i < length2){
     merged += word2[i];
   }
  }
return merged;
}

let word1='abc'
let word2='pqr'

console.log(mergeStrings(word1, word2)) // Outputs: abcpqr

//Reversing a string

function reverseString(str) {
  let reversed = "";
  for(let i=str.length-1; i>=0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function listenForNewReminders() {
  Reminder.watch().on('change', async change => {
    if (change.operationType === 'insert') {
      const newReminder = change.fullDocument;
      const today = new Date();
      const reminderDate = new Date(newReminder.date);
      if (reminderDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
        if (!isCronTimePassed(newReminder.cron_time)) {
          await scheduleReminder(newReminder);
          console.log('New reminder scheduled:', newReminder);
        } else {
          console.log(" [x] New reminder time has already passed: %s", newReminder.message);
        }
      }
    }
  });
}

listenForNewReminders();