const express = require ('express');
const path = __dirname + '/build/';
const mysql = require ('mysql');
const cors = require ('cors');
const multer = require('multer')

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require ('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const app = express();
app.use(express.static(path));

app.use(express.json());
app.use(cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    session({
        key: "userId",
        secret: "Safeenviro",
        resave: false,
        saveUninitialized: false,
        cookie:{
            httpOnly: false,
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    // host: "safedb-regan.c60x627olbkb.eu-west-2.rds.amazonaws.com",
    // host: "safedb.c60x627olbkb.eu-west-2.rds.amazonaws.com",
    host: "safeenviro.c60x627olbkb.eu-west-2.rds.amazonaws.com",
    user: "safedb",
    password:"reportwaste",
    port:"3306",
    database:"safeenvirofull"
});

db.connect(function(err){

    if(!err) {
        console.log("Database is connected ... ");    
    } else {
        console.log("Error connecting database ... "+err);    
    }
});

app.post('/signup', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const type = req.body.type;

        bcrypt.hash(password, saltRounds, (err, hash) => {
            if(err){
                console.log(err);
            }
            
            db.query(
                "INSERT INTO `user` (`username`, `password`, `email`, `type`) VALUES  (?,?,?,?)",
                [username, hash, email, type], 
                (err, result)=>{
                    if (err) {
                        res.send(err);
                    } 
                    if (result){
                        res.send({reg:true});
                    }
                }
            );
        });
});

const verifyJWT = (req, res, next) => {
    const token = req.header["x-access-token"];

    if (!token) {
        res.send("We need a token")
    } else {
        jwt.verify( token, "jwtSecret", (err, decoded) => {
            if(err){
                res.json({auth: false, message: "You failed to authenticate"});
            } else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}

app.get('/isUserAuth', verifyJWT , (req, res) => {
    res.send("yo, u are authenticated!!");
});

app.get('/login', (req, res)=> {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user, auth: true});
    } else {
        res.send({loggedIn: false, auth: false});
    }
});

app.post('/login', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM `user` WHERE `username` = ?", 
        username, 
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if(result){
                if ( result.length > 0){
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if(response){
                            
                            const id = result[0].id;
                            const token = jwt.sign({id}, "jwtSecret", {
                                expiresIn : 300,
                            });

                            req.session.user = result;
                            res.json({auth: true, token: token, result: result});
                        } else {
                            res.json({auth: false,  message: "Wrong User Name, Password Combination",});
                        }
                    });
                }else{
                    res.json({auth: false,  message: "This User doesn't exist"});
                }
            }
        }
    );
});


app.post('/collectionform', (req, res)=> {
    const collectionpoint = req.body.collectionpoint;
    const wastetype = req.body.wastetype;
    const quantity = req.body.quantity;
    const collectedby = req.body.collectedby;
    const collectingequipment = req.body.collectingequipment;
    const datetime = req.body.date;
    const zone = req.body.zone.label;
    const date = datetime +" "+ zone;

    db.query(
        "INSERT INTO `collectionform` (`collectionpoint`, `collectedby`, `wastetype`, `collectingequipment`, `quantity`, `dateandtime`) VALUES (?,?,?,?,?,?)",
        [collectionpoint, collectedby, wastetype, collectingequipment, quantity, date],
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                // res.send({message: "Collection Successfully Submited"});
                db.query(
                    "INSERT INTO `collectiondata` (`collectionpoint`, `collectedby`, `wastetype`, `collectingequipment`, `quantity`, `dateandtime`) VALUES (?,?,?,?,?,?)",
                    [collectionpoint, collectedby, wastetype, collectingequipment, quantity, date],
                    (err, result)=>{
                        if (err) {
                            res.send(err);
                        } 
                        if (result){
                            res.send({message: "Collection Successfully Submited"});
                        }
                    }
                );
            }
        }
    );
});

app.get('/reviewform', (req, res)=> {
    db.query(
        "SELECT * FROM `collectiondata`",
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                res.json({result});
            }
        }
    );
});

app.post('/reviewsubmit', (req, res)=> {

    const TransData = req.body;
    const data = TransData[0];
    const blockId = TransData[1];
    const transactionHash = TransData[2];
    data.forEach(i => {
        const collectionid = i.collectionid;
        const collectionpoint = i.collectionpoint;
        const collectedby = i.collectedby;
        const wastetype = i.wastetype;
        const collectingequipment = i.collectingequipment;
        const quantity = i.quantity;
        const date = i.dateandtime;
        const tippingpoint = i.tippingpoint;

        db.query(
            "INSERT INTO `reviewedform` (`id`, `collectionpoint`, `collectedby`, `wastetype`, `collectingequipment`, `quantity`, `dateandtime`, `tippingpoint`, `blockId`, `transactionHash`) VALUES (?,?,?,?,?,?,?,?,?,?)",
            [collectionid ,collectionpoint, collectedby, wastetype, collectingequipment, quantity, date, tippingpoint, blockId, transactionHash],
            (err, result)=>{
                if (err) {
                    res.send(err);
                } else if (result){
                    // res.send({message: "Collection Successfully Submited"});
                    db.query(
                        "DELETE FROM `collectiondata` WHERE `collectiondata`.`collectionid` = ?",
                        collectionid,
                        (err, result)=>{
                            if (result){
                                res.send({message: "Reviewed Collections are Successfully Submited"});
                            }else if (err) {
                                res.send(err);
                            } 
                        }
                    );
                }
            }
        );
    });
});



app.post('/removedata', (req, res)=> {

    const data = req.body;
    data.forEach(i => {
        const collectionid = i.collectionid;
        
        db.query(
            "DELETE FROM `collectiondata` WHERE `collectiondata`.`collectionid` = ?",
            collectionid,
            (err, result)=>{
                if (err) {
                    res.send(err);
                } 
                if (result){
                    res.send({message: "Selected Collections are Successfully Removed"});
                }
            }
        );
    });
});

app.post('/check', (req, res)=> {

    var TipP = [];
    const data = req.body;
    data.forEach(i => {
        const tippingpoint = i.tippingpoint;

        if(tippingpoint != null){
            TipP.push(true);
        }else{
            TipP.push(false);
        }
    });
    var hasfalse = TipP.includes(false); //true
    if(hasfalse){
        res.send({err: "Please Fill the Tipping Point to the Checked Collections"});
    }else{
        res.send({message:true});
    }

});

app.get('/analytics', (req, res)=> {
    db.query(
        "SELECT * FROM `reviewedform` ORDER BY `blockId` DESC",
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                res.json({result});
            }
        }
    );
});


app.get('/tweets', (req, res)=> {
    db.query(
        "SELECT * FROM `tweets`",
        (err, result)=>{
            if (err) {
                res.send( err);
            } 
            if (result){
                res.json({result});
            }
        }
    );
});


app.post('/makecomplaints', (req, res)=> {
    const postal_code = req.body.postal_code;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
    const remarks = req.body.remarks;
    const status = "pending";
    const created_at = new Date();
    const updated_at = new Date();
    // const date = datetime +" "+ zone;

    db.query(
        "SELECT `id` FROM `complains` WHERE `id`= (SELECT MAX(id) FROM complains)",
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                let str;
                if(result.length === 0){
                    str = "" + 1;
                }else{
                    str = "" + result[0].id;
                }
                let pad = "0000"
                let ans = pad.substring(0, pad.length - str.length) + str
                const tracking_id = `RW${ans}`;
                db.query(
                    "INSERT INTO `complains` (`tracking_id`, `postal_code`, `address`, `email`, `phone`, `remarks`, `status`, `created_at`, `updated_at`) VALUES (?,?,?,?,?,?,?,?,?)",
                    [tracking_id, postal_code, address, email, phone, remarks, status, created_at, updated_at],
                    (err, result)=>{
                        if (err) {
                            res.send(err);
                        } 
                        if (result){
                            res.send({message: "Complaint Successfully Submited, You can track your complaint by tracking id: "+tracking_id});    
                        }
                    }
                );
            }
        }
    );    
});


const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'src/uploads'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
})
const upload = multer({ storage: storage }); 

app.post('/multiple', upload.array('multipleImages'), (req, res) => {
    const images = req.files;
    try {
        db.query(
            "SELECT * FROM `complains` WHERE `id`= (SELECT MAX(id) FROM complains)",
            (err, result) => {
                if (err) {
                    res.send(err);
                } 
                if (result){
                    let complain_id = result[0].id;
                    let created_at = result[0].created_at;
                    let updated_at = result[0].updated_at;
                    let tracking_id = result[0].tracking_id;
                    images.forEach(image => {
                        const name = image.filename;
                        // const destination = image.destination;
                        // const image_path = destination + "/" + name;
                        db.query(
                            "INSERT INTO `complain_images` (`complain_id`, `image` , `created_at`, `updated_at`) VALUES (?,?,?,?)",
                            [complain_id, name, created_at, updated_at],
                            (err, result) => {
                                if (err) {
                                    res.send(err);
                                }
                                if (result) {
                                    res.send({message: "Complaint Successfully Submited, You can track your complaint by tracking id: "+tracking_id});   
                                }
                            }
                        );
                    });
                }
            }
        ); 
    } catch (err) {
        res.status(400).send({ message: 'Error uploading Images.' });
    }
});

app.post('/getaddress', (req, res)=> {
    const postal_code = req.body.postal_code; 

    db.query(
        "SELECT * FROM `postals` WHERE `Postcode`= ?",
        postal_code,
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                res.send(result);
            }
        }
    );    
});





app.post('/trackscomplaints', (req, res)=> {
    const tracking_id  = req.body.trackingid;
    db.query(
        "SELECT `tracking_id`,`status` FROM `complains` WHERE `tracking_id`= ?",
        tracking_id,
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                res.send(result);
            }
        }
    );    
});


app.post('/email', (req, res)=> {
    const email  = req.body.email;
    db.query(
        "SELECT count(`email`) as 'Count' FROM `complains` WHERE `email`= ? AND `status`='completed'",
        email,
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                const count = result[0].Count;
                if (count === 0){
                    db.query(
                        "SELECT count(`email`) as status FROM `complains` WHERE `email`= ? AND `status`='pending'",
                        email,
                        (err, result)=>{
                            if (err) {
                                res.send(err);
                            } 
                            if (result){
                                if(result[0].status === 0){
                                    res.send({message: "No Complaints Found for this email address"});
                                }else{
                                    res.send({message: "Your Complaints are still Pending, Check the progress by given tracking id"});
                                }
                            }
                        }
                    );
                    return
                }
                db.query(
                    "SELECT `redeemed_tokens` FROM `token_redeemed` WHERE `email`= ?",
                    email,
                    (err, result)=>{
                        if (err) {
                            res.send(err);
                        } 
                        if (result){
                            const fullToken = count*0.1;
                            let redeemed_tokens = 0;
                            if(result.length === 0){
                                redeemed_tokens = 0;
                            }else{
                                redeemed_tokens = result[0].redeemed_tokens;
                            }
                            const tokens = fullToken - Number(redeemed_tokens); 
                            res.send({tokens: tokens.toFixed(4)});
                        }
                    }
                );
            }
        }
    );    
});

app.post('/withdraw', (req, res)=> {
    const email  = req.body.email;
    const tamount = req.body.tamount;
    const last_redeemed_date = new Date();

    db.query(
        "SELECT count(`email`) as 'Count' FROM `complains` WHERE `email`= ?",
        email,
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                db.query(
                    "SELECT * FROM `token_redeemed` WHERE `email`= ?",
                    email,
                    (err, result)=>{
                        if (err) {
                            res.send(err);
                        } 
                        if (result){
                            if (result.length === 0){
                                db.query(
                                    "INSERT INTO `token_redeemed` (`email`, `redeemed_tokens`, `last_redeemed_date`) VALUES (?,?,?)",
                                    [email, tamount, last_redeemed_date],
                                    (err, result)=>{
                                        if (err) {
                                            res.send(err);
                                        } 
                                        if (result){
                                            res.send({message: "Successfully Redeemed"});
                                        }
                                    }
                                );
                            }else{
                                const redeemed_tokens = result[0].redeemed_tokens;
                                const tokens = Number(redeemed_tokens)+Number(tamount);
                                db.query(
                                    "UPDATE `token_redeemed` SET `redeemed_tokens`= ?, `last_redeemed_date`= ? WHERE `email`= ?",
                                    [tokens, last_redeemed_date, email],
                                    (err, result)=>{
                                        if (err) {
                                            res.send(err);
                                        } 
                                        if (result){
                                            res.send({message: "Successfully Redeemed"});
                                        }
                                    }
                                );
                            }
                        }
                    }
                );   
            }
        }
    );    
});

app.get('/displaycomplain', (req, res)=> {
    db.query(
        "SELECT * FROM `complains` ORDER BY `id` DESC",
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                res.send(result);
            }
        }
    );    
});


app.get('/displayredeemed', (req, res)=> {
    db.query(
        "SELECT * FROM `token_redeemed` ORDER BY `id` DESC",
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                res.send(result);
            }
        }
    );    
});

app.post('/updatecom', (req, res)=> {
    const id  = req.body.id;
    const status  = req.body.status;
    const remarks  = req.body.remarks;
    const updated_at = new Date();
    db.query(
        "UPDATE `complains` SET `status`= ?, `remarks`= ? , `updated_at`= ?  WHERE `id`= ?",
        [status, remarks, updated_at, id],
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                res.send({message: "Successfully Updated"});
            }
        }
    );  
});


// Statistic
app.get('/CountComplain', (req, res)=> {
    db.query(
        "SELECT COUNT(`id`) AS complains FROM `complains`",
        (err, result)=>{
            if (err) {
                res.send(err);
            } 
            if (result){
                const complains = result[0].complains;;

                db.query(
                    "SELECT COUNT(`id`) AS resolvedcomplains FROM `complains` WHERE `status` = 'completed'",
                    (err, result)=>{
                        if (err) {
                            res.send(err);
                        } 
                        if (result){
                            const resolvedcomplains = result[0].resolvedcomplains;

                            db.query(
                                "SELECT `created_at`, `updated_at` FROM `complains`",
                                (err, result)=>{
                                    if (err) {
                                        res.send(err);
                                    } 
                                    if (result){
                                        const dates = result;
                                        res.json({complains, resolvedcomplains, dates}); 
                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    );
});



app.listen(3001, () => {
    console.log("Serving React-build and running server on port 3001 &");
});