import React from "react";
import { Motion as Motion } from "framer-motion";

const SelectedPlayer = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeletePlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (item) => item.playerName !== player.playerName
    );

    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      {selectedPlayers.length === 0 ? (
        /* Empty State */
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-87.5 flex-col items-center justify-center rounded-3xl border border-dashed border-base-300 bg-base-200/40 px-6 text-center"
        >
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-base-300 text-4xl">
            🏏
          </div>

          <h3 className="text-2xl font-bold md:text-3xl">
            No Players Selected
          </h3>

          <p className="mt-2 max-w-md text-sm text-base-content/60 md:text-base">
            You haven't selected any players yet. Go back and choose players
            to build your dream team.
          </p>
        </Motion.div>
      ) : (
        /* Selected Players */
        <div className="space-y-4">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Selected Players
              </h2>

              <p className="mt-1 text-sm text-base-content/60">
                {selectedPlayers.length}{" "}
                {selectedPlayers.length === 1 ? "player" : "players"} selected
              </p>
            </div>

            <div className="badge badge-primary badge-lg font-semibold">
              {selectedPlayers.length}
            </div>
          </div>

          <AnimatePresence>
            {selectedPlayers.map((player) => (
              <Motion.div
                key={player.playerName}
                layout
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: 50,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4 p-4 md:p-5">
                  {/* Player Info */}
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl font-bold text-primary">
                      {player.playerName?.charAt(0)?.toUpperCase()}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-bold md:text-xl">
                        {player.playerName}
                      </h3>

                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-base-content/60">
                        <span>
                          {player.role || "Player"}
                        </span>

                        <span>•</span>

                        <span className="font-semibold text-primary">
                          ${player.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <Motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDeletePlayer(player)}
                    className="btn btn-error btn-sm shrink-0 rounded-xl text-white shadow-sm"
                  >
                    Delete
                  </Motion.button>
                </div>
              </Motion.div>
            ))}
          </AnimatePresence>

          {/* Summary */}
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-primary/10 bg-primary/5 p-4">
            <span className="font-semibold">Total Players</span>

            <span className="text-lg font-bold text-primary">
              {selectedPlayers.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedPlayer;