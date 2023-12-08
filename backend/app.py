# File: main.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from encryption import encrypt as encrypt_default
from decryption import decrypt as decrypt_default
from encryption_custom import CustomCipher
from decryption_custom import decrypt as decrypt_custom

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]

@app.route('/encrypt', methods=['POST'])
def encrypt_text():
    data = request.get_json()
    original_text = data.get('text')
    shift_amount = data.get('shift')
    operation = data.get('operation')

    if operation == 'encrypt':
        encrypted_text = encrypt_default(original_text, shift_amount)
    elif operation == 'encrypt_custom':
        cipher = CustomCipher()
        encrypted_text = cipher.encrypt(original_text)
    else:
        return jsonify({"error": "Invalid operation"})

    return jsonify({
        "encrypted_text": encrypted_text
    })

@app.route('/decrypt', methods=['POST'])
def decrypt_text():
    data = request.get_json()
    encrypted_text = data.get('text')
    shift_amount = data.get('shift')
    operation = data.get('operation')

    if operation == 'decrypt':
        decrypted_text = decrypt_default(encrypted_text, shift_amount)
    elif operation == 'decrypt_custom':
        cipher = CustomCipher()
        decrypted_text = cipher.decrypt(encrypted_text)
    else:
        return jsonify({"error": "Invalid operation"})

    return jsonify({
        "decrypted_text": decrypted_text
    })

@app.route('/encrypt_custom', methods=['POST'])
def encrypt_custom_text():
    data = request.get_json()
    original_text = data.get('text')

    # Use the custom encryption method
    cipher = CustomCipher()
    encrypted_text_custom = cipher.encrypt(original_text)

    return jsonify({
        "encrypted_text_custom": encrypted_text_custom.capitalize()
    })

@app.route('/decrypt_custom', methods=['POST'])
def decrypt_custom_text():
    data = request.get_json()
    encrypted_text = data.get('text')

    # Use the custom decryption method
    cipher = CustomCipher()
    decrypted_text_custom = cipher.decrypt(encrypted_text)

    return jsonify({
        "decrypted_text_custom": decrypted_text_custom.capitalize()
    })

if __name__ == "__main__":
    app.run(debug=True)
