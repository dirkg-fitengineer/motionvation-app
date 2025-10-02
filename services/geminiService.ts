import { GoogleGenAI } from "@google/genai";
import { DailyEntry } from '../types';

export const getAIMotivation = async (entry: DailyEntry): Promise<string> => {
    // Safely access the API key to prevent crashes in environments where process.env is not defined.
    const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;

    if (!apiKey) {
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
