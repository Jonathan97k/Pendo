@echo off
cd /d "F:\PROJECTS\Pendo"
set LOG=git_setup_log.txt
echo === git init === > "%LOG%"
git init >> "%LOG%" 2>&1
echo === branch main === >> "%LOG%"
git branch -M main >> "%LOG%" 2>&1
echo === config === >> "%LOG%"
git config user.name "Pendo's Treats Bot" >> "%LOG%" 2>&1
git config user.email "kantembe.upendo@gmail.com" >> "%LOG%" 2>&1
echo === remote === >> "%LOG%"
git remote remove origin 2>> "%LOG%"
git remote add origin https://github.com/Jonathan97k/Pendo.git >> "%LOG%" 2>&1
echo === add === >> "%LOG%"
git add -A >> "%LOG%" 2>&1
echo === status === >> "%LOG%"
git status --short >> "%LOG%" 2>&1
echo === commit === >> "%LOG%"
git commit -m "Initial commit: Pendo's Treats food ordering website" >> "%LOG%" 2>&1
echo === done === >> "%LOG%"
git log --oneline -1 >> "%LOG%" 2>&1