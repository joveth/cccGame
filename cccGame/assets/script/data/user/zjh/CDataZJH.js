/**
 * Created by Administrator on 2017/3/13.
 */
require("../base/CBaseUserData");
require("../../../base/Core");
Class({
    ClassName:"Game.Data.CDataZJH",
    Base:"Game.Data.CBaseUserData",

    factoryValue:{
        get:function(){

            return 0;
        }
    },
    init:function()
    {
        Client.addmap("enterGameRes",this);
    },
    enterGameRes:function(msg,req)
    {
        this.NewValue = msg.coins || 0;
    }

})