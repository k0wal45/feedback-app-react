import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is my first react Project from 'React Front To Back' Course on Udemy</p>
        <Link to='/'>
        Back To Home
      </Link>
      </div>
    </Card>
  )
}

export default AboutPage
