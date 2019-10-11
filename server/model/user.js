module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user',
    {
      id: {
        type: DataTypes.INTEGER(12).UNSIGNED.ZEROFILL,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '昵称，默认为注册的用户名'
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名'
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '密码'
      },
      auth: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        comment: '用户权限，默认注册的用户为auth=0，即普通用户，管理员为auth=1'
      }
    },
    {
      timestamps: true,
      createdAt: 'createTime',
      updatedAt: 'updateTime',
      deletedAt: 'destroyTime',
      paranoid: true
    }
  )
}
