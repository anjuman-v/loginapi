const authorise = (permittedRoles) => async function (req, res, next) {

    const {user} = req.user;

    const roles = user.roles;

    // const is_permitted = permittedRoles.filter(role => roles.includes(role));

    if(permittedRoles === roles ){
        next();
    } else {
        return res.status(403).send({status: "failed", message: "Permission denied"});
    }
}

module.exports = authorise;