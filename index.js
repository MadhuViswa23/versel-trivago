const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mysql = require('mysql')

const convert = express()
convert.use(cors())
convert.use(bodyparser.json())
convert.use(express.json())
convert.use(bodyparser.urlencoded({extended: true}))
convert.use(express.static('public'))


let con = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user:"root",
    password:"madhu@2020",
    database:"datadb",
})
con.connect(function(error){
if(error){
    console.log('db is not connected',error)   

}
else{
    console.log("db is connected")
}
 })
 convert.post('/login',(request,response)=>{
    let{email,password}=request.body
    let sql='select * from logintrivago where email=?'
    con.query(sql,[email],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else if(result.length>0){
            let dbemail=result[0].email
            let dbpassword=result[0].password
            let id=result[0].id
            let category=result[0].category
            if(dbemail===email && dbpassword===password){
                response.send({"status":"success","id":id,"category":category})
            }
            else{
                response.send({"status":"invalid"})
            } 
        }
        else{
            response.send({"status":"empty-set"})
        }
    })

})
convert.post('/loginreg',(request,response)=>{
    let{email,password}=request.body
    let sql='select * from registercustomer where email=?'
    con.query(sql,[email],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else if(result.length>0){
            let dbemail=result[0].email
            let dbpassword=result[0].password
            let id=result[0].id
            let category=result[0].category
            if(dbemail===email && dbpassword===password){
                response.send({"status":"success","id":id,"category":category})
            }
            else{
                response.send({"status":"invalid"})
            } 
        }
        else{
            response.send({"status":"empty-set"})
        }
    })

})
convert.post('/registerd', (request, response) => {
    let {username, category, email, password } = request.body;
    
    let sql = "INSERT INTO registercustomer(username, category, email, password) VALUES (?, ?, ?, ?)";
    
    con.query(sql, [username,category, email, password], (error, result) => {
        if (error) {
            response.send({ "status": "error" });
            console.log(error)
        } else {
            response.send({ "status": "inserted" });
        }
    });
});
convert.post('/insertt', (request, response) => {
    const { image, hotelname, place, floorsize, rent } = request.body;
    
    const sql = "INSERT INTO hotelrooms (image, hotelname, place, floorsize, rent ) VALUES ( ?, ?, ?, ?, ?)";
    
    con.query(sql, [ image, hotelname, place, floorsize, rent], (error, result) => {
        if (error) {
            response.send({ "status": "error" });
            console.log(error)
        } else {
            response.send({ "status": "inserted" });
        }
    });
});

convert.get('/get',(request,response)=>{
    let sql = 'select * from hotelrooms '
    con.query(sql,(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})

convert.get('/getdublin',(request,response)=>{
    let sql = 'select * from dublin'
    con.query(sql,(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
convert.get('/getreno',(request,response)=>{
    let sql = 'select * from reno'
    con.query(sql,(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
convert.get('/getaustin',(request,response)=>{
    let sql = 'select * from austin'
    con.query(sql,(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
convert.get('/getCombinedData', (request, response) => {
    let sql = `
        SELECT * FROM hotelrooms
        UNION ALL
        SELECT * FROM dublin
        UNION ALL
        SELECT * FROM reno
        UNION ALL
        SELECT * FROM austin
    `;
    con.query(sql, (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result);
        }
    });
});

convert.post('/deletehotel',(request,response)=>{
    let id = request.body.id
    let sql = 'delete from hotelrooms  where id=?'
    con.query(sql,[id],(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send({"status":"deleted"})
        }
    })
})

convert.get('/getupdated/:id',(request,response)=>{
    let {id} = request.params;
    let sql = "SELECT * FROM hotelrooms WHERE id=?"
    con.query(sql,[id],(error,result)=>{
        if (error) {
            response.send(error);
        }
        else{
            response.send(result);
            }
    })
})
convert.put('/updaterooms/:id',(request,response)=>{
    let {id} = request.params
    let {image, hotelname, place, floorsize, rent }=request.body;
    const sql = 'UPDATE hotelrooms SET image=?, hotelname=?, place=?, floorsize=?, rent=?  WHERE id=?';
con.query(sql,[image, hotelname, place, floorsize, rent , id],(error,result)=>{
    if(error){
        response.send({"status":"error"})
        response.send(error)
    }
    else{
        response.send({"status":"updated"})
    }
})
})
convert.post('/insertbookingtrivago', (request, response) => {
    let { fullname, email, phonenumber, checkindate, checkoutdate, numberofguests, roomtype , noofrooms} = request.body;

   
    let checkAvailabilitySQL = `
        SELECT COUNT(*) AS bookings_count
        FROM roombookingtrivago
        WHERE checkindate = ? AND checkoutdate = ?
    `;

    con.query(checkAvailabilitySQL, [checkindate, checkoutdate], (error, results) => {
        if (error) {
            response.status(500).json({ "status": "error" });
            console.log(error);
        } else {
            const bookingsCount = results[0].bookings_count;

          
            if (bookingsCount === 0) {
                let insertBookingSQL = `
                    INSERT INTO roombookingtrivago (fullname, email, phonenumber, checkindate, checkoutdate, numberofguests, roomtype, noofrooms)
                    VALUES (?, ?, ?, ?, ?, ?, ?,?)
                `;

                con.query(insertBookingSQL, [fullname, email, phonenumber, checkindate, checkoutdate, numberofguests, roomtype, noofrooms], (insertError, insertResult) => {
                    if (insertError) {
                        response.status(500).json({ "status": "error" });
                        console.log(insertError);
                    } else {
                        response.status(200).json({ "status": "inserted" });
                    }
                });
            } else {
                return response.send('The selected date range has already been booked. Please try another date range.');
            }
        }
    });
});

//  convert.post('/login',(request,response)=>{
//     let{email,password}=request.body
//     let sql='select * from loginmanagement where email=?'
//     con.query(sql,[email],(error,result)=>{
//         if(error){
//             response.send({"status":"error"})
//         }
//         else if(result.length>0){
//             let dbemail=result[0].email
//             let dbpassword=result[0].password
//             let id=result[0].id
//             let category=result[0].category
//             if(dbemail===email && dbpassword===password){
//                 response.send({"status":"success","id":id,"category":category})
//             }
//             else{
//                 response.send({"status":"invalid"})
//             } 
//         }
//         else{
//             response.send({"status":"empty-set"})
//         }
//     })

// })
// convert.post('/inserted', (request, response) => {
//     const { image, roomownername, roomname, floorsize, beds, rent, checkindate, checkoutdate, availablerooms} = request.body;
    
//     const sql = "INSERT INTO rooms (  image, roomownername, roomname, floorsize, beds, rent,checkindate, checkoutdate, availablerooms) VALUES (?, ?, ?, ?, ?, ?,?,?,?)";
    
//     con.query(sql, [ image, roomownername, roomname, floorsize, beds, rent,checkindate, checkoutdate, availablerooms], (error, result) => {
//         if (error) {
//             response.send({ "status": "error" });
//             console.log(error)
//         } else {
//             response.send({ "status": "inserted" });
//         }
//     });
// });

// Assume 'app' is your Express application instance

// convert.post('/checkavailability', (req, res) => {
//     const { roomtype, checkindate, checkoutdate } = req.body;
  
    // Perform the SQL query to check room availability
//     const sql = `
//         SELECT COUNT(*) AS availablerooms
//         FROM rooms
//         WHERE roomtype = ? 
//         AND NOT (checkindate >= ? OR checkoutdate <= ?)
//     `;
    
//     // Execute the query using your MySQL connection
//     con.query(sql, [roomtype, checkoutdate, checkindate], (error, results) => {
//         if (error) {
//             res.status(500).json({ error: "An error occurred while checking room availability" });
//         } else {
//             const availableRooms = results[0].availablerooms;
        
//             res.status(200).json({ availableRooms });
//         }
//     });
// });

// convert.get('/get',(request,response)=>{
//     let sql = 'select * from rooms'
//     con.query(sql,(error,result)=>{
//         if (error) {
//             response.send(error)
//         }
//         else{
//             response.send(result)
//         }
//     })
// })
// convert.post('/deleted',(request,response)=>{
//     let id = request.body.id
//     let sql = 'delete from rooms where id=?'
//     con.query(sql,[id],(error,result)=>{
//         if (error) {
//             response.send(error)
//         }
//         else{
//             response.send({"status":"deleted"})
//         }
//     })
// })
// Your code to establish the connection 'con'...

// convert.post('/insertbook', (request, response) => {
//     let  { fullname, email, phonenumber, checkindate, checkoutdate, numberofguests, roomtype } = request.body;

//     // Check room availability for the specified dates and room type
//     const sql = `
//         SELECT room_id
//         FROM rooms
//         WHERE roomtype = ? 
//         AND room_id NOT IN (
//             SELECT room_id
//             FROM bookings
//             WHERE (
//                 (checkindate < ? AND checkoutdate > ?)
//                 OR (checkindate < ? AND checkoutdate > ?)
//                 OR (checkindate >= ? AND checkoutdate <= ?)
//             )
//         )
//         LIMIT 1
//     `;

//     con.query(sql, [roomtype, checkoutdate, checkindate, checkindate, checkoutdate, checkindate, checkoutdate], (error, results) => {
//         if (error) {
//             console.error("Error checking room availability:", error);
//             response.status(500).json({ error: "An error occurred while checking room availability" });
//         } else {
//             if (results.length > 0) {
//                 // Room available, proceed to insert the booking
//                 const room_id = results[0].room_id;

//                 const sql = `
//                     INSERT INTO bookings (fullname, email, phonenumber, checkindate, checkoutdate, numberofguests, roomtype)
//                     VALUES (?, ?, ?, ?, ?, ?, ?)
//                 `;

//                 con.query(sql, [fullname, email, phonenumber, checkindate, checkoutdate, numberofguests, roomtype, room_id], (error, results) => {
//                     if (insertError) {
//                         console.error("Error inserting booking:", error);
//                         response.status(500).json({ error: "An error occurred while inserting the booking" });
//                     } else {
//                         response.status(200).json({ status: "inserted" });
//                     }
//                 });
//             } else {
//                 response.status(400).json({ status: "error", message: "Rooms are not available for the selected dates" });
//             }
//         }
//     });
// });

// convert.get('/getupdate/:id',(request,response)=>{
//     let {id} = request.params;
//     let sql = "SELECT * FROM  rooms WHERE id=?"
//     con.query(sql,[id],(error,result)=>{
//         if (error) {
//             response.send(error);
//         }
//         else{
//             response.send(result);
//             }
//     })
// })
// convert.put('/update/:id',(request,response)=>{
//     let {id} = request.params
//     let {image, roomownername, roomname, floorsize, beds, rent,checkindate, checkoutdate, availablerooms}=request.body;
//     const sql = 'UPDATE rooms SET image=?,  roomownername=?, roomname=?, floorsize=?, beds=?, rent=?,checkindate=?, checkoutdate=?, availablerooms=? WHERE id=?';
// con.query(sql,[image,  roomownername, roomname, floorsize, beds, rent,checkindate, checkoutdate, availablerooms, id],(error,result)=>{
//     if(error){
//         response.send({"status":"error"})
//         response.send(error)
//     }
//     else{
//         response.send({"status":"updated"})
//     }
// })
// })

// convert.post('/insertbook', (request, response) => {
//     let {fullname, email, phonenumber, checkindate, checkoutdate, numberofguests, roomtype } = request.body;

//     // Check if check-in and check-out dates are the same
   
    
//     let sql = "INSERT INTO bookings (fullname, email, phonenumber, checkindate, checkoutdate, numberofguests, roomtype) VALUES (?, ?, ?, ?, ?, ?, ?)";
    
//     con.query(sql, [fullname, email, phonenumber, checkindate, checkoutdate, numberofguests, roomtype], (error, result) => {
//         if (error) {
//             response.status(500).json({ "status": "error" });
//             console.log(error)
//         } else {
//             response.status(200).json({ "status": "inserted" });
//         }
//     });
// });

// convert.get('/getall',(request,response)=>{
//     let sql = 'select * from book'
//     con.query(sql,(error,result)=>{
//         if (error) {
//             response.send(error)
//         }
//         else{
//             response.send(result)
//         }
//     })
// })
// convert.post('/delete',(request,response)=>{
//     let id = request.body.id
//     let sql = 'delete from book where id=?'
//     con.query(sql,[id],(error,result)=>{
//         if (error) {
//             response.send(error)
//         }
//         else{
//             response.send({"status":"deleted"})
//         }
//     })
// })
// convert.post('/insert', (request, response) => {
//     let { title, category, author, publishedyear, password, email } = request.body;
    
//     let sql = "INSERT INTO book (title, category, author, publishedyear, password, email) VALUES (?, ?, ?, ?, ?, ?)";
    
//     con.query(sql, [title, category, author, publishedyear, password, email], (error, result) => {
//         if (error) {
//             response.send({ "status": "error" });
//         } else {
//             response.send({ "status": "inserted" });
//         }
//     });
// });

// convert.get('/getupdate/:id',(request,response)=>{
//     let {id} = request.params;
//     let sql = "SELECT * FROM book WHERE id=?"
//     con.query(sql,[id],(error,result)=>{
//         if (error) {
//             response.send(error);
//         }
//         else{
//             response.send(result);
//             }
//     })
// })
// convert.put('/update/:id',(request,response)=>{
//     let {id} = request.params
//     let {title,category,author,publishedyear,password,email}=request.body;
//     const sql = 'UPDATE book SET title=?, category=?, author=?,  publishedyear=?,  password=?, email=? WHERE id=?';
// con.query(sql,[title,category,author,publishedyear,password,email,id],(error,result)=>{
//     if(error){
//         response.send({"status":"error"})
//         response.send(error)
//     }
//     else{
//         response.send({"status":"updated"})
//     }
// })
// })
// convert.post('/login',(request,response)=>{
//     let{password,email}=request.body
//     let sql='select * from book where password=?'
//     con.query(sql,[password],(error,result)=>{
//         if(error){
//             response.send({"status":"error"})
//         }
//         else if(result.length>0){
      
//             let dbpassword=result[0].password
//             let dbemail=result[0].email
//             let id=result[0].id
//             let category=result[0].category
//             if(dbpassword===password && dbemail===email ){
//                 response.send({"status":"success","id":id,"category":category})
//             }
//             else{
//                 response.send({"status":"invalid"})
//             } 
//         }
//         else{
//             response.send({"status":"empty-set"})
//         }
//     })

// })
//login
// convert.post('/login',(request,response)=>{
//     let{username,password}=request.body
//     console.log(username)
//     let sql = 'select * from books where username=?'
//     con.query(sql,[username],(error,result)=>{
//         if(error){
//             response.send({"status":"error"})
//         }
//         else if(result.length>0){
//             let dbusername=result[0].username
//             let dbpassword=result[0].password
//             let id=result[0].id
//             let title=result[0].title
//             if(dbusername===username && dbpassword===password){
//                 response.send({"status":"login successfully","id":id, "title":title})
//             }
//             else {
//                 response.send({"status":"invalid"})
//             }
//         }
//         else{
//             response.send({"status":"emptyset"})
//         }
//     })
// })


convert.listen(3006,()=>{
    console.log(`server started at 3006`)
})

// // let user ={
// //     Name : "Madhu",
// //     Course: "Full stack developer"
// // }
// // module.exports = {user}

// // //Sychronous --> readFileSync(), writeFileSync()
// // //Asynchronous --> readFile(), writeFile(),appendFile()

// // //-----readFilesync

// // const fs = require("fs")
// // let first = fs.readFileSync('./sample.txt', "utf8")
// // console.log(first)

// // //writefilesync
// // let two = fs.writeFileSync('./sample.txt',"iam madhu", {flag:'a'})
// // console.log(two)

// // //ASYNCHRONOUS
// // //read file
// // fs.readFile('./newAsync.txt','utf8',(err,data)=>{
// //     if(err){
// //         console.log(err);

// //     }
// //    console.log(data)
// // })
// // //writefile

// // fs.writeFile('./newAsync.txt',"new one ",(err, data)=>{
// //     if(err){
// //         console.log("u have an err", err);
// //     }
// //     console.log(err)
// // })
