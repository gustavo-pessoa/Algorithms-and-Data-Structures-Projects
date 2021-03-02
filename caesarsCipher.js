function rot13(str) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let arr = str.split('')

    let deciphered = [];

    let position = 0;

    for (let value of arr) {

        if (value.match(/[a-z]/i)) {
            
            position = Number(alphabet.indexOf(value) + 13);

            if (position >= alphabet.length) {
                position -= alphabet.length
            }
            
            deciphered.push(alphabet[position]);

        } else {
            
            deciphered.push(value);
        }

    }
    console.log(deciphered.join(''));
    return deciphered.join('');
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")