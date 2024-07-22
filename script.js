// Variáveis
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const gameOverScreen = document.querySelector('.game-over-screen')
const restartButton = document.querySelector('.restart-button')

const marioAudio = new Audio('../sounds/MARIO_audio_theme.mp3')
const gameOverAudio = new Audio('../sounds/MARIO_audio_gameover.mp3')
marioAudio.loop = true

let gameStarted = false

// Funções
const marioJump = () => {
  if (!gameStarted) {
    marioAudio.play()
    gameStarted = true
  }

    mario.classList.add('jump')
  
    setTimeout(() => {
    mario.classList.remove('jump')
    }, 500)
  }

  const handleKeydown = (event) => {
    if (event.code === 'Space') {
      marioJump()
    }
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

      marioAudio.pause()
      marioAudio.currentTime = 0
      gameOverAudio.play()

      gameOverScreen.classList.add('active')
      
      clearInterval(loop)
    }
  }, 10)

// Eventos 
document.addEventListener('keydown', handleKeydown)
restartButton.addEventListener('click', restartGame)





