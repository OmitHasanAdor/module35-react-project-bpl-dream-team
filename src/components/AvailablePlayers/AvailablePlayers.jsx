import { Flag, User } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AvailablePlayers = ({players,coin,setCoin,selectedPlayers,setSelectedPlayers}) => {
const [selected,setSelected]=useState(false)
const handleChooseSetter=()=>{
  if (coin>players.price) {
    setSelected(true);
    
    setCoin(coin-players.price)
    toast(`${players.playerName} is selected`)
    setSelectedPlayers([...selectedPlayers,players])
  } else {
    toast.error(`not enough coins to select this player`)
    setSelected(false)
  }
}

    return (
      <div className="card bg-base-100 shadow-sm p-4 h-full flex flex-col">
  <figure>
    <img
      src={players.playerImage}
      alt="Shoes" className='h-48'/>
  </figure>
  <div className="card-body flex flex-col">
    <h2 className="card-title"><User></User> {players.playerName}</h2>
<div className="flex justify-between items-center grow">    
    <p className='flex'><Flag></Flag> {players.playerCountry}</p> 
    <button className='btn btn-soft'>{players.battingStyle}</button>
    </div>
    <hr className='border border-gray-400'/>
    <p className=' font-bold'>Rating {players.rating}</p>
    <div className="flex justify-between grow">
        <p className=' font-bold'>{players.battingStyle}</p>
        <p className=' text-right'>{players.bowlingStyle}</p>
       
    </div>
    <div className="card-actions justify-between items-center grow">
        <p className=' font-bold'>Price:₹{players.price}crore</p>
      <button onClick={handleChooseSetter} className={`btn `} disabled={selected ? true : false}>{selected ? 'selected':'Choose PLayer'}</button>
    </div>
  </div>
</div>
    );
};

export default AvailablePlayers;