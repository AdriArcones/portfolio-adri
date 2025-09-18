import CustomSection from '../../shared/components/custom-section/CustomSection'
import './PrivacyPolicy.scss'
import { privacyPolicy } from '../../data/privacyPolicyData'

export const PrivacyPolicy = () => {
  return (	
    <CustomSection className='privacy-policy'>
      <h1 className='privacy-policy__title'>Política de Privacidad</h1>

    <div className='privacy-policy__content'>
        {privacyPolicy.map((item) => (
            <div className='privacy-policy__item'>
                <h3 className='privacy-policy__item-title'>{item.title}</h3>
                <p className='privacy-policy__item-description'>{item.content}</p>
            </div>
        ))}
    </div>
    </CustomSection>
  );
};

export default PrivacyPolicy;
