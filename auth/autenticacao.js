const jwt = require('jsonwebtoken');


function verifyJWT(req, res, next){
	//console.log(req.headers);
    const token = req.headers['authorization'];
	//console.log('autenticacao'+" - "+token);
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(401).json({ auth: false, message: 'Token não é válido.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}

exports.verifyJWT = verifyJWT;
