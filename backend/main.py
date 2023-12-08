# File: main.py
from encryption import encrypt
from decryption import decrypt

def main():
    # Example usage

    original_text = input("Please Enter the word: ")
    shift_amount = int(input("Please Enter the key value: "))

    # Encrypt the text
    encrypted_text = encrypt(original_text, shift_amount)
    print(f"Encrypted Text: {encrypted_text}")

    user_input = input("Do You Want to Decrypt The Word: Y or N ")
    if user_input.lower() == "y":
        # Decrypt the text
        decrypted_text = decrypt(encrypted_text, shift_amount)
        print(f"Decrypted Text: {decrypted_text}")
    else:
        exit
    

if __name__ == "__main__":
    main()
