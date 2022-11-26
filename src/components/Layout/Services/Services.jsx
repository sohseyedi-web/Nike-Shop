import './Services.scss'
import Left from '../../../assets/left.png'
import Right from '../../../assets/nike-adapt-bb.png'
import ReactCompareImage from 'react-compare-image'

const Services = () => {
  return (
    <section className="services">
        <div className="container">
            <div className="services-virtual">
                <h4 className='services-virtual__title'>کلی کفش با رنگ بندی های متنوع</h4>
                <div className="services-virtual__image">
                    <ReactCompareImage leftImage={Left} rightImage={Right}/>
                </div>
            </div>
            <div className="services-store">
              
            </div>
        </div>
    </section>
  )
}

export default Services