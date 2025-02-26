#!/usr/bin/env bash

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Copying app...${NC}"

APPDIR="$PWD/app/wdiodemoapp.app"

if [ -d "$APPDIR" ]; then
    rm -r "$APPDIR"
    echo -e "${RED}File removed.${NC}"
fi

echo "Creating app directory..."
mkdir -p $APPDIR

cp -r /Users/$USER/Library/Developer/Xcode/DerivedData/wdiodemoapp*/Build/Products/Debug-iphonesimulator//wdiodemoapp.app/* $APPDIR

echo -e "${GREEN}Copy complete.${NC}"