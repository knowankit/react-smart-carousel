import React from 'react'
import styles from './styles.module.css'

interface Props {
  images: string[]
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
}

export const ReactSmartCarousel = ({ images }: Props) => {
  let filteredImagesRecord = [...images]
  let currentImage = filteredImagesRecord.length - 1

  const DEG = 3
  const MIDDLE = Math.floor(images.length / 2)

  const renderImages = () => {
    return filteredImagesRecord.map((image, index) => (
      <div
        className={`${styles.imageDim} smart-carousel-image`}
        key={index}
        onClick={(e) => onImageClick(e)}
        id={`smart-carousel-image-${index}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          transform:
            MIDDLE >= index
              ? `rotate(${DEG + index * 3}deg)`
              : `rotate(${DEG - index * 3}deg)`
        }}
      />
    ))
  }

  const onImageClick = (e: any) => {
    e.target.style.transform = `rotate(0deg)`
  }

  const loadBackImages = () => {
    const imagesContainer = document.querySelectorAll('.smart-carousel-image')

    filteredImagesRecord = [...images]
    currentImage = filteredImagesRecord.length - 1

    for (let index = 0; index < imagesContainer.length; index++) {
      const imgElement = imagesContainer[index]

      setTimeout(() => {
        if (imgElement.classList.contains('right')) {
          imgElement.classList.remove('_styles-module__slideOutRight__1FcGQ')
          // imgElement.classList.add(styles.slideInRight)
          // imgElement.classList.remove(styles.slideInRight)
        }

        if (imgElement.classList.contains('left')) {
          imgElement.classList.remove('_styles-module__slideOutLeft__1FcGQ')
          // imgElement.classList.add(styles.slideInLeft)
          // imgElement.classList.remove(styles.slideInLeft)
        }
      }, index * 1 + 100)
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
    image?.classList.add('right')
  }

  const onLeftClick = async () => {
    const image = document.getElementById(
      `smart-carousel-image-${currentImage}`
    )

    await updateImages()

    image?.classList.add(styles.slideOutLeft)
    image?.classList.add('left')
  }

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.sliderButton} onClick={onLeftClick}>
        {'<'}
      </button>
      <div className={styles.imageContainer} id='images-container'>
        {renderImages()}
      </div>
      <button className={styles.sliderButton} onClick={onRightClick}>
        {'>'}
      </button>
    </div>
  )
}
