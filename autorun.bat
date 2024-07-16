@echo off
echo Select an option:
echo 1. Convert from ServerID to ClientID (example: TFS to OTBR/Nostalrius")
echo 2. Convert from ClientID to ServerID (example: OTBR/Nostalrius to TFS)

set /p choice=Enter your choice (1 or 2): 

if "%choice%"=="1" (
    node ServerID_to_ClientID.js
) else if "%choice%"=="2" (
    node ClientID_to_ServerID.js
) else (
    echo Invalid choice
)

pause