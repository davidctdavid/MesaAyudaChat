//a316cd03-f42e-4f6b-9cac-cdc5fa1deb22 
//fd511920-1e9c-45d2-9fe8-d8824ca56ec6

var tramos={
    principal:{
        wconv_version_date : '2018-09-20',
        wconv_workspaceId : "07864efe-ff25-4f3a-9e2d-dcfff22cad9e",//'07864efe-ff25-4f3a-9e2d-dcfff22cad9e',
        wconv_apikey : 'dPVHWNmEXdRKlP2Q0-0MTXdboSeWfJ0yP5x4HehNUZYq',//'dPVHWNmEXdRKlP2Q0-0MTXdboSeWfJ0yP5x4HehNUZYq',
        wconv_url : 'https://gateway.watsonplatform.net/assistant/api',
    },secundario:{
    },bd:{
        config : {
            "host": "192.168.10.221",
            "user": "sa",
            "password": "Soft2019.",
            "database": "MDCliente"
            } 
    },mongo:{
        url:'mongodb://40.117.183.46:27017/WatsonVehiculos',
        bd:"ChatTecniseguros",
        user:"" ,//"amin",
        pwd:"" //"123"
    },telegram:{
        key:"888275427:AAESP0X2lB6xQvt5aw0rfwEaPe17X-dpeGg"
    },facebook:{
        token:"EAADtIPntW1wBACBqt1XDo3EPygcN9C8M1vZA6rYJVgR4scJkKvemJ3CoICdti0nzZC34qL4wmh3PNKJFZAc0ko8iFZBzM1uMi7xUlnI9W2GbjtC6Y8SZAPosAqF5PYOmd0ly9tz3lZBjZAI4eXeXZB6GnybI46DDCMV8kLvzyTpm2VusXWIGIxIK"
    }
}



module.exports=tramos;  