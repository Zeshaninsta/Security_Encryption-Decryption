# File: encryption_custom.py

class CustomCipher:
    def __init__(self):
        self.first_key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        self.second_key = self.first_key[::-1]

    def encrypt(self, plaintext):
        encrypted_text = ""
        for char in plaintext:
            if char.isalpha():
                is_upper = char.isupper()
                char_index = self.first_key.index(char.upper())
                encrypted_char = self.second_key[char_index]
                encrypted_text += encrypted_char.upper() if is_upper else encrypted_char
            else:
                encrypted_text += char
        return encrypted_text

    def decrypt(self, encrypted_text):
        decrypted_text = ""
        for char in encrypted_text:
            if char.isalpha():
                is_upper = char.isupper()
                char_index = self.second_key.index(char.upper())
                decrypted_char = self.first_key[char_index]
                decrypted_text += decrypted_char.upper() if is_upper else decrypted_char
            else:
                decrypted_text += char
        return decrypted_text
