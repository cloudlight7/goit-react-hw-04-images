import { Button } from "./LoadMoreStyle.module"
 const BtnLoad = ({onClickLoadMore}) => {
     return (
        
        <Button onClick={()=>onClickLoadMore()} type="submit" >Load more</Button>
    )
}

export default BtnLoad