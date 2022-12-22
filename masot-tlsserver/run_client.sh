#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo -e "Usage:   $0 [n-bytes]"
    echo -e "Example: $0 1M"
    exit 1
fi

file=$(mktemp)
head -c $@ /dev/urandom > $file

# https://superuser.com/questions/590099/can-i-make-curl-fail-with-an-exitcode-different-than-0-if-the-http-status-code-i
statuscode=$(curl --silent --output /dev/stderr --write-out "%{http_code}" \
                --http2 --http2-prior-knowledge \
                -X POST \
                --cacert cert.pem \
                --data @$file \
                https://localhost:4433/)

if [ $statuscode -eq 200 ]; then
    echo "Successfully sent and 200'd $(cat $file | wc -c) bytes!"
else
    echo "Failed :("
fi
