// Variáveis
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const gameOverScreen = document.querySelector('.game-over-screen')
const restartButton = document.querySelector('.restart-button')


// Funções
const marioJump = () => {
    mario.classList.add('jump')
  
    setTimeout(() => {
    mario.classList.remove('jump')
    }, 500)
  }

const restartGame = () => {
   location.reload()
  }

/* Criando um loop para verificar se o usuário perdeu o jogo */
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = 'none'
      pipe.style.left = `${pipePosition}px`

      mario.style.animation = 'none'
      mario.style.bottom = `${marioPosition}px`
      mario.src = '../assets/game-over.png'
      mario.style.width = '75px'
      mario.style.marginLeft = '50px'
      mario.style.bottom = '90px'

      gameOverScreen.classList.add('active')

      clearInterval(loop)
    }
  }, 10)

// Eventos 
document.addEventListener('keydown', marioJump)
restartButton.addEventListener('click', restartGame)





