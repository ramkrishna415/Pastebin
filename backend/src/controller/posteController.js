const Paste = require("../models/poste");


//create paste
const createPoste = async(req, res)=>{
    const{content, time, maxView} = req.body;

    if(!content ||content.trim()===""){
        return res.status(400).json({error:"content is required"});

    }
     const Alphabet = /[a-zA-Z]/.test(content);

  if (!Alphabet) {
    return res.status(400).json({error: "only special characters is not allow"});
  }
     


    let expires = null;
    if(time){
        if(time<1){
            return res.status(400).json({error:"invaild time"});
        }
        expires = new Date(Date.now()+ time*1000);
    }
    if(maxView && maxView < 1){
        return res.status(400).json({error:"invailed max views"});
    }

    //give the url imp
     const paste = await Paste.create({
        content,
        views:maxView ?? null,
        expires
     });
     res.status(201).json({
        id:paste._id.toString(),
        url:`${process.env.PORT}/p/${paste._id}`
     });

};


//fetch paste 
const getPoste = async(req,res)=>{
    const paste = Paste.findById(req.params.id)
    if(!paste){
        return res.status(404).json({error:"not found"});
    }
    const now = req.headers["x-test-now-ms"]
    ? new Date(Number(req.headers["x-test-now-ms"]))
    :new Date();

    if(paste.expires && now >paste.expires){
       return res.status(404).json({error:"expired"});  
    }
    if(paste.views !=null){
        if(paste.views<=0){
             return res.status(404).json({error:"no views left"});
        }
        paste.views -=1;
        await paste.save();
    }
    res.json({
        content:paste.content,
        views:paste.views,
        expires:paste.expires
    });
};

//view paste
const viewPostPage= async(req,res) =>{
    const paste= await Paste.findById(req.params.id);
    if(!paste){
         return res.status(404).json({error:"not found"});
    }
    const now =new Date();
    if(paste.expires && now >paste.expires){
         return res.status(404).json({error:"expired"});
    }
    if(paste.views !== null &&  paste.views <=0){
         return res.status(404).json({error:"no view left"});
    }
    const safe =paste.content
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt");
    res.send(`
        <html>
        <body>
        <pre>${safe}</pre>
        </body>
        </html>
        `);

};
module.exports= {createPoste,getPoste,viewPostPage};