@echo off
del /F /Q _normal.user.js _min.user.js

copy _head.js + _main.js + css.js + utility.js + worker.js + worker_*.js _normal.user.js

rem ----------------------------------------------------------------------
rem INSTALLED VERSION - Means you only need to hit F5 / refresh in Firefox
rem Just change the path to your firefox installed version, only the '???' should need changing on Windows7

rem copy _normal.user.js "C:\Users\???\AppData\Roaming\Mozilla\Firefox\Profiles\???\gm_scripts\rycochets_castle_age_gol\rycochets_castle_age_gol.user.js"

rem ----------------------------------------------------------------------------------
rem MINIMISED VERSION - Only use if you want the small version - required for release!
rem Change path to compiler and source - obtain it from here:
rem http://code.google.com/closure/compiler/

rem copy _head.js _min.user.js
rem "C:\Program Files\Java\jre6\bin\java.exe" -jar "C:\Program Files\Compiler\compiler.jar" --js "Z:\Sites\GameGolem\_normal.user.js" >> "Z:\Sites\GameGolem\_min.user.js"
