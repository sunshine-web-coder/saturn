import HomeBanner from '../../component/banner/HomeBanner'
import ChargeForm from './sections/ChargeForm'
import Cta from './sections/Cta'
import FeatureWrap from './sections/FeatureWrap'
// import GoalSetting from './sections/GoalSetting'
import OnlineShopping from './sections/OnlineShopping'
import OurServices from './sections/OurServices'
// import WhyChooseUs from './sections/WhyChooseUs'

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <ChargeForm />
      <OurServices />
      <FeatureWrap />
      {/* <WhyChooseUs /> */}
      <OnlineShopping />
      <Cta />
      {/* <GoalSetting /> */}
    </div>
  )
}
