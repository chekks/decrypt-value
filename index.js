function decrypt(cipherText, key) {
    const reverseKey = Object.fromEntries([...key].map((char, index) => [char, String.fromCharCode(index + 65)]));

    let plainText = '';
    for (let i = 0; i < cipherText.length; i++) {
        plainText += reverseKey[cipherText[i]];
    }

    return plainText;
}

const cipherText = 'FZGGh43F5V';
const key = '7LwU3Fp4Z6PtyG5bzX5h7PhVQa';

const plainText = decrypt(cipherText, key);

console.log(plainText);  //FINNWHEFSX
