# 베이스 이미지
FROM node:18

# 작업 디렉터리 설정
WORKDIR /app

# package.json과 package-lock.json 복사 후 설치
COPY package*.json ./
RUN npm install

# 소스 파일 복사
COPY . .

# 서버 빌드
RUN npm run build

# 서버 실행
CMD ["node", "dist/index.js"]
