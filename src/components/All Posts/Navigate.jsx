import React from 'react'

const Navigate = ({ filterItem, BgPostList }) => {
    return (
        <>
            <div class="navigateBapu">
                <div class="navigate">
                    <ul>
                    {BgPostList.map((curEle)=>{
                            return(
                                <li onClick={filterItem(curEle)} >{curEle}</li>
                            );
                        })
                    }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navigate