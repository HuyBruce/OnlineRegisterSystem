# OnlineRegisterSystem

Hệ thống đăng ký trực tuyến - Full-stack application.

## 🏗️ Tech Stack

| Layer    | Technology                | Version |
|----------|--------------------------|---------|
| Frontend | React + Vite             | React 19, Vite 6 |
| Backend  | Spring Boot (Java)       | 3.3.5, Java 17 |
| Database | Supabase (PostgreSQL)    | - |
| HTTP Client | Axios               | - |

## 📁 Project Structure

```
OnlineRegisterSystem/
├── Backend/                    # Spring Boot API
│   ├── pom.xml                 # Maven build config
│   └── src/main/java/com/onlineregister/
│       ├── config/             # CORS, Security configs
│       ├── controller/         # REST API endpoints
│       ├── dto/                # Data Transfer Objects
│       ├── entity/             # JPA Entities
│       ├── exception/          # Global error handling
│       ├── repository/         # Data access layer
│       ├── service/            # Business logic
│       └── util/               # Utilities
│
├── Frontend/                   # React SPA
│   ├── src/
│   │   ├── components/         # Shared UI components
│   │   ├── pages/              # Page components
│   │   └── lib/                # Supabase client, Axios client
│   └── vite.config.js          # Vite config (API proxy)
│
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- **Java 17** (JDK) - [Download](https://adoptium.net/)
- **Maven 3.8+** - [Download](https://maven.apache.org/download.cgi)
- **Node.js 18+** - [Download](https://nodejs.org/)
- **Supabase Account** - [Sign up](https://supabase.com/)

### 1. Clone the repository

```bash
git clone https://github.com/HuyBruce/OnlineRegisterSystem.git
cd OnlineRegisterSystem
```

### 2. Setup Backend

```bash
cd Backend

# Copy dev config and add your Supabase credentials
# Edit src/main/resources/application-dev.properties with your database info

# Run the backend
mvn spring-boot:run
```

Backend sẽ chạy tại: `http://localhost:8080`

### 3. Setup Frontend

```bash
cd Frontend

# Copy environment template and add your credentials
copy .env.example .env.local
# Edit .env.local with your Supabase URL and Anon Key

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:5173`

### 4. Verify Setup

- Mở `http://localhost:5173` - Frontend hiển thị
- Gọi `http://localhost:8080/api/health` - Backend respond JSON
- Trang Home sẽ hiển thị trạng thái kết nối Backend

## ⚙️ Supabase Configuration

### Backend (JDBC Connection)

1. Vào [Supabase Dashboard](https://supabase.com/dashboard) > Project Settings > Database
2. Chọn **Connection string** > Type: **JDBC**
3. Copy **Session Pooler** URL
4. Cập nhật `application-dev.properties`:

```properties
spring.datasource.url=jdbc:postgresql://YOUR_HOST:6543/postgres
spring.datasource.username=postgres.YOUR_USER
spring.datasource.password=YOUR_PASSWORD
```

### Frontend (Supabase Client)

1. Vào Supabase Dashboard > Project Settings > API
2. Copy **Project URL** và **anon public key**
3. Tạo file `.env.local` từ `.env.example` và điền thông tin

## 🔒 Important Notes

- **KHÔNG** commit file `.env.local` hoặc `application-local.properties` (đã được gitignore)
- **KHÔNG** push database password lên repository
- Sử dụng `application-dev.properties` với placeholder, mỗi member tự config credentials

## 📝 Development Workflow

1. Tạo branch mới cho mỗi feature: `git checkout -b feature/ten-feature`
2. Code và test locally
3. Push và tạo Pull Request
4. Review code và merge

## 👥 Team Members

| Name | Role |
|------|------|
| -    | -    |
