for %%F in ("%~dp0\features\data_generation\aleatorio\*.feature") do (	
	move "%%F" "%~dp0\features"
)
for %%F in ("%~dp0\features\*.feature") do (
	call npx kraken-node run
	move "%%F" "%~dp0\features\data_generation\aleatorio"
)
pause