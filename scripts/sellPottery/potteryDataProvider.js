let pottery = []



export const usePottery = () => pottery.slice()

export const getPottery = () => {
    return fetch("http://localhost:3000/pottery")
      .then((response) => response.json())
      .then((parsedPottery) => {
        pottery = parsedPottery;
      });
  };