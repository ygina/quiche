scripts to run a basic HTTP/2 server and pass it some data

dependencies:
- lighttpd (with openssl support)
- curl (with http2 support)

use ./run_server.sh to run the server
then ./run_client.sh 1M to send 1MB of data
