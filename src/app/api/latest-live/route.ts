import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY || "AIzaSyD2At_JIyvutq9yn3zp8IY6rJRX0O9Eqnk";
  const CHANNEL_ID = "UCuaUF3X63EgsfuRkxwYRHBQ";
  const FALLBACK_ID = "q8Qgy9_-niw"; // Transmissão de referência

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=15`;

    console.log("[YouTube API] Buscando vídeos com maxResults=15 para ordenação por data no título:", url);
    const response = await fetch(url, { next: { revalidate: 300 } });

    if (response.ok) {
      const data = await response.json();
      console.log("[YouTube API] Resposta recebida:", JSON.stringify(data, null, 2));

      const items = data.items || [];

      // Filtrar estritamente por cultos / transmissões completas
      const cultos = items.filter((item: any) => {
        const title = (item.snippet?.title || "").toLowerCase();
        return title.includes("culto") || title.includes("2iba -") || title.includes("transmissão");
      });

      // Se encontrar cultos, ordenar pela data extraída do título ou publishTime
      if (cultos.length > 0) {
        cultos.sort((a: any, b: any) => {
          const titleA = a.snippet?.title || "";
          const titleB = b.snippet?.title || "";

          // Regex para encontrar data no formato DD/MM/YYYY
          const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
          const matchA = titleA.match(dateRegex);
          const matchB = titleB.match(dateRegex);

          let dateA = 0;
          let dateB = 0;

          if (matchA) {
            const [day, month, year] = matchA[0].split("/").map(Number);
            dateA = new Date(year, month - 1, day).getTime();
          } else {
            dateA = new Date(a.snippet?.publishedAt || 0).getTime();
          }

          if (matchB) {
            const [day, month, year] = matchB[0].split("/").map(Number);
            dateB = new Date(year, month - 1, day).getTime();
          } else {
            dateB = new Date(b.snippet?.publishedAt || 0).getTime();
          }

          return dateB - dateA; // Mais recente primeiro
        });

        const selectedItem = cultos[0];
        if (selectedItem && selectedItem.id?.videoId) {
          const videoId = selectedItem.id.videoId;
          console.log("[YouTube API] Culto selecionado por data no título/publicação:", videoId, "Título:", selectedItem.snippet?.title);
          return NextResponse.json({ videoId });
        }
      }

      // Se não houver cultos filtrados, usar o primeiro item geral ordenado por publishTime
      items.sort((a: any, b: any) => {
        const timeA = new Date(a.snippet?.publishedAt || 0).getTime();
        const timeB = new Date(b.snippet?.publishedAt || 0).getTime();
        return timeB - timeA;
      });

      if (items.length > 0 && items[0].id?.videoId) {
        const videoId = items[0].id.videoId;
        console.log("[YouTube API] Vídeo geral selecionado:", videoId, "Título:", items[0].snippet?.title);
        return NextResponse.json({ videoId });
      }
    } else {
      console.warn("[YouTube API] Falha na requisição:", response.status, await response.text());
    }

    console.log("[YouTube API] Usando fallback seguro:", FALLBACK_ID);
    return NextResponse.json({ videoId: FALLBACK_ID });

  } catch (error) {
    console.error("[YouTube API] Erro crítico:", error);
    return NextResponse.json({ videoId: FALLBACK_ID }, { status: 500 });
  }
}
