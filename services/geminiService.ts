import { GoogleGenAI } from "@google/genai";
import { DailyEntry } from '../types';

// Dies ist eine robustere Methode, um den API-Schlüssel zu erhalten, die Abstürze verhindert.
// Wir versuchen, einmal beim Laden des Moduls darauf zuzugreifen und ihn zu speichern.
let apiKey: string | undefined;

try {
  // Dies funktioniert nur in einer Umgebung, in der `process` und `process.env` definiert sind.
  // In einem Browser wird es sicher ignoriert oder der Fehler wird abgefangen.
  if (typeof process !== 'undefined' && typeof process.env !== 'undefined') {
    apiKey = process.env.API_KEY;
  }
} catch (error) {
  // Wenn der Zugriff auf `process` in einer Sandbox-Umgebung einen Fehler auslöst, fangen wir ihn ab.
  console.warn("Konnte nicht auf process.env zugreifen, um den API-Schlüssel zu finden. Dies ist in einer Browser-Umgebung normal.");
  apiKey = undefined;
}

export const getAIMotivation = async (entry: DailyEntry): Promise<string> => {
    if (!apiKey) {
        // Diese Nachricht wird nun zuverlässig angezeigt, wenn der API-Schlüssel in den Vercel-Umgebungsvariablen nicht gesetzt ist.
        console.error("FEHLER: Gemini API-Schlüssel ist nicht konfiguriert. Bitte die Umgebungsvariable API_KEY setzen.");
        return "Du schaffst das! Selbst ohne meine Superkräfte! BAM!";
    }

    const ai = new GoogleGenAI({ apiKey });
    const { steps, pushups, pullups, comment } = entry;

    const prompt = `
        Du bist "Coach K.O.", ein super energiegeladener und etwas kitschiger Comic-Fitness-Coach.
        Ein Benutzer hat gerade ein Training abgeschlossen. Hier sind die Daten:
        - Schritte: ${steps}
        - Liegestütze: ${pushups}
        - Klimmzüge: ${pullups}
        - Sein Kommentar: "${comment || 'Kein Kommentar'}"

        Deine Aufgabe ist es, eine kurze, knackige und motivierende Nachricht für ihn zu generieren (max. 30 Wörter).
        Sie soll klingen, als käme sie direkt aus einem klassischen Comic.
        Benutze Lautmalereien wie BAM!, POW!, ZAP!, WHOOSH!
        Sei witzig und inspirierend.

        Beispiel: "WOW! ${steps} Schritte?! Deine Beine sind schneller als eine Pistolenkugel! Weiter so, Held! ZAP!"
    `;

    try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });

        return response.text.trim();
    } catch (error) {
        console.error("Error generating content from Gemini:", error);
        throw new Error("Fehler beim Abrufen eines Motivationsspruchs.");
    }
};
