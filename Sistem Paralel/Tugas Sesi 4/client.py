import socket

# Konfigurasi client (sama dengan server)
HOST = '127.0.0.1'  # Alamat IP server
PORT = 12345        # Port server

# Buat socket TCP
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
    # Hubungkan ke server
    client_socket.connect((HOST, PORT))
    print(f"Terhubung ke server {HOST}:{PORT} - client.py:13")
    print("Ketik 'exit' untuk keluar. - client.py:14")

    while True:
        # Input pesan dari user client
        pesan = input("Masukkan pesan untuk server: ").strip()
        if pesan.lower() == 'exit':
            client_socket.send(pesan.encode('utf-8'))
            break
        
        # Kirim pesan ke server
        client_socket.send(pesan.encode('utf-8'))
        
        # Terima balasan dari server
        balasan = client_socket.recv(1024).decode('utf-8').strip()
        if not balasan or balasan.lower() == 'exit':
            print("Server memutuskan koneksi. - client.py:29")
            break
        
        print(f"Balasan dari server: {balasan} - client.py:32")

except Exception as e:
    print(f"Error: {e} - client.py:35")

finally:
    # Tutup koneksi
    client_socket.close()
    print("Koneksi ditutup. - client.py:40")