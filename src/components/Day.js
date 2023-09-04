import { Link, useNavigate, useParams } from "react-router-dom";
import VocaWord from "./VocaWord";
import useFetch from "../hooks/useFetch";

export default function Day() {
    const navigate = useNavigate();
    const { dayParams } = useParams();
    const [day, setDay] = useFetch(`http://localhost:3001/days`)
    const words = useFetch(`http://localhost:3001/words?day=${dayParams}`)
    

    function removeDay() {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            fetch(`http://localhost:3001/days/${dayParams}`, {
                method: 'DELETE',
            }).then(res => {
                if (res.ok) {
                    alert('삭제가 완료 되었습니다')
                    navigate('/')
                }
            })
        }
    }
    return <>
        <h2>Day{dayParams}</h2>
        <Link to={`/day/${Number(dayParams)-1}`}>{`◀`}</Link>
        <button style={{margin:"0px 20px"}}onClick={removeDay}>Day{dayParams} 삭제</button>
        <Link to={`/day/${Number(dayParams)+1}`}>{`▶`}</Link>
        <table>
            <tbody>
                {words.map(word => (
                    <VocaWord word={word} />
                ))}
            </tbody>
        </table>
    </>

}