package controllers

object AnsiConverter {
  def toHtml(text: String): String = {
    text.replaceAll("\u001B\\[1m", "<strong>") // Bold
      .replaceAll("\u001B\\[4m", "<u>")       // Underline
      .replaceAll("\u001B\\[31m", "<span style='color: #963832;'>") // Rot
      .replaceAll("\u001B\\[32m", "<span style='color: #1f801c;'>") // Grün
      .replaceAll("\u001B\\[33m", "<span style='color: #aa8a1e;'>") // Gelb
      .replaceAll("\u001B\\[34m", "<span style='color: #113dbb;'>") // Blau
      .replaceAll("\u001B\\[35m", "<span style='color:purple;'>")   // Lila
      .replaceAll("\u001B\\[36m", "<span style='color: #398789;'>") // Cyan
      .replaceAll("\u001B\\[0m", "</span></strong></u>")            // Reset
      .replaceAll("</span></strong></u>", "</strong></u></span>")  // Schließe offene Tags
      .replaceAll("\n", "<br>")                                    // Zeilenumbrüche
  }
}
