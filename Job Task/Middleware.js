const roles = {
    admin: ['read', 'write', 'delete', 'update'],
    hr: ['read', 'write', 'update'],
    employee: ['read'],
};

const authorizeRole = (requiredPermissions) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        const userPermissions = roles[userRole] || [];
        const hasPermission = requiredPermissions.every(permission => userPermissions.includes(permission));

        if (!hasPermission) return res.sendStatus(403);
        next();
    };
};

module.exports = { authorizeRole };
