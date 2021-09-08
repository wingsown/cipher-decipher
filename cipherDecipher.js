class Cipher {
    constructor(shift) {
        this.shift = shift;
    }

    encrypt(plainString) {
        let encryptedString = ' ';
        const tempString = plainString.toUpperCase();

        for (let i=0; i<tempString.length; i++) {
            
            let charNum = tempString.charCodeAt(i);

            if (charNum <= 90 && charNum >= 65) {
                charNum += this.shift;

                if (charNum > 90) {
                    charNum -= 26;
                }
            }
            encryptedString += String.fromCharCode(charNum);
        }
        return encryptedString;
    }

    decrypt(plainString) {
        let decryptedString = ' ';
        const tempString = plainString.toLowerCase();

        for (let i=0; i<tempString.length; i++) {

            let charNum = tempString.charCodeAt(i);

            if (charNum <= 122 && charNum >= 97) {
                charNum += this.shift;

                if (charNum > 122) {
                    charNum -= 26;
                }
            }
            decryptedString += String.fromCharCode(charNum);
        }
        return decryptedString;
    }
}

const ciph1 = new Cipher(3);

console.log(ciph1.encrypt('wilson'));
console.log(ciph1.decrypt('jeffrey'));