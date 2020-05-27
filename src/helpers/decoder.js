import jwt from 'jsonwebtoken';

export const decodedUserId = () => {
  const encodedToken = localStorage.getItem('jwtToken');
  const decodedToken = jwt.decode(encodedToken);
  const {id} = decodedToken;
  return id
}

export const decodedUserEmail = () => {
  const encodedToken = localStorage.getItem('jwtToken');
  const decodedToken = jwt.decode(encodedToken);
  const {email} = decodedToken;
  return email
}