Proje 1: Çift Katmanlı Web Uygulaması (Full-Stack Todo List)

Bu proje, Ankara Üniversitesi Bilgisayar Mühendisliği bünyesinde verilen Bulut Bilişim ve Uygulamaları (BLM3522) dersi kapsamında geliştirilmiştir. Proje; AWS bulut altyapısı üzerinde koşan, Docker ile izole edilmiş bir veritabanına sahip, modern bir Todo List uygulamasıdır.

👤 Öğrenci Bilgileri

Ad Soyad: Ayşe Ceren Şenel

Öğrenci Numarası: 23290973

Bölüm: Bilgisayar Mühendisliği

Ders: Bulut Bilişim ve Uygulamaları (BLM3522)

🚀 Canlı Uygulama ve Sunum

Canlı Uygulama: http://16.16.201.195:3001

Proje Tanıtım Videosu: https://youtu.be/YcR6t8klT9M

🛠 Kullanılan Teknolojiler

Frontend: React.js, CSS3

Backend: Node.js, Express.js

Veritabanı: PostgreSQL (Docker Container içerisinde)

Bulut Platformu: AWS EC2 (Ubuntu 24.04 LTS)

Süreç Yönetimi: PM2 (Process Manager 2)

Versiyon Kontrol: Git & GitHub

🏗 Sistem Mimarisi

Uygulama, modern çift katmanlı (two-tier) bir mimari üzerine inşa edilmiştir:

Frontend: Kullanıcılar, Port 3001 üzerinden React arayüzüne erişir.

Backend (API): Arayüzden gelen istekler Port 3000 üzerinden Express sunucusuna iletilir.

Veri Katmanı: Tüm veriler, sunucu içerisinde Docker üzerinden koşturulan PostgreSQL veritabanında kalıcı olarak saklanır.

⚙️ Kurulum ve Yayına Alma

1. Veritabanı Yapılandırması (Docker)

PostgreSQL servisi, sunucu izolasyonu sağlamak amacıyla Docker konteyneri olarak başlatılmıştır:

sudo docker run --name my-postgres -e POSTGRES_PASSWORD=admin123 -p 5432:5432 -d postgres

2. Uygulama Yönetimi (PM2)

Terminal kapatıldığında veya sunucu yeniden başladığında servislerin kesintisiz devam etmesi (High Availability) için PM2 kullanılmıştır:

Backend: pm2 start index.js --name "backend"

Frontend: PORT=3001 pm2 start npm --name "frontend" -- start

🛡 Güvenlik ve Ağ Ayarları

AWS EC2 üzerinde projenin sağlıklı çalışabilmesi için Security Group ayarları aşağıdaki gibi yapılandırılmıştır:

Port 22: SSH erişimi için.

Port 3000: API trafiği (Backend) için.

Port 3001: Kullanıcı arayüzü (Frontend) için.

📂 Proje Yapısı

/frontend: React kaynak kodları ve arayüz bileşenleri.

/todo-backend: Express sunucusu, veritabanı bağlantı ayarları (db.js) ve API rotaları.

README.md: Proje dökümantasyonu.

Projenin Raporu ->[Proje 1.pdf](https://github.com/user-attachments/files/26491169/Proje.1.pdf)
