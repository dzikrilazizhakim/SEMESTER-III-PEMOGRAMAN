#!/bin/bash
set -e
mkdir -p out
javac -d out --module-source-path . $(find . -name "*.java")
java --module-path out -m doc.app/doc.app.MainApp
