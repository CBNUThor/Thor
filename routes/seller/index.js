
/**
 * Created by Sehyeon on 2018-06-03.
 */
var express = require('express');
var router = express.Router();
var controller=require('./sellerController');
var bodyParser = require('body-parser');
var multer=require('multer');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var Seller_storage=multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'./public/img/sellerImg/'+file.fieldname);
    },
    filename: function (req, file, cb) {
        cb(null,Date.now()+"!"+file.originalname);
    }
});
var uploadSeller=multer({storage:Seller_storage});
/* GET users listing. */
/*router.get('/Register_Seller',controller.sellerRegister);
router.get('/Register_Menu',controller.menuRegister);
router.get('/Manage_Order',controller.orderManage);
router.get('/Seller',controller.seller);
router.get('/Manage_Order/:id',controller.orderDetailManage);
router.get('/Manage_Statistics',controller.statisticsManage);
router.get('/Manage_Menu',controller.menuManage);
router.get('/Manage_Menu/:id',controller.menuDetailManage);
router.get('/Manage_Store',controller.storeManage);
router.get('/Message',controller.message);*/
router.get('/', function(req, res, next) {
    res.render('seller_profile_KSW');
});
router.get('/Register_Chef',controller.sellerRegister);
router.post('/Register_Chef',uploadSeller.fields([{name:'imageIden'},{name:'imageFace'},{name:'imageStore'}]),controller.sellerRegisterAttemp);

module.exports = router;
