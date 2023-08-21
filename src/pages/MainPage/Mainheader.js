import { Link } from 'react-router-dom';
import headerStyled from "../../css/main/mainheader.module.css"

function Mainheader(){
    return(
        <div className={headerStyled.Mainheader}>
            <p>MBTI</p>
            <button className={headerStyled.Adminbtn}><Link to="/admin" style={{textDecorationLine: 'none', color: "#FFCB42"}}>관리자 페이지</Link></button>
        </div>
    );
}
export default Mainheader