#!/bin/sh

sed 's/ENVIRONMENT_IS_NODE\=typeof process\=\=\="object"&&typeof process\.versions\=\=\="object"&&typeof process\.versions\.node\=\=\="string"/ENVIRONMENT_IS_NODE\=false/g' public/epsilon-python-orig.js > public/epsilon-python.js

