# Ticketing – Full DevOps Project

Simple Express.js **ticketing** application with:

- MariaDB storage
- Unit tests (Jest + supertest) & E2E tests (Cypress)
- Docker build
- GitHub Actions pipeline: test → build & push image → deploy via SSH

---

## 1. Quick start (local)

```bash
# dependencies
npm i

# copy default env and edit if needed
cp .env.example .env

# run MariaDB on host port 3311
docker run -d --name support-db \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=supportdb \
  -p 3311:3306 mariadb:11.4

# create tables + demo data
npm run seed

# start API (http://localhost:3000)
npm start
