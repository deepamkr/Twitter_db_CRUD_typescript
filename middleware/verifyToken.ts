const jwt = require('jsonwebtoken')
require("dotenv").config()

const revokedTokens: any[]= [];
//console.log(revokeToken)
export async function verifyToken(req: any, res: any, next: any) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token=token
    
    try {
      
        const authData = await jwt.verify(token, process.env.secretKey);
        if (revokedTokens.includes(authData.jti)) {
          throw new Error('Token has been revoked');
        }
        req.authData = authData;
        next();

    } catch (err) {
      res.status(401).json({ error: 'Token is not valid' });
    }
  } else {
    res.status(401).json({ error: 'Token is not available' });
  }
}

export async function revokeToken(req: any, res: any, next: any) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    //req.token=token
    try {
      const decoded = jwt.decode(token);
      // Add the token's jti (JWT ID) to the list of revoked tokens
      revokedTokens.push(decoded.jti);
      next();
  } catch (error) {
    res.status(401).json({ error: 'Token cannot be revoked' });
  }
}

}



//second
// import redis from 'redis';
// const client = redis.createClient();
// const jwt = require('jsonwebtoken')
// require("dotenv").config()


// export async function verifyToken(req: any, res: any, next: any) {
//   const bearerHeader = req.headers['authorization'];
//   if (typeof bearerHeader !== 'undefined') {
//     const bearer = bearerHeader.split(" ");
//     const token = bearer[1];
//     try {
      
//       const authData = await jwt.verify(token, process.env.secretKey);
      
//       // Check if token has been revoked
//       client.get(token,(err: any, reply: any) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).send('Error checking token status');
//         }
//         if (reply === 'revoked') {
//           return res.status(401).json({ error: 'Token has been revoked' });
//         }
//         req.authData = authData;
//         next();
//       });
//     } catch (err) {
//       res.status(401).json({ error: 'Token is not valid' });
//     }
//   } else {
//     res.status(401).json({ error: 'Token is not available' });
//   }
// }

