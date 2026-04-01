import React, { use, useState } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';
import SelectedPlayer from '../../SelectedPlayer/SelectedPlayer';


const Players = ({playerPromise,coin,setCoin}) => {
    const playerData=use(playerPromise)
    const [stateBtn,setStateBtn]=useState('available')
    const [selectedPlayers,setSelectedPlayers]=useState([])
    // console.log(playerData)
    return (
       <div className='max-w-[90%] mx-auto'>
          <div className='flex justify-between my-4'>
           { stateBtn==='available' ? <h3 className=' text-2xl font-bold'>Available Players</h3>:<h3 className=' text-2xl font-bold'>Selected Players ({selectedPlayers.length}/{playerData.length})</h3>}
            <div className="flex">
                <button onClick={()=>setStateBtn('available')} className={`btn ${ stateBtn==='available' ? ' bg-[#E7FE29] ': 'btn-soft' } rounded-r-none rounded-l-lg`}>Available</button>
                <button onClick={()=>setStateBtn('selected')} className={`btn ${ stateBtn==='selected' ? ' bg-[#E7FE29] ': 'btn-soft' } rounded-l-none rounded-r-lg`}>Selected ({selectedPlayers.length})</button>
               
           
            </div>
        </div>
         <div className={`max-w-[90%] mx-auto ${stateBtn==='available' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5' : 'w-full' }`}>
            { stateBtn==='available' ?
playerData.map((players,index)=><AvailablePlayers setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} setCoin={setCoin} coin={coin} key={index} players={players}></AvailablePlayers>) :
<SelectedPlayer setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></SelectedPlayer>
            }
        </div>
      
       </div>
    );
};

export default Players;