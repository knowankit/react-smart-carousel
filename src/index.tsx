import React from 'react'
import styles from './styles.module.css'

interface Props {
  images: string[]
  height?: number
  width?: number
}

export const ReactSmartCarousel = ({ images }: Props) => {
  let filteredImagesRecord = [...images]
  let currentImage = filteredImagesRecord.length - 1

  const DEG = 3
  const MIDDLE = Math.floor(images.length / 2)

  const renderImagesOnInitialLoad = () => {
    return filteredImagesRecord.map((image, index) => (
      <div
        className={`${styles.imageParent} smart-carousel-image`}
        key={index}
        id={`smart-carousel-image-${index}`}
        style={{
          transform:
            MIDDLE >= index
              ? `rotate(${DEG + index * 3}deg)`
              : `rotate(${DEG - index * 3}deg)`
        }}
      >
        <img
          alt={`smart-carousel-image-${index}`}
          src={image}
          className={styles.image}
        />
      </div>
    ))
  }

  const loadBackImages = () => {
    const imagesContainer = document.querySelectorAll('.smart-carousel-image')

    filteredImagesRecord = [...images]
    currentImage = filteredImagesRecord.length - 1

    for (let index = 0; index < imagesContainer.length; index++) {
      const imgElement = imagesContainer[index]

      setTimeout(() => {
        if (imgElement.classList.contains('right')) {
          imgElement.classList.remove('right')
          imgElement.classList.remove('_styles-module__slideOutRight__1FcGQ')
          imgElement.classList.add(styles.slideInRight)

          setTimeout(() => {
            imgElement.classList.remove(styles.slideInRight)
          }, index * 1 * 100)
        }

        if (imgElement.classList.contains('left')) {
          imgElement.classList.remove('left')

          imgElement.classList.remove('_styles-module__slideOutLeft__2J0jH')
          imgElement.classList.add(styles.slideInLeft)

          setTimeout(() => {
            imgElement.classList.remove(styles.slideInLeft)
          }, index * 1 * 100)
        }
      }, index * 1 * 300)
    }
  }

  const updateImages = () => {
    setTimeout(() => {
      filteredImagesRecord.splice(-1, 1)
      currentImage = filteredImagesRecord.length - 1

      if (filteredImagesRecord.length === 0) {
        loadBackImages()
      }
    }, 300)
  }

  const onRightClick = () => {
    const image = document.getElementById(
      `smart-carousel-image-${currentImage}`
    )

    updateImages()

    image?.classList.add(styles.slideOutRight)

    // This is important to add as this will be used to check thed direction of the animation while bringing it back
    image?.classList.add('right')
  }

  const onLeftClick = async () => {
    const image = document.getElementById(
      `smart-carousel-image-${currentImage}`
    )

    await updateImages()

    image?.classList.add(styles.slideOutLeft)

    // This is important to add as this will be used to check thed direction of the animation while bringing it back
    image?.classList.add('left')
  }

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.sliderButton} onClick={onLeftClick}>
        {'<'}
      </button>
      <div className={styles.imageContainer}>{renderImagesOnInitialLoad()}</div>
      <button className={styles.sliderButton} onClick={onRightClick}>
        {'>'}
      </button>
    </div>
  )
}
