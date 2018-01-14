echo "PILIH 1 UNTUK SETTING NRP DAN PASSWORD"
echo "PILIH 2 UNTUK RESET SETTING NRP DAN PASSWORD"

read -p "Input: " pilihan
if [ $pilihan -eq 1 ]
then
  read -p "Enter Your NRP: " username
  `cd bin && replace "(MASUKAN NRP)" "$username" -- server.js >/dev/null 2>&1`
  read -s -p "Enter Your Password: " password
  `cd bin && replace "(MASUKAN PASSWORD)" "$password" -- server.js >/dev/null 2>&1`
elif [ $pilihan -eq 2 ]
then
  read -p "Enter Your NRP: " username
  `cd bin && replace "$username" "(MASUKAN NRP)" -- server.js >/dev/null 2>&1`
  read -s -p "Enter Your Password: " password
  `cd bin && replace "$password" "(MASUKAN PASSWORD)" -- server.js >/dev/null 2>&1`
else
  echo "PILIHAN DI LUAR BATAS"
fi

