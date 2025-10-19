@echo off
if not exist out mkdir out
javac -d out --module-source-path . (for /r %%f in (*.java) do @echo %%f)
java --module-path out -m doc.app/doc.app.MainApp
