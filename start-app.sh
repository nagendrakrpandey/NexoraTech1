#!/bin/bash
PROJECT_DIR="/home/redhat/Downloads/NEXORATECH"
cd "$PROJECT_DIR" || exit 1

# Check if port 3000 is listening
if ! ss -tuln | grep -q ":3000 "; then
    npm run dev &
    # Wait for server to become available
    for i in {1..20}; do
        if ss -tuln | grep -q ":3000 "; then
            break
        fi
        sleep 1
    done
fi

# Open in default browser
xdg-open "http://localhost:3000"
