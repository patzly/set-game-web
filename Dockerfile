# Nutze ein OpenJDK-Image
FROM openjdk:21-jdk-slim

# Arbeitsverzeichnis setzen
WORKDIR /app

# Kopiere den Projektinhalt ins Image
COPY . .

# Installiere sbt und erstelle die Distribution
RUN apt-get update && apt-get install -y curl unzip && \
    curl -L https://github.com/sbt/sbt/releases/download/v1.9.6/sbt-1.9.6.tgz | tar -xz -C /usr/local && \
    /usr/local/sbt/bin/sbt clean dist

# Entpacke die Distribution
RUN unzip target/universal/*.zip

# Setze feste Werte für die Umgebungsvariablen
ENV PLAY_SECRET="aebDC3+kl/BqjsjnuND+UUbNJH0BhlyrJnSJEUISaZw="
ENV PORT=9000

# Dokumentiere den offenen Port
EXPOSE 9000

# Startbefehl setzen
CMD ["./bin/set-game-web", "-Dplay.http.secret.key=${PLAY_SECRET}", "-Dhttp.port=${PORT}"]
