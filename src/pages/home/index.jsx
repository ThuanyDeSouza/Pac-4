import Styled from "styled-components";
import TextComponent from "../../components/Text";
import "./styles.scss"


const Home = () => {
    return (
        <div className="Home">
            <div style={{flex: 10}}/>
            <div style={{flex: 6, background: "#1E1E1E", flexDirection:"column"}}>
                <div style={{flex: 3}}>
                </div>
                <div style={{flex: 2, backgroundColor: "#f00"}}></div>
                <div style={{flex: 1, backgroundColor: "#0f0"}}></div>
            </div>
        </div>
    )
}

export default Home;