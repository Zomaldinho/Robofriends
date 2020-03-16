import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-light-green dib br10 pa2 ma3 na10 grow bw10 shadow-5'>
            <img alt='Robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;