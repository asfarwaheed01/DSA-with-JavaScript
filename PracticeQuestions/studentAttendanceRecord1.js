// leetcode: 551
// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:
// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

var attendance = function(s){
    let countA = 0; 
    let lateStreak = 0; 

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            countA++;
        }
        if (s[i] === 'L') {
            lateStreak++;
            if (lateStreak >= 3) {
                return false; 
            }
        } else {
            lateStreak = 0; 
        }
        if (countA >= 2) {
            return false;
        }
    }

    return true;
}

const s = "PPALLL"
console.log(attendance(s))