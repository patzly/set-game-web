

name := """SET Game Web"""
organization := "pzme"
version := "1.0-SNAPSHOT"


lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "3.3.1"

libraryDependencies ++= Seq(
  guice,
  "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.1" % Test,
  "org.scala-lang.modules" %% "scala-swing" % "3.0.0",
  "com.google.inject" % "guice" % "6.0.0", // Passe Guice-Version an
  "net.codingwell" %% "scala-guice" % "6.0.0", // Passende Scala-Guice-Version
  "org.playframework" %% "play-guice" % "3.0.5" // Play-Guice-Integration
)



// Additional configurations
//TwirlKeys.templateImports += "pzme.controllers._"
// play.sbt.routes.RoutesKeys.routesImport += "pzme.binders._"
