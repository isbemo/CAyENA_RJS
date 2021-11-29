const userCtrl = {};
const User = require('../models/User');

userCtrl.getUsers = async(req,res)=> {
	const users = await User.find();
	res.json(users);
}

userCtrl.createUser = async (req,res)=> {
	const { username, phone, password } = req.body;
	const newUser = new User({
		username,
		phone,
		password});
	await newUser.save ()
	res.json('User create')
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json('User Deleted');
}


userCtrl.login = async(req, res) => {
    const { username, password} = req.body;
    const admin = await User.findOne({username: username});
    if ( !admin ) {
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await (password, admin.password);

    if (match) {

	    if (admin.password == password)
		    {
		    	res.json({
		            mensaje: 'Autenticación exitosa',
		            id: admin._id,
		            nombre: admin.nombre,
		        })
		    } else {
        res.json({
            mensaje: 'Contraseña incorrecta'
        	})
    	}     
    } else{
    	res.json({
    		mensaje: 'No se encuentra Contraseña'
    	})
    }
}

module.exports = userCtrl;