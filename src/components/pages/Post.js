import { useParams } from "react-router-dom"
const Post = ()=> {
    let {category} = useParams();
    console.log({category})
    return(
        <>
        This is {category} Page
        </>
    )
}
export default Post