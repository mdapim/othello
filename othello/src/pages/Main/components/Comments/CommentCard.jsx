import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

export default function CommentCard({ title, description, user, image }) {
  const { t } = useTranslation('Main')
  return (
    <div className={'flex justify-center align-end flex-col' + ' md:p-10'}>
      <h1 className={'text-center t-40 text-2xl text-white' + ' md:text-5xl'}>
        {t('Comments.title')}
      </h1>
      <br />
      <hr />
      <br />
      <h2 className={'text-white text-center text-lg' + ' md:text-3xl'}>
        {title}
      </h2>
      <br />
      <p className={'text-white text-center text-sm' + ' md:text-xl'}>
        {description}
      </p>
      <br />
      <p className={'text-white text-sm text-center' + ' md:text-lg'}>{user}</p>
      <br />ß
      <h3
        className={'text-white text-center text-sm' + ' md:text-5xl'}
        aria-label="separator"
      >
        &#x275C;&#x275C;
      </h3>
      <img
        className=" w-16 h-16 rounded-full self-center"
        src={image}
        alt={`${user}  "trip advisor logo`}
      />
    </div>
  )
}

CommentCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
