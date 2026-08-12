@echo off
cd /d "F:\PROJECTS\Pendo"
set LOG=git_cleanup_log.txt
echo === remove helpers === > "%LOG%"
del /q git_setup.bat git_setup_log.txt 2>> "%LOG%"
echo === stage === >> "%LOG%"
git add -A >> "%LOG%" 2>&1
echo === commit === >> "%LOG%"
git commit -m "Chore: remove local git helper scripts" >> "%LOG%" 2>&1
echo === status === >> "%LOG%"
git status --short >> "%LOG%" 2>&1
echo === log === >> "%LOG%"
git log --oneline -5 >> "%LOG%" 2>&1