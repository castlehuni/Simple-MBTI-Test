import headerStyled from "../../css/main/mainheader.module.css"

function Mainheader(){
    return(
        <div className={headerStyled.Mainheader}>
            <p>MBTI</p>
            <button className={headerStyled.Adminbtn}>관리자 페이지</button>
        </div>
    );
}
export default Mainheader