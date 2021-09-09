import React, { useState } from 'react'
import styles from './styles.module.css'

interface Props {
  images: string[]
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
}

export const ReactSmartCarousel = ({ images }: Props) => {
  const [filteredImagesRecord, setFilteredImagesRecord] = useState(images)
  const [currentImage, setCurrentImage] = useState(images.length - 1)

  const DEG = 3

  const renderImages = (images: string[]) => {
    const middle = Math.floor(images.length / 2)

    return images.map((image, index) => (
      <div
        className={styles.imageDim}
        key={index}
        onClick={(e) => onImageClick(e)}
        id={`smart-carousel-image-${index}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          transform:
            middle >= index
              ? `rotate(${DEG + index * 3}deg)`
              : `rotate(${DEG - index * 3}deg)`
        }}
      />
    ))
  }

  const onImageClick = (e: any) => {
    e.target.style.transform = `rotate(0deg)`
  }

  const updateImages = (image: HTMLElement | null) => {
    setTimeout(() => {
      const temp =
        filteredImagesRecord.length === 0 ? images : filteredImagesRecord
      setFilteredImagesRecord([...temp])
      setCurrentImage(filteredImagesRecord.length - 1)
      image?.remove()
    }, 1000)

    filteredImagesRecord.splice(-1, 1)
  }

  const onRightClick = () => {
    const image = document.getElementById(
      `smart-carousel-image-${currentImage}`
    )

    updateImages(image)

    image?.classList.add(styles.slideOutRight)
  }

  const onLeftClick = () => {
    const image = document.getElementById(
      `smart-carousel-image-${currentImage}`
    )

    updateImages(image)

    image?.classList.add(styles.slideOutLeft)
  }

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.sliderButton} onClick={onLeftClick}>
        {'<'}
      </button>
      <div className={styles.imageContainer}>
        {renderImages(filteredImagesRecord)}
      </div>
      <button className={styles.sliderButton} onClick={onRightClick}>
        {'>'}
      </button>
    </div>
  )
}
