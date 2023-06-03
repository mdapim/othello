import { SocialIcon } from 'react-social-icons';

export default function SocialIcons({ imageURL }) {
  return (
    <SocialIcon
      style={{ height: '30px', width: '30px' }}
      url={imageURL}
      bgColor='white'
      fgColor='black'
    />
  );
}
