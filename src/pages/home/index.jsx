import Styled from "styled-components";
import TextComponent from "../../components/Text";
import "./styles.scss"
import catolica from "../../assets/images/catolica.png"

const Home = () => {
    return (
        <div className="Home">
            <img src={catolica} alt="" />
            <div style={{flex: 10}}/>
            <div style={{flex: 6, background: "#1E1E1E", flexDirection:"column"}}>
                <div style={{flex: 1}}>
                    <text className="texto1">Welcome back!</text>
                </div>
                <div style={{flex: 3}}>
                    <text className="texto2">Login to manage your <br></br>complementary hours.</text>
                </div>
                <div style={{flex: 2}}>
                    <input className="input1" type="email" id="email" name="email" placeholder="Email"></input>
                    <input className="input2" type="password" id="password" name="password" placeholder="Senha"></input>
                </div>
                <div style={{flex: 1}}>
                    <text className="texto3">login is managed by your<br></br>organization</text>
                </div>
                <div style={{flex: 2}}>
                    <button>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Home;