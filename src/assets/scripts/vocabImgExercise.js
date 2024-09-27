export function initVocabImgExercise() {
  const articles = document.querySelectorAll('article')

  articles.forEach((article) => {
    const infoContainer = article.querySelector('.info-container')
    const notificationContainer = article.querySelector('.notification-container')
    const exerciseContainer = article.querySelector('.exercise')

    if (!infoContainer || !notificationContainer || !exerciseContainer) {
      console.error('Required elements not found in article:', article)
      return
    }

    const buttons = exerciseContainer.querySelectorAll('button')
    const successNotification = notificationContainer.querySelector('.notification.type-success')
    const errorNotification = notificationContainer.querySelector('.notification.type-error')
    const correctAnswer = exerciseContainer instanceof HTMLElement ? exerciseContainer.dataset.correct : null

    if (!successNotification || !errorNotification || !correctAnswer) {
      console.error('Required elements or data not found in exercise:', exerciseContainer)
      return
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const isCorrect = button.textContent?.trim() === correctAnswer

        // Hide the info notification
        if (infoContainer instanceof HTMLElement) {
          infoContainer.style.display = 'none'
        }

        // Hide both success and error notifications
        if (successNotification instanceof HTMLElement) {
          successNotification.style.display = 'none'
        }
        if (errorNotification instanceof HTMLElement) {
          errorNotification.style.display = 'none'
        }

        // Show the appropriate notification
        if (isCorrect) {
          if (successNotification instanceof HTMLElement) {
            successNotification.style.display = 'block'
          }
          button.classList.add('color-secondary')
        } else {
          if (errorNotification instanceof HTMLElement) {
            errorNotification.style.display = 'block'
          }
        }

        // Show the notification container
        if (notificationContainer instanceof HTMLElement) {
          notificationContainer.style.display = 'block'
        }
      })
    })
  })
}
