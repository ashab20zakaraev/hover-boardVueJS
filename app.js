const app = {
  data() {
    return {
      colors: ['#FFFF33', '#FF0000', '#9999CC', '#FF33FF', '#00FFCC', '#99FF33', '#6699FF', '#33FF33'],
      squares_number: 750
    }
  },
  methods: {
    setColor(item) {
      const color = this.randomColor()
      item.style.background = color
      item.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

    },
    removeColor(item) {
      item.style.background = '#1d1d1d'
      item.style.boxShadow = `0 0 2px #000`
    },
    mouseOver(event) {
      if (event.target.classList.contains('square')) {
        this.setColor(event.target)
      }
    },
    mouseOut(event) {
      if (event.target.classList.contains('square')) {
        this.removeColor(event.target)
      }
    },
    randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)]
    }
  }
}



Vue.createApp(app).mount('#app')