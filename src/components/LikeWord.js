import useFetch from "../hooks/useFetch";
import VocaLike from "./VocaLike";

export default function LikeWord()
{
        
    const words = useFetch(`http://localhost:3001/words`)
    console.log(words);
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