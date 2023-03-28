const express = require('express');
const router = express.Router();
const TechModel = require('./model/TechSchema')
const EducationModel = require('./model/EducationSchema')
const FitnessModel = require('./model/FitnessModel')
const SportsModel = require('./model/SportsModel')
const UserModel = require('./model/UserSchema')
// const LikeModel = require('./model/LikeSchema')
// const ProfileDetModel = require('./model/ProfielDetSchema')
//home
router.get('/',(req,res)=>{ 
    res.send("Hello world")
})
//save login data
router.post('/register',async(req,res)=>{
    try{
           const{name,imageUrl,googleId,email,password} =await req.body;
           const findAlready =await UserModel.findOne({email:email});
           if(findAlready) return res.send("Already registered Please Login")
           else{
            const saveUser = await new UserModel({name,imageUrl,googleId,email,password});
            await saveUser.save();
            if(saveUser) return res.send("Register Success")
            else res.send("Error while login !!! Try again")
           
           }
    }
    catch(err){
      res.send("Error while login !!! Try again");

    }
})
// find user through email
 
  router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    const findUser = await UserModel.findOne({email : email});
    if(findUser){ 
      if(password === findUser.password){
        res.send({message :'Login Success', findUser:findUser});
      }
      else{
        res.send("Enter correct credentials");
      }
    } 
    
    else{
      res.send("Please register first");
    }

  
  })

//store tech items
router.post('/sendtech',async(req,res)=>{
    try{
        const {title,desc,rating,author,type,image,userId} =await req.body;
         const ptalga = await TechModel.findOne({desc:desc});
         if(ptalga) return res.send("Topic already created");
        
         else{
            
            const saveBlog = await new TechModel({title,desc,rating,author,type,image,userId});
             await saveBlog.save();
             if(saveBlog) res.send("Topic created successfully")
             else res.send("Topic not created")     
         }
    }
    catch(err){
        res.send({message : "Error while creating topic"});
    }
})
//get tech items 
router.get('/gettech',async(req,res)=>{
   const data =   await TechModel.find();
   if(data){
    res.send(data)
  }
  else{
    res.send("error")
  }
     
})

//delete item 
router.delete('/deletetech/:id',async(req,res)=>{
     try{
        const id = req.params.id;
     const deleteItem= await TechModel.findByIdAndDelete(id);
     if(deleteItem) res.send("Deleted success")
     else res.send("Item not found")
     }
     catch(e){
        res.status(500).send(e)
     }
})

//update techblog by its id 
 router.patch('/updatetech/:id',async(req,res)=>{
   try{
    const id = req.params.id;
    const updateBlog = await TechModel.findByIdAndUpdate(id,req.body);
    res.send("Updated success")
   }
   catch(err){
       res.status(404).send(err)
   }
 })
  //find technews by id 

  router.get('/gettechbyId/:id',async(req,res)=>{
    try{
           const id = req.params.id;
           const findElm = await TechModel.findById(id);
           if(findElm) res.json(findElm);
           else res.send("Error while fetching data")
    }
    catch(e){
        res.status(404).send(e);

    }
  })
//-----------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------------------
  // education 
  
//store tech items
router.post('/sendedu',async(req,res)=>{
    try{
        const {title,desc,rating,author,type,image,userId} =await req.body;
         const ptalga = await EducationModel.findOne({desc:desc});
         if(ptalga) return res.send("Topic already created");
        
         else{
            const saveBlog = await new EducationModel({title,desc,rating,author,type,image,userId});
             await saveBlog.save();
             if(saveBlog) res.send("Topic created successfully")
             else res.send("Topic not created")     
         }
    }
    catch(err){
        res.send({message : "Error while creating topic"});
    }
})
//get edu items 
router.get('/getedu',async(req,res)=>{
   const data =   await EducationModel.find();
   if(data){
    res.send(data)
  }
  else{
    res.send("error")
  }
     
})

//delete item 
router.delete('/deleteedu/:id',async(req,res)=>{
     try{
        const id = req.params.id;
     const deleteItem= await EducationModel.findByIdAndDelete(id);
     if(deleteItem) res.send("Deleted success")
     else res.send("Item not found")
     }
     catch(e){
        res.status(500).send(e)
     }
})

//update techblog by its id 
 router.patch('/updateedu/:id',async(req,res)=>{
   try{
    const id = req.params.id;
    const updateBlog = await EducationModel.findByIdAndUpdate(id,req.body);
    res.send("Updated success")
   }
   catch(err){
       res.status(404).send(err)
   }
 })
  //find edu by id 

  router.get('/getedubyId/:id',async(req,res)=>{
    try{
           const id = req.params.id;
           const findElm = await EducationModel.findById(id);
           if(findElm) res.json(findElm);
           else res.send("Error while fetching data")
    }
    catch(e){
        res.status(404).send(e);

    }
  })

  //-----------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------------------
  // fitness 
  
//store fitness items
router.post('/sendfit',async(req,res)=>{
    try{
        const {title,desc,rating,author,type,image,userId} =await req.body;
         const ptalga = await FitnessModel.findOne({desc:desc});
         if(ptalga) return res.send("Topic already created");
        
         else{
            const saveBlog = await new FitnessModel({title,desc,rating,author,type,image,userId});
             await saveBlog.save();
             if(saveBlog) res.send("Topic created successfully")
             else res.send("Topic not created")     
         }
    }
    catch(err){
        res.send({message : "Error while creating topic"});
    }
})
//get fit items 
router.get('/getfit',async(req,res)=>{
   const data =   await FitnessModel.find();
  if(data){
    res.send(data)
  }
  else{
    res.send("error")
  }

     
})

//delete item 
router.delete('/deletefit/:id',async(req,res)=>{
     try{
        const id = req.params.id;
     const deleteItem= await FitnessModel.findByIdAndDelete(id);
     if(deleteItem) res.send("Deleted success")
     else res.send("Item not found")
     }
     catch(e){
        res.status(500).send(e)
     }
})

//update fitblog by its id 
 router.patch('/updatefit/:id',async(req,res)=>{
   try{
    const id = req.params.id;
    const updateBlog = await FitnessModel.findByIdAndUpdate(id,req.body);
    res.send("Updated success")
   }
   catch(err){
       res.status(404).send(err)
   }
 })
  //find edu by id 

  router.get('/getfitbyId/:id',async(req,res)=>{
    try{
           const id = req.params.id;
           const findElm = await FitnessModel.findById(id);
           if(findElm) res.json(findElm);
           else res.send("Error while fetching data")
    }
    catch(e){
        res.status(404).send(e);

    }
  })

//-----------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------------------
  // sports 
  
//store sports items
router.post('/sendsports',async(req,res)=>{
    try{
        const {title,desc,rating,author,type,image,userId} =await req.body;
         const ptalga = await SportsModel.findOne({desc:desc});
         if(ptalga) return res.send("Topic already created");
        
         else{
            const saveBlog = await new SportsModel({title,desc,rating,author,type,image,userId});
             await saveBlog.save();
             if(saveBlog) res.send("Topic created successfully")
             else res.send("Topic not created")     
         }
    }
    catch(err){
        res.send({message : "Error while creating topic"});
    }
})
//get sports items 
router.get('/getsports',async(req,res)=>{
   const data =   await SportsModel.find();
   if(data){
    res.send(data)
  }
  else{
    res.send("error")
  }

     
})

//delete item 
router.delete('/deletesports/:id',async(req,res)=>{
     try{
        const id = req.params.id;
     const deleteItem= await SportsModel.findByIdAndDelete(id);
     if(deleteItem) res.send("Deleted success")
     else res.send("Item not found")
     }
     catch(e){
        res.status(500).send(e)
     }
})

//update sports blog by its id 
 router.patch('/updatesports/:id',async(req,res)=>{
   try{
    const id = req.params.id;
    const updateBlog = await SportsModel.findByIdAndUpdate(id,req.body);
    res.send("Updated success")
   }
   catch(err){
       res.status(404).send(err)
   }
 })
  //find sports by id 

  router.get('/getsportsbyId/:id',async(req,res)=>{
    try{
           const id = req.params.id;
           const findElm = await SportsModel.findById(id);
           if(findElm) res.json(findElm);
           else res.send("Error while fetching data")
    }
    catch(e){
        res.status(404).send(e);

    }
  })

   //fetch all element by user id 
   router.get('/fetchtechforuser/:id',async(req,res)=>{
    const id = req.params.id;   
    const data = await TechModel.find({userId:id});
    if(data){
      res.json(data);
    } 
    else{
      res.send("No data found");
    }
   })

   router.get('/fetcheduforuser/:id',async(req,res)=>{
    const id = req.params.id;   
    const data = await EducationModel.find({userId:id});
    if(data){
      res.json(data);
    } 
    else{
      res.send("No data found");
    }
   })
   router.get('/fetchfitforuser/:id',async(req,res)=>{
    const id = req.params.id;   
    const data = await FitnessModel.find({userId:id});
    if(data){
      res.json(data);
    } 
    else{
      res.send("No data found");
    }
   })
   router.get('/fetchsportsforuser/:id',async(req,res)=>{
    const id = req.params.id;   
    const data = await SportsModel.find({userId:id});
    if(data){
      res.json(data);
    } 
    else{
      res.send("No data found");
    }
   })




module.exports = router;