// import redis from 'redis';
// const client = redis.createClient();


// module.exports={
//     post: (req:any, res:any) => {
//         const token = req.token;
//         //console.log(token)
//         //res.json("hello")
//         client.set('revoked',(err: any, reply: any) => {
//             if (err) {
//             console.error(err);
//             return res.status(500).send('Error revoking token');
//             }
//             return res.send('Token revoked');
//         });
//     }
// }

