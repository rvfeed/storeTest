import  StoreCtrl  from "../ctrls/StoreCtrl";

let storeRoutes = function(routes){    
    let sCtrl = new StoreCtrl(); 
    routes.get("/", (req, res) => {    
        res.send("welcome Home!");
        res.end();
    });
let multiRoutes = [
    "/location",
    "/location/:locationId/department",
    "/location/:locationId/department/:departmentId/category",
    "/location/:locationId/department/:departmentId/category",
    "/location/:locationId/department/:departmentId/category/:categoryId/subcategory",
    "/location/:locationId/department/:departmentId/category/:categoryId/subcategory/:subcategoryId"
]
    routes.get(multiRoutes, (req, res) => {    
        sCtrl.getDataFromStore(req.params || {})
        .then(result => {
            res.json({"result": result});         
        })
        .catch( err => {
        //    console.log(err);
            res.end();
        })
    })
  
    return routes;
}
module.exports = storeRoutes;
