import useFetch from "../hooks/useFetch";
import VocaLike from "./VocaLike";

export default function LikeWord()
{
        
    const words = useFetch(`http://localhost:3001/words`)
    console.log(words);
    //filter를 이용해 단어의 like가 ture인 값만 likewords배열에 저장
    const likewords = words.filter(word=>word.like==true)
    console.log(likewords);
    return(
        <div>
            <table>
                <tbody>
                    {likewords.map(word=>(
                        <VocaLike word={word}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
} 