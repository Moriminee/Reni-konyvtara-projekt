document.addEventListener('DOMContentLoaded', () => {
    fetchKonyvek();
});

async function fetchKonyvek() {
    try {
        const response = await fetch('/api/konyvek');
        const konyvek = await response.json();

        const container = document.getElementById('konyv-lista');
        container.innerHTML = '';

        konyvek.forEach(konyv => {
            const kartya = document.createElement('article');
            kartya.className = 'konyv-kartya';

            let directDownloadUrl = konyv.letoltes_url; 
            
            if (konyv.letoltes_url.includes('/d/')) {
                const konyvId = konyv.letoltes_url.split('/d/')[1].split('/')[0];
                directDownloadUrl = `https://drive.google.com/uc?export=download&id=${konyvId}`;
            }
            // --------------------------------

            kartya.innerHTML = `
                <img src="${konyv.borito_url}" alt="${konyv.cim}" class="borito">
                <div class="konyv-infok">
                    <h3>${konyv.cim}</h3>
                    <p class="leiras">${konyv.leiras}</p>
                    <div class="gombok">
                        <a href="${konyv.letoltes_url}" target="_blank" class="btn olvasas">Olvasás</a>
                        
                        <a href="${directDownloadUrl}" class="btn letoltes">Letöltés</a>
                    </div>
                </div>
            `;
            container.appendChild(kartya);
        });
    } catch (error) {
        console.error('Hiba történt az adatok lekérésekor:', error);
    }
}
