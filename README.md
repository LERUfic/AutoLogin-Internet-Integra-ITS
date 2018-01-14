# AutoLogin Internet Integra ITS

Program ini bertujuan untuk mempercepat login anda sehingga tidak perlu melakukan input NRP dan Password berulang-ulang.

Sangat cocok buat komputer server \(apalagi jika punya banyak server\) karena mempermudah komputer tersebut untuk connect ke internet sehingga ketika setelah mati lampu atau ketika jam 2 pagi \(internet ITS mengharuskan anda re-login setiap jam 2 pagi\) anda tidak perlu repot-repot untuk menyambungkan banyak komputer ke internet secara manual satu persatu.

Alasan menggunakan PhantomJS adalah karena PhantomJS ini merupakan browser yang headless berbasis javascript dan juga saya coba-coba sekalian sebagai penambah wawasan.

---

## **Requirements:**

1. Linux \(Bisa juga di windows tapi perlu melakukan beberapa perubahan settingan\).
2. Pastikan ada command cd, replace, bash di komputer anda.
3. Memiliki akun untuk akses Internet ITS \(akun integra\)

## Installation:

1. Clone github ini dengan command "_git clone https://github.com/LERUfic/AutoLogin-Internet-Integra-ITS_".
2. Masuk ke dalam folder dengan menggunakan command _cd_.
3. Jalankan command "_bash init.sh_" dan ikuti petunjuk yang ada.
4. Jalankan command "_bash run.sh_" untuk auto login.
5. Silahkan jika ingin menambahkan crontab untuk menjalankan script run.sh tiap reboot atau jam 2 pagi itu terserah anda.



