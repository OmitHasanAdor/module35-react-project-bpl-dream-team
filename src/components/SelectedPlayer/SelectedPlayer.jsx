import React from 'react';

const SelectedPlayer = ({selectedPlayers,setSelectedPlayers,coin,setCoin}) => {
    // console.log(selectedPlayers)
    const handleDeletePlayer=(players)=>{
const filteredPlayers =selectedPlayers.filter(player=>player.playerName !=players.playerName)
setSelectedPlayers(filteredPlayers)
setCoin(coin+players.price)
    }
    return (
    <div className='mx-auto'>
        { selectedPlayers.length ===0 ? <h3 className=' text-4xl font-bold text-center'>I am empty</h3> :
            selectedPlayers.map((players,index)=>{
               return <div key={index} className="card bg-base-100 w-full mx-auto">
  <div className="card-body">
    <h2 className="card-title">{players.playerName}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleDeletePlayer(players)} className="btn btn-error">Delete</button>
    </div>
  </div>
</div>
            })
        }
    </div>
    );
};

export default SelectedPlayer;