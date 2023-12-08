# File: decryption_custom.py

from encryption_custom import CustomCipher

def decrypt(encrypted_text):
    cipher = CustomCipher()
    decrypted_text = cipher.decrypt(encrypted_text)
    return decrypted_text
