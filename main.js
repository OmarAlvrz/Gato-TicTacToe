document.addEventListener('DOMContentLoaded', () => {
    const tablero = document.getElementById('tablero');
    let turnoX = true;

    // Crear las casillas del tablero
    for (let i = 0; i < 9; i++) {
        const casilla = document.createElement('div');
        casilla.className = 'casilla';
        casilla.addEventListener('click', () => marcarCasilla(casilla));
        tablero.appendChild(casilla);
    }

    // Función para marcar una casilla
    function marcarCasilla(casilla) {
        if (!casilla.textContent) {
            casilla.textContent = turnoX ? 'X' : 'O';
            turnoX = !turnoX;

            if (hayGanador()) {
                alert(`¡${turnoX ? 'O' : 'X'} ha ganado!`);
                reiniciarJuego();
            } else if (tableroLleno()) {
                alert('¡Empate!');
                reiniciarJuego();
            }
        }
    }

    // Función para verificar si hay un ganador bien robadota porque no le entendi a eso
    function hayGanador() {
        const combinacionesGanadoras = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
            [0, 4, 8], [2, 4, 6]              // Diagonales
        ];

        for (const combinacion of combinacionesGanadoras) {
            const [a, b, c] = combinacion;
            if (
                tablero.children[a].textContent &&
                tablero.children[a].textContent === tablero.children[b].textContent &&
                tablero.children[a].textContent === tablero.children[c].textContent
            ) {
                return true;
            }
        }

        return false;
    }

    // Función para verificar si el tablero está lleno
    function tableroLleno() {
        for (const casilla of tablero.children) {
            if (!casilla.textContent) {
                return false;
            }
        }
        return true;
    }

    // Función para reiniciar el juego
    function reiniciarJuego() {
        for (const casilla of tablero.children) {
            casilla.textContent = '';
        }
        turnoX = true;
    }
});