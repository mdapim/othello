import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

export default function CommentCard({ title, description, user, image }) {
  const { t } = useTranslation('Main')
  return (
    <div className="flex justify-center align-end flex-col p-10">
      <h1 className="text-center t-40 text-5xl text-white">
        {t('Comments.title')}
      </h1>
      <br />
      <hr />
      <br />
      <h1 className="text-white text-center text-3xl"> {title} </h1>
      <br />
      <h2 className="text-white text-center text-xl">{description}</h2>
      <br />
      <p className="text-white text-center">{user}</p>
      <br />
      <h1 className="text-white text-center text-5xl"> &#x275C;&#x275C;</h1>
      <img
        className=" w-24 h-24 rounded-full self-center"
        src={image}
        alt="reviewer's logo"
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
