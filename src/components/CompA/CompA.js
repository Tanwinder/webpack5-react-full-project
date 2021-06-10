import React, {useState} from 'react'

const CompA = () => {
    const [state, setState] = useState('data');
    const onClickBtn = (e) => {
        const gh = e.target?.dataset?.type;
        setState(gh);
    }
    return(
        <div>
            <div>
                <button onClick={onClickBtn} data-type="data">compa</button>
                <button onClick={onClickBtn} data-type="nodata">no data</button>
            </div>
            <>
            {
                state === 'data' ?
                <div>Data</div>
                :
                <div>No data</div>
            }
            </>
        </div>
    )
}

export default CompA;