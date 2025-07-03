
import './Contact.scss'
import CustomSection from '../../shared/components/custom-section/CustomSection'
import CustomForm from './CustomForm'
export const Contact = () => {

  
  return (
    <CustomSection
      title="Contacta conmigo"
      subtitle="¿Te ha gustado mi historia? Estaré encantado de escuchar la tuya"
      id="contact"
    >
      <CustomForm />
    </CustomSection>
  )
} 