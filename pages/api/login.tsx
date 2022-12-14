import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next'


export default async (req:NextApiRequest, res:NextApiResponse) => {
  const { username } = req.body;

  try {

    setCookie('token', username, { res, maxAge: 30 * 24 * 60 * 60, httpOnly:true, path: './' });

    setCookie('token', username,  { res, maxAge: 30 * 24 * 60 * 60, httpOnly:true, path: './' });
    

    res.status(200).end();
  }
   catch (e) {
    res.status(400).send(e);
  }
}