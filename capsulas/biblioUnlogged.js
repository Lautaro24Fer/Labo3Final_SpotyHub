import { renderLogIn } from "./login";

export function renderBiblioUnlogged() {

  const punter = document.querySelector('#contBiblioMain')

  punter.innerHTML = ''

  const content = document.createElement("div")

  content.innerHTML = `
    <div class="biblioCard firstList">
    <h6>Crea tu primera lista</h6>
    <p>Es muy fácil, y te echaremos una mano.</p>
    <button class="bcButton">Crear lista</button>
  </div>
  <div class="biblioCard firstList" style="margin: 1em 0 0 0;">
    <h6>Encuentra pódcasts que quieras seguir</h6>
    <p>Te avisaremos cuando salgan nuevos episodios</p>
    <button class="bcButton">Explorar pódcasts</button>
  </div>
</div>

    `;

  punter.appendChild(content)

  const buttonForLogin = content.querySelectorAll("button")

  buttonForLogin.forEach(element => {
    element.addEventListener("click", () => {
      renderLogIn()
    });
  });
}
