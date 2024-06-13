let options = ''
for (let i = 3; i <= 20; i++) {
  options += `<option value="${i}">${i}</option>`
}
document.querySelector('.form-select').innerHTML = options

let p1Score = 0, p2Score = 0
let winningScore = 3
let isGameOver = false
let p1ScoreDisplay = document.querySelector('.p1-score-display')
let p2ScoreDisplay = document.querySelector('.p2-score-display')

document.querySelector('.form-select').addEventListener('change', (e) => {
  winningScore = Number(e.target.value);
  console.log(winningScore);
})

document.querySelector('.p1-score').addEventListener('click', () => {
  if (!isGameOver) {
    p1Score += 1
    if (p1Score === winningScore) {
      isGameOver = true
      p1ScoreDisplay.classList.add('text-success')
      p2ScoreDisplay.classList.add('text-danger')
    }
    p1ScoreDisplay.textContent = p1Score
  }
})

document.querySelector('.p2-score').addEventListener('click', () => {
  if (!isGameOver) {
    p2Score += 1
    if (p2Score === winningScore) {
      isGameOver = true
      p2ScoreDisplay.classList.add('text-success')
      p1ScoreDisplay.classList.add('text-danger')
    }
    p2ScoreDisplay.textContent = p2Score
  }
})

document.querySelector('.reset-btn').addEventListener('click', () => {
  p1ScoreDisplay.textContent = 0
  p2ScoreDisplay.textContent = 0
  p1Score = 0
  p2Score = 0
  isGameOver = false
  p1ScoreDisplay.classList.remove('text-success', 'text-danger')
  p2ScoreDisplay.classList.remove('text-success', 'text-danger')
})