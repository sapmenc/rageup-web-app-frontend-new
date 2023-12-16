import * as CryptoJS from "crypto-js";

const ENCRYPTION_KEY: string = "rageupXaish"; // Replace with your actual secret key

// Function to encrypt data
function encrypt(data: string): string {
  const encryptedData = CryptoJS.AES.encrypt(data, ENCRYPTION_KEY).toString();
  return encryptedData;
}

// Function to decrypt data
function decrypt(encryptedData: string): string {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
  const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
}

export { encrypt, decrypt };

export const test = () => {
  console.log({ ENCRYPTION_KEY });
  const str =
    "U2FsdGVkX1/Uf4nCDMwAbvoWO4wM6W8KQXGGTdMIcPteFThag+nn6EBIxWM9guE5nVrofETE6oG8o8cruAlYv1LCCI3ziAh7iZZTqpshqKIktF2s4V6NUx4vox3bVQD/rbapc2tb4cEgca9wwe69fFDEm0BtPzZo8DJnCY+1Cp/jtUnQlunEO0FIR0+F5o2ZL6sxbGJNh/du5qPya6i+569v0lJhYuZC+rloDpvuvsCMFakN0qAdEN8HzDPyWdeGH8IRogIhmDcHSculno57UQ==";

  console.log(decrypt(str));
};
