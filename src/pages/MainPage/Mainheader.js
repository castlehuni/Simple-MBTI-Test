import { Link } from 'react-router-dom';
import headerStyled from "../../css/main/mainheader.module.css"

function Mainheader(){
    return(
        <div className={headerStyled.Mainheader}>
            <p>MBTI</p>
            <Link to="/admin" style={{textDecorationLine: 'none', color: "#FFCB42"}}><button className={headerStyled.Adminbtn}>관리자 페이지</button></Link>
        </div>
    );
}
export default Mainheader