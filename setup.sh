#!/bin/sh
# Simple setup script to install dependencies
if command -v pnpm >/dev/null 2>&1; then
  pnpm install
else
  npm install
fi
