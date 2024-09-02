import Feed from './Feed/Feed'
import Head from './Helper/Head'
const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title="photos" description="Home do site Dogs"/>
      <Feed /> 
    </section>
  )
}

export default Home