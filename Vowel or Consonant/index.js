var letter=prompt("Enter a Letter: ");

letter=letter.toLowerCase(); //if we press capital then it's automatically convert into lowercase beause of this statement

if(letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u")
    document.write("Vowel");
else
    document.write("Consonant");