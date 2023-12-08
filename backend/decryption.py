# File: decryption.py

def decrypt(encrypted_text, shift):
    decrypted_text = ""
    for char in encrypted_text:
        if char.isalpha():
            shifted_char = chr((ord(char) - shift - ord('a')) % 26 + ord('a')) if char.islower() else chr((ord(char) - shift - ord('A')) % 26 + ord('A'))
            decrypted_text += shifted_char
        else:
            decrypted_text += char
    return decrypted_text
