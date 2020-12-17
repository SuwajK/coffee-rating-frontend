import Config from "../Config";

const getTokenFromApi = async ({username, password}) => {
  const token = await fetch(Config.authApiUrl + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
    .then(response => response.headers.get(Config.authHeader))
    .catch(error => {
      console.error('Error getting token from api: ', error);
      return '';
    });

  //Return token or null if error occured
  return (token) ? token.replace(Config.jwtPrefix, '') : null;
}


export {
  getTokenFromApi
}