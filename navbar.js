document.addEventListener("DOMContentLoaded", function () {
  // Definizione degli stili per la navbar, il logo tricolore e i link
  const style = document.createElement("style");
  style.innerHTML = `
        .guild-nav {
            background-color: #0a0a0a;
            border-bottom: 2px solid #d4af37;
            padding: 0 20px;
            height: 70px;
            display: flex;
            align-items: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.8);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        .guild-nav-container {
            width: 100%;
            max-width: 1200px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        /* Logo ITA-MAGNATI Tricolore */
        .guild-logo {
            font-family: 'Georgia', serif;
            font-size: 1.6em;
            font-weight: 900;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            
            /* Effetto Tricolore */
            background: linear-gradient(to right, #009246 33%, #ffffff 33%, #ffffff 71%, #ce2b37 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            
            /* Bordo e stile del box */
            border: 2px solid #d4af37;
            padding: 5px 15px;
            transition: all 0.3s ease;
            filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.8));
        }
        
        .guild-logo:hover {
            transform: scale(1.05);
            border-color: #f1d592;
            box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
        }

        .nav-links {
            display: flex;
            gap: 30px;
        }
        
        .nav-item {
            color: #d4af37;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 0.85em;
            letter-spacing: 1.5px;
            font-weight: bold;
            transition: all 0.3s ease;
            padding: 5px 0;
            border-bottom: 2px solid transparent;
        }
        
        .nav-item:hover {
            color: #f1d592;
            border-bottom: 2px solid #f1d592;
        }
    `;
  document.head.appendChild(style);

  // Struttura HTML della Navbar
  const navbarHTML = `
    <nav class="guild-nav">
        <div class="guild-nav-container">
            <a href="index.html" class="guild-logo">ITA-MAGNATI</a>
            
            <div class="nav-links">
                <a href="index.html" class="nav-item">Home Archivio</a>
                <a href="#" class="nav-item">Regolamento</a>
                <a href="#" class="nav-item">Utility</a>
                <a href="#" class="nav-item">Membri</a>
            </div>
        </div>
    </nav>
    `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
