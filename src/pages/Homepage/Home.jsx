import Navbar from "../../Components/Navbar/Navbar"
import Featured from "../../Components/featured/featured"
import "./home.scss"
import List from "../../Components/list/list"
import Watch from "../watch/watch"

const Home = ({type}) => {
    return (
        <div className="home">
            <Navbar/>
            <Featured type = {type}/>
            <List type = "Continue to Watch"/>
            <List type = "Trending and Hot"/>
            <List type = "Trailers"/>
            <List type = "Latest Series"/>
            <List type = "Cartoon"/>
        </div>
    )
}

export default Home
