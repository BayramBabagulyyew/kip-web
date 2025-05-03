export default {
  data() {
    return {
      observer: null
    }
  },
  mounted() {
    this.lazyScrollCheck()
    const images = document.querySelectorAll('img[data-src]')
    const options =
      {
        rootMargin: '0px 0px -20px 0px',
        threshold: 1.0
      } || {}
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        return
      } else {
        this.lazyScrollCheck()
        this.observer.unobserve(entry.target)
      }
    }, options)
    images.forEach((image) => {
      this.observer.observe(image)
    })
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
    lazyScrollCheck() {
      const lazyImages = document.querySelectorAll('img[data-src]')
      const windowHeight = document.documentElement.clientHeight
      let lazyImagesPositions = []
      if (lazyImages.length > 0) {
        lazyImages.forEach((image) => {
          if (image.dataset.src) {
            lazyImagesPositions.push(image.getBoundingClientRect().top + window.pageYOffset)
            let imgIndex = lazyImagesPositions.findIndex((item) => window.pageYOffset > item - windowHeight)
            if (imgIndex >= 0) {
              if (lazyImages[imgIndex].dataset.src) {
                lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src
                lazyImages[imgIndex].removeAttribute('data-src')
              }
              delete lazyImagesPositions[imgIndex]
            }
          }
        })
      }
    }
  }
}
