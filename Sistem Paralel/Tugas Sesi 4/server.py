import socket

# Konfigurasi server
HOST = '127.0.0.1'  # Alamat IP server (localhost)
PORT = 12345        # Port server

# Buat socket TCP
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind((HOST, PORT))
server_socket.listen(1)  # Listen untuk 1 koneksi

print(f"Server mendengarkan di {HOST}:{PORT}... - server.py:12")

# Terima koneksi dari client
client_socket, client_address = server_socket.accept()
print(f"Koneksi diterima dari {client_address} - server.py:16")

try:
    while True:
        # Terima pesan dari client
        data = client_socket.recv(1024).decode('utf-8').strip()
        if not data or data.lower() == 'exit':
            print("Client memutuskan koneksi. - server.py:23")
            break
        
        print(f"Pesan dari client ({client_address}): {data} - server.py:26")
        
        # Input balasan dari user server
        balasan = input("Masukkan balasan untuk client (atau 'exit' untuk keluar): ")
        if balasan.lower() == 'exit':
            client_socket.send(balasan.encode('utf-8'))
            break
        
        # Kirim balasan ke client
        client_socket.send(balasan.encode('utf-8'))
        print(f"Balasan dikirim: {balasan} - server.py:36")

except Exception as e:
    print(f"Error: {e} - server.py:39")

finally:
    # Tutup koneksi
    client_socket.close()
    server_socket.close()
    print("Koneksi ditutup. Server berhenti. - server.py:45")