# Nutze ein OpenJDK 21 Image
FROM openjdk:21-jdk-slim

# Arbeitsverzeichnis setzen
WORKDIR /app

# Abhängigkeiten installieren
RUN apt-get update && apt-get install -y curl unzip && \
    curl -L https://github.com/sbt/sbt/releases/download/v1.9.6/sbt-1.9.6.tgz | tar -xz -C /usr/local

# Projektdateien kopieren
COPY . .

# Play Framework builden und Distribution erstellen
RUN /usr/local/sbt/bin/sbt clean dist

# Distribution entpacken
RUN unzip -q target/universal/*.zip -d /app

# Dokumentiere den offenen Port
EXPOSE 1000

# Starte die Anwendung
CMD ["/app/set-game-web-1.0-SNAPSHOT/bin/set-game-web", "-Dhttp.port=${PORT}"]
