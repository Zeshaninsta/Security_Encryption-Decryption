# File: encryption.py

def encrypt(text, shift):
    encrypted_text = ""
    for char in text:
        if char.isalpha():
            shifted_char = chr((ord(char) + shift - ord('a')) % 26 + ord('a')) if char.islower() else chr((ord(char) + shift - ord('A')) % 26 + ord('A'))
            encrypted_text += shifted_char
        else:
            encrypted_text += char
    return encrypted_text
